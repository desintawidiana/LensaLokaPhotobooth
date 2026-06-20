import React from 'react';
import { TEMPLATES, BG_COLORS } from '../data/templates';
import { PhotostripPreview } from '../components/PhotostripPreview';
import { ArrowRight, Info, Layers, Sparkles } from 'lucide-react';

interface Props {
  selectedId: string;
  onSelect: (id: string) => void;
  bgColor: string;
  onBgChange: (color: string) => void;
  onNext: () => void;
}

export function CreateTemplatePicker({
  selectedId,
  onSelect,
  bgColor,
  onBgChange,
  onNext
}: Props) {
  // Ambil langsung dari data asli – sudah mencakup semua template yang diperbarui
  const biasaTemplates = TEMPLATES.filter((t) => t.section === 'biasa');
  const igTemplates = TEMPLATES.filter((t) => t.section === 'instagram');

  return (
    <div className="space-y-14 max-w-7xl mx-auto px-2">
      {/* Section 1: Strip Biasa Memanjang */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-pink-200 pb-3">
          <Layers className="w-6 h-6 text-pink-500" />
          <h3 className="text-2xl font-bold text-[#4A3728] tracking-tight">
            Strip Biasa (Memanjang){' '}
            <span className="text-pink-500 text-lg font-medium">
              ({biasaTemplates.length} Pilihan)
            </span>
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {biasaTemplates.map((t) =>
          <TemplateCard
            key={t.id}
            template={t}
            isSelected={selectedId === t.id}
            onSelect={() => onSelect(t.id)}
            bgColor={selectedId === t.id ? bgColor : t.defaultBg} />

          )}
        </div>
      </div>

      {/* Section 2: Strip Instagram (Kotak) – dengan frameCount 2 atau 1 */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-pink-200 pb-3">
          <Sparkles className="w-6 h-6 text-pink-500" />
          <h3 className="text-2xl font-bold text-[#4A3728] tracking-tight">
            Strip Instagram (Kotak){' '}
            <span className="text-pink-500 text-lg font-medium">
              ({igTemplates.length} Pilihan)
            </span>
          </h3>
          <span className="text-xs text-pink-400 bg-pink-50 px-3 py-1 rounded-full font-medium">
            {igTemplates.some((t) => t.frameCount === 1) ? '1–2 Foto' : '2 Foto'}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {igTemplates.map((t) =>
          <TemplateCard
            key={t.id}
            template={t}
            isSelected={selectedId === t.id}
            onSelect={() => onSelect(t.id)}
            bgColor={selectedId === t.id ? bgColor : t.defaultBg} />

          )}
        </div>
      </div>

      {/* Background Picker (tetap sama) */}
      <div className="bg-white p-8 rounded-[2rem] shadow-md border-2 border-pink-100 flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#4A3728] mb-3">
            Pilih Warna Background
          </h2>
          <div className="text-[#6B503B] flex items-start gap-2 text-sm font-medium bg-pink-50 p-3 rounded-xl">
            <Info className="w-5 h-5 shrink-0 text-pink-500" />
            <p>
              Warna ini akan menjadi warna dasar template di belakang fotomu.
              (Bukan menghapus background asli fotomu ya!)
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-center md:justify-end flex-1">
          {BG_COLORS.map((color) =>
          <button
            key={color}
            onClick={() => onBgChange(color)}
            className={`w-12 h-12 rounded-full border-4 transition-transform ${
            bgColor === color ?
            'border-pink-500 scale-115 shadow-xl' :
            'border-gray-200 hover:scale-105'}`
            }
            style={{ backgroundColor: color }}
            title={color} />

          )}
        </div>
      </div>

      {/* Navigation Button */}
      <div className="flex justify-end pt-8 border-t border-gray-200">
        <button
          onClick={onNext}
          className="group flex items-center gap-3 px-10 py-4 bg-[#4A3728] text-[#FFF5F5] rounded-full font-bold text-xl hover:bg-[#3A2A1E] transition-all shadow-xl hover:scale-105">
          
          Lanjut Foto{' '}
          <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>);

}

function TemplateCard({ template, isSelected, onSelect, bgColor }: any) {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer rounded-[2rem] p-4 transition-all flex flex-col items-center gap-4 border-2 ${
      isSelected ?
      'bg-pink-50 border-pink-500 shadow-xl scale-[1.02]' :
      'bg-white border-gray-100 hover:border-pink-300 hover:shadow-lg'}`
      }>
      
      <div
        className="w-full flex justify-center overflow-hidden rounded-2xl bg-gray-50 p-2 border border-gray-100"
        style={{ height: '260px' }}>
        
        <div className="origin-top" style={{ transform: 'scale(0.35)' }}>
          <PhotostripPreview
            template={template}
            bgColor={bgColor}
            photos={[]}
            watermark={false} />
          
        </div>
      </div>
      <div className="text-center w-full pb-1">
        <h4 className="font-bold text-[#4A3728] text-base truncate">
          {template.name}
        </h4>
        <p className="text-xs text-[#6B503B] font-semibold mt-1 bg-gray-100/70 py-1 px-3 rounded-full inline-block">
          {template.frameCount} Foto •{' '}
          {template.frameShape === 'oval' ? '⭕ Oval' : '🔲 Kotak'}
        </p>
      </div>
    </div>);

}