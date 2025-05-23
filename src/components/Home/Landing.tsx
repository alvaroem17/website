import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] px-10 flex flex-row justify-center">
      <div className="w-1/3 text-wrap flex flex-col p-10 gap-4 justify-center ">
        <h1 className="font-bold text-9xl my-4">Alvaro Estevez.</h1>
        <h3 className="font-bold text-xl">Developer</h3>
        <p className="w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link to="/about" className="border-2 rounded-md w-32 leading-8 bg-orange-400 text-white hover:scale-110 transition-transform text-center">Learn more</Link>
      </div>
      <div className="w-1/3 border-2 flex items-center justify-center">
        mamaguevo
      </div>
    </div>
  )
}

export default Landing