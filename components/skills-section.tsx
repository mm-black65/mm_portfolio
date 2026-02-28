"use client"

import { skills } from "@/lib/data"

export function SkillsSection() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <div
          className="h-px w-4 bg-primary"
          style={{ boxShadow: "0 0 3px #C8B6FF40" }}
        />
        <h2 className="font-mono text-xs tracking-[0.2em] text-foreground uppercase">
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
                className="w-1.5 h-1.5 rounded-full bg-primary"
                style={{ boxShadow: "0 0 3px #C8B6FF40" }}
              />
              <h3 className="font-mono text-xs tracking-wider text-primary">
                {group.category.toUpperCase()}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 font-mono text-[11px] text-muted-foreground bg-secondary rounded-sm border border-border hover:text-foreground hover:border-primary/30 transition-all duration-200 cursor-default"
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
            <span className="font-mono text-[11px] text-muted-foreground w-44 shrink-0">
              {skill.label}
            </span>
            <div className="flex-1 h-px bg-border relative overflow-hidden rounded-full">
              <div
                className="absolute inset-y-0 left-0 h-full bg-primary/60 rounded-full"
                style={{
                  width: `${skill.level}%`,
                  boxShadow: "0 0 4px #C8B6FF20",
                }}
              />
            </div>
            <span className="font-mono text-[10px] text-primary tabular-nums w-8 text-right">
              {skill.level}%
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
