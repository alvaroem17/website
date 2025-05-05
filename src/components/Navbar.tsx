import { Link } from 'react-router-dom'
import { ThemeToggle } from '../components/themeToggle'

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/about" className="hover:underline">Acerca de</Link>
      </div>
      <ThemeToggle />
    </nav>
  )
}

export default Navbar