"use client"

import { skills } from "@/lib/data"

export function SkillsSection() {
  return (
    <section className="relative px-6 py-10 max-w-7xl mx-auto overflow-hidden rounded-xl border-y border-border/40 mb-16 bg-card/10 backdrop-blur-[2px]">
      {/* Aesthetic Faded Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.15] pointer-events-none bg-center bg-cover bg-no-repeat hidden dark:block"
        style={{ backgroundImage: "url('/images/blueprint.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-background/50 dark:bg-gradient-to-b dark:from-background/80 dark:via-background/95 dark:to-background pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="h-px w-4 bg-primary dark:bg-[#C8B6FF]"
            style={{ boxShadow: "0 0 5px var(--glow-primary)" }}
          />
          <h2 className="font-mono text-xs tracking-[0.2em] text-foreground dark:text-[#BDE0FE] uppercase">
            Skills Matrix
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-5 border border-border rounded-lg bg-card hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-[#C8B6FF]"
                  style={{ boxShadow: "0 0 4px var(--glow-primary)" }}
                />
                <h3 className="font-mono text-xs tracking-wider text-primary dark:text-[#C8B6FF]">
                  {group.category.toUpperCase()}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 font-mono text-[11px] text-foreground dark:text-[#BDE0FE]/80 bg-primary/10 dark:bg-[#C8B6FF]/10 rounded-sm border border-primary/20 dark:border-[#C8B6FF]/20 hover:text-primary dark:hover:text-[#BDE0FE] hover:border-primary/50 dark:hover:border-[#C8B6FF]/50 hover:bg-primary/20 dark:hover:bg-[#C8B6FF]/20 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill meter visualization */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Machine Learning", level: 92 },
            { label: "Robotics Systems", level: 88 },
            { label: "Computer Vision", level: 85 },
            { label: "Embedded Systems", level: 80 },
            { label: "Cloud Architecture", level: 75 },
            { label: "Full-Stack Development", level: 70 },
          ].map((skill) => (
            <div key={skill.label} className="flex items-center gap-4">
              <span className="font-mono text-[10px] sm:text-[11px] text-foreground dark:text-[#BDE0FE] w-28 sm:w-44 shrink-0">
                {skill.label}
              </span>
              <div className="flex-1 h-px bg-border relative overflow-hidden rounded-full overflow-visible">
                <div
                  className="absolute inset-y-0 left-0 h-full bg-primary rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    boxShadow: "0 0 10px var(--glow-primary), 0 0 20px var(--glow-primary)",
                  }}
                >
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-background dark:bg-white rounded-full"
                    style={{ boxShadow: "0 0 10px 2px var(--background), 0 0 20px 4px var(--glow-primary)" }}
                  />
                </div>
              </div>
              <span
                className="font-mono text-[10px] text-primary tabular-nums w-8 text-right"
                style={{ textShadow: "0 0 10px var(--glow-primary)" }}
              >
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
