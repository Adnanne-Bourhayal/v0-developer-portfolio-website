"use client"

import { Card } from "@/components/ui/card"
import { Shield, Zap, Target, Code, Database, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function About() {
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Shield,
      title: t.about.highlight1Title,
      description: t.about.highlight1Desc,
    },
    {
      icon: Zap,
      title: t.about.highlight2Title,
      description: t.about.highlight2Desc,
    },
    {
      icon: Target,
      title: t.about.highlight3Title,
      description: t.about.highlight3Desc,
    },
  ]

  const whatIDoIcons = [Code, Database, Sparkles]

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-balance">{t.about.title}</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed text-pretty">
            {t.about.description}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">{t.about.whatIDoTitle}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {t.about.whatIDo.map((item: { title: string; items: string[] }, index: number) => {
                const Icon = whatIDoIcons[index]
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1">
                      <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                      <ul className="space-y-2">
                        {item.items.map((detail: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
