"use client"

import { Card } from "@/components/ui/card"
import { Shield, Zap, Target } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  const highlights = [
    {
      icon: Shield,
      title: "Security Mindset",
      description: "Secure coding habits, careful input handling, and privacy-aware engineering.",
    },
    {
      icon: Zap,
      title: "Fast Learning",
      description: "Quick ramp-up, focused iteration, and continuous improvement through feedback.",
    },
    {
      icon: Target,
      title: "Business-Oriented Solutions",
      description: "Practical software that reduces friction and delivers measurable operational value.",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed text-pretty">
            Computer Science Graduate and Multiplatform App Developer (DAM) focused on Java backend systems and
            cloud solutions engineering. Experienced in designing robust resource management tools and building
            business-oriented web features. Passionate about software architecture, clean code, and automating
            workflows under strict security and privacy standards (GDPR).
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
                    <highlight.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
