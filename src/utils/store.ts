import { User, Strip } from '../types';

const USERS_KEY = 'lensaloka_users';
const SESSION_KEY = 'lensaloka_session';
const STRIPS_KEY = 'lensaloka_strips';

export const auth = {
  getUsers: () => {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    } catch {
      return [];
    }
  },
  register: (user: User & {password?: string;}) => {
    const users = auth.getUsers();
    if (users.some((u: User) => u.email === user.email)) {
      throw new Error('Email sudah terdaftar. Silakan login.');
    }
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },
  login: (email: string, password?: string) => {
    const users = auth.getUsers();
    const user = users.find((u: User) => u.email === email);
    if (!user) {
      throw new Error('Belum punya akun? Daftar dulu ya!');
    }
    // In a real app, verify password here. For this demo, we just check email existence if password isn't strictly enforced,
    // but let's assume basic check if provided.
    if (password && user.password && user.password !== password) {
      throw new Error('Password salah.');
    }
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ name: user.name, email: user.email })
    );
    return user;
  },
  logout: () => {
    localStorage.removeItem(SESSION_KEY);
  },
  getCurrentUser: (): User | null => {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    } catch {
      return null;
    }
  }
};

export const gallery = {
  getAllStrips: (): Strip[] => {
    try {
      return JSON.parse(localStorage.getItem(STRIPS_KEY) || '[]');
    } catch {
      return [];
    }
  },
  getUserStrips: (userId: string): Strip[] => {
    return gallery.
    getAllStrips().
    filter((s) => s.userId === userId).
    sort((a, b) => b.createdAt - a.createdAt);
  },
  saveStrip: (strip: Strip) => {
    const strips = gallery.getAllStrips();
    const existingIndex = strips.findIndex((s) => s.id === strip.id);
    if (existingIndex >= 0) {
      strips[existingIndex] = strip;
    } else {
      strips.push(strip);
    }
    localStorage.setItem(STRIPS_KEY, JSON.stringify(strips));
  },
  deleteStrip: (stripId: string) => {
    const strips = gallery.getAllStrips().filter((s) => s.id !== stripId);
    localStorage.setItem(STRIPS_KEY, JSON.stringify(strips));
  },
  getStrip: (stripId: string): Strip | undefined => {
    return gallery.getAllStrips().find((s) => s.id === stripId);
  }
};