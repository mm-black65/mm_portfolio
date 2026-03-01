"use client"

import { useState, useCallback } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { HeroBanner } from "@/components/hero-banner"
import { ProjectRow } from "@/components/project-row"
import { ProjectDetail } from "@/components/project-detail"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { projects, hackathons, type Project, type Hackathon } from "@/lib/data"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { ContactCTA } from "@/components/contact-cta"
import { HackathonsSection } from "@/components/hackathons-section"

import { FilterBar } from "@/components/filter-bar"
import { ProjectGallery } from "@/components/project-gallery"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [selectedProject, setSelectedProject] = useState<Project | Hackathon | null>(null)

  const handleLoadComplete = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section)
    setSelectedProject(null)
  }, [])

  const handleProjectClick = useCallback((item: Project | Hackathon) => {
    setSelectedProject(item)
  }, [])

  const handleBack = useCallback(() => {
    setSelectedProject(null)
  }, [])

  const categories = ["All", "Robotics", "AI", "Ideas", "Hackathons"]
  const sortedProjects = [...projects].sort((a, b) => b.year.localeCompare(a.year))
  const sortedHackathons = [...hackathons].sort((a, b) => b.year.localeCompare(a.year))

  // If a project is selected, show detail view
  const content = selectedProject ? (
    <ProjectDetail project={selectedProject} onBack={handleBack} />
  ) : (
    <main className="pt-6">
      {/* Home Section (Stacked as before but with specific order) */}
      {activeSection === "home" && (
        <div className="mx-4 lg:mx-auto max-w-7xl animate-in fade-in duration-700">
          <HeroBanner
            projects={projects.slice(0, 4)}
            onProjectClick={handleProjectClick}
          />
          <ProjectRow
            title="Recently Added"
            projects={sortedProjects.slice(0, 3)}
            onProjectClick={handleProjectClick}
            bgImage="/images/abstract-tech.avif"
          />
          <ProjectRow
            title="Featured Projects"
            projects={projects.filter(p => p.category === "projects")}
            onProjectClick={handleProjectClick}
            priorityFirst
            bgImage="/images/glowing-squares.avif"
          />
          <ProjectRow
            title="Hackathons"
            projects={sortedHackathons}
            onProjectClick={handleProjectClick}
            bgImage="/images/abstract-tech.avif"
          />
          <ContactCTA />
          <Footer />
        </div>
      )}

      {/* Projects Section (Unified Layout) */}
      {activeSection === "projects" && (
        <div className="animate-in fade-in duration-700">
          <ProjectGallery onProjectClick={handleProjectClick} />
        </div>
      )}

      {activeSection === "hackathons" && (
        <div className="animate-in fade-in duration-700">
          <HackathonsSection onSelectHackathon={handleProjectClick} />
        </div>
      )}

      <div key={activeSection} className="animate-in fade-in duration-700 slide-in-from-bottom-4">
        {activeSection === "certifications" && <CertificationsSection />}
        {activeSection === "skills" && <SkillsSection />}
        {activeSection === "about" && <AboutSection />}

        {/* Simple Footer for About page only */}
        {activeSection === "about" && (
          <div className="mt-20 w-full">
            <div className="h-px bg-border/40 w-full" />
            <div className="py-6 flex justify-center items-center bg-background/20">
              <p className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground/60 uppercase">
                © 2026 mahi ahalawat
              </p>
            </div>
            <div className="h-px bg-border/40 w-full" />
          </div>
        )}
      </div>
    </main>
  )

  return (
    <>
      {/* Loading screen */}
      {!isLoaded && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Main content */}
      <div
        className={`min-h-screen flex flex-col transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
      >
        <Navbar
          activeSection={selectedProject ? ("certificate" in selectedProject ? "hackathons" : "projects") : activeSection}
          onNavigate={handleNavigate}
        />

        <div className="flex-1">
          {content}
        </div>
      </div>
    </>
  )
}
