
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-display font-semibold tracking-tight hover:opacity-80 transition-opacity">
          Minimal<span className="text-primary/80">.</span>
        </Link>
        
        <nav className="flex items-center space-x-8">
          <NavLink to="/" current={location.pathname === "/"}>
            Home
          </NavLink>
          <NavLink to="/about" current={location.pathname === "/about"}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

interface NavLinkProps {
  to: string
  current: boolean
  children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ to, current, children }) => {
  return (
    <Link 
      to={to} 
      className={`relative font-medium transition-colors duration-300 ${
        current 
          ? 'text-primary after:scale-x-100' 
          : 'text-foreground/80 hover:text-foreground'
      } link-item`}
    >
      {children}
    </Link>
  )
}
