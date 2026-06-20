import React from 'react'
import { Template, Filter } from './types'
import {
  Heart,
  Star,
  Sparkles,
  Film,
  Camera,
  Smile,
  Cloud,
  Flower2,
} from 'lucide-react'
export const TEMPLATES: Template[] = [
  // ============================================================
  // DENIM Y2K THEME (inspired by the navy denim reference)
  // ============================================================
  {
    id: 'denim-pocket',
    name: 'Denim Pocket',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'pocket',
    defaultBg: '#4a6fa5',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#0d1b3e]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(74,111,165,0.3) 2px, transparent 2px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(45deg, rgba(74,111,165,0.1) 25%, transparent 25%, transparent 75%, rgba(74,111,165,0.1) 75%), linear-gradient(-45deg, rgba(74,111,165,0.1) 25%, transparent 25%, transparent 75%, rgba(74,111,165,0.1) 75%)',
            backgroundSize: '4px 4px',
          }}
        />
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="absolute -top-3 -left-2 text-4xl">🌸</div>
        <div className="absolute top-[35%] -right-3 text-3xl rotate-12">🦋</div>
        <div className="absolute bottom-[20%] -left-2 text-3xl">⭐</div>
        <div
          className="font-mono text-[9px] text-[#f5e6d3] text-center font-bold bg-[#4a6fa5] py-1.5 px-3 rounded-full border-2 border-[#f5e6d3] shadow-sm mx-2 mb-1"
          style={{
            borderStyle: 'dashed',
          }}
        >
          ✦ LensaLoka Denim ✦
        </div>
      </div>
    ),
  },
  {
    id: 'denim-star',
    name: 'Denim Star',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'star',
    defaultBg: '#2c4a6e',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#2c4a6e]"
        style={{
          backgroundImage:
            'linear-gradient(45deg, rgba(74,111,165,0.15) 25%, transparent 25%, transparent 75%, rgba(74,111,165,0.15) 75%), linear-gradient(-45deg, rgba(74,111,165,0.15) 25%, transparent 25%, transparent 75%, rgba(74,111,165,0.15) 75%)',
          backgroundSize: '6px 6px',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="absolute -top-2 -left-2 text-4xl">⭐</div>
        <div className="absolute top-[40%] -right-3 text-3xl">💛</div>
        <div className="absolute bottom-[18%] -left-2 text-2xl">✨</div>
        <div
          className="font-mono text-[9px] text-[#f5e6d3] text-center font-bold bg-[#2c4a6e] py-1.5 px-3 rounded-full border-2 border-[#f5e6d3] shadow-sm mx-2 mb-1"
          style={{
            borderStyle: 'dashed',
          }}
        >
          ★ LensaLoka ★
        </div>
      </div>
    ),
  },
  {
    id: 'denim-heart',
    name: 'Denim Heart',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'heart',
    defaultBg: '#4a6fa5',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#0d1b3e]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(74,111,165,0.25) 3px, transparent 3px)',
          backgroundSize: '20px 20px',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="absolute -top-3 -left-2 text-4xl">💛</div>
        <div className="absolute top-[38%] -right-3 text-3xl rotate-12">🌸</div>
        <div className="absolute bottom-[20%] -left-2 text-2xl">✨</div>
        <div
          className="font-mono text-[9px] text-[#f5e6d3] text-center font-bold bg-[#4a6fa5] py-1.5 px-3 rounded-full border-2 border-[#f5e6d3] shadow-sm mx-2 mb-1"
          style={{
            borderStyle: 'dashed',
          }}
        >
          ♡ LensaLoka ♡
        </div>
      </div>
    ),
  },
  {
    id: 'denim-arch',
    name: 'Denim Arch',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'arch',
    defaultBg: '#2c4a6e',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#2c4a6e]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(74,111,165,0.2) 2px, rgba(74,111,165,0.2) 4px)',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-4xl">
          🎀
        </div>
        <div className="absolute top-[35%] -right-3 text-3xl">🦋</div>
        <div className="absolute bottom-[18%] -left-2 text-3xl">🌸</div>
        <div
          className="font-pacifico text-[#f5e6d3] text-center text-lg bg-[#2c4a6e]/80 py-1 px-4 rounded-full border-2 border-[#f5e6d3] shadow-sm mx-2 mb-1"
          style={{
            borderStyle: 'dashed',
          }}
        >
          LensaLoka
        </div>
      </div>
    ),
  },
  // ============================================================
  // FILM THEME (vintage film aesthetic)
  // ============================================================
  {
    id: 'film-strip',
    name: 'Film Strip',
    section: 'biasa',
    frameCount: 4,
    frameShape: 'rect',
    defaultBg: '#1a1a1a',
    renderBackground: () => (
      <div className="absolute inset-0 bg-[#1a1a1a] border-x-[12px] border-black flex flex-col justify-between py-1">
        {Array.from({
          length: 20,
        }).map((_, i) => (
          <div key={i} className="w-full flex justify-between px-0.5">
            <div className="w-2 h-2 bg-white/70 rounded-sm" />
            <div className="w-2 h-2 bg-white/70 rounded-sm" />
          </div>
        ))}
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="flex justify-between items-center text-[#d4af37] text-[8px] font-mono font-bold px-2 mt-1">
          <span>ISO 400</span>
          <span>● REC</span>
          <span>35mm</span>
        </div>
        <div className="absolute top-[10%] left-2 text-2xl text-[#d4af37]">
          🎞️
        </div>
        <div className="absolute top-[30%] right-2 text-2xl text-[#d4af37]">
          🎬
        </div>
        <div className="absolute bottom-[25%] left-2 text-xl text-[#d4af37]">
          📸
        </div>
        <div className="absolute bottom-[10%] right-2 text-xl text-[#d4af37]">
          ✨
        </div>
        <div className="font-mono text-[9px] text-[#d4af37] text-center font-bold bg-black/60 py-1 px-3 rounded mx-2 mb-1">
          LENSALOKA · FILM
        </div>
      </div>
    ),
  },
  {
    id: 'film-vintage',
    name: 'Film Vintage',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'rect',
    defaultBg: '#2a2a2a',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)',
          }}
        />
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between border-2 border-[#d4af37]/30 m-2 rounded">
        <div className="flex justify-between items-center text-[#d4af37] text-[8px] font-mono font-bold mt-1">
          <Film size={14} />
          <span>● REC</span>
          <Camera size={14} />
        </div>
        <div className="absolute top-[8%] -left-2 text-3xl text-[#d4af37]">
          🎞️
        </div>
        <div className="absolute bottom-[15%] -right-2 text-3xl text-[#d4af37]">
          📸
        </div>
        <div className="font-mono text-[9px] text-[#d4af37] text-center font-bold bg-black/60 py-1 px-3 rounded mx-auto mb-1">
          LENSALOKA · 35mm
        </div>
      </div>
    ),
  },
  // ============================================================
  // DREAMY PASTEL THEME (soft, airy, minimal)
  // ============================================================
  {
    id: 'dreamy-cloud',
    name: 'Dreamy Cloud',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'cloud',
    defaultBg: '#e0f2fe',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-[#ddd6fe] via-[#e0f2fe] to-[#fce7f3]">
        <div className="absolute top-8 left-2 text-white/40">
          <Cloud size={40} fill="currentColor" />
        </div>
        <div className="absolute bottom-12 right-2 text-white/40">
          <Cloud size={36} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="text-center text-3xl mt-1">☁️</div>
        <div className="absolute top-[15%] -left-2 text-3xl">✨</div>
        <div className="absolute top-[45%] -right-2 text-3xl">🌙</div>
        <div className="absolute bottom-[20%] -left-2 text-2xl">⭐</div>
        <div className="font-pacifico text-purple-400 text-center text-lg bg-white/80 py-1 px-4 rounded-full border border-purple-200 shadow-sm mx-2 mb-1">
          LensaLoka
        </div>
      </div>
    ),
  },
  {
    id: 'dreamy-circle',
    name: 'Dreamy Circle',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'circle',
    defaultBg: '#fce7f3',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-[#fce7f3] to-[#fbcfe8]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.6) 2px, transparent 2px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="text-center text-3xl mt-1">🌸</div>
        <div className="absolute top-[12%] -left-2 text-3xl rotate-[-15deg]">
          💕
        </div>
        <div className="absolute top-[48%] -right-2 text-3xl rotate-[15deg]">
          ✨
        </div>
        <div className="absolute bottom-[18%] -left-2 text-2xl">🦋</div>
        <div className="font-cherry text-pink-400 text-center text-lg bg-white/90 py-1 px-4 rounded-full border-2 border-pink-200 shadow-sm mx-2 mb-1">
          Dreamy
        </div>
      </div>
    ),
  },
  {
    id: 'pastel-star',
    name: 'Pastel Star',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'star',
    defaultBg: '#ddd6fe',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-[#ddd6fe] to-[#c4b5fd]">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,0.3) 15px, rgba(255,255,255,0.3) 30px)',
          }}
        />
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="text-center text-3xl mt-1">⭐</div>
        <div className="absolute top-[8%] -left-2 text-3xl">✨</div>
        <div className="absolute bottom-[15%] -right-2 text-3xl">🌟</div>
        <div className="font-mono text-[9px] text-purple-600 text-center font-bold bg-white py-1 px-3 rounded-full border border-purple-300 mx-auto mb-1">
          ⭐ LensaLoka ⭐
        </div>
      </div>
    ),
  },
  {
    id: 'pastel-heart',
    name: 'Pastel Heart',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'heart',
    defaultBg: '#fef3c7',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-[#fef3c7] to-[#fde68a]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.5) 3px, transparent 3px)',
            backgroundSize: '18px 18px',
          }}
        />
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="text-center text-3xl mt-1">💛</div>
        <div className="absolute top-[8%] -left-2 text-3xl">🌻</div>
        <div className="absolute bottom-[15%] -right-2 text-3xl">✨</div>
        <div className="font-pacifico text-yellow-600 text-center text-sm bg-white/90 py-1 px-3 rounded-full border border-yellow-300 shadow-sm mx-2 mb-1">
          LensaLoka
        </div>
      </div>
    ),
  },
  // ============================================================
  // CANDY DOODLE THEME (keep some polished bright ones)
  // ============================================================
  {
    id: 'heart-stripes',
    name: 'Heart Stripes',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'heart',
    defaultBg: '#ffc0cb',
    renderBackground: () => (
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #ffc0cb 0px, #ffc0cb 30px, #ffb3d9 30px, #ffb3d9 60px, #ffd4e5 60px, #ffd4e5 90px)',
        }}
      >
        <div className="absolute top-4 left-2 text-pink-600 rotate-12">
          <Heart size={32} fill="currentColor" />
        </div>
        <div className="absolute bottom-8 right-2 text-pink-600 -rotate-12">
          <Heart size={40} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="font-cherry text-2xl text-white text-center drop-shadow-[0_2px_0_#db2777] mt-1">
          LOVE LOVE
        </div>
        <div className="absolute top-[12%] -left-2 text-3xl rotate-[-15deg]">
          💕
        </div>
        <div className="absolute top-[50%] -right-2 text-3xl rotate-[15deg]">
          💖
        </div>
        <div className="absolute bottom-[18%] -left-2 text-2xl">💗</div>
        <div className="font-mono text-[9px] text-pink-600 text-center font-bold bg-white py-1 px-3 rounded-full border-2 border-pink-300 shadow-sm mx-2 mb-1">
          ♡ LensaLoka ♡
        </div>
      </div>
    ),
  },
  {
    id: 'cloud-checker',
    name: 'Cloud Checker',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'cloud',
    defaultBg: '#ff4444',
    renderBackground: () => (
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-conic-gradient(#ff4444 0% 25%, #ffffff 0% 50%)',
          backgroundSize: '40px 40px',
        }}
      >
        <div className="absolute top-6 left-2 text-white">
          <Cloud size={36} fill="currentColor" />
        </div>
        <div className="absolute bottom-12 right-2 text-white">
          <Cloud size={44} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="font-cherry text-2xl text-white text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] mt-1">
          DREAMY
        </div>
        <div className="absolute top-[15%] -left-3 text-4xl">⭐</div>
        <div className="absolute top-[45%] -right-3 text-4xl">✨</div>
        <div className="absolute bottom-[20%] -left-2 text-3xl">☁️</div>
        <div className="font-mono text-[9px] text-red-600 text-center font-bold bg-white py-1 px-3 rounded-full border-2 border-red-400 shadow-sm mx-2 mb-1">
          ☁ LensaLoka ☁
        </div>
      </div>
    ),
  },
  {
    id: 'scallop-dots',
    name: 'Scallop Dots',
    section: 'biasa',
    frameCount: 4,
    frameShape: 'scallop',
    defaultBg: '#ffeb3b',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#ffeb3b]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 3px, transparent 3px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="absolute top-4 left-2 text-yellow-700 rotate-12">
          <Star size={32} fill="currentColor" />
        </div>
        <div className="absolute bottom-8 right-2 text-yellow-700 -rotate-12">
          <Star size={38} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="font-cherry text-2xl text-yellow-800 text-center drop-shadow-sm mt-1">
          SUNNY!
        </div>
        <div className="absolute top-[10%] -left-2 text-3xl">🌟</div>
        <div className="absolute top-[35%] -right-2 text-3xl">⭐</div>
        <div className="absolute bottom-[25%] -left-2 text-2xl">✨</div>
        <div className="absolute bottom-[10%] -right-2 text-2xl">💫</div>
        <div className="font-mono text-[9px] text-yellow-800 text-center font-bold bg-white py-1 px-3 rounded-full border-2 border-yellow-400 shadow-sm mx-2 mb-1">
          ☀ LensaLoka ☀
        </div>
      </div>
    ),
  },
  {
    id: 'blob-lime',
    name: 'Blob Lime',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'blob',
    defaultBg: '#32cd32',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-[#32cd32] to-[#9acd32]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 40px)',
          }}
        />
        <div className="absolute top-4 left-2 text-white rotate-12">
          <Sparkles size={32} />
        </div>
        <div className="absolute bottom-10 right-2 text-white -rotate-12">
          <Sparkles size={36} />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="font-cherry text-xl text-white text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] mt-1">
          FRESH
        </div>
        <div className="absolute top-[8%] -left-2 text-3xl rotate-[-12deg]">
          🍀
        </div>
        <div className="absolute bottom-[15%] -right-2 text-3xl rotate-[12deg]">
          🌿
        </div>
        <div className="font-mono text-[9px] text-green-800 text-center font-bold bg-white py-1 px-3 rounded-full border-2 border-green-400 shadow-sm mx-auto mb-1">
          🌿 LensaLoka 🌿
        </div>
      </div>
    ),
  },
  {
    id: 'cat-grid',
    name: 'Cat Grid',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'cat',
    defaultBg: '#4169e1',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#4169e1]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="font-cherry text-xl text-white text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] mt-1">
          MEOW!
        </div>
        <div className="absolute top-[8%] -left-2 text-3xl rotate-[-10deg]">
          🐱
        </div>
        <div className="absolute bottom-[15%] -right-2 text-3xl rotate-[10deg]">
          🐾
        </div>
        <div className="font-mono text-[9px] text-blue-700 text-center font-bold bg-white py-1 px-3 rounded-full border-2 border-blue-400 shadow-sm mx-auto mb-1">
          🐱 LensaLoka 🐾
        </div>
      </div>
    ),
  },
  // ============================================================
  // MORE DENIM Y2K VARIATIONS (instagram section)
  // ============================================================
  {
    id: 'denim-circle',
    name: 'Denim Circle',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'circle',
    defaultBg: '#4a6fa5',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#2c4a6e]"
        style={{
          backgroundImage:
            'linear-gradient(45deg, rgba(74,111,165,0.15) 25%, transparent 25%, transparent 75%, rgba(74,111,165,0.15) 75%), linear-gradient(-45deg, rgba(74,111,165,0.15) 25%, transparent 25%, transparent 75%, rgba(74,111,165,0.15) 75%)',
          backgroundSize: '6px 6px',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="text-center text-3xl mt-1">🌸</div>
        <div className="absolute top-[8%] -left-2 text-3xl">🦋</div>
        <div className="absolute bottom-[15%] -right-2 text-3xl">⭐</div>
        <div
          className="font-mono text-[9px] text-[#f5e6d3] text-center font-bold bg-[#4a6fa5] py-1 px-3 rounded-full border-2 border-[#f5e6d3] shadow-sm mx-auto mb-1"
          style={{
            borderStyle: 'dashed',
          }}
        >
          ✦ LensaLoka ✦
        </div>
      </div>
    ),
  },
  {
    id: 'denim-scallop',
    name: 'Denim Scallop',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'scallop',
    defaultBg: '#0d1b3e',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#0d1b3e]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(74,111,165,0.3) 2px, transparent 2px)',
          backgroundSize: '24px 24px',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="text-center text-3xl mt-1">🎀</div>
        <div className="absolute top-[8%] -left-2 text-3xl">💛</div>
        <div className="absolute bottom-[15%] -right-2 text-3xl">🌸</div>
        <div
          className="font-pacifico text-[#f5e6d3] text-center text-sm bg-[#4a6fa5]/80 py-1 px-3 rounded-full border-2 border-[#f5e6d3] shadow-sm mx-2 mb-1"
          style={{
            borderStyle: 'dashed',
          }}
        >
          LensaLoka
        </div>
      </div>
    ),
  },
]
export const BG_COLORS = [
  '#FFFFFF',
  '#F8FAFC',
  '#FFB6C1',
  '#FFE4E1',
  '#FFF0F5',
  '#E8F0FE',
  '#E0F2FE',
  '#F3E8FF',
  '#F0FDF4',
  '#FFEDD5',
  '#EDE0D4',
  '#FFC6FF',
  '#FEF3C7',
  '#FFFBEB',
  '#2C1810',
  '#1A1A2E',
  '#FF69B4',
  '#FF4444',
  '#4169E1',
  '#FFEB3B',
  '#32CD32',
  '#9370DB',
  '#FFD700',
  '#FFA07A',
  '#98FB98',
  '#FF6347',
  '#0d1b3e',
  '#2c4a6e',
  '#4a6fa5',
  '#f5e6d3',
]
export const FILTERS: Filter[] = [
  {
    id: 'normal',
    name: 'Normal',
    css: 'none',
  },
  {
    id: 'bw',
    name: 'B&W',
    css: 'grayscale(100%)',
  },
  {
    id: 'sepia',
    name: 'Vintage',
    css: 'sepia(80%) contrast(110%)',
  },
  {
    id: 'cool',
    name: 'Cool',
    css: 'hue-rotate(180deg) saturate(150%)',
  },
  {
    id: 'warm',
    name: 'Warm',
    css: 'sepia(30%) saturate(140%) hue-rotate(-10deg)',
  },
  {
    id: 'contrast',
    name: 'Drama',
    css: 'contrast(150%) saturate(120%)',
  },
]
export const STICKERS = [
  '✨',
  '💖',
  '🎀',
  '⭐',
  '🌟',
  '💫',
  '🔥',
  '💯',
  '💥',
  '🎈',
  '🎉',
  '💘',
  '💝',
  '💗',
  '💕',
  '❤️‍🔥',
  '☕',
  '🍰',
  '🎂',
  '🍩',
  '🍪',
  '🍓',
  '🍒',
  '🍋',
  '🍑',
  '🐾',
  '🐱',
  '🐶',
  '🐰',
  '🐻',
  '🐸',
  '🦋',
  '🌸',
  '🌷',
  '🌻',
  '🌼',
  '🍄',
  '🌈',
  '☁️',
  '☀️',
  '🌙',
  '🧸',
  '💋',
  '📸',
  '💿',
  '🎧',
  '🎨',
  '🎬',
  '✌️',
  '😎',
  '😜',
  '⚡',
  '❓',
  '❗',
  '🩷',
  '🫧',
  '💜',
  '🌿',
  '🍀',
  '🌱',
  '😺',
  '💛',
  '🎞️',
  '🎟️',
  '🔮',
  '✦',
  '◈',
]
