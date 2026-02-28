"use client"

import { useState, useRef, useEffect } from "react"
import { User, Mail, Linkedin, Github } from "lucide-react"

interface NavbarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const navItems = [
  { id: "projects", label: "Projects" },
  { id: "ideas", label: "Ideas" },
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
          className="font-sans text-base font-semibold tracking-wide transition-opacity duration-300 hover:opacity-80"
          style={{
            background: "linear-gradient(135deg, #C8B6FF 0%, #BDE0FE 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Portfolio
        </button>

        {/* Navigation links */}
        <ul className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
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
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-full bg-primary/60 transition-all duration-300"
                  />
                )}
                {hoveredItem === item.id && activeSection !== item.id && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-primary/30 transition-all duration-300"
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
              className={`absolute right-0 top-full mt-2 w-56 rounded-lg border border-border bg-card/95 backdrop-blur-md p-3 flex flex-col gap-1 transition-all duration-200 origin-top-right ${dropdownOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider px-2 py-1">
                CONTACT
              </span>
              <a
                href="mailto:mahiahalawat112@example.com"
                className="flex items-center gap-3 px-2 py-2 rounded-md text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors duration-150"
              >
                <Mail className="w-3.5 h-3.5 text-foreground dark:text-white" />
                <span className="font-mono text-xs">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mahi-ahalawat-26bb68381?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-2 py-2 rounded-md text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors duration-150"
              >
                <Linkedin className="w-3.5 h-3.5 text-foreground dark:text-white" />
                <span className="font-mono text-xs">LinkedIn</span>
              </a>
              <a
                href="https://github.com/mm-black65"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-2 py-2 rounded-md text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors duration-150"
              >
                <Github className="w-3.5 h-3.5 text-foreground dark:text-white" />
                <span className="font-mono text-xs">GitHub</span>
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
