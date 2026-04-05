"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "@/lib/data"

interface HeroBannerProps {
  projects: Project[]
  onProjectClick: (project: Project) => void
}

export function HeroBanner({ projects, onProjectClick }: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, projects.length - 1))
      setCurrentIndex(clamped)
      const el = scrollRef.current
      if (el) {
        const child = el.children[clamped] as HTMLElement | undefined
        if (child) {
          el.scrollTo({ left: child.offsetLeft, behavior: "smooth" })
        }
      }
    },
    [projects.length]
  )

  const next = useCallback(() => {
    goTo((currentIndex + 1) % projects.length)
  }, [currentIndex, projects.length, goTo])

  const prev = useCallback(() => {
    goTo((currentIndex - 1 + projects.length) % projects.length)
  }, [currentIndex, projects.length, goTo])

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(next, 5000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [next])


  if (projects.length === 0) return null

  return (
    <div className="relative w-full mb-16 group">
      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-card/80 border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:border-primary/40 backdrop-blur-sm"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-4 h-4 text-white" />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-card/80 border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:border-primary/40 backdrop-blur-sm"
        aria-label="Next project"
      >
        <ChevronRight className="w-4 h-4 text-white" />
      </button>

      {/* Scrollable slides */}
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="relative flex-none w-full snap-center"
          >
            <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
                quality={90}
                priority={i === 0}
              />
              {/* Dark gradient overlays to improve legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 max-w-xl">
                <div className="flex items-center gap-2 mb-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 font-mono text-[10px] tracking-wider rounded-sm border border-primary/30 text-primary bg-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-mono text-lg md:text-xl text-white tracking-tight mb-1.5">
                  {project.title}
                </h2>
                <p className="text-xs md:text-sm text-white leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>
                <button
                  onClick={() => onProjectClick(project)}
                  className="self-start font-mono text-xs tracking-wider text-primary border border-primary/30 px-4 py-2 rounded-sm hover:bg-primary/10 transition-all duration-200"
                >
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-2 mt-3">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex
              ? "w-6 bg-primary"
              : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
