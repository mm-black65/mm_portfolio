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
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-white transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK
        </button>

        <div className="flex items-center gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 font-mono text-[10px] tracking-wider rounded-sm border border-primary/30 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title section */}
      <div className="px-6 py-6 border-b border-border">
        <h1 className="font-mono text-xl tracking-tight text-foreground mb-2">
          {project.title}
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          {project.description}
        </p>
      </div>

      {/* Split layout: Video + Code */}
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "50vh" }}>
        {/* Left: Demo video area */}
        <div className="flex-1 flex flex-col lg:border-r border-border">
          <div className="flex items-center px-4 py-2 border-b border-border">
            <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
              DEMO_PREVIEW
            </span>
          </div>
          <div className="flex-1 relative flex items-center justify-center bg-card min-h-[300px]">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover opacity-30"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-background/60" />

            <button
              className="relative z-10 flex items-center gap-3 px-6 py-3 font-mono text-sm tracking-wider text-primary border border-primary/40 rounded-sm transition-all duration-300 hover:bg-primary/10"
            >
              <Play className="w-4 h-4" />
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
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
                main.py
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-muted-foreground">
                {project.code.split("\n").length} lines
              </span>
            </div>
          </div>

          {/* Code content */}
          <div className="flex-1 overflow-auto bg-[#0d0d15] p-4 max-h-[400px]">
            <pre className="font-mono text-xs leading-relaxed">
              <code>
                {project.code.split("\n").map((line, i) => (
                  <div key={i} className="flex">
                    <span className="inline-block w-8 text-right pr-4 text-muted-foreground/40 select-none">
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
            <button className="flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-wider text-foreground border border-border rounded-sm hover:border-primary/40 hover:text-primary transition-all duration-200">
              <Download className="w-3 h-3" />
              DOWNLOAD CODE
            </button>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-wider text-foreground border border-border rounded-sm hover:border-primary/40 hover:text-primary transition-all duration-200"
            >
              <Github className="w-3 h-3" />
              VIEW ON GITHUB
            </a>
          </div>
        </div>
      </div>

      {/* Extended project info sections */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Description */}
          <DetailBlock title="PROJECT DESCRIPTION">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </DetailBlock>

          {/* Future Scope */}
          {project.futureScope && (
            <DetailBlock title="FUTURE SCOPE">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.futureScope}
              </p>
            </DetailBlock>
          )}

          {/* Materials Used */}
          {project.materials && project.materials.length > 0 && (
            <DetailBlock title="MATERIALS USED">
              <ul className="space-y-1.5">
                {project.materials.map((material, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary/50 shrink-0 mt-0.5">-</span>
                    {material}
                  </li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {/* Challenges Faced */}
          {project.challenges && project.challenges.length > 0 && (
            <DetailBlock title="CHALLENGES FACED">
              <ul className="space-y-1.5">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent/50 shrink-0 mt-0.5">-</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </DetailBlock>
          )}
        </div>

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-border">
          <span className="font-mono text-[10px] tracking-wider text-muted-foreground mb-3 block">
            TAGS
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 font-mono text-xs tracking-wider rounded-sm border border-primary/20 text-primary bg-primary/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Back navigation */}
      <div className="flex items-center px-6 py-4 border-t border-border">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-wider text-muted-foreground border border-border rounded-sm hover:border-foreground/30 hover:text-white transition-all duration-200"
        >
          <ArrowLeft className="w-3 h-3" />
          BACK TO PROJECTS
        </button>
      </div>
    </div>
  )
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-5 border border-border rounded-lg bg-card">
      <div className="flex items-center gap-2 mb-4">
        <span
          className="w-1.5 h-1.5 rounded-full bg-primary"
          style={{ boxShadow: "0 0 4px #C8B6FF60" }}
        />
        <h3 className="font-mono text-[10px] tracking-wider text-primary">
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
