"use client"

import { ArrowLeft, Play, Download, Github } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/lib/data"

interface ProjectDetailProps {
  project: Project
  onBack: () => void
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
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

        <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/40 font-bold uppercase">
          PROJECT_VIEW_MODE
        </div>
      </div>

      {/* Title section */}
      <div className="px-6 py-8 border-b border-border bg-card/20">
        <h1 className="font-mono text-2xl md:text-3xl tracking-tight text-foreground mb-4">
          {project.title}
        </h1>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
          {project.description}
        </p>
      </div>

      {/* Split layout: Video + Code */}
      <div className="flex flex-col lg:flex-row border-b border-border" style={{ minHeight: "50vh" }}>
        {/* Left: Demo video area */}
        <div className="flex-1 flex flex-col lg:border-r border-border">
          <div className="flex items-center px-4 py-2 border-b border-border bg-card/30">
            <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
              DEMO_PREVIEW
            </span>
          </div>
          <div className="flex-1 relative flex items-center justify-center bg-black/40 min-h-[350px]">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            <button
              className="relative z-10 flex items-center gap-3 px-8 py-3.5 font-mono text-sm tracking-wider text-primary border border-primary/40 rounded-sm transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(200,182,255,0.4)] backdrop-blur-sm group"
            >
              <Play className="w-4 h-4 fill-primary/20 group-hover:fill-primary transition-colors" />
              WATCH DEMO
            </button>
          </div>
        </div>

        {/* Right: Code preview */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Code panel header - VSCode style */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-[#0d0d15]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-[0_0_5px_rgba(255,95,86,0.3)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-[0_0_5px_rgba(255,189,46,0.3)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-[0_0_5px_rgba(39,201,63,0.3)]" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
                main.py
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-muted-foreground/60">
                {project.code.split("\n").length} lines
              </span>
            </div>
          </div>

          {/* Code content */}
          <div className="flex-1 overflow-auto bg-[#0d0d15] p-4 max-h-[450px] custom-scrollbar">
            <pre className="font-mono text-xs leading-relaxed">
              <code>
                {project.code.split("\n").map((line, i) => (
                  <div key={i} className="flex group/line">
                    <span className="inline-block w-8 text-right pr-4 text-muted-foreground/20 group-hover/line:text-muted-foreground/40 transition-colors select-none">
                      {i + 1}
                    </span>
                    <span className="text-foreground/80 whitespace-pre">
                      {highlightSyntax(line)}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>

          {/* Code action buttons */}
          <div className="flex items-center gap-3 px-4 py-3 border-t border-border bg-[#0d0d15]">
            <button className="flex items-center gap-2 px-4 py-2.5 font-mono text-[10px] tracking-wider text-foreground border border-border/60 rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-300">
              <Download className="w-3 h-3" />
              DOWNLOAD
            </button>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 font-mono text-[10px] tracking-wider text-foreground border border-border/60 rounded-sm hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Github className="w-3 h-3" />
              REPOSITORY
            </a>
          </div>
        </div>
      </div>

      {/* Extended project info sections */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project Description */}
          <DetailBlock title="OVERVIEW">
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </DetailBlock>

          {/* Future Scope */}
          {project.futureScope && (
            <DetailBlock title="FUTURE SCOPE">
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.futureScope}
              </p>
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

function highlightSyntax(line: string) {
  const keywords = [
    "import", "from", "class", "def", "self", "return", "if", "else",
    "for", "in", "not", "and", "or", "True", "False", "None", "with",
    "as", "try", "except", "raise", "print", "lambda",
  ]
  const parts = line.split(/(\s+|[()[\]{},:.=<>+\-*/])/g)

  return parts.map((part, idx) => {
    if (keywords.includes(part)) {
      return (
        <span key={idx} className="text-primary">
          {part}
        </span>
      )
    }
    if (part.startsWith("#")) {
      return (
        <span key={idx} className="text-muted-foreground/60 italic">
          {part}
        </span>
      )
    }
    if (part.startsWith("'") || part.startsWith('"')) {
      return (
        <span key={idx} className="text-green-400/80">
          {part}
        </span>
      )
    }
    if (/^\d+$/.test(part)) {
      return (
        <span key={idx} className="text-orange-400/80">
          {part}
        </span>
      )
    }
    return <span key={idx}>{part}</span>
  })
}
