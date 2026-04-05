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
            { label: "Machine Learning", level: 10 },
            { label: "Robotics Systems", level: 15 },
            { label: "Embedded Systems", level: 65 },
            { label: "Simulation & Modeling", level: 35 },
            { label: "Frontend Development", level: 40 },
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
      {/* Competitive Programming Profiles */}
      <div className="mt-16 pt-10 border-t border-border/40">
        <div className="flex items-center gap-3 mb-8">
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-[#C8B6FF]"
            style={{ boxShadow: "0 0 4px var(--glow-primary)" }}
          />
          <h3 className="font-mono text-xs tracking-[0.2em] text-foreground dark:text-[#BDE0FE] uppercase">
            Competitive Programming
          </h3>
          <div className="flex-1 h-px bg-border/40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LeetCode Card */}
          <a
            href="https://leetcode.com/u/mmblack65/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 border border-border rounded-xl bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F7931A] to-[#FFA116]" />
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-black/20">
                  {/* Simple SVG for LeetCode */}
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FFA116]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.666 4.666c-.195.195-.195.512 0 .707a.5.5 0 0 0 .707 0l4.314-4.314c.195-.195.512-.195.707 0l9.011 9.011c.195.195.195.512 0 .707l-2.617 2.617c-.195.195-.195.512 0 .707l1.414 1.414c.195.195.512.195.707 0l4.131-4.131c.195-.195.195-.512 0-.707L13.483.414A1.374 1.374 0 0 0 13.483 0z" />
                    <path d="m4.681 16.223 2.016 2.016 4.314-4.314a.5.5 0 0 0 0-.707l-1.414-1.414c-.195-.195-.512-.195-.707 0l-4.209 4.209a.5.5 0 0 0 0 .707z" />
                    <path d="m.414 13.483 9.011 9.011c.195.195.512.195.707 0l2.617-2.617c.195-.195.195-.512 0-.707l-1.414-1.414a.5.5 0 0 0-.707 0l-1.91 1.91c-.195.195-.512.195-.707 0L2.11 12.77c-.195-.195-.195-.512 0-.707l2.15-2.15c.195-.195.195-.512 0-.707L2.846 7.793c-.195-.195-.512-.195-.707 0l-1.725 1.725c-.195.195-.195.512 0 .707z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                    LeetCode
                  </h4>
                  <p className="font-mono text-[10px] text-muted-foreground">mmblack65</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-muted-foreground">Solved</span>
                <span className="text-foreground"> Problems</span>
              </div>
              <div className="w-full h-1 bg-muted/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#F7931A] to-[#FFA116]"
                  style={{ width: "1%" }}
                />
              </div>
              <div className="flex items-center justify-center gap-2 mt-4 text-[10px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>VIEW PROFILE</span>
                <div className="w-3 h-px bg-primary" />
              </div>
            </div>
          </a>

          {/* HackerRank Card */}
          <a
            href="https://www.hackerrank.com/profile/mahiahalawat112"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 border border-border rounded-xl bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#2EC866]" />
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-black/20">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#2EC866]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4 21.6 6.698 21.6 12 17.302 21.6 12 21.6z" />
                    <path d="M15.485 7.5L8.515 7.5c-.3 0-.543.243-.543.543v7.914c0 .3.243.543.543.543h6.97c.3 0 .543-.243.543-.543V8.043c0-.3-.243-.543-.543-.543zM14.4 15.12H9.6V8.88h4.8v6.24z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                    HackerRank
                  </h4>
                  <p className="font-mono text-[10px] text-muted-foreground">mahiahalawat112</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-muted-foreground">Status</span>
                <span className="text-[#2EC866]">Certified</span>
              </div>
              <div className="w-full h-1 bg-muted/20 rounded-full overflow-hidden">
                <div className="h-full bg-[#2EC866]" style={{ width: "35%" }} />
              </div>
              <div className="flex items-center justify-center gap-2 mt-4 text-[10px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>VIEW PROFILE</span>
                <div className="w-3 h-px bg-primary" />
              </div>
            </div>
          </a>

          {/* HackerEarth Card */}
          <a
            href="https://www.hackerearth.com/@mmblack165/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 border border-border rounded-xl bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#323754]" />
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-black/20">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#323754] dark:fill-[#BDE0FE]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 2l-6 6 6 6 6-6-6-6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                    HackerEarth
                  </h4>
                  <p className="font-mono text-[10px] text-muted-foreground">@mmblack165</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-muted-foreground">Activity</span>
                <span className="text-foreground">Regular</span>
              </div>
              <div className="w-full h-1 bg-muted/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary/40" style={{ width: "60%" }} />
              </div>
              <div className="flex items-center justify-center gap-2 mt-4 text-[10px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>VIEW PROFILE</span>
                <div className="w-3 h-px bg-primary" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
