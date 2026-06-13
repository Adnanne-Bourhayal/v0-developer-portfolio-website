"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { LanguagesIcon } from "lucide-react"
import { motion } from "framer-motion"

const languages = [
  {
    name: "English",
    level: "C1 - Advanced / Full Professional Proficiency",
    note: "Computer Science degree fully taught and completed in English. Professional command for technical documentation, system design, and international teamwork.",
  },
  {
    name: "Spanish",
    level: "Native / Bilingual Proficiency",
    note: "Native speaker. Fully proficient for corporate environments and engineering communication.",
  },
  {
    name: "Dutch (Nederlands)",
    level: "A1-A2 - Elementary / Intensive Training In Progress",
    note: "Currently undergoing an intensive language program for professional integration in European tech hubs.",
  },
]

export function Languages() {
  return (
    <section id="languages" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
            Languages
          </h2>

          <div className="space-y-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
                      <LanguagesIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                        <h3 className="text-lg font-semibold">{language.name}</h3>
                        <Badge variant="secondary" className="whitespace-normal text-left">
                          {language.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{language.note}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
