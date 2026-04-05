"use client"

import { useState, useEffect, useCallback } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const handleComplete = useCallback(() => {
    setIsComplete(true)
    setTimeout(onComplete, 600)
  }, [onComplete])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          handleComplete()
          return 100
        }
        const increment = Math.random() * 8 + 2
        return Math.min(prev + increment, 100)
      })
    }, 60)

    return () => clearInterval(interval)
  }, [handleComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Scanline effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div
          className="absolute inset-0 w-full h-1 bg-primary"
          style={{ animation: "scanline 3s linear infinite" }}
        />
      </div>

      <div className="w-full max-w-xl px-8">
        {/* Progress counter and logo */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-mono text-sm text-muted-foreground tabular-nums">
            {String(Math.floor(progress)).padStart(3, "0")}%
          </span>
          <span
            className="font-sans text-base font-semibold tracking-wide glitch-text"
            style={{
              background: "linear-gradient(135deg, #C8B6FF 0%, #BDE0FE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Mahi Ahalawat Portfolio
          </span>
        </div>

        {/* Loading bar */}
        <div className="relative h-px w-full bg-border overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-foreground transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute inset-y-0 left-0 h-full transition-all duration-100 ease-out"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 8px #C8B6FF, 0 0 16px #BDE0FE40",
              background: "linear-gradient(90deg, #C8B6FF, #BDE0FE)",
              height: "1px",
            }}
          />
        </div>

        {/* System text */}
        <div className="mt-4 font-mono text-xs text-muted-foreground flex items-center gap-2">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-primary"
            style={{ animation: "glow-pulse 2s ease-in-out infinite" }}
          />
          <span>
            {progress < 30
              ? "INITIALIZING SYSTEMS..."
              : progress < 60
                ? "LOADING NEURAL MODULES..."
                : progress < 90
                  ? "CALIBRATING INTERFACE..."
                  : "SYSTEM READY"}
          </span>
        </div>
      </div>

      <style jsx>{`
        .glitch-text {
          position: relative;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: 'Mahi Ahalawat Portfolio';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #C8B6FF 0%, #BDE0FE 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glitch-text::before {
          animation: glitch 2.5s infinite;
          clip-path: inset(0 0 65% 0);
          opacity: 0.5;
        }
        .glitch-text::after {
          animation: glitch 2.5s infinite reverse;
          clip-path: inset(65% 0 0 0);
          opacity: 0.3;
        }
      `}</style>
    </div>
  )
}
