import { useEffect, useState } from 'react'
import { getProjects, Project } from '../services/ProjectService'

export function useProjects() {
  const [proyectos, setProyectos] = useState<Project[]>([])
  const [cargando, setCargando] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProyectos = async () => {
      setCargando(true)
      setError(null)
      try {
        const data = await getProjects()
        setProyectos(data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Error al cargar los proyectos')
        }
      } finally {
        setCargando(false)
      }
    }

    fetchProyectos()
  }, [])

  return { proyectos, cargando, error }
}
