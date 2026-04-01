import { useState } from 'react'
import { ExternalLink } from 'lucide-react'

import { MotionSection } from '@/components/shared/motion-section'
import { PageHeader } from '@/components/shared/page-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '@/data/portfolio-data'

export function ProjectsPage() {
  if (projects.length === 0) {
    return null
  }

  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id)
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? projects[0]

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Projects"
        title="Projects"
        description="Current project work and technical highlights."
      />

      <MotionSection className="space-y-5">
        <div className="flex flex-wrap gap-2">
          {projects.map((project) => {
            const isActive = project.id === selectedProjectId
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedProjectId(project.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-black/15 bg-white/85 text-foreground/80 hover:bg-white'
                }`}
              >
                {project.title}
              </button>
            )
          })}
        </div>

        <Card key={selectedProject.id} className="overflow-hidden border-black/10 bg-white/85">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className={`h-96 w-full object-cover ${
              selectedProject.id === 'journey-to-arduous-star' ? 'object-[center_90%]' : 'object-[center_0%]'
            }`}
            loading="lazy"
          />
          <CardHeader>
            <CardTitle className="text-2xl">{selectedProject.title}</CardTitle>
            <p className="text-sm text-foreground/70">{selectedProject.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent className="space-y-5 text-base leading-7 text-foreground/85">
            {selectedProject.overview.map((paragraph, index) => (
              <p key={`${selectedProject.id}-overview-${index}`}>{paragraph}</p>
            ))}

            <p className="text-sm text-foreground/80">
              Repository:{' '}
              <a href={selectedProject.repoUrl} target="_blank" rel="noreferrer" className="underline">
                {selectedProject.repoUrl}
              </a>{' '}
              <ExternalLink className="ml-1 inline h-3.5 w-3.5" />
            </p>
          </CardContent>
        </Card>
      </MotionSection>
    </div>
  )
}
