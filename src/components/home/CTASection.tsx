
import React from 'react'
import { Button } from '@/components/ui/button'

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="glass-panel p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Begin your journey with our premium template that blends form and function in perfect harmony.
          </p>
          <Button className="glass-button">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
