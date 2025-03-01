
import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main 
        key={location.pathname}
        className="flex-1 mt-24 animate-page-transition"
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
