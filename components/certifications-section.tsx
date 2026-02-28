"use client"

import { ExternalLink } from "lucide-react"
import { certifications } from "@/lib/data"

export function CertificationsSection() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <div
          className="h-px w-4 bg-primary"
          style={{ boxShadow: "0 0 3px #C8B6FF40" }}
        />
        <h2 className="font-mono text-xs tracking-[0.2em] text-foreground uppercase">
          Certifications
        </h2>
        <span className="font-mono text-[10px] text-muted-foreground">
          [{String(certifications.length).padStart(2, "0")}]
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="group p-5 border border-border rounded-lg bg-card hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="font-mono text-[10px] text-accent tracking-wider">
                {cert.year}
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300"
              />
            </div>

            <h3 className="font-mono text-sm text-foreground mb-1.5 leading-snug">
              {cert.title}
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              {cert.issuer}
            </p>

            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-primary/70 hover:text-primary transition-colors duration-200"
              >
                VIEW CERTIFICATE
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
