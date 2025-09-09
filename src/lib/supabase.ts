import { createClient } from '@supabase/supabase-js'

// Konfigurasi Supabase - Menggunakan environment variables dari Vite
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || ''
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Create Supabase client only if credentials are available
export const supabase = SUPABASE_URL && SUPABASE_ANON_KEY 
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null

// Test koneksi Supabase
export const testSupabaseConnection = async () => {
  // Check if environment variables are configured
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Supabase credentials not found. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file')
    return false
  }

  // Check if supabase client was created successfully
  if (!supabase) {
    console.error('Supabase client could not be initialized')
    return false
  }

  try {
    const { data, error } = await supabase.from('voters').select('count').limit(1)
    if (error) {
      console.error('Supabase connection test failed:', error)
      return false
    }
    console.log('Supabase connection successful')
    return true
  } catch (error) {
    console.error('Supabase connection test error:', error)
    return false
  }
}

export type Voter = {
  id: string
  name: string
  address: string
  voted_for: string | null
  created_at: string
}

export type Vote = {
  id: string
  candidate_name: string
  user_id: string
  created_at: string
}