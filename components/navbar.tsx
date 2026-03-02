"use client"

import { useState, useRef, useEffect } from "react"
import { User, Heart, Github } from "lucide-react"

interface NavbarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "hackathons", label: "Hackathons" },
  { id: "certifications", label: "Certifications" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" }
]

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <button
          onClick={() => onNavigate("about")}
          className="font-mono text-lg font-bold tracking-tighter transition-all duration-300 hover:tracking-normal active:scale-95"
          style={{
            background: "linear-gradient(135deg, #C8B6FF 0%, #BDE0FE 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          MAHI.AI
        </button>

        {/* Navigation links */}
        <ul className="flex items-center gap-4 overflow-x-auto md:overflow-visible whitespace-nowrap py-2">
          {navItems.map((item) => (
            <li key={item.id} className="flex-shrink-0">
              <button
                onClick={() => onNavigate(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative px-3 py-2 font-mono text-sm tracking-wider transition-colors duration-200 ${activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-white"
                  }`}
              >
                {item.label.toUpperCase()}
                {activeSection === item.id && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-full bg-primary/80 transition-all duration-300"
                    style={{ boxShadow: "0 0 10px rgba(200,182,255,0.7)" }}
                  />
                )}
                {hoveredItem === item.id && activeSection !== item.id && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-primary/40 transition-all duration-300"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: profile icon with dropdown */}
        <div className="flex items-center gap-4">
          {/* Mobile nav toggle */}
          <MobileNav activeSection={activeSection} onNavigate={onNavigate} />

          {/* Profile icon with dropdown */}
          <div className="hidden md:block relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="w-9 h-9 rounded-full overflow-hidden border border-border hover:border-primary/40 transition-all duration-300"
              aria-label="Contact menu"
            >
              <img
                src="/images/kk.jpg"
                alt="Mahi Ahalawat"
                className="w-full h-full object-cover"
              />
            </button>


            {/* Dropdown */}
            <div
              className={`absolute right-0 top-full mt-2 w-56 rounded-lg border border-border bg-[#0d0d12] p-3 flex flex-col gap-1 transition-all duration-200 origin-top-right ${dropdownOpen
                ? "opacity-100 scale-100 pointer-events-auto shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
              <button
                onClick={() => { onNavigate("about"); setDropdownOpen(false); }}
                className="flex items-center gap-3 px-2 py-2 rounded-md text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors duration-150"
              >
                <User className="w-3.5 h-3.5 text-foreground dark:text-white" />
                <span className="font-mono text-xs">Mahi Ahalawat</span>
              </button>
              <a
                href="https://github.com/mm-black65"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-2 py-2 rounded-md text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors duration-150"
              >
                <Github className="w-3.5 h-3.5 text-foreground dark:text-white" />
                <span className="font-mono text-xs">GitHub Profile</span>
              </a>
              <a
                href="mailto:mahiahalawat112@gmail.com"
                className="flex items-center gap-3 px-2 py-2 rounded-md text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors duration-150 border-t border-border/40 mt-1 pt-2"
              >
                <Heart className="w-3.5 h-3.5 text-primary" />
                <span className="font-mono text-xs">Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

function MobileNav({
  activeSection,
  onNavigate,
}: {
  activeSection: string
  onNavigate: (section: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1 p-2"
        aria-label="Toggle navigation menu"
      >
        <span
          className={`block h-px w-5 bg-foreground transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[3px]" : ""}`}
        />
        <span
          className={`block h-px w-5 bg-foreground transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-px w-5 bg-foreground transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[3px]" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 right-0 bg-background border-b border-border p-4">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    onNavigate(item.id)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-3 py-2 font-mono text-xs tracking-wider transition-colors ${activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-white"
                    }`}
                >
                  {item.label.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
