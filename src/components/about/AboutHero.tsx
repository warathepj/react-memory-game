
import React from 'react'

export const AboutHero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-transparent -z-10"></div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="pill mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>About Us</div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Our Design Philosophy
          </h1>
          
          <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
            We believe in the beauty of simplicity and the power of thoughtful design. 
            Our approach combines minimalist aesthetics with intuitive functionality.
          </p>
        </div>
      </div>
    </section>
  )
}
