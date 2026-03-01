"use client"

import { ArrowLeft, Play, FileText, Download, Github } from "lucide-react"
import Image from "next/image"
import type { Project, Hackathon } from "@/lib/data"

interface ProjectDetailProps {
  project: Project | Hackathon
  onBack: () => void
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const isHackathon = "certificate" in project

  return (
    <div className="min-h-screen bg-background">
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/50 backdrop-blur-md sticky top-0 z-30">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 px-3 py-1.5 font-mono text-xs text-muted-foreground hover:text-white border border-transparent hover:border-white/20 hover:bg-white/10 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          BACK
        </button>

        <div className="flex items-center gap-4">
          <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/40 font-bold uppercase">
            {isHackathon ? "HACKATHON_MODE" : "PROJECT_VIEW_MODE"}
          </div>
        </div>
      </div>

      {/* Project Header Info */}
      <div className="px-6 py-12 border-b border-border bg-card/10 backdrop-blur-[2px] relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/abstract-tech.avif')] bg-fixed" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 font-mono text-[10px] tracking-widest bg-primary/20 text-primary border border-primary/30 rounded-sm">
                {isHackathon ? "HACKATHON_DEBRIEF" : "PROJECT_OVERVIEW"}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground/40">
                // {project.year}
              </span>
            </div>
            <h1 className="font-mono text-3xl md:text-5xl tracking-tighter text-foreground mb-6">
              {project.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed pl-6 border-l-2 border-primary/40 max-w-2xl">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 font-mono text-xs tracking-[0.2em] text-foreground border border-border/60 rounded-sm hover:border-primary/50 hover:text-primary bg-background/60 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,182,255,0.15)]"
            >
              <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              VIEW_SOURCE_CODE
            </a>
          </div>
        </div>
      </div>

      {/* Extended project info sections */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* Project Description */}
          <DetailBlock title="OVERVIEW">
            <p className="text-base text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/20">
              {project.description}
            </p>
          </DetailBlock>

          {/* Future Scope */}
          {project.futureScope && project.futureScope.length > 0 && (
            <DetailBlock title="FUTURE SCOPE">
              <ul className="space-y-3">
                {project.futureScope.map((scope, i) => (
                  <li key={i} className="flex items-center gap-3 text-base text-muted-foreground">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-white"
                      style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
                    />
                    {scope}
                  </li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {/* Materials Used */}
          {project.materials && project.materials.length > 0 && (
            <DetailBlock title="MATERIALS USED">
              <ul className="space-y-3">
                {project.materials.map((material, i) => (
                  <li key={i} className="flex items-center gap-3 text-base text-muted-foreground">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-white"
                      style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
                    />
                    {material}
                  </li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {/* Challenges Faced */}
          {project.challenges && project.challenges.length > 0 && (
            <DetailBlock title="CHALLENGES FACED">
              <ul className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-center gap-3 text-base text-muted-foreground">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-white"
                      style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }}
                    />
                    {challenge}
                  </li>
                ))}
              </ul>
            </DetailBlock>
          )}
        </div>

        {/* Unified Demo & Accomplishments Section */}
        <div className="mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-3 mb-10">
            <div
              className="h-px w-8 bg-primary shadow-[0_0_8px_var(--glow-primary)]"
            />
            <h2 className="font-mono text-xs tracking-[0.3em] text-foreground uppercase">
              {isHackathon ? "ACCOMPLISHMENTS & DEMO" : "INTERACTIVE_DEMONSTRATION"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Primary Visual: Certificate for Hackathons, Main Image for Projects */}
            <div className="relative aspect-[16/9] lg:aspect-[14/10] rounded-xl overflow-hidden border border-border/60 group bg-card/20 backdrop-blur-sm">
              <Image
                src={isHackathon ? project.certificate : (project.detailImage || project.image)}
                alt={isHackathon ? "Certificate" : "Project Preview"}
                fill
                className={`${isHackathon ? "object-contain p-4" : "object-contain"} group-hover:scale-[1.02] transition-transform duration-700`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4">
                <span className="px-2 py-1 font-mono text-[8px] tracking-[0.2em] bg-primary/20 text-primary border border-primary/30 rounded-sm">
                  {isHackathon ? "OFFICIAL_CERTIFICATE" : "SYSTEM_PREVIEW"}
                </span>
              </div>
            </div>

            {/* Demo Actions Container */}
            <div className="flex flex-col gap-6">
              <div className="p-8 rounded-xl border border-border/60 bg-card/20 backdrop-blur-sm flex flex-col gap-6">
                <div>
                  <h4 className="font-mono text-sm text-foreground mb-2 flex items-center gap-2">
                    <Play className="w-4 h-4 text-primary" />
                    AVAILABLE_ASSETS
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Explore the technical execution through interactive media and documentation.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {project.demoVideo ? (
                    <div className="rounded-lg overflow-hidden border border-primary/20 bg-black/40 shadow-inner">
                      <video
                        src={project.demoVideo}
                        controls
                        className="w-full aspect-video"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : project.demoPdf ? (
                    <a
                      href={project.demoPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between px-6 py-4 font-mono text-xs tracking-wider text-[#C8B6FF] border border-[#C8B6FF]/40 rounded-sm transition-all duration-300 hover:bg-[#C8B6FF]/10 hover:shadow-[0_0_20px_rgba(200,182,255,0.2)] backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-[#C8B6FF]" />
                        VIEW_PROJECT_DOCUMENTATION
                      </div>
                      <ArrowLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </a>
                  ) : (
                    <div className="py-8 text-center border border-dashed border-border/40 rounded-md">
                      <p className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest">
                        Documentation Internal Only
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tags at bottom left */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-4 bg-white/60" style={{ boxShadow: "0_0_8px_rgba(255,255,255,0.4)" }} />
              <h2 className="font-mono text-xl md:text-2xl tracking-[0.2em] text-white font-bold uppercase">
                Associated Tags
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 font-mono text-[11px] tracking-wider rounded-sm border border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-5 border border-border rounded-lg bg-card">
      <div className="flex items-center gap-3 mb-6">
        <span
          className={`w-2 h-2 rounded-full ${["OVERVIEW", "FUTURE SCOPE", "MATERIALS USED", "CHALLENGES FACED"].includes(title)
            ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            : "bg-black shadow-[0_0_8px_rgba(0,0,0,0.8)]"
            }`}
        />
        <h3 className="font-mono text-xs md:text-sm tracking-wider text-primary dark:text-[#C8B6FF]">
          {title}
        </h3>
      </div>
      {children}
    </div>
  )
}


