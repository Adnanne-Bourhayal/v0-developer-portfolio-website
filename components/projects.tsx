"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import Image from "next/image"

type Project = {
  id: string
  name: string
  tagline: string
  status: string
  description: string
  problem: string
  solution: string
  outcome: string
  highlights: string[]
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  image: string
}

export function Projects() {
  const { t } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: "altaira",
      name: t.projects.project1.name,
      tagline: t.projects.project1.tagline,
      status: t.projects.project1.status,
      description: t.projects.project1.description,
      problem: t.projects.project1.problem,
      solution: t.projects.project1.solution,
      outcome: t.projects.project1.outcome,
      highlights: t.projects.project1.highlights,
      tech: t.projects.project1.tech,
      liveUrl: t.projects.project1.liveUrl,
      githubUrl: t.projects.project1.githubUrl,
      image: "/projects/altaira.jpg",
    },
    {
      id: "nova",
      name: t.projects.project2.name,
      tagline: t.projects.project2.tagline,
      status: t.projects.project2.status,
      description: t.projects.project2.description,
      problem: t.projects.project2.problem,
      solution: t.projects.project2.solution,
      outcome: t.projects.project2.outcome,
      highlights: t.projects.project2.highlights,
      tech: t.projects.project2.tech,
      liveUrl: t.projects.project2.liveUrl,
      githubUrl: t.projects.project2.githubUrl,
      image: "/projects/nova.jpg",
    },
    {
      id: "import",
      name: t.projects.project3.name,
      tagline: t.projects.project3.tagline,
      status: t.projects.project3.status,
      description: t.projects.project3.description,
      problem: t.projects.project3.problem,
      solution: t.projects.project3.solution,
      outcome: t.projects.project3.outcome,
      highlights: t.projects.project3.highlights,
      tech: t.projects.project3.tech,
      liveUrl: t.projects.project3.liveUrl,
      githubUrl: t.projects.project3.githubUrl,
      image: "/projects/import.jpg",
    },
  ]

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
            {t.projects.title}
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
                <Card className="p-6 h-full flex flex-col hover:shadow-xl transition-all hover:-translate-y-2 group">
                  <div className="mb-4">
                    <Badge
                      variant={project.status === t.projects.inProgress ? "secondary" : "default"}
                      className="mb-3"
                    >
                      {project.status}
                    </Badge>
                    <div className="aspect-video rounded-lg mb-4 overflow-hidden relative">
                      <Image src={project.image} alt={project.name} fill className="object-cover" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.tagline}</p>
                  <p className="text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>

                  <div className="mb-2">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                      {t.projects.keyFeatures}
                    </h4>
                    <ul className="space-y-1 mb-4">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button variant="default" size="sm" className="flex-1 gap-2" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            {t.projects.liveDemo}
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            {t.projects.github}
                          </a>
                        </Button>
                      )}
                      {!project.liveUrl && !project.githubUrl && (
                        <Button variant="secondary" size="sm" className="flex-1" disabled>
                          Coming Soon
                        </Button>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full gap-2 group/btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      {t.projects.viewCase}
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <DialogTitle className="text-2xl">{selectedProject.name}</DialogTitle>
                  <Badge variant={selectedProject.status === t.projects.inProgress ? "secondary" : "default"}>
                    {selectedProject.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{selectedProject.tagline}</p>
              </DialogHeader>

              <div className="space-y-6 py-4">
                <div className="aspect-video rounded-lg relative overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-2">{t.projects.problem}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">{t.projects.solution}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">{t.projects.outcome}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedProject.outcome}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">{t.projects.keyFeatures}</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">{t.projects.techStack}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  {selectedProject.liveUrl && (
                    <Button className="flex-1 gap-2" asChild>
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t.projects.liveDemo}
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button variant="outline" className="flex-1 gap-2 bg-transparent" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        {t.projects.github}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
