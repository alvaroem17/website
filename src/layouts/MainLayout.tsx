import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors">
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}
