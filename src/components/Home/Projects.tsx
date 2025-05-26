import ProjectCards from "./ProjectCards"
import { useProjects } from "../../hooks/useProjects"
import { Link } from "react-router-dom"

const Projects = () => {

  const { proyectos: projects, cargando, error } = useProjects()
  return (
    <div className="mx-auto w-2/3 h-[calc(100vh-80px)] px-10 flex flex-col justify-center items-center gap-4">
      <h1 className="text-5xl font-bold">Projects</h1>
      <h4 className="text-xs">some of the notable projects i have worked on.</h4>
      <hr className="w-42" />
      {/* Project cards */}
      {cargando && (
        <div className="text-center text-gray-500">Fetching projects...</div>
      )}
      {error && (
        <div className="text-center text-red-500">Error: {error}</div>
      )}
      {!cargando && !error && (
        <ProjectCards projects={projects} />
      )}
      <Link to="/projects" className="border-2 rounded-md px-4 py-2 leading-8 bg-orange-400 text-white hover:scale-110 transition-transform text-center">See other projects</Link>
    </div>
  )
}

export default Projects
