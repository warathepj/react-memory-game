
import React from 'react'
import { Layout } from '@/components/layout/Layout'
import { AboutHero } from '@/components/about/AboutHero'
import { ValuesSection } from '@/components/about/ValuesSection'
import { TeamSection } from '@/components/about/TeamSection'

const About: React.FC = () => {
  return (
    <Layout>
      <AboutHero />
      <ValuesSection />
      <TeamSection />
    </Layout>
  )
}

export default About
