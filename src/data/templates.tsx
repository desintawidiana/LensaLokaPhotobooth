import React from 'react';
import { Template, Filter } from './types';
import {
  Heart,
  Star,
  Sparkles,
  Cherry,
  Ribbon,
  Clapperboard,
  Palmtree,
  Sun,
  Waves,
  Music,
  Cloud,
  Moon,
  Cat,
  Sparkle,
  Smile,
  Coffee,
  Croissant,
  Cake,
  Pizza,
  Utensils,
  Cookie,
  Gamepad2,
  Film,
  Camera,
  Ghost,
  Zap,
  Flame,
  Rocket,
  Gift,
  Umbrella,
  Snowflake,
  Leaf,
  Flower2,
  Music2,
  PartyPopper,
  IceCream,
  Apple,
  Candy,
  Popcorn,
  Glasses,
  Crown,
  Gem,
  Wand2,
  Shirt,
  Footprints,
  Plane,
  Bike,
  Train,
  Ship,
  Anchor,
  Mountain,
  Trees,
  Tent,
  Compass,
  MapPin,
  Globe,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  Wind,
  Droplets,
  Rainbow,
  Bolt,
  Feather,
  Shell,
  Fish,
  Waves as WavesIcon,
  Sailboat,
  Bird,
  Bug,
  Flower,
  Sprout,
  TreePine,
  Clover,
  Cherry as CherryIcon,
  Grape,
  Citrus,
  Banana,
  Milk,
  CupSoda,
  IceCream2,
  Soup,
  Sandwich,
  Drumstick,
  Beef,
  Egg,
  CakeSlice,
  Donut,
  Lollipop,
  Candy as CandyIcon,
  ChefHat,
  UtensilsCrossed,
  Wine,
  Beer,
  Martini,
  GlassWater,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Dices,
  Puzzle,
  Gamepad,
  Joystick,
  Trophy,
  Medal,
  Award,
  Target,
  Swords,
  Wand,
  Sparkles as SparklesIcon,
  Stars,
  Atom,
  Orbit,
  Telescope,
  Microscope,
  Beaker,
  FlaskConical,
  TestTube,
  Dna,
  Brain,
  Eye,
  Ear,
  Fingerprint,
  Hand,
  ThumbsUp,
  ThumbsDown,
  Handshake,
  HeartHandshake,
  Users,
  UserPlus,
  Baby,
  PersonStanding,
  Laugh,
  Frown,
  Meh,
  Angry,
  PartyPopper as PartyIcon,
  Cake as CakeIcon,
  GraduationCap,
  Briefcase,
  Laptop,
  Monitor,
  Smartphone,
  Tablet,
  Watch,
  Headphones,
  Mic,
  Radio,
  Tv,
  Video,
  Clapperboard as ClapperIcon,
  Film as FilmIcon,
  Image,
  ImagePlus,
  Palette,
  Paintbrush,
  Pen,
  Pencil,
  Eraser,
  Ruler,
  Scissors,
  Paperclip,
  Pin,
  Bookmark,
  Book,
  BookOpen,
  Library,
  Newspaper,
  Mail,
  Send,
  MessageCircle,
  MessageSquare,
  Phone,
  PhoneCall,
  Video as VideoIcon,
  Calendar,
  Clock,
  Timer,
  Hourglass,
  Watch as WatchIcon,
  MapPinned,
  Map,
  Navigation,
  Locate,
  Home,
  Building,
  Building2,
  Store,
  Warehouse,
  Factory,
  Church,
  Hospital,
  School,
  Hotel,
  Bed,
  Bath,
  Sofa,
  Lamp,
  Lightbulb,
  Flame as FlameIcon,
  Thermometer,
  Gauge,
  Fuel,
  Zap as ZapIcon,
  Battery,
  BatteryCharging,
  Plug,
  Power,
  Settings,
  Wrench,
  Hammer,
  Drill,
  Nut,
  Cog,
  Lock,
  Unlock,
  Key,
  Shield,
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
  Info,
  HelpCircle,
  CheckCircle,
  XCircle,
  Plus,
  Minus,
  X,
  Check,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CornerUpLeft,
  CornerUpRight,
  CornerDownLeft,
  CornerDownRight,
  Repeat,
  RotateCw,
  RotateCcw,
  RefreshCw,
  Shuffle,
  Maximize,
  Minimize,
  ZoomIn,
  ZoomOut,
  Expand,
  Shrink,
  Move,
  Copy,
  Clipboard,
  Download,
  Upload,
  Share,
  Link,
  ExternalLink,
  Trash,
  Archive,
  Folder,
  FolderOpen,
  File,
  FileText,
  FilePlus,
  Search,
  Filter as FilterIcon,
  SlidersHorizontal,
  Menu,
  MoreVertical,
  MoreHorizontal,
  Grid,
  List,
  Columns,
  Rows,
  Layout,
  Sidebar,
  PanelLeft,
  PanelRight,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Pentagon,
  Octagon,
  Star as StarIcon,
  Heart as HeartIcon,
  Diamond,
  Spade,
  Club,
} from 'lucide-react';

