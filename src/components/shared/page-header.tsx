import { Badge } from '@/components/ui/badge'

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <header className="mb-8 space-y-3">
      <Badge className="rounded-full bg-[#1b3b36] px-3 py-1 text-xs tracking-wide text-white">
        {eyebrow}
      </Badge>
      <h1 className="font-heading text-4xl leading-tight font-bold tracking-tight text-[#1e1e1e] md:text-5xl">
        {title}
      </h1>
      <p className="max-w-3xl text-base leading-7 text-foreground/80 md:text-lg">{description}</p>
    </header>
  )
}
