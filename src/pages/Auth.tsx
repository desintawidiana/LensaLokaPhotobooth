import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, AlertCircle, CheckCircle2 } from 'lucide-react';
import { auth } from '../utils/store';
export function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      if (isLogin) {
        auth.login(email, password);
        navigate('/create');
      } else {
        if (!name.trim()) throw new Error('Nama tidak boleh kosong.');
        if (password.length < 4) throw new Error('Password minimal 4 karakter.');
        auth.register({
          name,
          email,
          password
        });
        setSuccess('Yeay! Berhasil daftar. Silakan login sekarang.');
        setIsLogin(true);
        setPassword('');
      }
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white rounded-3xl shadow-xl shadow-pink-100/50 overflow-hidden border border-pink-100">
        {/* Header */}
        <div className="bg-pink-600 p-8 text-center text-white relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              backgroundImage:
              'radial-gradient(circle, #fff 2px, transparent 2px)',
              backgroundSize: '20px 20px'
            }} />
          
          <Camera className="w-12 h-12 mx-auto mb-3 relative z-10" />
          <h1 className="text-3xl font-['Cherry_Bomb_One'] relative z-10">
            LensaLoka
          </h1>
          <p className="text-pink-100 mt-2 relative z-10 font-medium">
            Capture your cute moments!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          <button
            className={`flex-1 py-4 font-bold text-sm transition-colors ${!isLogin ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => {
              setIsLogin(false);
              setError('');
              setSuccess('');
            }}>
            
            DAFTAR BARU
          </button>
          <button
            className={`flex-1 py-4 font-bold text-sm transition-colors ${isLogin ? 'text-pink-600 border-b-2 border-pink-600' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => {
              setIsLogin(true);
              setError('');
              setSuccess('');
            }}>
            
            LOGIN
          </button>
        </div>

        {/* Form */}
        <div className="p-8">
          {error &&
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl flex items-start gap-3 text-sm font-medium">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          }

          {success &&
          <div className="mb-6 p-4 bg-green-50 text-green-600 rounded-xl flex items-start gap-3 text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <p>{success}</p>
            </div>
          }

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin &&
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Nama Panggilan
                </label>
                <input
                type="text"
                required={!isLogin}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="Misal: Caca" />
              
              </div>
            }

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="nama@email.com" />
              
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="Minimal 4 karakter" />
              
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-pink-600 text-white rounded-xl font-bold text-lg hover:bg-pink-700 active:scale-[0.98] transition-all mt-4 shadow-md shadow-pink-200">
              
              {isLogin ? 'Masuk' : 'Daftar Sekarang'}
            </button>
          </form>

          {isLogin &&
          <p className="text-center text-sm text-gray-500 mt-6">
              Belum punya akun?{' '}
              <button
              onClick={() => setIsLogin(false)}
              className="text-pink-600 font-bold hover:underline">
              
                Daftar dulu ya!
              </button>
            </p>
          }
        </div>
      </div>
    </div>);

}