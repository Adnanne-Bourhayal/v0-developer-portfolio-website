"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Backend & Core",
    titleClassName: "text-blue-600 dark:text-blue-400",
    badgeVariant: "default" as const,
    skills: ["Java", "C# / .NET", "Spring Boot", "ASP.NET Core", "Hibernate / JPA", "REST APIs", "SQL (PostgreSQL / MySQL)"],
  },
  {
    title: "Cloud & DevOps",
    titleClassName: "text-purple-600 dark:text-purple-400",
    badgeVariant: "secondary" as const,
    skills: ["Docker", "CI/CD (GitHub Actions)", "AWS (Basics)", "Azure (Basics)", "Linux", "Git / GitHub"],
  },
  {
    title: "Web & Frontend",
    titleClassName: "text-emerald-600 dark:text-emerald-400",
    badgeVariant: "outline" as const,
    skills: ["TypeScript", "JavaScript", "HTML / CSS", "React", "Node.js"],
  },
  {
    title: "AI & Testing Tools",
    titleClassName: "text-orange-600 dark:text-orange-400",
    badgeVariant: "outline" as const,
    skills: ["GitHub Copilot", "ChatGPT", "Gemini", "Cypress"],
  },
]

export function Skills() {
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
            Tech Stack & Skills
          </h2>

          <div className="space-y-6">
            {skillGroups.map((group) => (
              <Card key={group.title} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className={`text-lg font-semibold mb-4 ${group.titleClassName}`}>{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant={group.badgeVariant} className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
