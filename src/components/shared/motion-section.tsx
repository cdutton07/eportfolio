import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export function MotionSection({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  )
}
