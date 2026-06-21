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
  // STRIP BIASA (MEMANJANG) – 10 TEMPLATE
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
            backgroundImage: 'radial-gradient(#FFD700 3px, transparent 3px)',
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
          backgroundImage: 'radial-gradient(#FFD700 2.5px, transparent 2.5px)',
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
        {Array.from({ length: 22 }).map((_, i) => (
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
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm" />
          ))}
        </div>
        <div className="absolute bottom-0 w-full h-8 bg-black/80 flex justify-around items-center">
          {Array.from({ length: 8 }).map((_, i) => (
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

  // ============================================================
  // STRIP INSTAGRAM (KOTAK) – 1-2 FRAMES
  // ============================================================
  {
    id: 'cherry-gingham',
    name: 'Cherry Gingham',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'rect',
    defaultBg: '#FF1493',
    renderBackground: () => (
      <div
        className="absolute inset-0 border-[10px] border-white/80"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 14px, rgba(255, 255, 255, 0.3) 14px, rgba(255, 255, 255, 0.3) 28px), repeating-linear-gradient(90deg, transparent, transparent 14px, rgba(255, 255, 255, 0.3) 14px, rgba(255, 255, 255, 0.3) 28px)',
        }}
      />
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between border-4 border-dashed border-white/60 m-1.5 rounded-xl bg-white/10 backdrop-blur-sm">
        <div className="bg-white/90 border-2 border-red-400 rounded-full py-1.5 px-5 w-fit mx-auto font-cherry text-red-500 text-sm shadow-lg rotate-[-1deg] mt-1 flex items-center gap-2">
          🍒 Picnic Day 🍓
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-bounce">🧺</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-bounce">🍓</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-pulse">🌷</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-pulse">🥪</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">🌸</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">🍒</div>
        <div className="flex justify-between items-center px-4 mb-1">
          <Cherry className="text-red-500" size={24} fill="currentColor" />
          <div className="text-sm text-white font-bold font-mono bg-red-500/80 px-3 py-1 rounded-full border-2 border-white shadow-lg">
            @LensaLoka.Studio
          </div>
          <Cherry className="text-red-500" size={24} fill="currentColor" />
        </div>
      </div>
    ),
  },
  {
    id: 'cafe-aesthetic',
    name: 'Aesthetic Cafe',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'arch',
    defaultBg: '#D2691E',
    renderBackground: () => (
      <div
        className="absolute inset-0 border-[12px] border-amber-600/40"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 215, 0, 0.4) 2.5px, transparent 2.5px)',
          backgroundSize: '18px 18px',
        }}
      />
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between m-1 border-2 border-white/60 rounded-xl bg-white/10 backdrop-blur-sm">
        <div className="bg-amber-700 text-white font-mono font-bold text-sm px-4 py-1.5 rounded-full border-2 border-amber-300 shadow-lg mx-auto flex items-center gap-2 mt-1">
          🏠☕ LENSA LOKA COFFEE HOUSE 📋
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-pulse">🏠</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-pulse">☕</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-bounce">🥐</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-bounce">🥞</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">📖</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">🍰</div>
        <div className="flex justify-between items-center px-2 mb-1 text-white bg-amber-700/80 backdrop-blur-sm py-1.5 rounded-lg border-2 border-amber-300">
          <Croissant size={20} className="rotate-[-10deg]" />
          <span className="font-pacifico text-lg tracking-wide text-white">
            Warm Coffee, Sweet Memories
          </span>
          <Coffee size={20} className="rotate-[10deg]" />
        </div>
      </div>
    ),
  },
  {
    id: 'bakery-cake',
    name: 'Sweet Bakery',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'oval',
    defaultBg: '#FF1493',
    renderBackground: () => (
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,215,0,0.5) 0px, rgba(255,215,0,0.5) 15px, transparent 15px, transparent 30px)',
        }}
      />
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between border-4 border-white m-1.5 rounded-[2rem] shadow-inner bg-white/10 backdrop-blur-sm">
        <div className="bg-white border-2 border-pink-400 font-cherry text-pink-500 text-sm px-5 py-1.5 rounded-full shadow-lg w-fit mx-auto rotate-[1deg] mt-1 flex items-center gap-2">
          🍰 LensaLoka Patisserie 🍩
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-bounce">🧁</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-bounce">🎂</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-pulse">🍪</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-pulse">💕</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">🍩</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">🧈</div>
        <div className="flex justify-between text-white bg-gradient-to-r from-pink-500 to-purple-500 backdrop-blur-sm px-4 py-1.5 rounded-full border-2 border-white mb-1 shadow-lg">
          <Cake size={20} fill="currentColor" />
          <span className="font-sans font-bold text-sm tracking-wider pt-0.5">
            SWEET TREATS
          </span>
          <Cookie size={20} fill="currentColor" />
        </div>
      </div>
    ),
  },
  {
    id: 'junkfood-party',
    name: 'Junkfood Party',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'cloud',
    defaultBg: '#FF8C00',
    renderBackground: () => (
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 215, 0, 0.5) 4px, transparent 4px)',
          backgroundSize: '20px 20px',
        }}
      />
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between border-2 border-yellow-300/70 m-1.5 rounded-xl bg-gradient-to-b from-transparent via-transparent to-yellow-400/30">
        <div className="bg-red-600 text-white font-mono text-center font-bold text-sm px-4 py-1.5 rounded-full border-2 border-yellow-300 shadow-lg rotate-[-1deg] mt-1 flex items-center gap-2">
          🍔 LENSALOKA FOOD TRUCK 🍟
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-pulse">🍕</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-pulse">🍟</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-bounce">🌭</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-bounce">🍿</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">🌮</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">🍔</div>
        <div className="flex justify-between items-center text-2xl px-4 bg-white border-2 border-yellow-400 rounded-full py-1.5 shadow-lg max-w-[85%] mx-auto mb-1">
          <span>🌮</span>
          <Utensils className="text-red-600 animate-pulse" size={18} />
          <span>🍿</span>
        </div>
      </div>
    ),
  },
  {
    id: 'y2k-cyber-pop',
    name: 'Cyber Pop',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'rect',
    defaultBg: '#00BFFF',
    renderBackground: () => (
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(45deg, rgba(255, 215, 0, 0.3) 25%, transparent 25%), linear-gradient(-45deg, rgba(255, 215, 0, 0.3) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255, 215, 0, 0.3) 75%), linear-gradient(-45deg, transparent 75%, rgba(255, 215, 0, 0.3) 75%)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 0 12px, 12px -12px, -12px 0px',
        }}
      />
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 border-[6px] border-white m-1.5 rounded-xl shadow-lg bg-white/10 backdrop-blur-sm">
        <div className="bg-white/90 backdrop-blur-sm text-cyan-700 font-mono px-4 py-1.5 font-bold rounded-md border-2 border-cyan-300 shadow-lg text-sm tracking-wider w-fit mx-auto mt-1 flex items-center gap-2">
          <Gamepad2 size={14} /> lensaloka.sys 💾
        </div>
        <div className="absolute top-[5%] left-2 text-5xl text-cyan-300 animate-pulse">💾</div>
        <div className="absolute top-[5%] right-2 text-5xl text-cyan-300 animate-pulse">🕹️</div>
        <div className="absolute bottom-[10%] left-2 text-3xl text-cyan-300 animate-bounce">⚡</div>
        <div className="absolute bottom-[10%] right-2 text-3xl text-cyan-300 animate-bounce">👾</div>
        <div className="absolute top-[30%] left-3 text-2xl text-cyan-300 animate-float">🎮</div>
        <div className="absolute top-[30%] right-3 text-2xl text-cyan-300 animate-float">💿</div>
        <div className="flex justify-between items-center text-cyan-700 px-2 mb-1 bg-white/90 py-1.5 rounded-md border-2 border-cyan-300">
          <span className="font-mono text-sm uppercase tracking-widest font-black">
            SYSTEM OK v1.0
          </span>
          <Heart size={14} fill="currentColor" className="text-pink-500 animate-pulse" />
        </div>
      </div>
    ),
  },
  {
    id: 'disco-fever',
    name: 'Disco Pixels',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'circle',
    defaultBg: '#9370DB',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 opacity-30">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #FFD700 15%, transparent 16%)',
            backgroundSize: '16px 16px',
          }}
        />
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between border-2 border-white/40 m-2 rounded-xl bg-white/10 backdrop-blur-sm">
        <div className="flex justify-center text-white mt-1 gap-2 bg-gradient-to-r from-purple-500 to-pink-500 py-1.5 px-4 rounded-full w-fit mx-auto border-2 border-white shadow-lg">
          <Moon size={14} fill="currentColor" className="text-yellow-300" />
          <span className="font-sans font-black text-sm tracking-widest text-white">
            RETRO FEVER
          </span>
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-pulse">🔮</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-pulse">💿</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-bounce">🎵</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-bounce">🎧</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">✨</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">🌟</div>
        <div className="text-center font-mono font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 backdrop-blur-sm text-sm px-4 py-1.5 tracking-widest uppercase border-2 border-white rounded-full shadow-lg mx-2 mb-1 flex items-center justify-center gap-2">
          ♫ LensaLoka Club ♫
        </div>
      </div>
    ),
  },
  {
    id: 'sunset-mood',
    name: 'Sunset Vibe',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'oval',
    defaultBg: '#FF6B35',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500 via-pink-500 to-purple-500 opacity-40">
        <div className="absolute top-12 left-4 text-white/40 animate-float">
          <Cloud size={28} fill="currentColor" />
        </div>
        <div className="absolute top-20 right-4 text-white/40 animate-pulse">
          <Star size={14} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
        <div className="text-white flex justify-between items-center px-2 mt-2 bg-white/30 backdrop-blur-sm py-1.5 rounded-full border-2 border-white/60">
          <Sun size={20} fill="currentColor" className="text-yellow-300" />
          <span className="font-sans font-bold text-sm tracking-wider text-white">
            GOLDEN HOUR
          </span>
          <Sparkle size={14} fill="currentColor" className="text-yellow-300" />
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-bounce">🌅</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-bounce">☁️</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-pulse">⭐</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-pulse">🕊️</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">🌇</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">🧡</div>
        <div className="font-pacifico text-orange-700 text-center text-xs bg-white/90 backdrop-blur-md py-1.5 px-4 rounded-full border-2 border-orange-100 mx-2 mb-1 shadow-lg">
          with @LensaLoka.Studio
        </div>
      </div>
    ),
  },
  {
    id: 'acid-smiley',
    name: 'Retro Grid',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'rect',
    defaultBg: '#F8FAFC',
    renderBackground: () => (
      <div
        className="absolute inset-0 border-[6px] border-slate-200/50"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148, 163, 184, 0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.18) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between m-1">
        <div className="flex justify-between items-center px-2 mt-1 text-slate-500 bg-white/80 py-1 rounded-md border-2 border-slate-100 shadow-lg">
          <Smile size={16} className="text-amber-500" />
          <span className="font-mono text-xs tracking-widest font-black text-slate-500">
            MEMORIES // 2026
          </span>
          <Camera size={14} />
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-bounce">✌️</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-bounce">📸</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-pulse">🌟</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-pulse">🎈</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">😎</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">🎉</div>
        <div className="font-mono text-slate-700 bg-white text-center font-bold py-1.5 px-3 text-xs tracking-widest border-2 border-slate-200 rounded-md shadow-lg mx-2 mb-1">
          ✦ LENSALOKA.NET ✦
        </div>
      </div>
    ),
  },
  {
    id: 'retro-digicam',
    name: 'Retro Digicam',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'rect',
    defaultBg: '#2D2D2D',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 4px)'
        }} />
        <div className="absolute top-4 left-4 text-amber-400/40 animate-pulse">
          <Camera size={48} />
        </div>
        <div className="absolute bottom-4 right-4 text-amber-400/30 animate-pulse">
          <Camera size={32} />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 border-[3px] border-amber-500/40 m-1.5 rounded-lg">
        <div className="flex justify-between items-center px-2 mt-1 text-amber-400/80">
          <span className="font-mono text-xs tracking-widest font-bold">DSC-W130</span>
          <span className="font-mono text-xs animate-pulse">● REC</span>
          <span className="font-mono text-xs">ISO 400</span>
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-bounce">📸</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-bounce">🎞️</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-pulse">💾</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-pulse">📀</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">📷</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">🎥</div>
        <div className="font-mono text-center text-amber-400/90 text-xs tracking-[0.3em] bg-black/60 backdrop-blur-sm py-1.5 px-3 rounded border-2 border-amber-500/30 mx-2 mb-1">
          LENSALOKA · 2006
        </div>
      </div>
    ),
  },
  {
    id: 'kawaii-ramai',
    name: 'Kawaii Explosion',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'scallop',
    defaultBg: '#FFF5F9',
    renderBackground: () => (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 via-purple-200/30 to-blue-200/30" />
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 16 + 6}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          >
            {['✦', '♥', '☆', '✿', '✧'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-3 border-[8px] border-white/70 m-1 rounded-2xl shadow-inner bg-white/10 backdrop-blur-sm">
        <div className="text-center text-2xl mt-1 flex justify-center gap-2 animate-pulse">
          <span>🐱</span>
          <span>🐶</span>
          <span>🐰</span>
          <span>🦊</span>
        </div>
        <div className="absolute top-[3%] left-2 text-5xl animate-bounce">🌸</div>
        <div className="absolute top-[3%] right-2 text-5xl animate-bounce">🌷</div>
        <div className="absolute bottom-[8%] left-2 text-3xl animate-pulse">🍭</div>
        <div className="absolute bottom-[8%] right-2 text-3xl animate-pulse">🧁</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">💖</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">🎀</div>
        <div className="font-cherry text-center text-pink-500 text-lg bg-white/80 backdrop-blur-sm py-1.5 px-4 rounded-full border-2 border-pink-200 shadow-md mx-4 mb-1">
          ฅ^•ﻌ•^ฅ LensaLoka
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-pink-400/50 font-mono tracking-[0.3em] animate-pulse">
          ✧ KAWAII FOREVER ✧
        </div>
      </div>
    ),
  },
  {
    id: 'midnight-glow',
    name: 'Midnight Glow',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'oval',
    defaultBg: '#0B0E1A',
    renderBackground: () => (
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-black">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animation: `twinkle ${Math.random() * 4 + 2}s infinite alternate`,
            }}
          />
        ))}
        <div className="absolute top-8 right-8 text-amber-200/20 text-8xl animate-pulse">🌙</div>
        <div className="absolute bottom-8 left-8 text-amber-200/10 text-6xl animate-pulse">🌙</div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-5 border-[2px] border-white/5 m-2 rounded-[3rem] bg-black/20 backdrop-blur-[2px]">
        <div className="flex justify-between items-center px-3 mt-2">
          <Moon size={28} className="text-amber-300/80" fill="currentColor" />
          <span className="font-mono text-amber-200/60 text-xs tracking-[0.4em] font-bold animate-pulse">✦ NIGHT ✦</span>
          <Star size={24} className="text-amber-300/80" fill="currentColor" />
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-bounce">🌠</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-bounce">🌌</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-pulse">🪐</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-pulse">✨</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">💫</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">⭐</div>
        <div className="font-pacifico text-center text-amber-200/80 text-lg bg-black/40 backdrop-blur-md py-1.5 px-6 rounded-full border-2 border-white/10 shadow-lg mx-4 mb-2">
          ✦ LensaLoka ✦
        </div>
        <div className="text-center text-xs text-amber-200/30 font-mono tracking-[0.3em] animate-pulse">
          dream under the stars
        </div>
      </div>
    ),
  },
  {
    id: 'duo-split',
    name: 'Split Duo',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'rect',
    defaultBg: '#F1F5F9',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, #CBD5E1 1px, transparent 1px), linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-300/50" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-slate-300/50" />
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-5 border-2 border-slate-200/80 m-2 rounded-xl">
        <div className="flex justify-between items-center mt-1">
          <span className="font-mono text-sm text-slate-400 tracking-widest animate-pulse">✦ DUO ✦</span>
          <span className="text-slate-300 text-xs animate-pulse">⏺</span>
        </div>
        <div className="absolute top-[5%] left-3 text-5xl text-slate-300/40 rotate-[-8deg] animate-spin-slow">◈</div>
        <div className="absolute top-[5%] right-3 text-5xl text-slate-300/40 rotate-[8deg] animate-spin-slow">◈</div>
        <div className="absolute bottom-[10%] left-3 text-3xl text-slate-400 animate-bounce">✦</div>
        <div className="absolute bottom-[10%] right-3 text-3xl text-slate-400 animate-bounce">✦</div>
        <div className="absolute top-[30%] left-3 text-2xl text-slate-400 animate-float">◆</div>
        <div className="absolute top-[30%] right-3 text-2xl text-slate-400 animate-float">◆</div>
        <div className="font-mono text-center text-slate-500 text-xs tracking-[0.3em] bg-white/90 backdrop-blur-sm py-1.5 px-3 rounded-full border-2 border-slate-200 shadow-lg mx-auto mb-2">
          LENSALOKA · split
        </div>
      </div>
    ),
  },
  {
    id: 'single-hero',
    name: 'Hero Shot',
    section: 'instagram',
    frameCount: 1,
    frameShape: 'oval',
    defaultBg: '#0F172A',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 30% 40%, #38BDF8 0%, transparent 50%), radial-gradient(circle at 70% 60%, #A78BFA 0%, transparent 50%)'
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/10 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 border-[3px] border-white/10 m-3 rounded-[3rem]">
        <div className="flex justify-end mt-2">
          <span className="text-white/20 text-xs font-mono tracking-widest animate-pulse">● HERO</span>
        </div>
        <div className="absolute top-[5%] left-4 text-7xl text-white/10 rotate-[-12deg] animate-spin-slow">✦</div>
        <div className="absolute top-[5%] right-4 text-6xl text-white/10 rotate-[12deg] animate-spin-slow">✦</div>
        <div className="absolute bottom-[10%] left-4 text-4xl text-white/20 animate-bounce">◈</div>
        <div className="absolute bottom-[10%] right-4 text-4xl text-white/20 animate-bounce">◈</div>
        <div className="absolute top-[30%] left-3 text-3xl text-white/20 animate-float">◆</div>
        <div className="absolute top-[30%] right-3 text-3xl text-white/20 animate-float">◆</div>
        <div className="font-mono text-center text-white/60 text-xs tracking-[0.4em] bg-white/5 backdrop-blur-sm py-2 px-4 rounded-full border border-white/10 mx-auto mb-3">
          LENSALOKA · one
        </div>
      </div>
    ),
  },
  {
    id: 'neon-cyber',
    name: 'Neon Cyber',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'star',
    defaultBg: '#000000',
    renderBackground: () => (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(to right, #39FF14 1px, transparent 1px), linear-gradient(to bottom, #39FF14 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)]" />
        <div className="absolute top-4 right-4 text-[#39FF14]/20 text-6xl animate-pulse">⚡</div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 border-2 border-[#39FF14] m-2 rounded-xl shadow-[0_0_30px_#39FF14_inset]">
        <div className="font-mono text-[#39FF14] text-center font-bold tracking-[0.3em] bg-black/80 py-1.5 px-3 rounded border-2 border-[#39FF14] mx-auto mt-1 animate-pulse">
          CYBER_PUNK
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-bounce">👾</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-bounce">⚡</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-pulse">🔋</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-pulse">💻</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">🤖</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">💾</div>
        <div className="text-center text-[#39FF14] text-xs font-mono tracking-widest bg-black/60 py-1 px-3 rounded border border-[#39FF14]/30 mx-2 mb-1">
          ⚡ SYSTEM ONLINE ⚡
        </div>
      </div>
    ),
  },
  {
    id: 'bubblegum-pop',
    name: 'Bubblegum Pop',
    section: 'instagram',
    frameCount: 1,
    frameShape: 'circle',
    defaultBg: '#FF69B4',
    renderBackground: () => (
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-radial-gradient(circle, #fff 0, #fff 10px, transparent 10px, transparent 20px)',
        }}
      />
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 border-[6px] border-white/80 m-3 rounded-full shadow-lg bg-white/10 backdrop-blur-sm">
        <div className="bg-white text-pink-500 font-cherry text-xl text-center py-1.5 px-4 rounded-full border-2 border-pink-300 shadow-md mx-auto mt-2 rotate-[-5deg] animate-pulse">
          POP!
        </div>
        <div className="absolute top-[10%] left-4 text-5xl animate-bounce">🍬</div>
        <div className="absolute top-[10%] right-4 text-5xl animate-bounce">🎈</div>
        <div className="absolute bottom-[15%] left-4 text-4xl animate-pulse">💖</div>
        <div className="absolute bottom-[15%] right-4 text-4xl animate-pulse">🫧</div>
        <div className="absolute top-[35%] left-3 text-3xl animate-float">✨</div>
        <div className="absolute top-[35%] right-3 text-3xl animate-float">🌈</div>
        <div className="text-center text-pink-500 font-pacifico text-sm bg-white/80 py-1 px-3 rounded-full border-2 border-pink-300 mx-4 mb-1">
          ✿ LensaLoka ✿
        </div>
      </div>
    ),
  },
  {
    id: 'mint-choco',
    name: 'Mint Choco',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'scallop',
    defaultBg: '#99F6E4',
    renderBackground: () => (
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #451A03 3px, transparent 3px)',
          backgroundSize: '24px 24px',
        }}
      />
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 border-4 border-[#451A03]/20 m-2 rounded-2xl bg-white/10 backdrop-blur-sm">
        <div className="bg-[#451A03] text-[#99F6E4] font-mono text-xs font-bold text-center py-1.5 px-3 rounded-full mx-auto mt-1 flex items-center gap-2 border-2 border-[#99F6E4]/30">
          🍫 SWEET TOOTH 🍃
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-bounce">🍦</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-bounce">🍪</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-pulse">🤎</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-pulse">🌿</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">🧁</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">🍃</div>
        <div className="text-center text-[#451A03] font-mono text-xs font-bold bg-white/80 py-1 px-3 rounded-full border-2 border-[#451A03]/20 mx-4 mb-1">
          ✦ LensaLoka ✦
        </div>
      </div>
    ),
  },
  {
    id: 'sunflower-field',
    name: 'Sunflower Field',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'arch',
    defaultBg: '#FEF08A',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-t from-[#854D0E]/20 to-transparent">
        <div className="absolute top-4 right-4 text-[#854D0E]/30 animate-pulse">
          <Sun size={40} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 border-2 border-[#854D0E]/30 m-2 rounded-[2rem] bg-white/10 backdrop-blur-sm">
        <div className="font-pacifico text-[#854D0E] text-xl text-center bg-white/60 backdrop-blur-sm py-1.5 rounded-full mx-4 mt-1 border-2 border-[#854D0E]/20">
          🌻 Sunny Days 🌻
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-bounce">🌻</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-bounce">🐝</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-pulse">🍯</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-pulse">✨</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">☀️</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">🌼</div>
        <div className="text-center text-[#854D0E] font-pacifico text-sm bg-white/80 py-1 px-3 rounded-full border-2 border-[#854D0E]/20 mx-4 mb-1">
          ✦ LensaLoka ✦
        </div>
      </div>
    ),
  },
  {
    id: 'ocean-wave',
    name: 'Ocean Wave',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'oval',
    defaultBg: '#67E8F9',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'repeating-radial-gradient(circle at 50% 120%, transparent 0, transparent 18px, #fff 18px, #fff 20px)',
          }}
        />
        <div className="absolute bottom-4 right-4 text-white/40 animate-float">
          <Waves size={40} />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 border-4 border-white/50 m-2 rounded-[2rem] bg-white/10 backdrop-blur-sm">
        <div className="bg-white/80 text-cyan-700 font-mono text-xs font-bold text-center py-1.5 px-3 rounded-full mx-auto mt-1 flex items-center gap-2 border-2 border-cyan-300">
          🌊 SEASIDE 🐠
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-bounce">🐳</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-bounce">🐚</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-pulse">⚓</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-pulse">🐙</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">🌊</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">🐬</div>
        <div className="text-center text-cyan-700 font-mono text-xs font-bold bg-white/80 py-1 px-3 rounded-full border-2 border-cyan-300 mx-4 mb-1">
          ✦ LensaLoka ✦
        </div>
      </div>
    ),
  },
  {
    id: 'cherry-soda',
    name: 'Cherry Soda',
    section: 'instagram',
    frameCount: 1,
    frameShape: 'circle',
    defaultBg: '#FB7185',
    renderBackground: () => (
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-radial-gradient(circle, #fff 0, #fff 8px, transparent 8px, transparent 18px)',
        }}
      />
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 border-[6px] border-white/80 m-3 rounded-full shadow-lg bg-white/10 backdrop-blur-sm">
        <div className="bg-white text-rose-500 font-cherry text-lg text-center py-1.5 px-4 rounded-full border-2 border-rose-300 shadow-md mx-auto mt-2 rotate-[-4deg] animate-pulse">
          FIZZ!
        </div>
        <div className="absolute top-[10%] left-4 text-5xl animate-bounce">🍒</div>
        <div className="absolute top-[10%] right-4 text-5xl animate-bounce">🥤</div>
        <div className="absolute bottom-[15%] left-4 text-4xl animate-pulse">🫧</div>
        <div className="absolute bottom-[15%] right-4 text-4xl animate-pulse">❤️</div>
        <div className="absolute top-[35%] left-3 text-3xl animate-float">✨</div>
        <div className="absolute top-[35%] right-3 text-3xl animate-float">💕</div>
        <div className="text-center text-rose-500 font-pacifico text-sm bg-white/80 py-1 px-3 rounded-full border-2 border-rose-300 mx-4 mb-1">
          ✿ LensaLoka ✿
        </div>
      </div>
    ),
  },
  {
    id: 'pastel-goth',
    name: 'Pastel Goth',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'heart',
    defaultBg: '#C4B5FD',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent">
        <div className="absolute top-6 left-3 text-black/20 rotate-12 animate-pulse">
          <Moon size={36} fill="currentColor" />
        </div>
        <div className="absolute bottom-10 right-3 text-black/20 -rotate-12 animate-pulse">
          <Star size={28} fill="currentColor" />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 border-2 border-black/40 m-2 rounded-2xl bg-white/10 backdrop-blur-sm">
        <div className="bg-black/70 text-violet-200 font-mono text-xs font-bold tracking-widest text-center py-1.5 px-3 rounded-full mx-auto mt-1 border-2 border-violet-400/30">
          🖤 SPOOKY CUTE 🖤
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-bounce">🦇</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-bounce">💜</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-pulse">🕸️</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-pulse">🥀</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">🌙</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">✨</div>
        <div className="text-center text-violet-200 font-mono text-xs font-bold bg-black/50 py-1 px-3 rounded-full border-2 border-violet-400/30 mx-4 mb-1">
          ✦ LensaLoka ✦
        </div>
      </div>
    ),
  },
  {
    id: 'tropical-punch',
    name: 'Tropical Punch',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'scallop',
    defaultBg: '#FDBA74',
    renderBackground: () => (
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #F97316 0px, #F97316 10px, transparent 10px, transparent 22px)',
        }}
      >
        <div className="absolute top-4 right-3 text-white/70 animate-pulse">
          <Palmtree size={36} />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 border-4 border-white/60 m-2 rounded-2xl bg-white/10 backdrop-blur-sm">
        <div className="bg-white/90 text-orange-500 font-cherry text-xs text-center py-1.5 px-3 rounded-full mx-auto mt-1 rotate-[-2deg] border-2 border-orange-300 shadow-lg">
          🌴 ALOHA 🍍
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-bounce">🍍</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-bounce">🥥</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-pulse">🦩</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-pulse">🌺</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">🍹</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">🌴</div>
        <div className="text-center text-orange-500 font-pacifico text-sm bg-white/80 py-1 px-3 rounded-full border-2 border-orange-300 mx-4 mb-1">
          ✦ LensaLoka ✦
        </div>
      </div>
    ),
  },
  {
    id: 'frosty-winter',
    name: 'Frosty Winter',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'arch',
    defaultBg: '#BAE6FD',
    renderBackground: () => (
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 3px, transparent 4px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="absolute bottom-4 right-4 text-white/40 animate-float">
          <Snowflake size={32} />
        </div>
      </div>
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 border-2 border-white/70 m-2 rounded-[2rem] bg-white/10 backdrop-blur-sm">
        <div className="bg-white/90 text-sky-600 font-pacifico text-sm text-center py-1.5 px-3 rounded-full mx-auto mt-1 border-2 border-sky-200">
          ❄️ Winter Wonder ❄️
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-bounce">❄️</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-bounce">⛄</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-pulse">🧣</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-pulse">🩵</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">☃️</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">🎿</div>
        <div className="text-center text-sky-600 font-mono text-xs font-bold bg-white/80 py-1 px-3 rounded-full border-2 border-sky-200 mx-4 mb-1">
          ✦ LensaLoka ✦
        </div>
      </div>
    ),
  },
  {
    id: 'rainbow-pop',
    name: 'Rainbow Pop',
    section: 'instagram',
    frameCount: 2,
    frameShape: 'rect',
    defaultBg: '#FFFFFF',
    renderBackground: () => (
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #F87171 0 14px, #FBBF24 14px 28px, #34D399 28px 42px, #60A5FA 42px 56px, #A78BFA 56px 70px)',
        }}
      />
    ),
    renderForeground: () => (
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 border-4 border-white/80 m-1.5 rounded-xl shadow-lg bg-white/10 backdrop-blur-sm">
        <div className="bg-white text-gray-800 font-cherry text-sm text-center py-1.5 px-3 rounded-full border-2 border-gray-200 shadow-lg mx-auto mt-1">
          🌈 GOOD VIBES 🌈
        </div>
        <div className="absolute top-[5%] left-2 text-5xl animate-bounce">🌈</div>
        <div className="absolute top-[5%] right-2 text-5xl animate-bounce">⭐</div>
        <div className="absolute bottom-[10%] left-2 text-3xl animate-pulse">🎨</div>
        <div className="absolute bottom-[10%] right-2 text-3xl animate-pulse">✨</div>
        <div className="absolute top-[30%] left-3 text-2xl animate-float">🎈</div>
        <div className="absolute top-[30%] right-3 text-2xl animate-float">💫</div>
        <div className="text-center text-gray-800 font-mono text-xs font-bold bg-white/80 py-1 px-3 rounded-full border-2 border-gray-200 mx-4 mb-1">
          ✦ LensaLoka ✦
        </div>
      </div>
    ),
  },
];

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
