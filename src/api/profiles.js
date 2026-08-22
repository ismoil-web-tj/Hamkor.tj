import { supabase } from '../config/Supabase'

// Функция для сохранения резюме
export const saveResumeApi = async (resumeData) => {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) throw new Error('Пользователь не авторизован')

  const { data, error } = await supabase
    .from('resumes') // имя вашей таблицы в Supabase
    .insert([
      {
        user_id: user.id,
        ...resumeData
      }
    ])
    .select()

  if (error) throw error
  return data
}