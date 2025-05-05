import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // usa layout base
    children: [
      { index: true, element: <Home /> },      // "/"
      { path: 'about', element: <About /> },   // "/about"
      { path: 'projects', element: <Projects /> }, // "projects"
      { path: 'contact', element: <Contact /> }, // "/contact"
    ],
  },
])
