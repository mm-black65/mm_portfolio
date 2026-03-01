"use client"

import Image from "next/image"
import { Project, Hackathon } from "@/lib/data"

interface ProjectCardProps {
  project: Project | Hackathon
  onClick: (item: Project | Hackathon) => void
  priority?: boolean
}

export function ProjectCard({ project, onClick, priority = false }: ProjectCardProps) {
  return (
    <button
      onClick={() => onClick(project)}
      className="group relative flex-none w-[280px] sm:w-[320px] overflow-hidden rounded-lg border border-border bg-card text-left transition-all duration-300 hover:border-[#2E8B57] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      style={{ transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 16px rgba(46, 139, 87, 0.5), 0 0 32px rgba(46, 139, 87, 0.3)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} thumbnail`}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          sizes="288px"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

        {/* Hover overlay with View Project */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-mono text-xs text-primary tracking-wider border border-primary/40 px-3 py-1.5 rounded-sm">
            VIEW PROJECT
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-mono text-sm font-medium text-foreground mb-1.5 group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 font-mono text-[10px] tracking-wider rounded-sm bg-secondary text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}
