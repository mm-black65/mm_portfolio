"use client"

import { useState, useMemo, useRef, useEffect, useCallback } from "react"
import { hackathons, type Hackathon } from "@/lib/data"
import { FilterBar } from "./filter-bar"
import Image from "next/image"
import { Github, Trophy, Calendar, ExternalLink, Play, ChevronLeft, ChevronRight } from "lucide-react"

interface YearRowProps {
    year: string
    hackathons: Hackathon[]
    onSelectHackathon: (hackathon: Hackathon) => void
}

function YearRow({ year, hackathons, onSelectHackathon }: YearRowProps) {
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
        const scrollAmount = 350
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
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 border border-primary/20 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                )}
                {canScrollRight && (
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 border border-primary/20 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                )}

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-hide snap-x"
                    style={{ scrollbarWidth: "none" }}
                >
                    {hackathons.map((hackathon) => (
                        <div
                            key={hackathon.id}
                            onClick={() => onSelectHackathon(hackathon)}
                            className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start group/card relative flex flex-col h-full border border-border/60 rounded-xl bg-card/40 backdrop-blur-sm transition-all duration-500 hover:border-[#2E8B57] dark:hover:border-[#2E8B57] overflow-hidden cursor-pointer"
                            style={{ transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s, background-color 0.5s" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow =
                                    "0 0 16px rgba(46, 139, 87, 0.4), 0 0 32px rgba(46, 139, 87, 0.2)"
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "none"
                            }}
                        >
                            {/* Image Preview */}
                            <div className="relative h-44 w-full overflow-hidden">
                                <Image
                                    src={hackathon.image}
                                    alt={hackathon.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-5 flex flex-col">
                                <h4 className="text-sm font-bold text-foreground mb-2 group-hover/card:text-primary transition-colors duration-300 font-mono">
                                    {hackathon.title}
                                </h4>
                                <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-1">
                                    {hackathon.description}
                                </p>

                                {/* Footer Actions */}
                                <div className="flex items-center justify-between pt-3 border-t border-border/40">
                                    <div className="flex items-center gap-3">
                                        <Github className="w-3.5 h-3.5 text-muted-foreground" />
                                        {hackathon.demoVideo && <Play className="w-3.5 h-3.5 text-primary/60" />}
                                    </div>
                                    <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-primary">
                                        VIEW PROJECT
                                        <ExternalLink className="w-2.5 h-2.5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

interface HackathonsSectionProps {
    onSelectHackathon: (hackathon: Hackathon) => void
}

export function HackathonsSection({ onSelectHackathon }: HackathonsSectionProps) {
    const [activeYear, setActiveYear] = useState("ALL")

    const years = useMemo(() => {
        const allYears = hackathons.map((h) => h.year)
        return ["ALL", ...Array.from(new Set(allYears)).sort((a, b) => b.localeCompare(a))]
    }, [])

    const filteredHackathons = useMemo(() => {
        const base = activeYear === "ALL" ? hackathons : hackathons.filter((h) => h.year === activeYear)
        return [...base].reverse()
    }, [activeYear])

    const groupedHackathons = useMemo(() => {
        const groups: Record<string, Hackathon[]> = {}
        filteredHackathons.forEach((h) => {
            if (!groups[h.year]) {
                groups[h.year] = []
            }
            groups[h.year].push(h)
        })
        return groups
    }, [filteredHackathons])

    const sortedYears = useMemo(() => {
        return Object.keys(groupedHackathons).sort((a, b) => b.localeCompare(a))
    }, [groupedHackathons])

    return (
        <section className="relative px-6 py-12 max-w-7xl mx-auto overflow-hidden rounded-2xl border border-border/40 mt-8 mb-8">
            {/* Aesthetic Faded Background Image */}
            <div
                className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.05] pointer-events-none bg-center bg-cover bg-no-repeat hidden dark:block"
                style={{ backgroundImage: "url('/images/blueprint.jpg')" }}
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
                        Hackathon Gallery
                    </h2>
                    <span className="font-mono text-[10px] text-muted-foreground dark:text-[#C8B6FF]/70">
                        [{String(filteredHackathons.length).padStart(2, "0")}]
                    </span>
                    <div className="flex-1 h-px bg-border" />
                </div>

                <div className="mb-12">
                    <FilterBar
                        categories={years}
                        activeCategory={activeYear}
                        onCategoryChange={setActiveYear}
                    />
                </div>

                {/* Grouped Hackathons by Year */}
                <div className="space-y-16">
                    {sortedYears.length > 0 ? (
                        sortedYears.map((year) => (
                            <YearRow
                                key={year}
                                year={year}
                                hackathons={groupedHackathons[year]}
                                onSelectHackathon={onSelectHackathon}
                            />
                        ))
                    ) : (
                        <div className="py-20 text-center border border-dashed border-border/60 rounded-xl animate-pulse">
                            <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                                No builds found for {activeYear}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
