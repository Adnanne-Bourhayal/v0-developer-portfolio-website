"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Languages } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function Education() {
  const { t } = useLanguage()

  const degrees = [
    {
      title: t.education.degree1.title,
      institution: t.education.degree1.institution,
      location: t.education.degree1.location,
      period: t.education.degree1.period,
      description: t.education.degree1.description,
    },
    {
      title: t.education.degree2.title,
      institution: t.education.degree2.institution,
      location: t.education.degree2.location,
      period: t.education.degree2.period,
      description: t.education.degree2.description,
    },
    {
      title: t.education.degree3.title,
      institution: t.education.degree3.institution,
      location: t.education.degree3.location,
      period: t.education.degree3.period,
      description: t.education.degree3.description,
    },
  ]

  const languages = [
    { name: t.education.languages.spanish, level: t.education.languages.spLevel },
    { name: t.education.languages.english, level: t.education.languages.enLevel },
    { name: t.education.languages.french, level: t.education.languages.frLevel },
    { name: t.education.languages.dutch, level: t.education.languages.nlLevel },
  ]

  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
            {t.education.title}
          </h2>

          <div className="space-y-6 mb-12">
            {degrees.map((degree, index) => (
              <motion.div
                key={degree.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{degree.title}</h3>
                        <span className="text-sm text-muted-foreground">{degree.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {degree.institution} • {degree.location}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{degree.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
                  <Languages className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold">{t.education.languages.title}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <p className="font-medium text-sm">{lang.name}</p>
                    <Badge variant="secondary" className="text-xs">
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
