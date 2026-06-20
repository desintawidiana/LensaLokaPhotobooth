import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Template, Photo, Sticker, TextItem, Strip } from '../types';
import { TEMPLATES, BG_COLORS } from '../data/templates';
import { CreateTemplatePicker } from './CreateTemplatePicker';
import { CreateCapture } from './CreateCapture';
import { CreateDecorate } from './CreateDecorate';
import { auth, gallery } from '../utils/store';
export function Create() {
  const navigate = useNavigate();
  const location = useLocation();
  const editStrip = location.state?.editStrip as Strip | undefined;
  const [step, setStep] = useState<1 | 2 | 3>(1);
  // State
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(
    TEMPLATES[0].id
  );
  const [bgColor, setBgColor] = useState<string>(TEMPLATES[0].defaultBg);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [texts, setTexts] = useState<TextItem[]>([]);
  // Initialize from edit state if present
  useEffect(() => {
    if (editStrip) {
      setSelectedTemplateId(editStrip.templateId);
      setBgColor(editStrip.bgColor);
      setPhotos(editStrip.photos);
      setStickers(editStrip.stickers);
      setTexts(editStrip.texts);
      setStep(2); // Jump to capture/edit step
    }
  }, [editStrip]);
  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [step]);
  const template =
  TEMPLATES.find((t) => t.id === selectedTemplateId) || TEMPLATES[0];
  const handleNextToCapture = () => {
    if (photos.length !== template.frameCount) {
      setPhotos(Array(template.frameCount).fill(null));
    }
    setStep(2);
  };
  const handleNextToDecorate = () => {
    setStep(3);
  };
  const handleSave = (finalDataUrl: string) => {
    const user = auth.getCurrentUser();
    if (!user) return;
    const newStrip: Strip = {
      id: editStrip ? editStrip.id : Date.now().toString(),
      userId: user.email,
      templateId: template.id,
      bgColor,
      photos,
      stickers,
      texts,
      finalImage: finalDataUrl,
      createdAt: editStrip ? editStrip.createdAt : Date.now()
    };
    gallery.saveStrip(newStrip);
    navigate('/gallery');
  };
  return (
    <div className="max-w-5xl mx-auto">
      {/* Progress Bar */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-2">
          <StepIndicator active={step >= 1} number={1} label="Template" />
          <div
            className={`w-12 h-1 rounded-full ${step >= 2 ? 'bg-pink-500' : 'bg-gray-200'}`} />
          
          <StepIndicator active={step >= 2} number={2} label="Foto" />
          <div
            className={`w-12 h-1 rounded-full ${step >= 3 ? 'bg-pink-500' : 'bg-gray-200'}`} />
          
          <StepIndicator active={step >= 3} number={3} label="Hias" />
        </div>
      </div>

      {step === 1 &&
      <CreateTemplatePicker
        selectedId={selectedTemplateId}
        onSelect={(id) => {
          setSelectedTemplateId(id);
          const t = TEMPLATES.find((x) => x.id === id);
          if (t) setBgColor(t.defaultBg);
        }}
        bgColor={bgColor}
        onBgChange={setBgColor}
        onNext={handleNextToCapture} />

      }

      {step === 2 &&
      <CreateCapture
        template={template}
        bgColor={bgColor}
        photos={photos}
        onPhotosChange={setPhotos}
        onBack={() => setStep(1)}
        onNext={handleNextToDecorate} />

      }

      {step === 3 &&
      <CreateDecorate
        template={template}
        bgColor={bgColor}
        photos={photos}
        stickers={stickers}
        onStickersChange={setStickers}
        texts={texts}
        onTextsChange={setTexts}
        onBack={() => setStep(2)}
        onSave={handleSave} />

      }
    </div>);

}
function StepIndicator({
  active,
  number,
  label




}: {active: boolean;number: number;label: string;}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${active ? 'bg-pink-600 text-white shadow-md shadow-pink-200' : 'bg-gray-100 text-gray-400'}`}>
        
        {number}
      </div>
      <span
        className={`text-sm font-bold ${active ? 'text-pink-600' : 'text-gray-400'}`}>
        
        {label}
      </span>
    </div>);

}