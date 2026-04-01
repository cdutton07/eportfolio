import { Download } from 'lucide-react'

import { MotionSection } from '@/components/shared/motion-section'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { goals, profile } from '@/data/portfolio-data'
import { cn } from '@/lib/utils'

const resumeHref = `${import.meta.env.BASE_URL}resume/ChristianDutton_Resume.pdf`

export function HomePage() {
  return (
    <div className="space-y-10">
      <MotionSection className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
        <Card className="overflow-hidden border-black/10 bg-white/85 shadow-xl shadow-black/5 backdrop-blur">
          <CardContent className="space-y-6 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.26em] text-foreground/70">Welcome</p>
            <h1 className="font-heading text-4xl leading-tight font-bold tracking-tight text-[#1e1e1e] md:text-6xl">
              Building practical engineering systems with software, hardware, and clear communication.
            </h1>
          </CardContent>
        </Card>

        <div className="grid h-full grid-rows-[auto_1fr] gap-4">
          <Card className="h-fit self-start border-black/10 bg-[#111111] text-white shadow-xl shadow-black/20">
            <CardContent className="space-y-4 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">Objective</p>
              <p className="text-sm leading-6 text-white/90">{profile.objective}</p>
            </CardContent>
          </Card>

          <Card className="h-full border-black/10 bg-[#f6f9ff]">
            <CardContent className="flex h-full flex-col gap-4 p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-foreground/60">Who I Am</p>
              <p className="text-base leading-7 text-foreground/90">
                I am {profile.name}, a Computer Engineering student at Georgia Tech focused on controls,
                embedded systems, and scalable software. This portfolio highlights my current technical work,
                internship experience, and career roadmap as I prepare for Summer 2026 opportunities.
              </p>
              <a
                href={resumeHref}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: 'outline' }), 'w-fit rounded-full px-6')}
              >
                View Resume <Download className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </MotionSection>

      <MotionSection>
        <Card className="border-black/10 bg-white/85 shadow-xl shadow-black/5 backdrop-blur">
          <CardContent className="space-y-4 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-foreground/60">Career Roadmap</p>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#1e1e1e] md:text-3xl">
              Long-Term Career Goal
            </h2>
            <p className="text-base leading-7 text-foreground/90">{goals.longTerm}</p>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.22em] text-foreground/60">Steps To Get There</p>
              <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-foreground/85 md:text-base">
                {goals.actionSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </MotionSection>
    </div>
  )
}
