import { useState } from 'react'
import { saveResumeApi } from '../api/profiles'

export function useProfile() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const saveResume = async (resumeData) => {
    setLoading(true)
    setError(null)
    try {
      const data = await saveResumeApi(resumeData)
      return data
    } catch (err) {
      setError(err.message || 'Ошибка сохранения')
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { saveResume, loading, error }
}