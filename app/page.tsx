"use client"

import { useState, useCallback } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { HeroBanner } from "@/components/hero-banner"
import { ProjectRow } from "@/components/project-row"
import { ProjectDetail } from "@/components/project-detail"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { projects, type Project } from "@/lib/data"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { ContactCTA } from "@/components/contact-cta"

import { FilterBar } from "@/components/filter-bar"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleLoadComplete = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section)
    setSelectedProject(null)
  }, [])

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project)
  }, [])

  const handleBack = useCallback(() => {
    setSelectedProject(null)
  }, [])

  const categories = ["All", "Robotics", "AI", "Ideas", "Hackathons"]

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "All") return true
    if (activeCategory === "Ideas") return p.category === "ideas"
    if (activeCategory === "Hackathons") return p.category === "hackathons"
    if (activeCategory === "Robotics") return p.tags.includes("Robotics")
    if (activeCategory === "AI") return p.tags.includes("AI") || p.tags.includes("ML") || p.tags.includes("CV") || p.tags.includes("NLP")
    return true
  })

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
            projects={projects.slice(0, 3)}
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
            title="Hackathon Builds"
            projects={projects.filter(p => p.category === "hackathons")}
            onProjectClick={handleProjectClick}
            bgImage="/images/abstract-tech.avif"
          />
          <ContactCTA />
          <Footer />
        </div>
      )}

      {/* Projects Section (KISSKH Gallery containing everything) */}
      {activeSection === "projects" && (
        <div className="mx-4 lg:mx-auto max-w-7xl animate-in fade-in duration-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-4 bg-primary dark:bg-[#C8B6FF]" style={{ boxShadow: "0 0 10px rgba(200,182,255,0.8)" }} />
            <h2 className="font-mono text-xs tracking-[0.2em] text-foreground dark:text-[#BDE0FE] uppercase">
              Project Gallery
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <FilterBar
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <ProjectRow
            title={activeCategory === "All" ? "All Works" : activeCategory}
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
            bgImage="/images/glowing-squares.avif"
          />
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
        <Navbar activeSection={selectedProject ? "projects" : activeSection} onNavigate={handleNavigate} />

        <div className="flex-1">
          {content}
        </div>
      </div>
    </>
  )
}
