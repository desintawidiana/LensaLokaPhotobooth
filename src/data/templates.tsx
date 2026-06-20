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
  Zap,
  Cat,
} from 'lucide-react'
export const TEMPLATES: Template[] = [
  // BIASA SECTION (long vertical strips, 3-4 frames)
  {
    id: 'heart-stripes',
    name: 'Heart Stripes',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'heart',
    defaultBg: '#ffc0cb',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#ffc0cb] via-[#ffb3d9] to-[#ffc0cb]"
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
    id: 'cat-grid',
    name: 'Cat Grid',
    section: 'biasa',
    frameCount: 3,
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
      >
        <div className="absolute top-4 left-2 text-white rotate-12">
          <Cat size={36} />
        </div>
        <div className="absolute bottom-10 right-2 text-white -rotate-12">
          <Cat size={40} />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="font-cherry text-2xl text-white text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] mt-1">
          MEOW!
        </div>
        <div className="absolute top-[12%] -left-2 text-3xl rotate-[-10deg]">
          🐱
        </div>
        <div className="absolute top-[48%] -right-2 text-3xl rotate-[10deg]">
          🐾
        </div>
        <div className="absolute bottom-[18%] -left-2 text-2xl">😺</div>
        <div className="font-mono text-[9px] text-blue-700 text-center font-bold bg-white py-1 px-3 rounded-full border-2 border-blue-400 shadow-sm mx-2 mb-1">
          🐱 LensaLoka 🐾
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
    section: 'biasa',
    frameCount: 3,
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
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="font-cherry text-2xl text-white text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] mt-1">
          FRESH
        </div>
        <div className="absolute top-[12%] -left-2 text-3xl rotate-[-12deg]">
          🍀
        </div>
        <div className="absolute top-[48%] -right-2 text-3xl rotate-[12deg]">
          🌿
        </div>
        <div className="absolute bottom-[18%] -left-2 text-2xl">🍃</div>
        <div className="font-mono text-[9px] text-green-800 text-center font-bold bg-white py-1 px-3 rounded-full border-2 border-green-400 shadow-sm mx-2 mb-1">
          🌿 LensaLoka 🌿
        </div>
      </div>
    ),
  },
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
    id: 'xoxo-purple',
    name: 'XOXO Purple',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'oval',
    defaultBg: '#9370db',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#9370db]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 15px, rgba(255,255,255,0.1) 15px, rgba(255,255,255,0.1) 30px)',
        }}
      >
        <div className="absolute top-6 left-2 text-white text-2xl font-bold rotate-12">
          xo
        </div>
        <div className="absolute bottom-12 right-2 text-white text-3xl font-bold -rotate-12">
          xo
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="font-cherry text-2xl text-white text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] mt-1">
          XOXO
        </div>
        <div className="absolute top-[12%] -left-2 text-3xl">💜</div>
        <div className="absolute top-[48%] -right-2 text-3xl">💕</div>
        <div className="absolute bottom-[18%] -left-2 text-2xl">💗</div>
        <div className="font-mono text-[9px] text-purple-800 text-center font-bold bg-white py-1 px-3 rounded-full border-2 border-purple-400 shadow-sm mx-2 mb-1">
          xo LensaLoka xo
        </div>
      </div>
    ),
  },
  {
    id: 'lightning-bolt',
    name: 'Lightning Bolt',
    section: 'biasa',
    frameCount: 4,
    frameShape: 'rect',
    defaultBg: '#ffd700',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700] to-[#ffed4e]">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)',
          }}
        />
        <div className="absolute top-4 left-2 text-yellow-800 rotate-12">
          <Zap size={36} fill="currentColor" />
        </div>
        <div className="absolute bottom-8 right-2 text-yellow-800 -rotate-12">
          <Zap size={40} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="font-cherry text-2xl text-yellow-900 text-center drop-shadow-sm mt-1">
          ZAP!
        </div>
        <div className="absolute top-[10%] -left-2 text-3xl">⚡</div>
        <div className="absolute top-[35%] -right-2 text-3xl">⚡</div>
        <div className="absolute bottom-[25%] -left-2 text-2xl">💥</div>
        <div className="absolute bottom-[10%] -right-2 text-2xl">✨</div>
        <div className="font-mono text-[9px] text-yellow-900 text-center font-bold bg-white py-1 px-3 rounded-full border-2 border-yellow-500 shadow-sm mx-2 mb-1">
          ⚡ LensaLoka ⚡
        </div>
      </div>
    ),
  },
  // INSTAGRAM SECTION (square-ish, 1-2 frames)
  {
    id: 'heart-solo',
    name: 'Heart Solo',
    section: 'instagram',
    frameCount: 1,
    frameShape: 'heart',
    defaultBg: '#ff69b4',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff69b4] to-[#ff1493]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 2px)',
            backgroundSize: '16px 16px',
          }}
        />
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-5">
        <div className="text-center text-4xl mt-2">💖</div>
        <div className="absolute top-[8%] -left-3 text-4xl rotate-[-15deg]">
          💕
        </div>
        <div className="absolute top-[8%] -right-3 text-4xl rotate-[15deg]">
          💗
        </div>
        <div className="absolute bottom-[12%] -left-2 text-3xl">💝</div>
        <div className="absolute bottom-[12%] -right-2 text-3xl">💘</div>
        <div className="font-cherry text-white text-center text-xl bg-pink-600/80 py-1.5 px-4 rounded-full border-2 border-white shadow-md mx-4 mb-2">
          Love
        </div>
      </div>
    ),
  },
  {
    id: 'cloud-duo',
    name: 'Cloud Duo',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'cloud',
    defaultBg: '#87ceeb',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-[#87ceeb] to-[#b0e0e6]">
        <div className="absolute top-8 left-2 text-white/60">
          <Cloud size={40} fill="currentColor" />
        </div>
        <div className="absolute bottom-8 right-2 text-white/60">
          <Cloud size={36} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="text-center text-3xl mt-1">☁️</div>
        <div className="absolute top-[8%] -left-2 text-3xl">🌈</div>
        <div className="absolute bottom-[15%] -right-2 text-3xl">✨</div>
        <div className="font-mono text-[9px] text-sky-700 text-center font-bold bg-white py-1 px-3 rounded-full border border-sky-300 mx-auto mb-1">
          ☁ LensaLoka ☁
        </div>
      </div>
    ),
  },
  {
    id: 'cat-duo',
    name: 'Cat Duo',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'cat',
    defaultBg: '#ffa07a',
    renderBackground: () => (
      <div
        className="absolute inset-0 bg-[#ffa07a]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.2) 20px, rgba(255,255,255,0.2) 40px)',
        }}
      >
        <div className="absolute top-6 left-2 text-white rotate-12">
          <Cat size={32} />
        </div>
        <div className="absolute bottom-8 right-2 text-white -rotate-12">
          <Cat size={36} />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="text-center text-3xl mt-1">😺</div>
        <div className="absolute top-[8%] -left-2 text-3xl">🐾</div>
        <div className="absolute bottom-[15%] -right-2 text-3xl">🐱</div>
        <div className="font-cherry text-orange-800 text-center text-sm bg-white py-1 px-3 rounded-full border-2 border-orange-400 shadow-sm mx-2 mb-1">
          meow
        </div>
      </div>
    ),
  },
  {
    id: 'scallop-duo',
    name: 'Scallop Duo',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'scallop',
    defaultBg: '#ffc0cb',
    renderBackground: () => (
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-conic-gradient(#ffc0cb 0% 25%, #ffb3d9 0% 50%)',
          backgroundSize: '30px 30px',
        }}
      >
        <div className="absolute top-6 left-2 text-pink-600 rotate-12">
          <Ribbon size={32} />
        </div>
        <div className="absolute bottom-8 right-2 text-pink-600 -rotate-12">
          <Ribbon size={36} />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="text-center text-3xl mt-1">🎀</div>
        <div className="absolute top-[8%] -left-2 text-3xl">💕</div>
        <div className="absolute bottom-[15%] -right-2 text-3xl">🌸</div>
        <div className="font-pacifico text-pink-600 text-center text-sm bg-white/90 py-1 px-3 rounded-full border border-pink-300 shadow-sm mx-2 mb-1">
          LensaLoka
        </div>
      </div>
    ),
  },
  {
    id: 'blob-duo',
    name: 'Blob Duo',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'blob',
    defaultBg: '#98fb98',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-[#98fb98] to-[#90ee90]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.5) 3px, transparent 3px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="text-center text-3xl mt-1">🌿</div>
        <div className="absolute top-[8%] -left-2 text-3xl">🍀</div>
        <div className="absolute bottom-[15%] -right-2 text-3xl">🌱</div>
        <div className="font-mono text-[9px] text-green-700 text-center font-bold bg-white py-1 px-3 rounded-full border border-green-400 mx-auto mb-1">
          🌿 LensaLoka 🌿
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
  {
    id: 'star-burst',
    name: 'Star Burst',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'rect',
    defaultBg: '#ff6347',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6347] to-[#ff4500]">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,0.2) 15px, rgba(255,255,255,0.2) 30px)',
          }}
        />
        <div className="absolute top-6 left-2 text-white rotate-12">
          <Star size={36} fill="currentColor" />
        </div>
        <div className="absolute bottom-8 right-2 text-white -rotate-12">
          <Star size={40} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="font-cherry text-2xl text-white text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] mt-1">
          WOW!
        </div>
        <div className="absolute top-[8%] -left-2 text-3xl">⭐</div>
        <div className="absolute bottom-[15%] -right-2 text-3xl">✨</div>
        <div className="font-mono text-[9px] text-red-800 text-center font-bold bg-white py-1 px-3 rounded-full border-2 border-red-400 shadow-sm mx-auto mb-1">
          ⭐ LensaLoka ⭐
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
]
