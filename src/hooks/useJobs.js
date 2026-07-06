import { useState, useEffect } from 'react'
import { getJobs, createJob } from '../api/jobs'

export const useJobs = (filters = {}) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchJobs()
  }, [filters.category, filters.level])

  const fetchJobs = async () => {
    try {
      setLoading(true)
      const data = await getJobs(filters)
      setJobs(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const publishJob = async (jobData) => {
    try {
      const newJob = await createJob(jobData)
      setJobs(prev => [newJob, ...prev])
      return { success: true, job: newJob }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  return { jobs, loading, error, publishJob, refetch: fetchJobs }
}