"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CloudCog, Database, ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

type Project = {
  id: string
  internalLabel: string
  name: string
  subtitle: string
  description: string
  highlights: string[]
  tech: string[]
  status?: string
  githubUrl?: string
  demoUrl?: string
  demoPlaceholder?: string
  image?: string
  icon?: typeof Database
}

const projects: Project[] = [
  {
    id: "finflow",
    internalLabel: "The Heavy Lifter",
    name: "FinFlow: High-Performance Enterprise Backend",
    subtitle: "Mass Data Management & Performance System",
    description:
      "Core backend system designed to handle massive data transactional flows, focusing on scalable database architectures, query optimization, and API communication efficiency.",
    highlights: [
      "Optimized SQL query performance and data processing for large-scale financial records.",
      "Asynchronous event-driven logic and robust backend architecture principles.",
      "Secure and resilient endpoints designed for high-concurrency environments.",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "REST APIs"],
    githubUrl: "https://github.com/Adnanne-Bourhayal/finflow-frontend",
    demoUrl: "https://finflowbeta.vercel.app/",
    image: "/images/projects/finflow.png",
  },
  {
    id: "corpwallet",
    internalLabel: "The Connector",
    name: "CorpWallet: Multiplatform Integration Hub",
    subtitle: "Secure Multi-Client & API Integration System",
    description:
      "Centralized architecture connecting mobile, desktop, and web environments with a secure backend server, ensuring seamless real-time data synchronization.",
    highlights: [
      "Robust RESTful API design to bridge multiple cross-platform clients.",
      "Secure authentication protocols implementing JWT (JSON Web Tokens) for data privacy.",
      "Structured relational database schemas tailored for corporate security environments.",
    ],
    tech: ["Kotlin / Android", "Java", "Hibernate", "MySQL", "JWT", "REST APIs"],
    githubUrl: "https://github.com/Adnanne-Bourhayal/corpwallet-mobile-poc",
    // TODO: Replace this placeholder when a public CorpWallet demo is available.
    demoPlaceholder: "Demo TODO",
    image: "/images/projects/corpwallet.png",
  },
  {
    id: "cloud-pipeline",
    internalLabel: "The Modern Hub",
    name: "Cloud Infrastructure & Automation Pipeline",
    subtitle: "DevOps-focused Automation & Cloud Deployment System",
    description:
      "Infrastructure as Code (IaC) and automation project designed to build hands-free deployment pipelines, ensuring fast, secure, and zero-downtime application releases.",
    highlights: [
      "Automated CI/CD pipelines for code compilation, testing, and security auditing.",
      "Containerized application deployment using standardized configurations.",
      "Cloud resource management and provisioning defined entirely through code.",
    ],
    tech: ["Terraform", "GitHub Actions", "Docker", "AWS / Azure (Basics)", "Linux"],
    status: "In Progress",
    demoPlaceholder: "Architecture Blueprint Coming Soon",
    icon: CloudCog,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
            Projects
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 h-full flex flex-col hover:shadow-xl transition-all hover:-translate-y-1 group border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <Badge variant="outline">{project.internalLabel}</Badge>
                    {project.status && <Badge variant="secondary">{project.status}</Badge>}
                  </div>

                  <div className="aspect-video rounded-lg mb-5 overflow-hidden relative bg-gradient-to-br from-blue-500/10 via-background to-purple-500/10 border flex items-center justify-center">
                    {project.image ? (
                      <Image src={project.image} alt={project.name} fill className="object-cover object-top" />
                    ) : project.icon ? (
                      <project.icon className="h-14 w-14 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110" />
                    ) : null}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    {project.demoUrl && (
                      <Button size="sm" className="flex-1 gap-2" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.demoPlaceholder && (
                      <Button variant="secondary" size="sm" className="flex-1 whitespace-normal h-auto min-h-8" disabled>
                        {project.demoPlaceholder}
                      </Button>
                    )}
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
