
import React from 'react'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 border-t border-border mt-auto">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-display font-semibold tracking-tight hover:opacity-80 transition-opacity mb-4 inline-block">
              Minimal<span className="text-primary/80">.</span>
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              A beautifully crafted template with meticulous attention to detail.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-sm text-muted-foreground">
          <p>© {currentYear} Minimal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
