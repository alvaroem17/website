import { useEffect, useState } from 'react'
import { getSkills, Skill } from '../services/SkillsService'

export function useSkills() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await getSkills()
        setSkills(data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Error loading skills')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  return { skills, loading, error }
}
