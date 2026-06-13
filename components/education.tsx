"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Cloud, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

const educationItems = [
  {
    title: "Grado en Ciencias de la Computación",
    institution: "UCAM + IBES",
    period: "2022 - 2026",
    details: [
      "Focus: Computer science fundamentals, data structures, and algorithms.",
      'Final Degree Project: "Design and development of web management solutions for business consulting".',
    ],
  },
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    institution: "Multiplatform Application Development",
    period: "2020 - 2022",
    details: ["Focus: Practical backend development with Java and deployment of desktop and mobile applications."],
  },
]

const certifications = [
  {
    provider: "AWS",
    title: "AWS Certified Solutions Architect - Associate",
    status: "In Preparation",
    meta: "Estimated date: September 2026",
    focus: "Current focus: Scalable infrastructure design and cloud networking.",
    accentClassName: "border-orange-500/30 bg-orange-500/5",
    iconClassName: "text-orange-600 dark:text-orange-400",
  },
  {
    provider: "Azure",
    title: "Microsoft Azure Administrator Associate - AZ-104",
    status: "In Progress",
    meta: "Certification preparation underway",
    focus: "Current focus: Azure administration, cloud infrastructure, identity, governance, networking, and resource management.",
    accentClassName: "border-blue-500/30 bg-blue-500/5",
    iconClassName: "text-blue-600 dark:text-blue-400",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
            Education & Certifications
          </h2>

          <div className="space-y-6 mb-12">
            {educationItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{item.institution}</p>
                      <ul className="space-y-2">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((certification, index) => (
              <motion.div
                key={certification.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className={`p-6 h-full border-dashed ${certification.accentClassName}`}>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    {/* TODO: Replace this provider placeholder with the official certification artwork. */}
                    <div className="h-14 min-w-20 px-3 rounded-lg border bg-background/70 flex items-center justify-center gap-2 font-semibold">
                      <Cloud className={`h-5 w-5 ${certification.iconClassName}`} />
                      {certification.provider}
                    </div>
                    <Badge variant="outline">{certification.status}</Badge>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{certification.title}</h4>
                  <p className="text-sm font-medium mb-3">{certification.meta}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{certification.focus}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
