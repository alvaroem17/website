import { Link } from "react-router-dom"

const Projects = () => {
  return (
    <div className="mx-auto w-2/3 h-[calc(100vh-80px)] px-10 flex flex-col justify-center items-center gap-4">
      <h1 className="text-5xl font-bold">Projects</h1>
      <h4 className="text-xs">some of the notable projects i have worked on.</h4>
      <hr className="w-42" />
      {/* Project cards */}
      <Link to="/projects" className="border-2 rounded-md px-4 py-2 leading-8 bg-orange-400 text-white hover:scale-110 transition-transform text-center">See other projects</Link>
    </div>
  )
}

export default Projects
