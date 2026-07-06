import { supabase } from '../config/supabase'

// Получить все вакансии (с фильтрами)
export const getJobs = async ({ category, level, city } = {}) => {
  let query = supabase
    .from('jobs')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (category) query = query.eq('category', category)
  if (level)    query = query.eq('level', level)
  if (city)     query = query.ilike('city', `%${city}%`)

  const { data, error } = await query
  if (error) throw error
  return data
}

// Создать вакансию
export const createJob = async (jobData) => {
  const { data: { user } } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from('jobs')
    .insert({ ...jobData, user_id: user.id })
    .select()
    .single()

  if (error) throw error
  return data
}

// Получить вакансию по ID
export const getJobById = async (id) => {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

// Деактивировать вакансию
export const deactivateJob = async (id) => {
  const { error } = await supabase
    .from('jobs')
    .update({ is_active: false })
    .eq('id', id)

  if (error) throw error
}