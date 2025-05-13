import { Link } from 'react-router-dom'
import { ThemeToggle } from '../components/themeToggle'

const Navbar = () => {
  return (
    <header className="relative z-10 h-20">
      <div className="h-[120%] w-[90%] m-auto absolute inset-0 z-[-1] rounded-full bg-gradient-to-r from-orange-400 via-15% to-pink-400 blur-2xl"></div>
      <nav className="h-[120%] flex items-center justify-between max-w-6xl mx-auto">
        <div className="space-x-4">
          <Link to="/projects" className="hover:underline">Proyectos</Link>
          <Link to="/about" className="hover:underline">Sobre mi</Link>
        </div>
        <Link to="/" className='h-20'><img src="./logo-elegido-2-final.png" alt="logo" className='h-20'/></Link>
        <div className="space-x-4">
          <Link to="/contact" className="hover:underline">Contacto</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Navbar