"use client"

import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function AboutSection() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">

      

      {/* Image Top Left */}
      <div className="mb-8">
        <img
          src="/images/kk.jpg"
          alt="Mahi Ahalawat"
          className="w-40 h-40 rounded-2xl object-cover border border-border shadow-lg"
        />
      </div>
         {/* Section header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px w-4 bg-primary" />
        <h2 className="font-mono text-xs tracking-[0.2em] text-foreground uppercase">
          About
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Bio */}
        <div className="lg:col-span-2 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            I am a Robotics and AI Engineering student passionate about building
            intelligent systems that bridge the gap between the digital and physical
            worlds. My work spans autonomous navigation, computer vision, embedded
            systems, and machine learning.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I have contributed to research in multi-agent robotic coordination and
            edge computing for real-time inference. I believe the future belongs to
            systems that can perceive, reason, and act in complex environments.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            When not debugging sensor fusion algorithms, you can find me at hackathons,
            contributing to open-source robotics tools.
          </p>
         
        </div>
           
        {/* Info card */}
        <div className="border border-border rounded-lg p-5 bg-card space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <h3 className="font-mono text-xs tracking-wider text-primary">
              CONTACT
            </h3>
          </div>

          <div className="space-y-3">
            <a
              href="mailto:mahiahalawat112@gmail.com"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4 text-primary/60" />
              mahiahalawat112@gmail.com
            </a>

            <a
              href="https://github.com/mm-black65"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4 text-primary/60" />
              github.com/mm-black65
            </a>

            <a
              href="https://www.linkedin.com/in/mahi-ahalawat-26bb68381"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4 text-primary/60" />
              linkedin.com/in/mahi-ahalawat
            </a>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary/60" />
              Ghaziabad, Uttar Pradesh, India
            </div>
             <a
  href="/Mahiahalawat_resume_20260228_184454_0000.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-6 px-6 py-2 text-sm rounded-md bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all duration-300"
>
   Resume 
</a>
          </div>
        </div>
      </div>

      {/* Timeline (Unchanged) */}
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <h3 className="font-mono text-xs tracking-wider text-primary">
            TIMELINE
          </h3>
        </div>

        <div className="space-y-0">
          {[
            { year: "April'29  ", event: "   Expected Graduation - B.TECH Robotics & AI" },
            { year: "Feb'26" , event: "Data Analysis Intern - Finenstics" },
            { year: "July'25  ", event: "Started Robotics Engineering at Jaypee Institute of Information Techonology" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 pb-4">
              <span className="font-mono text-[11px] text-muted-foreground w-12 shrink-0">
                {item.year}
              </span>
              <span className="text-sm text-foreground/80">
                {item.event}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