export const TEMPLATES: Template[] = [
  // ============================================================
  // STRIP BIASA (MEMANJANG) – 3-4 FRAMES
  // ============================================================
  {
    id: 'y2k-star',
    name: 'Y2K Starburst',
    section: 'biasa',
    frameCount: 4,
    frameShape: 'star',
    defaultBg: '#FF1493',
    renderBackground: () => (
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(#FFD700 3px, transparent 3px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="absolute top-4 left-4 text-yellow-300 rotate-12 animate-spin-slow">
          <Star size={40} fill="currentColor" />
        </div>
        <div className="absolute top-24 right-2 text-cyan-300 -rotate-12 animate-pulse">
          <Sparkles size={24} />
        </div>
        <div className="absolute bottom-12 right-4 text-yellow-300 -rotate-12 animate-bounce">
          <Star size={55} fill="currentColor" />
        </div>
        <div className="absolute top-1/2 left-1/4 text-yellow-300/60 animate-pulse">
          <Zap size={28} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-pink-300/60 animate-bounce">
          <Sparkle size={32} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="font-cherry text-3xl text-white text-center tracking-wider drop-shadow-[0_0_20px_rgba(255,20,147,0.8)] mt-1">
          ✨ SUPER CUTE ✨
        </div>
        <div className="absolute top-[10%] left-2 text-5xl animate-bounce">🌈</div>
        <div className="absolute top-[10%] right-2 text-5xl animate-bounce">⭐</div>
        <div className="absolute bottom-[20%] left-2 text-4xl animate-pulse">💖</div>
        <div className="absolute bottom-[20%] right-2 text-4xl animate-pulse">🌟</div>
        <div className="absolute top-[40%] left-3 text-3xl animate-spin-slow">💫</div>
        <div className="absolute top-[40%] right-3 text-3xl animate-spin-slow">✦</div>
        <div className="font-mono text-sm text-white text-center font-bold bg-gradient-to-r from-pink-500 to-purple-500 py-2 px-6 rounded-full border-2 border-white shadow-lg mx-4 mb-1">
          ★ LensaLoka Studio ★
        </div>
      </div>
    ),
  },
  {
    id: 'strawberry-jam',
    name: 'Strawberry Jam',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'blob',
    defaultBg: '#FF6B9D',
    renderBackground: () => (
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(#FFD700 2.5px, transparent 2.5px)',
          backgroundSize: '24px 24px',
        }}
      />
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none border-8 border-white/30 rounded-xl m-2 flex flex-col justify-between">
        <div className="absolute -top-3 -left-3 text-5xl animate-bounce">🍓</div>
        <div className="absolute -bottom-3 -right-3 text-5xl animate-bounce">🍓</div>
        <div className="absolute top-[15%] -right-3 text-3xl rotate-12 animate-pulse">🌸</div>
        <div className="absolute bottom-[15%] -left-3 text-3xl -rotate-12 animate-pulse">🌸</div>
        <div className="absolute top-[35%] left-2 text-3xl animate-float">🍒</div>
        <div className="absolute top-[35%] right-2 text-3xl animate-float">💕</div>
        <div className="absolute bottom-4 w-full text-center font-pacifico text-white text-2xl drop-shadow-lg bg-gradient-to-r from-red-500 to-pink-500 py-2 backdrop-blur-sm rounded-full border-2 border-white">
          🍓 Strawberry Heaven 🍓
        </div>
      </div>
    ),
  },
  {
    id: 'vintage-film',
    name: 'Vintage Film',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'rect',
    defaultBg: '#1A0A0A',
    renderBackground: () => (
      <div className="absolute inset-0 border-x-[16px] border-amber-900 flex flex-col justify-between py-2 bg-gradient-to-b from-amber-950 via-amber-800 to-amber-950">
        {Array.from({
          length: 22,
        }).map((_, i) => (
          <div key={i} className="w-full flex justify-between px-1">
            <div className="w-2 h-2.5 bg-amber-400 rounded-sm" />
            <div className="w-2 h-2.5 bg-amber-400 rounded-sm" />
          </div>
        ))}
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="flex justify-between items-center text-yellow-400 px-2 mt-1">
          <Camera size={20} fill="currentColor" />
          <span className="font-mono text-sm tracking-widest font-bold text-yellow-400 bg-black/50 px-2 rounded">ISO 400</span>
          <Sparkle size={16} fill="currentColor" />
        </div>
        <div className="absolute top-[12%] left-3 text-5xl text-yellow-400 animate-pulse">🎞️</div>
        <div className="absolute top-[12%] right-3 text-5xl text-yellow-400 animate-pulse">🎬</div>
        <div className="absolute bottom-[20%] left-4 text-3xl text-yellow-400/60 animate-bounce">📸</div>
        <div className="absolute bottom-[20%] right-4 text-3xl text-yellow-400/60 animate-bounce">✨</div>
        <div className="absolute top-[35%] left-2 text-3xl text-yellow-400/80 animate-pulse">🎥</div>
        <div className="absolute top-[35%] right-2 text-3xl text-yellow-400/80 animate-pulse">📷</div>
        <div className="font-pacifico text-yellow-400 text-2xl text-center tracking-wide bg-black/60 py-2 rounded-full border-2 border-yellow-400">
          🌟 Capturing LensaLoka 🌟
        </div>
      </div>
    ),
  },
  {
    id: 'coquette-bow',
    name: 'Coquette Bow',
    section: 'biasa',
    frameCount: 4,
    frameShape: 'heart',
    defaultBg: '#FF69B4',
    renderBackground: () => (
      <div className="absolute inset-0 border-[6px] border-white border-dashed m-2 rounded-2xl opacity-60">
        <div className="absolute top-20 left-4 text-white/60 animate-pulse">
          <Heart size={16} fill="currentColor" />
        </div>
        <div className="absolute bottom-32 right-4 text-white/60 animate-pulse">
          <Heart size={20} fill="currentColor" />
        </div>
        <div className="absolute top-1/3 right-6 text-white/50 animate-spin-slow">
          <Sparkles size={18} />
        </div>
        <div className="absolute bottom-1/2 left-6 text-white/50 animate-pulse">
          <Ribbon size={22} />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 text-white drop-shadow-lg animate-pulse">
          <Ribbon size={54} fill="currentColor" />
        </div>
        <div className="absolute top-[15%] -left-2 text-5xl text-white/80 rotate-[-15deg] animate-bounce">🎀</div>
        <div className="absolute top-[15%] -right-2 text-5xl text-white/80 rotate-[15deg] animate-bounce">🎀</div>
        <div className="absolute bottom-[20%] left-3 text-3xl text-white animate-pulse">💕</div>
        <div className="absolute bottom-[20%] right-3 text-3xl text-white animate-pulse">💗</div>
        <div className="absolute top-[35%] left-3 text-3xl text-white/80 animate-float">🌸</div>
        <div className="absolute top-[35%] right-3 text-3xl text-white/80 animate-float">💝</div>
        <div className="absolute bottom-6 w-full text-center font-pacifico text-white text-2xl bg-pink-500/80 py-1 border-y-2 border-white backdrop-blur-sm">
          🎀 Coquette Loka 🎀
        </div>
      </div>
    ),
  },
  {
    id: 'movie-night',
    name: 'Movie Night',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'arch',
    defaultBg: '#0A0A1A',
    renderBackground: () => (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent)] opacity-80" />
        <div className="absolute top-0 w-full h-8 bg-black/80 flex justify-around items-center">
          {Array.from({
            length: 8,
          }).map((_, i) => (
            <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm" />
          ))}
        </div>
        <div className="absolute bottom-0 w-full h-8 bg-black/80 flex justify-around items-center">
          {Array.from({
            length: 8,
          }).map((_, i) => (
            <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm" />
          ))}
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6">
        <div className="flex justify-center mt-4">
          <Clapperboard className="text-yellow-400 drop-shadow-lg animate-pulse" size={48} fill="currentColor" />
        </div>
        <div className="absolute top-[15%] left-3 text-5xl animate-bounce">🍿</div>
        <div className="absolute top-[15%] right-3 text-5xl animate-bounce">🎟️</div>
        <div className="absolute bottom-[20%] left-4 text-3xl animate-pulse">🎬</div>
        <div className="absolute bottom-[20%] right-4 text-3xl animate-pulse">✨</div>
        <div className="absolute top-[40%] left-3 text-3xl animate-float">🎥</div>
        <div className="absolute top-[40%] right-3 text-3xl animate-float">🎞️</div>
        <div className="text-center font-mono text-yellow-400 text-sm tracking-widest bg-black/70 py-2 rounded-full border-2 border-yellow-400">
          🎬 @LensaLoka.Cinema 🎬
        </div>
      </div>
    ),
  },
  {
    id: 'cowboy-rodeo',
    name: 'Cowboy Rodeo',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'star',
    defaultBg: '#FF8C00',
    renderBackground: () => (
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #D2691E 25%, transparent 25%, transparent 75%, #D2691E 75%, #D2691E), repeating-linear-gradient(45deg, #D2691E 25%, #FF8C00 25%, #FF8C00 75%, #D2691E 75%, #D2691E)',
          backgroundPosition: '0 0, 10px 10px',
          backgroundSize: '20px 20px',
        }}
      />
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none border-4 border-yellow-300 m-3 rounded-lg flex flex-col justify-between p-4 bg-white/10 backdrop-blur-sm">
        <div className="text-center font-mono text-yellow-300 text-sm font-bold tracking-widest drop-shadow-lg">
          🤠 COWBOY LAND ⭐
        </div>
        <div className="absolute top-[12%] left-2 text-5xl animate-pulse">🐴</div>
        <div className="absolute top-[12%] right-2 text-5xl animate-pulse">🤠</div>
        <div className="absolute bottom-[20%] left-3 text-3xl animate-bounce">🌵</div>
        <div className="absolute bottom-[20%] right-3 text-3xl animate-bounce">👢</div>
        <div className="absolute top-[35%] left-3 text-3xl animate-float">🏜️</div>
        <div className="absolute top-[35%] right-3 text-3xl animate-float">⭐</div>
        <div className="flex justify-between items-end">
          <div className="text-5xl animate-pulse">🌵</div>
          <div className="text-sm text-yellow-300 font-bold font-mono bg-black/70 px-4 py-1.5 rounded-full border-2 border-yellow-300 shadow-lg mb-1">
            ⭐ LENSA LOKA ⭐
          </div>
          <div className="text-5xl animate-bounce">🐴</div>
        </div>
      </div>
    ),
  },
  {
    id: 'summer-beach',
    name: 'Summer Beach',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'scallop',
    defaultBg: '#00CED1',
    renderBackground: () => (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 w-full h-1/3 bg-[#FFD700] opacity-40" />
        <div className="absolute top-4 right-4 text-yellow-300 animate-pulse">
          <Sun size={60} fill="currentColor" />
        </div>
        <div className="absolute bottom-1/3 left-4 text-white/60 animate-float">
          <Waves size={40} />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="font-pacifico text-white text-3xl text-center mt-2 drop-shadow-[0_0_30px_rgba(0,206,209,0.8)]">
          🏖️ Beach Vibe 🌊
        </div>
        <div className="absolute top-[15%] left-2 text-5xl animate-bounce">🍦</div>
        <div className="absolute top-[15%] right-2 text-5xl animate-bounce">🍹</div>
        <div className="absolute bottom-[20%] left-3 text-3xl animate-pulse">🏄‍♂️</div>
        <div className="absolute bottom-[20%] right-3 text-3xl animate-pulse">🏖️</div>
        <div className="absolute top-[35%] left-3 text-3xl animate-float">🌊</div>
        <div className="absolute top-[35%] right-3 text-3xl animate-float">🐚</div>
        <div className="flex justify-between items-end mb-2">
          <Palmtree className="text-white drop-shadow-lg" size={48} fill="currentColor" />
          <Waves className="text-white drop-shadow-lg" size={48} fill="currentColor" />
        </div>
      </div>
    ),
  },
  {
    id: 'retro-candy',
    name: 'Retro Candy',
    section: 'biasa',
    frameCount: 4,
    frameShape: 'circle',
    defaultBg: '#FF4500',
    renderBackground: () => (
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(45deg, #FF1493 25%, transparent 25%), linear-gradient(-45deg, #FF1493 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #FF1493 75%), linear-gradient(-45deg, transparent 75%, #FF1493 75%)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px',
        }}
      />
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4">
        <div className="bg-yellow-300 text-red-600 rounded-full px-4 py-1.5 font-cherry text-center border-4 border-white shadow-lg rotate-[-3deg] text-lg">
          🍭 CANDY POP! 🍭
        </div>
        <div className="absolute top-[12%] left-2 text-5xl animate-bounce">🍭</div>
        <div className="absolute top-[12%] right-2 text-5xl animate-bounce">🍒</div>
        <div className="absolute bottom-[20%] left-3 text-3xl animate-pulse">✨</div>
        <div className="absolute bottom-[20%] right-3 text-3xl animate-pulse">🍬</div>
        <div className="absolute top-[35%] left-3 text-3xl animate-spin-slow">🎈</div>
        <div className="absolute top-[35%] right-3 text-3xl animate-spin-slow">🌈</div>
        <div className="text-center font-mono text-white text-sm font-extrabold bg-gradient-to-r from-pink-500 to-red-500 py-2 rounded-full border-4 border-white shadow-lg">
          ✿ LensaLoka ✿
        </div>
      </div>
    ),
  },
  {
    id: 'kawaii-neko',
    name: 'Kawaii Neko Station',
    section: 'biasa',
    frameCount: 4,
    frameShape: 'cat',
    defaultBg: '#FF6B9D',
    renderBackground: () => (
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#FFD700 4px, transparent 4px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div className="absolute top-1/3 right-1 text-white/60 animate-pulse">
          <Cat size={40} fill="currentColor" />
        </div>
        <div className="absolute bottom-1/4 left-2 text-white/50 animate-pulse">
          <Heart size={28} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between border-4 border-white m-2 rounded-2xl shadow-inner bg-white/10 backdrop-blur-sm">
        <div className="text-4xl text-center text-white drop-shadow-lg animate-pulse">🐾 ฅ(=•́⎑•̀=)</div>
        <div className="absolute top-[10%] left-2 text-5xl animate-bounce">🐱</div>
        <div className="absolute top-[10%] right-2 text-5xl animate-bounce">🐟</div>
        <div className="absolute bottom-[15%] left-3 text-3xl animate-pulse">🥛</div>
        <div className="absolute bottom-[15%] right-3 text-3xl animate-pulse">✨</div>
        <div className="absolute top-[35%] left-3 text-3xl animate-float">😺</div>
        <div className="absolute top-[35%] right-3 text-3xl animate-float">🎀</div>
        <div className="font-pacifico text-white text-2xl text-center drop-shadow-[0_0_20px_rgba(255,105,180,0.8)]">
          ✨ LensaLoka Studio ✨
        </div>
      </div>
    ),
  },
  {
    id: 'red-collage',
    name: 'Red Collage',
    section: 'biasa',
    frameCount: 3,
    frameShape: 'rect',
    defaultBg: '#DC143C',
    renderBackground: () => (
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 14px, rgba(255,215,0,0.2) 14px, rgba(255,215,0,0.2) 28px), repeating-linear-gradient(90deg, transparent, transparent 14px, rgba(255,215,0,0.2) 14px, rgba(255,215,0,0.2) 28px)',
        }}
      />
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 border-4 border-yellow-300 m-1">
        <div className="flex justify-between text-yellow-300 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] animate-pulse">
          <Sparkle size={28} fill="currentColor" />
          <Heart size={28} fill="currentColor" />
        </div>
        <div className="absolute top-[12%] left-2 text-5xl text-yellow-300 animate-pulse">⚡</div>
        <div className="absolute top-[12%] right-2 text-5xl text-yellow-300 animate-pulse">💖</div>
        <div className="absolute bottom-[20%] left-3 text-3xl text-yellow-300 animate-bounce">🦋</div>
        <div className="absolute bottom-[20%] right-3 text-3xl text-yellow-300 animate-bounce">💋</div>
        <div className="absolute top-[35%] left-3 text-3xl text-yellow-300 animate-float">🔥</div>
        <div className="absolute top-[35%] right-3 text-3xl text-yellow-300 animate-float">💕</div>
        <div className="font-cherry text-yellow-300 text-center text-2xl tracking-widest bg-black/60 px-3 py-1.5 rounded-md border-2 border-yellow-300">
          ⚡ LensaLoka ⚡
        </div>
      </div>
    ),
  },
  // ... (lanjut ke template lainnya dengan warna cerah)
];

