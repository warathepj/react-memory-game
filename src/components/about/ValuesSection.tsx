
import React from 'react'

interface ValueProps {
  number: string
  title: string
  description: string
  delay: string
}

const Value: React.FC<ValueProps> = ({ number, title, description, delay }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 animate-fade-in" style={{ animationDelay: delay }}>
      <div className="flex-none">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-display font-bold text-xl">
          {number}
        </div>
      </div>
      <div>
        <h3 className="subsection-title">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export const ValuesSection: React.FC = () => {
  const values = [
    {
      number: "01",
      title: "Simplicity",
      description: "We believe that good design is as little design as possible. Simplicity is not the absence of complexity, but clarity in the midst of complexity.",
      delay: "0.2s"
    },
    {
      number: "02",
      title: "Functionality",
      description: "Form follows function. Every element serves a purpose, and every interaction is intuitive and effortless.",
      delay: "0.4s"
    },
    {
      number: "03",
      title: "Attention to Detail",
      description: "The details are not the details; they make the design. We obsess over spacing, typography, and transitions.",
      delay: "0.6s"
    },
    {
      number: "04",
      title: "Innovation",
      description: "We constantly push boundaries to create experiences that are not just beautiful, but meaningful and forward-thinking.",
      delay: "0.8s"
    }
  ]
  
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="pill mb-4">Our Principles</div>
          <h2 className="section-title">Core Values</h2>
          <p className="text-muted-foreground">
            The foundational principles that guide our design decisions and shape our creative process.
          </p>
        </div>
        
        <div className="grid gap-12">
          {values.map((value, index) => (
            <Value 
              key={index}
              number={value.number}
              title={value.title}
              description={value.description}
              delay={value.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
