import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhatIDo } from "@/components/what-i-do"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Languages } from "@/components/languages"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Languages />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
