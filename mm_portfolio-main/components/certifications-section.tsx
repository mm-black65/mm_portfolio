"use client"

import { useState, useMemo, useRef, useEffect, useCallback } from "react"
import { certifications } from "@/lib/data"
import { FilterBar } from "./filter-bar"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface YearRowProps {
  year: string
  certs: typeof certifications
}

function YearRow({ year, certs }: YearRowProps) {
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

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="h-px w-4 bg-primary/40" />
        <span className="font-mono text-[10px] text-primary dark:text-[#C8B6FF] tracking-[0.2em] uppercase font-bold">
          {year}
        </span>
        <div className="flex-1 h-px bg-border/40" />
      </div>

      <div className="relative group">
        {/* Scroll Buttons */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-background/80 border border-primary/20 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-background/80 border border-primary/20 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none" }}
        >
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start group/card relative p-6 border border-border/60 rounded-xl bg-card/40 backdrop-blur-sm transition-all duration-500 hover:border-[#2E8B57] dark:hover:border-[#2E8B57] hover:bg-card/60"
              style={{ transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s, background-color 0.5s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 16px rgba(46, 139, 87, 0.4), 0 0 32px rgba(46, 139, 87, 0.2)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <div className="absolute top-4 right-4">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-primary/20 dark:bg-[#C8B6FF]/20 group-hover/card:bg-primary dark:group-hover/card:bg-[#C8B6FF] transition-colors duration-300"
                  style={{ boxShadow: "0 0 10px var(--glow-primary)" }}
                />
              </div>

              {cert.image && (
                <div className="mb-6 overflow-hidden rounded-lg border border-border/40 bg-muted/10 aspect-[16/10] relative group-hover/card:border-primary/20 transition-colors duration-500">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="object-cover w-full h-full opacity-90 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700"
                  />
                </div>
              )}

              <h3 className="font-mono text-sm text-foreground dark:text-[#BDE0FE] mb-2 leading-snug group-hover/card:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground dark:text-[#BDE0FE]/60 leading-relaxed">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function CertificationsSection() {
  const [activeYear, setActiveYear] = useState("All")

  // Extract unique years for the filter bar
  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(certifications.map((cert) => cert.year)))
    // Sort years in descending order
    return ["All", ...uniqueYears.sort((a, b) => b.localeCompare(a))]
  }, [])

  // Filter certifications based on selected year
  const filteredCertifications = useMemo(() => {
    if (activeYear === "All") return certifications
    return certifications.filter((cert) => cert.year === activeYear)
  }, [activeYear])

  // Group filtered certifications by year for display
  const groupedCertifications = useMemo(() => {
    return filteredCertifications.reduce((acc, cert) => {
      const year = cert.year
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(cert)
      return acc
    }, {} as Record<string, typeof certifications>)
  }, [filteredCertifications])

  // Sort groups by year (descending)
  const sortedYears = useMemo(() => {
    return Object.keys(groupedCertifications).sort((a, b) => b.localeCompare(a))
  }, [groupedCertifications])

  return (
    <section className="relative px-6 py-12 max-w-7xl mx-auto overflow-hidden rounded-2xl border border-border/40 mt-8 mb-8">
      {/* Aesthetic Faded Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.05] opacity-10 pointer-events-none bg-center bg-cover bg-no-repeat hidden dark:block"
        style={{ backgroundImage: "url('/images/project-ai.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-background/50 dark:bg-gradient-to-b dark:from-background/80 dark:via-background/95 dark:to-background pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div
            className="h-px w-4 bg-primary dark:bg-[#C8B6FF]"
            style={{ boxShadow: "0 0 5px var(--glow-primary)" }}
          />
          <h2 className="font-mono text-xs tracking-[0.2em] text-foreground dark:text-[#BDE0FE] uppercase">
            Certifications
          </h2>
          <span className="font-mono text-[10px] text-muted-foreground dark:text-[#C8B6FF]/70">
            [{String(filteredCertifications.length).padStart(2, "0")}]
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="mb-12">
          {/* Year Filter Bar */}
          <FilterBar
            categories={years}
            activeCategory={activeYear}
            onCategoryChange={setActiveYear}
          />
        </div>

        {/* Grouped Certifications */}
        <div className="space-y-16">
          {sortedYears.length > 0 ? (
            sortedYears.map((year) => (
              <YearRow key={year} year={year} certs={groupedCertifications[year]} />
            ))
          ) : (
            <div className="py-20 text-center border border-dashed border-border/60 rounded-xl animate-pulse">
              <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                No certifications found for {activeYear}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
