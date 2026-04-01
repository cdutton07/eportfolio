import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'

import { SiteLayout } from '@/components/layout/site-layout'
import { AboutPage } from '@/pages/about-page'
import { ExperiencePage } from '@/pages/experience-page'
import { HomePage } from '@/pages/home-page'
import { ProjectsPage } from '@/pages/projects-page'
import { ResumePage } from '@/pages/resume-page'

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SiteLayout />}>
          <Route
            index
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="about"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />
          <Route
            path="experience"
            element={
              <PageTransition>
                <ExperiencePage />
              </PageTransition>
            }
          />
          <Route
            path="projects"
            element={
              <PageTransition>
                <ProjectsPage />
              </PageTransition>
            }
          />
          <Route
            path="resume"
            element={
              <PageTransition>
                <ResumePage />
              </PageTransition>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return <AnimatedRoutes />
}
