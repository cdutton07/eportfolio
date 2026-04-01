import { MotionSection } from '@/components/shared/motion-section'
import { PageHeader } from '@/components/shared/page-header'
import { Card, CardContent } from '@/components/ui/card'
import { aboutNarrative } from '@/data/portfolio-data'

export function AboutPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="About"
        title="About"
        description="Background, engineering interests, and personal direction."
      />

      <MotionSection>
        <Card className="border-black/10 bg-white/85">
          <CardContent className="space-y-5 p-6 leading-7 text-foreground/90 md:p-8">
            {aboutNarrative.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
      </MotionSection>
    </div>
  )
}
