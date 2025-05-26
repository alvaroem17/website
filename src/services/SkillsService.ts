import api from './config'

export type Skill = {
  id: number
  name: string
  image: string
  level: string
}

// Get all skills
export async function getSkills(): Promise<Skill[]> {
  try {
    // const response = await api.get<Skill[]>('/skills')
    // TODO: return to my project API
    // Example skills for local testing
    const response = {
      data: [
        {
          id: 1,
          name: "JavaScript",
          image: "https://via.placeholder.com/400x300?text=JavaScript",
          level: "Advanced"
        },
        {
          id: 2,
          name: "React",
          image: "https://via.placeholder.com/400x300?text=React",
          level: "Advanced"
        },
        {
          id: 3,
          name: "TypeScript",
          image: "https://via.placeholder.com/400x300?text=TypeScript",
          level: "Intermediate"
        },
        {
          id: 4,
          name: "Node.js",
          image: "https://via.placeholder.com/400x300?text=Node.js",
          level: "Intermediate"
        },
        {
          id: 5,
          name: "CSS",
          image: "https://via.placeholder.com/400x300?text=CSS",
          level: "Advanced"
        },
        {
          id: 6,
          name: "Git",
          image: "https://via.placeholder.com/400x300?text=Git",
          level: "Advanced"
        }
      ]
    }
    return response.data
  } catch {
    throw new Error('Error getting skills')
  }
}

// Get a skill by name
export async function getSkillByName(name: string): Promise<Skill> {
  try {
    // const response = await api.get<Skill>(`/skills/${name}`)
    // Local simulation
    const skills = await getSkills()
    const skill = skills.find(s => s.name.toLowerCase() === name.toLowerCase())
    if (!skill) throw new Error('Skill not found')
    return skill
  } catch {
    throw new Error('Error getting the skill')
  }
}

// // Create a new skill
// export async function createSkill(skill: Skill): Promise<Skill> {
//   try {
//     const response = await api.post<Skill>('/skills', skill)
//     return response.data
//   } catch {
//     throw new Error('Error creating the skill')
//   }
// }

// // Update an existing skill
// export async function updateSkill(name: string, skill: Partial<Skill>): Promise<Skill> {
//   try {
//     const response = await api.put<Skill>(`/skills/${name}`, skill)
//     return response.data
//   } catch {
//     throw new Error('Error updating the skill')
//   }
// }

// // Delete a skill
// export async function deleteSkill(name: string): Promise<void> {
//   try {
//     await api.delete(`/skills/${name}`)
//   } catch {
//     throw new Error('Error deleting the skill')
//   }
// }
