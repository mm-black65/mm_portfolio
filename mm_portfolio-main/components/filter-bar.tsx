"use client"

import { useRef, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface FilterBarProps {
    categories: string[]
    activeCategory: string
    onCategoryChange: (category: string) => void
}

export function FilterBar({ categories, activeCategory, onCategoryChange }: FilterBarProps) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(false)

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setShowLeftArrow(scrollLeft > 0)
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5)
        }
    }

    useEffect(() => {
        checkScroll()
        window.addEventListener("resize", checkScroll)
        return () => window.removeEventListener("resize", checkScroll)
    }, [])

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 200
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            })
        }
    }

    return (
        <div className="relative group mb-8">
            {/* Scroll Arrows */}
            {showLeftArrow && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border rounded-full shadow-lg"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
            )}

            {showRightArrow && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border rounded-full shadow-lg"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            )}

            {/* Pills Container */}
            <div
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth px-2 py-1"
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wider border transition-all duration-300 whitespace-nowrap ${activeCategory === category
                                ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(200,182,255,0.4)]"
                                : "bg-secondary/50 text-muted-foreground border-border/40 hover:border-primary/40 hover:text-foreground"
                            }`}
                    >
                        {category.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    )
}
