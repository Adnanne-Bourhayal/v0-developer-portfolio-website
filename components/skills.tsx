"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
            {t.skills.title}
          </h2>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">{t.skills.strong}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.strongSkills.map((skill: string) => (
                  <Badge key={skill} variant="default" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">{t.skills.familiar}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.familiarSkills.map((skill: string) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-emerald-600 dark:text-emerald-400">{t.skills.learning}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.learningSkills.map((skill: string) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-orange-600 dark:text-orange-400">{t.skills.aiTools}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.aiToolsList.map((tool: string) => (
                  <Badge key={tool} variant="outline" className="text-sm border-orange-200 dark:border-orange-800">
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 italic">{t.skills.note}</p>
        </motion.div>
      </div>
    </section>
  )
}
