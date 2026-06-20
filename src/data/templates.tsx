import React from 'react'
import { Template, Filter } from './types'
import {
  Heart,
  Star,
  Sparkles,
  Cherry,
  Ribbon,
  Smile,
  Camera,
  Music,
  Cloud,
  Moon,
} from 'lucide-react'
export const TEMPLATES: Template[] = [
  {
    id: 'y2k-star',
    name: 'Y2K Starburst',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'rect',
    defaultBg: '#ffb6c1',
    renderBackground: () => (
      <div className="absolute inset-0 overflow-hidden bg-[#ffb6c1]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#fff 3px, transparent 3px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="absolute top-4 left-4 text-pink-500 rotate-12">
          <Star size={40} fill="currentColor" />
        </div>
        <div className="absolute bottom-12 right-4 text-pink-500 -rotate-12">
          <Star size={55} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="font-cherry text-3xl text-white text-center tracking-wider drop-shadow-[0_2px_0_#db2777] mt-1">
          SUPER CUTE
        </div>
        <div className="absolute top-[15%] -left-3 text-4xl rotate-[-15deg]">
          ✨
        </div>
        <div className="absolute top-[45%] -right-3 text-4xl rotate-[15deg]">
          💖
        </div>
        <div className="absolute bottom-[20%] -left-2 text-3xl">🌟</div>
        <div className="font-mono text-[10px] text-pink-500 text-center font-bold bg-white py-1.5 px-4 rounded-full border-2 border-pink-300 shadow-sm mx-2 mb-1">
          ★ LensaLoka Studio ★
        </div>
      </div>
    ),
  },
  {
    id: 'checker-dream',
    name: 'Checker Dream',
    section: 'biasa',
    frameCount: 4,
    frameShape: 'rect',
    defaultBg: '#c9b6ef',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#fff]"
        style={{
          backgroundImage:
            'repeating-conic-gradient(#c9b6ef 0% 25%, transparent 0% 50%)',
          backgroundSize: '30px 30px',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-3 border-4 border-white m-2 rounded-xl shadow-inner">
        <div className="bg-white border-2 border-[#7c5cc4] rounded-full py-1 px-3 w-fit mx-auto font-cherry text-[#7c5cc4] text-sm shadow-sm rotate-[-2deg] mt-1">
          DREAMY
        </div>
        <div className="absolute top-[10%] -right-4 text-4xl">🦋</div>
        <div className="absolute bottom-[25%] -left-4 text-4xl">🔮</div>
        <div className="font-pacifico text-white text-lg text-center drop-shadow-[0_2px_2px_rgba(124,92,196,0.8)] mb-1">
          LensaLoka
        </div>
      </div>
    ),
  },
  {
    id: 'strawberry-jam',
    name: 'Strawberry Jam',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'arch',
    defaultBg: '#FFE4E1',
    renderBackground: () => (
      <div className="absolute inset-0 bg-[#fff0f5]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #ffcce6 25%, transparent 25%, transparent 75%, #ffcce6 75%, #ffcce6), linear-gradient(45deg, #ffcce6 25%, transparent 25%, transparent 75%, #ffcce6 75%, #ffcce6)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
            opacity: 0.5,
          }}
        />
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none border-[6px] border-red-300 rounded-t-full rounded-b-xl m-2 flex flex-col justify-between">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-5xl">
          🍓
        </div>
        <div className="absolute top-[30%] -right-3 text-3xl rotate-12">🌸</div>
        <div className="absolute bottom-[20%] -left-3 text-3xl -rotate-12">
          🎀
        </div>
        <div className="absolute bottom-3 w-full text-center font-pacifico text-red-400 text-xl drop-shadow-sm bg-white/80 py-1 backdrop-blur-sm">
          LensaLoka
        </div>
      </div>
    ),
  },
  {
    id: 'froggy-pond',
    name: 'Froggy Pond',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'rect',
    defaultBg: '#dcfce7',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#dcfce7]"
        style={{
          backgroundImage:
            'linear-gradient(#bbf7d0 2px, transparent 2px), linear-gradient(90deg, #bbf7d0 2px, transparent 2px)',
          backgroundSize: '20px 20px',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="absolute -top-2 -left-2 text-5xl">🐸</div>
        <div className="absolute top-[40%] -right-3 text-4xl">🍄</div>
        <div className="absolute bottom-[15%] -left-2 text-4xl">🍀</div>
        <div className="mt-auto font-cherry text-green-600 text-center text-xl bg-white/90 py-1.5 rounded-xl border-2 border-green-300 shadow-sm mb-1">
          ribbit!
        </div>
      </div>
    ),
  },
  {
    id: 'blue-skies',
    name: 'Blue Skies',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'arch',
    defaultBg: '#e0f2fe',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-[#bae6fd] to-[#e0f2fe]">
        <div className="absolute top-6 left-2 text-white opacity-80">
          <Cloud size={40} fill="currentColor" />
        </div>
        <div className="absolute top-24 right-2 text-white opacity-60">
          <Cloud size={30} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between border-4 border-white m-2 rounded-t-full rounded-b-xl shadow-inner">
        <div className="text-center mt-2 text-3xl">🌈</div>
        <div className="absolute bottom-[10%] -left-2 text-3xl">🕊️</div>
        <div className="absolute bottom-[30%] -right-2 text-3xl">✨</div>
        <div className="font-mono text-[9px] text-sky-600 text-center font-bold bg-white/80 py-1 px-3 rounded-full border border-sky-200 mx-auto mb-1">
          @LensaLoka.Studio
        </div>
      </div>
    ),
  },
  {
    id: 'retro-flower',
    name: 'Retro Flower',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'rect',
    defaultBg: '#fed7aa',
    renderBackground: () => (
      <div className="absolute inset-0 bg-[#fed7aa] overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-400 rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between border-2 border-orange-500 m-2 rounded-xl">
        <div className="bg-orange-500 text-white font-cherry text-xs px-3 py-1 rounded-full w-fit mx-auto rotate-[-3deg] mt-1 shadow-md">
          GROOVY
        </div>
        <div className="absolute top-[5%] -left-3 text-5xl">🌼</div>
        <div className="absolute bottom-[15%] -right-3 text-4xl">✌️</div>
        <div className="flex justify-between items-center px-2 mb-1 text-orange-700 bg-white/70 py-1 rounded-lg border border-orange-200">
          <Smile size={16} />
          <span className="font-pacifico text-[12px]">Stay Cool</span>
          <Music size={16} />
        </div>
      </div>
    ),
  },
  {
    id: 'kawaii-neko',
    name: 'Kawaii Neko',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'oval',
    defaultBg: '#fce7f3',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#fce7f3]"
        style={{
          backgroundImage: 'radial-gradient(#fbcfe8 4px, transparent 4px)',
          backgroundSize: '20px 20px',
        }}
      ></div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between border-[6px] border-white m-1.5 rounded-[2rem] shadow-sm">
        <div className="text-3xl text-center mt-1">🐱</div>
        <div className="absolute top-[20%] -left-2 text-3xl">🐟</div>
        <div className="absolute bottom-[20%] -right-2 text-3xl">🐾</div>
        <div className="font-cherry text-pink-400 text-center text-sm bg-white py-1 px-2 rounded-full border-2 border-pink-200 shadow-sm mx-2 mb-1">
          meow meow
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
]
