
import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-secondary/20 -z-10"></div>
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 -top-64 -right-64 blur-3xl"></div>
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 -bottom-64 -left-64 blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="pill mb-6 mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Beautifully Crafted
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Minimal, Elegant <br/> Template Design
          </h1>
          
          <p className="text-muted-foreground mb-8 text-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
            A sophisticated design with meticulous attention to detail, 
            combining simplicity with elegant interactions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button className="glass-button flex items-center gap-2 w-full sm:w-auto">
              Explore <ArrowRight size={16} />
            </Button>
            <Link to="/about" className="text-sm font-medium px-6 py-3 transition-colors hover:text-primary w-full sm:w-auto">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
