"use client"

import { ExternalLink } from "lucide-react"
import { certifications } from "@/lib/data"

export function CertificationsSection() {
  return (
    <section className="relative px-6 py-12 max-w-7xl mx-auto overflow-hidden rounded-2xl border border-border/40 mt-8 mb-8">
      {/* Aesthetic Faded Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.05] opacity-10 pointer-events-none bg-center bg-cover bg-no-repeat hidden dark:block"
        style={{ backgroundImage: "url('/images/project-ai.jpg')" }}
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
            Certifications
          </h2>
          <span className="font-mono text-[10px] text-muted-foreground dark:text-[#C8B6FF]/70">
            [{String(certifications.length).padStart(2, "0")}]
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative p-5 border border-border/60 rounded-lg bg-card/60 backdrop-blur-sm hover:border-primary/40 dark:hover:border-[#C8B6FF]/40 hover:bg-card/80 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-[10px] text-primary dark:text-[#C8B6FF] tracking-wider">
                  {cert.year}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full bg-primary/40 dark:bg-[#C8B6FF]/40 group-hover:bg-primary dark:group-hover:bg-[#C8B6FF] transition-colors duration-300"
                  style={{ boxShadow: "0 0 8px var(--glow-primary)" }}
                />
              </div>

              <h3 className="font-mono text-sm text-foreground dark:text-[#BDE0FE] mb-1.5 leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-foreground dark:text-[#BDE0FE]/60 mb-4">
                {cert.issuer}
              </p>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-primary focus:text-primary dark:text-[#C8B6FF] hover:text-accent dark:hover:text-[#BDE0FE] transition-colors duration-200"
                >
                  VIEW CERTIFICATE
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
