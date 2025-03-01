
import React from 'react'

interface TeamMemberProps {
  name: string
  role: string
  imageSrc: string
  delay: string
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc, delay }) => {
  return (
    <div className="premium-card flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: delay }}>
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-border">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="font-medium text-lg mb-1">{name}</h3>
      <p className="text-muted-foreground text-sm">{role}</p>
    </div>
  )
}

export const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Alex Morgan",
      role: "Design Lead",
      imageSrc: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      delay: "0.2s"
    },
    {
      name: "Sam Chen",
      role: "Developer",
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      delay: "0.4s"
    },
    {
      name: "Jamie Wilson",
      role: "Product Manager",
      imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      delay: "0.6s"
    },
    {
      name: "Taylor Reed",
      role: "UX Researcher",
      imageSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      delay: "0.8s"
    }
  ]
  
  return (
    <section className="py-24 page-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="pill mb-4 mx-auto">Our People</div>
        <h2 className="section-title">Meet The Team</h2>
        <p className="text-muted-foreground">
          The talented individuals who bring our design philosophy to life.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <TeamMember 
            key={index}
            name={member.name}
            role={member.role}
            imageSrc={member.imageSrc}
            delay={member.delay}
          />
        ))}
      </div>
    </section>
  )
}
