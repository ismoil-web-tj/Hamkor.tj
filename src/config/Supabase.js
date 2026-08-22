import { createClient } from '@supabase/supabase-js'

// Убедитесь, что переменные окружения VITE_SUPABASE_URL и VITE_SUPABASE_ANON_KEY 
// добавлены в ваш файл .env в корне проекта.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)