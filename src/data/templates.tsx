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
  Ghost,
  Moon,
  Anchor,
  Coffee,
} from 'lucide-react'
export const TEMPLATES: Template[] = [
  // ============================================================
  // DENIM Y2K THEME (Kept the best 3)
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
      </div>
    ),
  },
  // ============================================================
  // COWBOY / WESTERN THEME
  // ============================================================
  {
    id: 'cowboy-star',
    name: 'Sheriff Star',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'star',
    defaultBg: '#8b4513',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#8b4513]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(210,180,140,0.15) 10px, rgba(210,180,140,0.15) 20px)',
        }}
      >
        <div className="absolute top-4 left-2 text-[#d2b48c] rotate-12">
          <Star size={36} fill="currentColor" />
        </div>
        <div className="absolute bottom-10 right-2 text-[#d2b48c] -rotate-12">
          <Star size={40} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="font-cherry text-2xl text-[#f5deb3] text-center drop-shadow-sm mt-1">
          HOWDY!
        </div>
        <div className="absolute top-[15%] -left-2 text-4xl rotate-[-15deg]">
          🤠
        </div>
        <div className="absolute top-[45%] -right-2 text-4xl rotate-[15deg]">
          🌵
        </div>
        <div className="absolute bottom-[20%] -left-2 text-3xl">🐴</div>
      </div>
    ),
  },
  {
    id: 'cowboy-arch',
    name: 'Desert Arch',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'arch',
    defaultBg: '#d2b48c',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4a460] to-[#d2b48c]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, #8b4513 2px, transparent 2px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-4xl">
          👢
        </div>
        <div className="absolute top-[35%] -right-3 text-3xl">🪢</div>
        <div className="absolute bottom-[18%] -left-2 text-3xl">🌵</div>
      </div>
    ),
  },
  {
    id: 'cowboy-rect',
    name: 'Western Bandana',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'rect',
    defaultBg: '#cd5c5c',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#cd5c5c]"
        style={{
          backgroundImage:
            'linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.2) 75%), linear-gradient(-45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.2) 75%)',
          backgroundSize: '20px 20px',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="text-center text-3xl mt-1">🤠</div>
        <div className="absolute top-[8%] -left-2 text-3xl">⭐</div>
        <div className="absolute bottom-[15%] -right-2 text-3xl">🐴</div>
      </div>
    ),
  },
  // ============================================================
  // HALLOWEEN / SPOOKY THEME
  // ============================================================
  {
    id: 'spooky-blob',
    name: 'Spooky Blob',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'blob',
    defaultBg: '#4b0082',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-[#2e0854] to-[#4b0082]">
        <div className="absolute top-4 left-2 text-purple-300/40 rotate-12">
          <Ghost size={36} fill="currentColor" />
        </div>
        <div className="absolute bottom-10 right-2 text-purple-300/40 -rotate-12">
          <Moon size={40} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="font-cherry text-2xl text-[#ff8c00] text-center drop-shadow-[0_2px_0_#000] mt-1">
          BOO!
        </div>
        <div className="absolute top-[15%] -left-2 text-4xl rotate-[-15deg]">
          👻
        </div>
        <div className="absolute top-[45%] -right-2 text-4xl rotate-[15deg]">
          🎃
        </div>
        <div className="absolute bottom-[20%] -left-2 text-3xl">🦇</div>
      </div>
    ),
  },
  {
    id: 'spooky-cat',
    name: 'Black Cat',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'cat',
    defaultBg: '#1a1a1a',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#1a1a1a]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ff8c00 2px, transparent 2px)',
          backgroundSize: '24px 24px',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-4xl">
          🐈‍⬛
        </div>
        <div className="absolute top-[35%] -right-3 text-3xl">🕸️</div>
        <div className="absolute bottom-[18%] -left-2 text-3xl">🍬</div>
      </div>
    ),
  },
  {
    id: 'spooky-circle',
    name: 'Magic Moon',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'circle',
    defaultBg: '#ff8c00',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#ff8c00]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(0,0,0,0.1) 15px, rgba(0,0,0,0.1) 30px)',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="text-center text-3xl mt-1">🌙</div>
        <div className="absolute top-[8%] -left-2 text-3xl">🦇</div>
        <div className="absolute bottom-[15%] -right-2 text-3xl">🔮</div>
      </div>
    ),
  },
  // ============================================================
  // FILM THEME
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
      </div>
    ),
  },
  // ============================================================
  // OCEAN / BEACH THEME
  // ============================================================
  {
    id: 'ocean-scallop',
    name: 'Ocean Waves',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'scallop',
    defaultBg: '#0ea5e9',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-[#38bdf8] to-[#0284c7]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, #fff 2px, transparent 2px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-4xl">
          🌊
        </div>
        <div className="absolute top-[35%] -right-3 text-3xl">🐚</div>
        <div className="absolute bottom-[18%] -left-2 text-3xl">🐠</div>
      </div>
    ),
  },
  {
    id: 'beach-oval',
    name: 'Beach Day',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'oval',
    defaultBg: '#fde047',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#fde047]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,0.3) 15px, rgba(255,255,255,0.3) 30px)',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="text-center text-3xl mt-1">☀️</div>
        <div className="absolute top-[8%] -left-2 text-3xl">🌴</div>
        <div className="absolute bottom-[15%] -right-2 text-3xl">🍹</div>
      </div>
    ),
  },
  // ============================================================
  // MATCHA CAFE THEME
  // ============================================================
  {
    id: 'matcha-cloud',
    name: 'Matcha Cloud',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'cloud',
    defaultBg: '#86efac',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#dcfce7]"
        style={{
          backgroundImage:
            'repeating-conic-gradient(#86efac 0% 25%, transparent 0% 50%)',
          backgroundSize: '30px 30px',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="font-cherry text-2xl text-[#166534] text-center drop-shadow-sm mt-1">
          MATCHA
        </div>
        <div className="absolute top-[15%] -left-2 text-4xl rotate-[-15deg]">
          🍵
        </div>
        <div className="absolute top-[45%] -right-2 text-4xl rotate-[15deg]">
          🍰
        </div>
        <div className="absolute bottom-[20%] -left-2 text-3xl">🌿</div>
      </div>
    ),
  },
  {
    id: 'cafe-arch',
    name: 'Cafe Arch',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'arch',
    defaultBg: '#d6d3d1',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#f5f5f4]"
        style={{
          backgroundImage:
            'linear-gradient(#e7e5e4 1px, transparent 1px), linear-gradient(90deg, #e7e5e4 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="text-center text-3xl mt-1">☕</div>
        <div className="absolute top-[8%] -left-2 text-3xl">🥐</div>
        <div className="absolute bottom-[15%] -right-2 text-3xl">🤎</div>
      </div>
    ),
  },
  // ============================================================
  // DREAMY PASTEL THEME
  // ============================================================
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
      </div>
    ),
  },
  // ============================================================
  // CANDY DOODLE THEME
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
  '#8b4513',
  '#d2b48c',
  '#cd5c5c',
  '#4b0082',
  '#ff8c00',
  '#0ea5e9',
  '#fde047',
  '#86efac',
  '#d6d3d1',
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
  '🤠',
  '🌵',
  '🐴',
  '👢',
  '🎃',
  '👻',
  '🦇',
  '🕸️',
  '🍬',
]