// BG_COLORS dengan warna-warna cerah
export const BG_COLORS = [
  '#FFFFFF',
  '#F8FAFC',
  '#FF1493',
  '#FF6B9D',
  '#FF69B4',
  '#FF4500',
  '#FF8C00',
  '#FF6B35',
  '#FFD700',
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
  '#00CED1',
  '#4169E1',
  '#32CD32',
  '#9370DB',
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
  '#1E1B4B',
  '#312E81',
  '#FFDAB9',
  '#A7F3D0',
  '#F97316',
  '#FEF08A',
  '#FBCFE8',
  '#A5F3FC',
  '#67E8F9',
  '#FB7185',
  '#C4B5FD',
  '#FDBA74',
  '#BAE6FD',
  '#99F6E4',
  '#FED7AA',
  '#FDE047',
  '#0B0E1A',
  '#0F172A',
  '#F1F5F9',
  '#FF6B6B',
  '#FF9F1C',
  '#A78BFA',
  '#34D399',
  '#60A5FA',
  '#F472B6',
  '#FBBF24',
  '#FB923C',
  '#E879F9',
  '#22D3EE',
];

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
];

export const STICKERS = [
  '✨', '💖', '🎀', '⭐', '🌟', '💫', '🔥', '💯', '💥', '🎈', '🎉', '🎊',
  '💘', '💝', '💗', '💓', '💞', '💕', '❣', '💌', '❤️‍🔥', '🤍', '🤎',
  '☕', '🍵', '🥐', '🥖', '🍞', '🥞', '🧇', '🍰', '🎂', '🧁', '🍩', '🍪',
  '🍯', '🧋', '🥛', '🍫', '🍬', '🍭', '🍮', '🍧', '🍨', '🍦', '🍕', '🍔',
  '🍟', '🌭', '🥪', '🌮', '🌯', '🍿', '🍛', '🍣', '🍱', '🍙', '🍤', '🧂',
  '🍳', '🍽️', '🍗', '🍖', '🥟', '🍜', '🍝', '🍓', '🍒', '🍋', '🍇', '🍉',
  '🍑', '🥑', '🥝', '🍹', '🥤', '🍎', '🍍', '🍊', '🍏', '🐾', '🐱', '🐶',
  '🐰', '🐹', '🐻', '🐼', '🐻‍❄️', '🐨', '🦊', '🐯', '🦁', '🐮', '🐷', '🐸',
  '🐵', '🐤', '🐧', '🦆', '🦉', '🦄', '🐝', '🦋', '🐞', '🌸', '🌷', '🌹',
  '🌻', '🌼', '🌱', '🌿', '🍃', '🍄', '🌵', '🌈', '☁️', '☀️', '🌊', '🪐',
  '🌍', '🌙', '🧸', '💋', '💎', '👑', '📸', '📀', '💿', '🎧', '🎸', '🎹',
  '🎵', '🎶', '🕹️', '👾', '🎲', '🎨', '🎬', '🎞️', '🎫', '🎟️', '📺', '☎️',
  '📻', '🕶️', '🛹', '😎', '😜', '🤩', '🥳', '🤡', '🤠', '👻', '👽', '🤖',
  '💄', '💅', '🔮', '🧿', '🍀', '⚡', '✌️', '✊', '🖐️', '👌', '👍', '🙌',
  '👏', '🤝', '❓', '❗', '🩷', '🫧', '💜', '😺', '💛', '✦', '◈',
  '🌃', '🎆', '🌺', '🥥', '🦜', '🦩', '🐠', '🐬', '🐳', '🐙', '🐚',
  '⚓', '🏖️', '🏄‍♂️', '🌴', '🍹', '🥤', '🧃', '🎥', '📷',
  '🎤', '🎺', '🥁', '🎹', '🌅', '🌇', '🕊️', '🧡', '💚', '🩵',
  '🖤', '🥀', '🕸️', '🕷️', '🎃', '🦇', '❄️', '⛄', '☃️',
  '🧣', '🎿', '⛷️', '🌠', '🌌', '🚀', '🛸', '🔋', '💻',
  '🤖', '💾', '🎮', '🖥️', '📱', '🏜️', '🐂', '🐴', '👢',
  '🦌', '🌲', '🍂', '🌾', '🍀', '🦋', '🐿️', '🍄', '🥳',
  '🎁', '🎊', '🦄', '🫧', '🍬', '🔮', '💿', '✧', '◆',
  '⏺', '🌈', '⭐', '💫', '✨', '🌟', '💖', '💕', '💗', '💓',
  '💞', '💝', '💘', '💌', '❤️', '🧡', '💛', '💚', '💙', '💜',
];
