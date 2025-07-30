import { createClient } from '@supabase/supabase-js'

// Configuration - Uses environment variables from Vite
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export type Voter = {
  id: string
  name: string
  address: string
  created_at: string
}

export type Vote = {
  id: string
  candidate_name: string
  voter_id: string
  created_at: string
}