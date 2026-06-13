"use client"

import { Card } from "@/components/ui/card"
import { Code, Database, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const capabilities = [
  {
    icon: Code,
    title: "Systems & Integration",
    description:
      "Building resilient web solutions and business-oriented platforms focused on scalability and integration.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Designing reliable APIs, database schemas, and robust backend logic using Java and software architecture principles.",
  },
  {
    icon: Sparkles,
    title: "Automation",
    description:
      "Automating workflows and resource management tools to reduce manual work and optimize system performance.",
  },
]

export function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
                    <capability.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
