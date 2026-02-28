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

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState("projects")
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

  const projectItems = projects.filter((p) => p.category === "projects")
  const ideaItems = projects.filter((p) => p.category === "ideas")
  const hackathonItems = projects.filter((p) => p.category === "hackathons")
  const allProjects = projects

  // If a project is selected, show detail view
  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={handleBack} />
  }

  return (
    <>
      {/* Loading screen */}
      {!isLoaded && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Main content */}
      <div
        className={`min-h-screen transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
      >
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

        <main className="pt-6">
          {/* Projects section */}
          {(activeSection === "projects" ||
            activeSection === "ideas" ||
            activeSection === "hackathons") && (
              <div>
                {activeSection === "projects" && (
                  <>
                    <div className="mx-4 lg:mx-auto max-w-7xl">
                      {/* Hero banner carousel */}
                      <HeroBanner
                        projects={allProjects.slice(0, 4)}
                        onProjectClick={handleProjectClick}
                      />

                      <ProjectRow
                        title="Featured Projects"
                        projects={projectItems}
                        onProjectClick={handleProjectClick}
                        priorityFirst
                        bgImage="/images/glowing-squares.avif"
                      />
                    </div>
                    <ProjectRow
                      title="Research Ideas"
                      projects={ideaItems}
                      onProjectClick={handleProjectClick}
                      bgImage="/images/hand-interface.jpg"
                    />
                    <ProjectRow
                      title="Hackathon Builds"
                      projects={hackathonItems}
                      onProjectClick={handleProjectClick}
                      bgImage="/images/abstract-tech.avif"
                    />
                  </>
                )}

                {activeSection === "ideas" && (
                  <ProjectRow
                    title="Research Ideas"
                    projects={ideaItems}
                    onProjectClick={handleProjectClick}
                    bgImage="/images/hand-interface.jpg"
                  />
                )}

                {activeSection === "hackathons" && (
                  <ProjectRow
                    title="Hackathon Projects"
                    projects={hackathonItems}
                    onProjectClick={handleProjectClick}
                    bgImage="/images/abstract-tech.avif"
                  />
                )}
              </div>
            )}

          {activeSection === "certifications" && <CertificationsSection />}
          {activeSection === "skills" && <SkillsSection />}
          {activeSection === "about" && <AboutSection />}
        </main>



      </div>
    </>
  )
}
