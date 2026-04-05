"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectCard } from "./project-card"
import type { Project, Hackathon } from "@/lib/data"

interface ProjectRowProps {
  title: string
  projects: (Project | Hackathon)[]
  onProjectClick: (item: Project | Hackathon) => void
  priorityFirst?: boolean
  bgImage?: string
}

export function ProjectRow({ title, projects, bgImage, onProjectClick, priorityFirst = false }: ProjectRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }, [])

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const scrollAmount = 300
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  if (projects.length === 0) return null

  return (
    <section className={`relative mb-16 ${bgImage ? "py-10 border-y border-border/40 overflow-hidden mx-4 lg:mx-auto max-w-7xl rounded-xl bg-card/10 backdrop-blur-[2px]" : ""}`}>
      {/* Aesthetic Faded Background Image (Optional) */}
      {bgImage && (
        <>
          <div
            className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.05] opacity-10 pointer-events-none bg-center bg-cover bg-no-repeat hidden dark:block"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          <div className="absolute inset-0 z-0 bg-background/50 dark:bg-gradient-to-b dark:from-background/80 dark:via-background/95 dark:to-background pointer-events-none" />
        </>
      )}

      {/* Section header */}
      <div className="relative z-10 flex items-center gap-3 mb-6 px-6">
        <div className="h-px w-4 bg-primary dark:bg-primary" style={{ boxShadow: "0 0 3px var(--glow-primary)" }} />
        <h2 className="font-mono text-sm tracking-[0.2em] text-foreground dark:text-foreground uppercase font-bold">
          {title}
        </h2>
        <span className="font-mono text-[10px] text-muted-foreground">
          [{String(projects.length).padStart(2, "0")}]
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Scroll container */}
      <div className="relative group">
        {/* Left fade + button */}
        {canScrollLeft && (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-card border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:border-primary/40"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
          </>
        )}

        {/* Right fade + button */}
        {canScrollRight && (
          <>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-card border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:border-primary/40"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </>
        )}

        <div
          ref={scrollRef}
          className="relative z-10 flex gap-4 overflow-x-auto px-6 pb-4 pt-2 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onProjectClick}
              priority={priorityFirst && index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
