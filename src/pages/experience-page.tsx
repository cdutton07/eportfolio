import { MotionSection } from '@/components/shared/motion-section'
import { PageHeader } from '@/components/shared/page-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { experiences, activities, coursework, skillGroups } from '@/data/portfolio-data'
import { cn } from '@/lib/utils'

function getRoleImageClass(useLogoLayout: boolean) {
  return cn(
    'h-52 w-full border-b border-black/10',
    useLogoLayout ? 'object-contain bg-white p-7 md:p-8' : 'object-cover',
  )
}

export function ExperiencePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Experience and Skills"
        title="Experience"
        description="Internship work, leadership roles, coursework, and technical skills."
      />

      <MotionSection className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {experiences.map((experience) => {
            const useLogoLayout = experience.company.includes('Siemens')

            return (
              <Card key={experience.role} className="border-black/10 bg-white/85">
                <img
                  src={experience.imageUrl}
                  alt={experience.imageAlt}
                  className={getRoleImageClass(useLogoLayout)}
                  loading="lazy"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{experience.role}</CardTitle>
                  <p className="text-sm text-foreground/70">
                    {experience.company} | {experience.location} | {experience.dateRange}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-6 text-sm leading-6 text-foreground/85">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}

          {activities.map((activity) => {
            const useLogoLayout = activity.org.includes('FIRST')
            const cropHigher = activity.org.includes('Journey to Arduous Star')

            return (
              <Card key={activity.org} className="border-black/10 bg-[#f4faf8]">
                <img
                  src={activity.imageUrl}
                  alt={activity.imageAlt}
                  className={cn(getRoleImageClass(useLogoLayout), cropHigher && 'object-[center_10%]')}
                  loading="lazy"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{activity.role}</CardTitle>
                  <p className="text-sm text-foreground/70">
                    {activity.org} | {activity.dateRange}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-6 text-sm leading-6 text-foreground/85">
                    {activity.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="space-y-5">
          <Card className="border-black/10 bg-white/85">
            <CardHeader>
              <CardTitle className="text-lg">Skill Stack</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.title} className="space-y-2">
                  <p className="text-sm font-semibold text-foreground/80">{group.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="secondary" className="rounded-full">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-black/10 bg-[#fff8e8]">
            <CardHeader>
              <CardTitle className="text-lg">Relevant Coursework</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-foreground/85">
              {coursework.map((course) => (
                <div key={course.area}>
                  <p className="font-semibold">{course.area}</p>
                  <p>{course.topics}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </MotionSection>
    </div>
  )
}
