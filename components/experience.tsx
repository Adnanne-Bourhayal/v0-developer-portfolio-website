"use client"

import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function Experience() {
  const { t } = useLanguage()

  const jobs = [
    {
      title: t.experience.job1.title,
      company: t.experience.job1.company,
      location: t.experience.job1.location,
      period: t.experience.job1.period,
      highlights: t.experience.job1.highlights,
    },
    {
      title: t.experience.job2.title,
      company: t.experience.job2.company,
      location: t.experience.job2.location,
      period: t.experience.job2.period,
      highlights: t.experience.job2.highlights,
    },
    {
      title: t.experience.job3.title,
      company: t.experience.job3.company,
      location: t.experience.job3.location,
      period: t.experience.job3.period,
      highlights: t.experience.job3.highlights,
    },
  ]

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
            {t.experience.title}
          </h2>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={`${job.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
                      <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <span className="text-sm text-muted-foreground">{job.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {job.company} • {job.location}
                      </p>
                      <ul className="space-y-2">
                        {job.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
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
