import React from 'react'
import { Project } from '../../services/ProjectService'

type ProjectCardsProps = {
  projects: Project[]
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white dark:bg-gray-800">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-center">{project.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition-colors"
          >
            Ver proyecto
          </a>
        </div>
      ))}
    </div>
  )
}

export default ProjectCards
