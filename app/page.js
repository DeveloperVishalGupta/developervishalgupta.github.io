'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-dark-900 text-text-primary">
      <Navbar />
      <Hero />
      <Stats />
      <TechStack />
      <Experience />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
