import { Download, Mail, Phone } from 'lucide-react'

import { MotionSection } from '@/components/shared/motion-section'
import { PageHeader } from '@/components/shared/page-header'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { education, profile } from '@/data/portfolio-data'
import { cn } from '@/lib/utils'

const resumeHref = `${import.meta.env.BASE_URL}resume/ChristianDutton_Resume.pdf`

export function ResumePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Resume"
        title="Resume"
        description="View and download my current resume."
      />

      <MotionSection className="grid gap-5 lg:grid-cols-[1fr_1.5fr]">
        <Card className="h-fit border-black/10 bg-white/85">
          <CardHeader>
            <CardTitle className="text-xl">Resume Highlights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-6 text-foreground/85">
            <p className="font-semibold">{profile.name}</p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> {profile.email}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> {profile.phone}
            </p>
            <p>{education.school}</p>
            <p>{education.degree}</p>
            <p>GPA: {education.gpa}</p>
            <p>Expected Graduation: {education.expectedGraduation}</p>
            <p>{profile.citizenship}</p>
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants(), 'mt-2 inline-flex w-full rounded-full')}
            >
              Download Resume <Download className="h-4 w-4" />
            </a>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-black/10 bg-white/90">
          <CardHeader>
            <CardTitle className="text-xl">Embedded Resume Preview</CardTitle>
          </CardHeader>
          <CardContent className="h-[70vh] p-0">
            <iframe
              src={resumeHref}
              title="Christian Dutton Resume"
              className="h-full w-full"
            />
          </CardContent>
        </Card>
      </MotionSection>
    </div>
  )
}
