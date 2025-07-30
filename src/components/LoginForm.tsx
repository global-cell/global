import React, { useState } from 'react'
import { User, MapPin, LogIn } from 'lucide-react'
import { supabase } from '../lib/supabase'

interface LoginFormProps {
  onLogin: (voter: { id: string; name: string; address: string }) => void
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !address.trim()) return

    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from('voters')
        .insert([{ name: name.trim(), address: address.trim() }])
        .select()
        .single()

      if (error) throw error

      onLogin({
        id: data.id,
        name: data.name,
        address: data.address
      })
    } catch (error) {
      console.error('Error creating voter:', error)
      alert('Terjadi kesalahan saat login. Silakan coba lagi.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogIn className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Pemilihan Ketua Paguyuban
          </h1>
          <p className="text-gray-600">
            Silakan isi data diri Anda untuk melanjutkan
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nama Lengkap
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Masukkan nama lengkap"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Alamat
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Masukkan alamat lengkap"
                rows={3}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || !name.trim() || !address.trim()}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02]"
          >
            {isLoading ? 'Memproses...' : 'Masuk ke Pemilihan'}
          </button>
        </form>
      </div>
    </div>
  )
}