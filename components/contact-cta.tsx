"use client"

import { Mail, MessageSquare } from "lucide-react"

export function ContactCTA() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/10 backdrop-blur-md p-12 text-center group">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_50%,#C8B6FF_0%,transparent_50%)]" />

                <div className="relative z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] tracking-widest uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Actively Exploring AI Innovations
                    </div>

                    <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight">
                        Let's build something <span className="text-primary">extraordinary</span>.
                    </h2>

                    <p className="max-w-xl mx-auto text-sm text-muted-foreground leading-relaxed">
                        Driven to build impactful solutions in Robotics and AI.
                        Let's connect and create something innovative.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a
                            href="mailto:mahiahalawat112@gmail.com"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(200,182,255,0.4)]"
                        >
                            <Mail className="w-4 h-4" />
                            SAY HELLO
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mahi-ahalawat-26bb68381"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-md border border-border bg-background/50 backdrop-blur-sm font-mono text-sm font-medium transition-all duration-300 hover:bg-white/5"
                        >
                            <MessageSquare className="w-4 h-4" />
                            LINKEDIN
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
