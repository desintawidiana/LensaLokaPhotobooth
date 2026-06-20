import React, { useEffect, useState, createElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Strip } from '../types';
import { auth, gallery } from '../utils/store';
import {
  Download,
  Trash2,
  Edit3,
  Image as ImageIcon,
  Calendar } from
'lucide-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
export function Gallery() {
  const [strips, setStrips] = useState<Strip[]>([]);
  const navigate = useNavigate();
  const user = auth.getCurrentUser();
  useEffect(() => {
    if (user) {
      setStrips(gallery.getUserStrips(user.email));
    }
  }, [user]);
  const handleDelete = (stripId: string) => {
    if (window.confirm('Yakin ingin menghapus photostrip ini?')) {
      gallery.deleteStrip(stripId);
      setStrips(gallery.getUserStrips(user!.email));
    }
  };
  const handleDownload = (strip: Strip) => {
    if (!strip.finalImage) return;
    const link = document.createElement('a');
    link.download = `LensaLoka-${strip.id}.jpg`;
    link.href = strip.finalImage;
    link.click();
  };
  const handleEdit = (strip: Strip) => {
    // Navigate to create flow, passing the strip data via state
    navigate('/create', {
      state: {
        editStrip: strip
      }
    });
  };
  if (strips.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 mb-6">
          <ImageIcon className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-['Cherry_Bomb_One'] text-gray-900 mb-2">
          Galeri Masih Kosong
        </h2>
        <p className="text-gray-500 mb-8 max-w-md">
          Kamu belum membuat photostrip apapun. Yuk mulai abadikan momen lucumu
          sekarang!
        </p>
        <button
          onClick={() => navigate('/create')}
          className="px-8 py-3 bg-pink-600 text-white rounded-full font-bold hover:bg-pink-700 transition-all shadow-md">
          
          Buat Strip Pertamamu
        </button>
      </div>);

  }
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-pink-200 pb-4">
        <div>
          <h1 className="text-3xl font-['Cherry_Bomb_One'] text-gray-900">
            Galeri Kamu
          </h1>
          <p className="text-gray-500 mt-1">
            Koleksi kenangan manis {user?.name}
          </p>
        </div>
        <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-pink-100 font-bold text-pink-600">
          {strips.length} Strip
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {strips.map((strip) =>
        <div
          key={strip.id}
          className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-pink-200 transition-all group">
          
            <div className="relative rounded-2xl overflow-hidden bg-gray-50 aspect-[2/3] mb-4 border border-gray-100">
              {strip.finalImage ?
            <img
              src={strip.finalImage}
              alt="Photostrip"
              className="w-full h-full object-contain" /> :


            <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Gambar tidak tersedia
                </div>
            }

              {/* Hover Actions Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                <button
                onClick={() => handleDownload(strip)}
                className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center hover:scale-110 hover:text-pink-600 transition-all shadow-lg"
                title="Download">
                
                  <Download className="w-5 h-5" />
                </button>
                <button
                onClick={() => handleEdit(strip)}
                className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center hover:scale-110 hover:text-blue-600 transition-all shadow-lg"
                title="Edit Ulang">
                
                  <Edit3 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                {format(strip.createdAt, 'dd MMM yyyy', {
                locale: id
              })}
              </div>
              <button
              onClick={() => handleDelete(strip.id)}
              className="text-gray-400 hover:text-red-500 transition-colors p-1"
              title="Hapus">
              
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>);

}