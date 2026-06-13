"use client"

import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"

const highlights = [
  "Automated and optimized internal workflows by designing and developing a new web-based resource management platform from scratch.",
  "Designed scalable database schemas (SQL) and implemented robust backend logic using Java, ensuring high data integrity and efficient resource allocation.",
  "Built secure REST APIs to streamline data flow between application modules, reducing manual registration times for the department.",
  "Applied clean code principles and maintained strict version control (Git/GitHub) throughout the entire development lifecycle.",
]

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
            Experience
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
                  <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold">Junior IT Developer (Internship)</h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">09/2025 - 02/2026</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">University IT Department</p>
                  <ul className="space-y-2">
                    {highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
