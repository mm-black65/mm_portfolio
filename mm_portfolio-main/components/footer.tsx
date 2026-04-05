"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="mt-24 border-t border-border/40 bg-background/30 backdrop-blur-sm py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Left side: Copyright & Name */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                        © {currentYear} mahi ahalawat
                    </p>
                    <p className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.2em] uppercase">
                        built with next.js & tailwind
                    </p>
                </div>

                {/* Center: Branding */}
                <div className="order-first md:order-none">
                    <span
                        className="font-sans text-sm font-bold tracking-widest opacity-80"
                        style={{
                            background: "linear-gradient(135deg, #C8B6FF 0%, #BDE0FE 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent"
                        }}
                    >
                        PORTFOLIO_V1.0
                    </span>
                </div>

                {/* Right side: Social Connect */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/mm-black65"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-white transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mahi-ahalawat-26bb68381"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-white transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:mahiahalawat112@gmail.com"
                        className="text-muted-foreground hover:text-white transition-colors duration-300"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Bottom decorative bar */}
            <div className="max-w-7xl mx-auto mt-12 h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />
        </footer>
    )
}
