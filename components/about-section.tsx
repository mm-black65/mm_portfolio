"use client"

import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function AboutSection() {
  return (
    <section className="relative px-6 py-12 max-w-7xl mx-auto overflow-hidden rounded-xl border-y border-border/40 bg-card/10 backdrop-blur-[2px] mb-16">
      {/* Aesthetic Faded Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none bg-center bg-cover bg-no-repeat hidden dark:block brightness-[0.7]"
        style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-background/50 dark:bg-gradient-to-b dark:from-background/80 dark:via-background/95 dark:to-background pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Image Top Left */}
        <div className="mb-8">
          <img
            src="/images/profile.jpeg"
            alt="Mahi Ahalawat"
            className="w-40 h-40 rounded-2xl object-cover border border-border shadow-lg opacity-85 brightness-90 saturate-[0.8]"
          />
        </div>
        {/* Space and White horizontal line after the image */}
        <div className="mb-8 border-t border-white/50 w-full" />

        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-0.5 w-4 bg-primary dark:bg-[#C8B6FF]" style={{ boxShadow: "0 0 10px rgba(200,182,255,0.8)" }} />
          <h2 className="font-mono text-xs tracking-[0.2em] text-foreground dark:text-[#BDE0FE] uppercase">
            About
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Bio */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-sm text-muted-foreground dark:text-[#BDE0FE]/80 leading-relaxed">
              I am a First-Year Student & Embedded Systems Enthusiast driven by the challenge of bridging the gap between code and physical hardware. While most start with simple high-level apps, I prefer getting my hands dirty with Microcontroller architectures, Embedded C, and the "under-the-hood" mechanics of how silicon actually thinks.
            </p>
            <p className="text-sm text-muted-foreground dark:text-[#BDE0FE]/80 leading-relaxed">
              My technical journey is rooted in real-time systems—from architecting smart automation and RFID security to engineering robotics prototypes. I focus on the precision of hardware: managing GPIO configurations, interrupt handling, and memory optimization to build efficient, scalable devices.
            </p>
            <p className="text-sm text-muted-foreground dark:text-[#BDE0FE]/80 leading-relaxed">
              Bridging Data & Hardware: Currently, as a Data Science Intern, I am expanding my stack with Python and MySQL. I am fascinated by the intersection of local embedded sensing and global data analytics, aiming to build intelligent systems that don't just act, but learn.
            </p>
            <p className="text-sm text-muted-foreground dark:text-[#BDE0FE]/80 leading-relaxed">
              Beyond the Logic: When I’m not debugging circuits or optimizing memory, I’m usually behind a camera lens. My knack for photography fuels my attention to detail—whether I’m perfecting a circuit board layout or designing the visual flow of a portfolio.
            </p>

          </div>

          {/* Info card */}
          <div className="border border-border/60 rounded-lg p-5 bg-card/50 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-[#C8B6FF]"
                style={{ boxShadow: "0 0 4px var(--glow-primary)" }}
              />
              <h3 className="font-mono text-xs tracking-wider text-primary dark:text-[#C8B6FF]">
                CONTACT
              </h3>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:mahiahalawat112@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground dark:text-[#BDE0FE]/70 hover:text-foreground dark:hover:text-[#BDE0FE] transition-colors"
              >
                <Mail className="w-4 h-4 text-primary dark:text-[#C8B6FF]" />
                mahiahalawat112@gmail.com
              </a>

              <a
                href="https://github.com/mm-black65"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground dark:text-[#BDE0FE]/70 hover:text-foreground dark:hover:text-[#BDE0FE] transition-colors"
              >
                <Github className="w-4 h-4 text-primary dark:text-[#C8B6FF]" />
                github.com/mm-black65
              </a>

              <a
                href="https://www.linkedin.com/in/mahi-ahalawat-26bb68381"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground dark:text-[#BDE0FE]/70 hover:text-foreground dark:hover:text-[#BDE0FE] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-primary dark:text-[#C8B6FF]" />
                linkedin.com/in/mahi-ahalawat
              </a>

              <div className="flex items-center gap-3 text-sm text-muted-foreground dark:text-[#BDE0FE]/70">
                <MapPin className="w-4 h-4 text-primary dark:text-[#C8B6FF]" />
                Ghaziabad, Uttar Pradesh, India
              </div>
              <a
                href="/Mahiahalawat_resume_20260228_184454_0000.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-2 text-sm rounded-md bg-primary/10 dark:bg-[#C8B6FF]/10 text-primary dark:text-[#C8B6FF] border border-primary/30 dark:border-[#C8B6FF]/30 hover:bg-primary/20 dark:hover:bg-[#C8B6FF]/20 hover:text-primary dark:hover:text-[#BDE0FE] transition-all duration-300"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Timeline (Unchanged) */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-[#C8B6FF]"
              style={{ boxShadow: "0 0 4px var(--glow-primary)" }}
            />
            <h3 className="font-mono text-xs tracking-wider text-primary dark:text-[#C8B6FF]">
              TIMELINE
            </h3>
          </div>

          <div className="space-y-0">
            {[
              { year: "Apr'29", event: "Expected Graduation - B.TECH Robotics & AI" },
              { year: "Feb'26", event: "Data Science Intern - Finenstics" },
              { year: "Jul'25", event: "Started Robotics Engineering at Jaypee Institute of Information Technology" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 pb-4">
                <span className="font-mono text-[11px] text-muted-foreground dark:text-[#C8B6FF]/80 w-16 shrink-0">
                  {item.year}
                </span>
                <span className="text-sm text-foreground dark:text-[#BDE0FE]">
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
