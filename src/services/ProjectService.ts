import api from './config'

export type Project = {
  id: number
  name: string
  description: string
  image: string
  link: string
  // Add other relevant fields according to your API
}

// Get all projects
export async function getProjects(): Promise<Project[]> {
  try {
    // const response = await api.get<Project[]>('/projects')
    // TODO: volver a la API de mi proyecto
    // Ejemplo de proyectos para pruebas locales
    const response = {
      data: [
        {
          id: 1,
          name: "Portafolio Personal",
          description: "Sitio web personal para mostrar mis proyectos, habilidades y experiencia.",
          image: "https://via.placeholder.com/400x300?text=Portafolio",
          link: "https://miportafolio.com"
        },
        {
          id: 2,
          name: "Gestor de Tareas",
          description: "Aplicación web para gestionar tareas diarias con autenticación y notificaciones.",
          image: "https://via.placeholder.com/400x300?text=Gestor+de+Tareas",
          link: "https://github.com/usuario/gestor-tareas"
        },
        {
          id: 3,
          name: "E-commerce Demo",
          description: "Tienda en línea de ejemplo con carrito de compras y pasarela de pago.",
          image: "https://via.placeholder.com/400x300?text=E-commerce",
          link: "https://ecommerce-demo.com"
        },
        {
          id: 4,
          name: "Blog Técnico",
          description: "Plataforma de blog para compartir artículos técnicos sobre desarrollo web y programación.",
          image: "https://via.placeholder.com/400x300?text=Blog+T%C3%A9cnico",
          link: "https://blogtecnico.com"
        },
        {
          id: 5,
          name: "App de Clima",
          description: "Aplicación que muestra el clima actual y pronóstico usando una API pública.",
          image: "https://via.placeholder.com/400x300?text=App+de+Clima",
          link: "https://github.com/usuario/app-clima"
        },
        {
          id: 6,
          name: "Foro de Comunidad",
          description: "Foro en línea para que los usuarios puedan discutir temas y compartir recursos.",
          image: "https://via.placeholder.com/400x300?text=Foro+de+Comunidad",
          link: "https://forocomunidad.com"
        }
      ]
    }
    return response.data
  } catch {
    throw new Error('Error getting projects')
  }
}

// Get a project by ID
export async function getProjectById(id: number): Promise<Project> {
  try {
    const response = await api.get<Project>(`/projects/${id}`)
    return response.data
  } catch {
    throw new Error('Error getting the project')
  }
}

// // Create a new project
// export async function createProject(project: Omit<Project, 'id'>): Promise<Project> {
//   try {
//     const response = await api.post<Project>('/projects', project)
//     return response.data
//   } catch {
//     throw new Error('Error creating the project')
//   }
// }

// // Update an existing project
// export async function updateProject(id: number, project: Partial<Omit<Project, 'id'>>): Promise<Project> {
//   try {
//     const response = await api.put<Project>(`/projects/${id}`, project)
//     return response.data
//   } catch {
//     throw new Error('Error updating the project')
//   }
// }

// // Delete a project
// export async function deleteProject(id: number): Promise<void> {
//   try {
//     await api.delete(`/projects/${id}`)
//   } catch {
//     throw new Error('Error deleting the project')
//   }
// }

