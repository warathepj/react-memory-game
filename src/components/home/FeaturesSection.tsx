
import React from 'react'

interface FeatureProps {
  title: string
  description: string
  delay: string
}

const Feature: React.FC<FeatureProps> = ({ title, description, delay }) => {
  return (
    <div className="premium-card animate-fade-in" style={{ animationDelay: delay }}>
      <div className="pill mb-4">Feature</div>
      <h3 className="subsection-title">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Elegant Design",
      description: "Clean, minimalist aesthetic with careful attention to typography, spacing, and visual hierarchy.",
      delay: "0.2s"
    },
    {
      title: "Responsive Layout",
      description: "Perfectly adapts to any screen size, maintaining visual harmony across devices.",
      delay: "0.4s"
    },
    {
      title: "Smooth Animations",
      description: "Subtle, purposeful animations that enhance the user experience without overwhelming.",
      delay: "0.6s"
    },
    {
      title: "Intuitive Navigation",
      description: "Simple, clear navigation that guides users effortlessly through the content.",
      delay: "0.8s"
    }
  ]
  
  return (
    <section className="py-24 page-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="pill mb-4 mx-auto">What We Offer</div>
        <h2 className="section-title">Key Features</h2>
        <p className="text-muted-foreground">
          Our template combines aesthetic beauty with functional design to create an exceptional user experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Feature 
            key={index}
            title={feature.title}
            description={feature.description}
            delay={feature.delay}
          />
        ))}
      </div>
    </section>
  )
}
