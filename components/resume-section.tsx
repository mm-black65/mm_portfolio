"use client"

import { Download, ExternalLink } from "lucide-react"

export function ResumeSection() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <div
          className="h-px w-4 bg-primary"
          style={{ boxShadow: "0 0 3px #C8B6FF40" }}
        />
        <h2 className="font-mono text-xs tracking-[0.2em] text-foreground uppercase">
          Resume
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Resume card */}
      <div className="max-w-3xl mx-auto border border-border rounded-lg bg-card overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-mono text-lg text-foreground tracking-tight">
                Mahi Ahalawat
              </h3>
              <p className="font-mono text-xs text-primary tracking-wider mt-1">
                ROBOTICS & AI ENGINEER
              </p>
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-wider text-primary border border-primary/40 rounded-sm hover:bg-primary/10 transition-all duration-300"
              style={{ animation: "glow-pulse 4s ease-in-out infinite" }}
            >
              <Download className="w-3 h-3" />
              DOWNLOAD PDF
            </button>
          </div>
        </div>

        {/* Experience */}
        <div className="p-6 border-b border-border">
          <h4 className="font-mono text-[10px] tracking-wider text-muted-foreground mb-4">
            EXPERIENCE
          </h4>

          <div className="space-y-5">
            {[
              {
                title: "Research Intern - Autonomous Systems Lab",
                org: "MIT CSAIL",
                period: "Jun 2025 - Present",
                bullets: [
                  "Developing multi-robot coordination algorithms for warehouse logistics",
                  "Implementing SLAM-based navigation for indoor autonomous systems",
                  "Published paper on decentralized swarm control at ICRA 2026",
                ],
              },
              {
                title: "ML Engineering Intern",
                org: "Boston Dynamics",
                period: "Jun 2024 - Aug 2024",
                bullets: [
                  "Optimized real-time object detection pipeline for Spot robot (30% latency reduction)",
                  "Developed terrain classification model for autonomous navigation",
                  "Built data pipeline for large-scale sensor data processing",
                ],
              },
            ].map((exp) => (
              <div key={exp.title} className="flex gap-4">
                <div className="w-px bg-border shrink-0" />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h5 className="text-sm text-foreground font-medium">
                      {exp.title}
                    </h5>
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <p className="font-mono text-[11px] text-primary/80 mt-0.5">
                    {exp.org}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                    {exp.period}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground leading-relaxed flex gap-2"
                      >
                        <span className="text-primary/40 shrink-0">-</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="p-6 border-b border-border">
          <h4 className="font-mono text-[10px] tracking-wider text-muted-foreground mb-4">
            EDUCATION
          </h4>
          <div className="flex gap-4">
            <div className="w-px bg-border shrink-0" />
            <div>
              <h5 className="text-sm text-foreground font-medium">
                MS Robotics Engineering
              </h5>
              <p className="font-mono text-[11px] text-primary/80 mt-0.5">
                Worcester Polytechnic Institute
              </p>
              <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                Expected May 2026 - GPA: 3.95/4.0
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="w-px bg-border shrink-0" />
            <div>
              <h5 className="text-sm text-foreground font-medium">
                BS Computer Engineering
              </h5>
              <p className="font-mono text-[11px] text-primary/80 mt-0.5">
                University of Michigan
              </p>
              <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                May 2023 - Summa Cum Laude - GPA: 3.92/4.0
              </p>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="p-6">
          <h4 className="font-mono text-[10px] tracking-wider text-muted-foreground mb-4">
            PUBLICATIONS
          </h4>
          <div className="space-y-3">
            {[
              "\"Decentralized Consensus for Multi-Robot Coordination\" - ICRA 2026",
              "\"Edge-Optimized CNNs for Real-Time Gesture Recognition\" - IEEE IROS 2025",
              "\"IoT-Based Smart Agriculture: A Survey\" - Sensors Journal 2024",
            ].map((pub, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-primary/40 font-mono text-[10px] shrink-0 mt-0.5">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
