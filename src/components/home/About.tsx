import type { ReactNode } from "react";
import { ABOUT_TEXT } from "./data";
import { AnimatedText, ContactButton, FadeIn } from "./motion";

/* ---------- code-themed corner decorations ---------- */
function Corner({
  className,
  children,
  glow,
}: {
  className: string;
  children: ReactNode;
  glow: string;
}) {
  return (
    <div className={`pointer-events-none absolute hidden select-none sm:block ${className}`} aria-hidden="true">
      <div className="relative flex h-full w-full items-center justify-center">
        <div
          className="absolute inset-0 rounded-full blur-[60px]"
          style={{ background: glow }}
        />
        <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

function CornerGlyphs() {
  return (
    <>
      {/* top-left — code badge */}
      <Corner
        className="top-[4%] left-[1%] h-[120px] w-[120px] sm:left-[2%] md:left-[4%] md:h-[210px] md:w-[210px]"
        glow="rgba(100,105,115,0.25)"
      >
        <span className="font-mono text-[clamp(2rem,5vw,4.5rem)] font-bold text-[#BBCCD7]/70">{"</>"}</span>
      </Corner>

      {/* bottom-left — terminal card */}
      <Corner
        className="bottom-[8%] left-[3%] h-[100px] w-[100px] sm:left-[6%] md:left-[10%] md:h-[180px] md:w-[180px]"
        glow="rgba(100,105,115,0.2)"
      >
        <div className="w-[70%] font-mono text-[clamp(8px,1vw,11px)] leading-relaxed text-[#D7E2EA]/60">
          <p className="text-[#BBCCD7]">$ npx build</p>
          <p>✓ pronto</p>
          <p className="text-[#646973]">▍</p>
        </div>
      </Corner>

      {/* top-right — braces / binary */}
      <Corner
        className="top-[4%] right-[1%] h-[120px] w-[120px] sm:right-[2%] md:right-[4%] md:h-[210px] md:w-[210px]"
        glow="rgba(100,105,115,0.25)"
      >
        <div className="flex flex-col gap-2 font-mono text-[clamp(0.8rem,1.6vw,1.4rem)] text-[#646973]">
          <span className="text-[#BBCCD7]/70">{`{ }`}</span>
          <span className="text-[10px] tracking-[0.3em]">01 10</span>
          <span className="text-[10px] tracking-[0.3em] text-[#BBCCD7]/40">11 01</span>
        </div>
      </Corner>

      {/* bottom-right — browser mini */}
      <Corner
        className="bottom-[8%] right-[3%] h-[130px] w-[130px] sm:right-[6%] md:right-[10%] md:h-[220px] md:w-[220px]"
        glow="rgba(100,105,115,0.2)"
      >
        <div className="w-[72%] overflow-hidden rounded-xl border border-white/10">
          <div className="flex gap-1.5 border-b border-white/10 bg-white/[0.04] px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f56]/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#ffbd2e]/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#27c93f]/70" />
          </div>
          <div className="space-y-1.5 bg-white/[0.02] p-3">
            <div className="h-1.5 w-3/4 rounded bg-white/15" />
            <div className="h-1.5 w-1/2 rounded bg-white/10" />
            <div className="h-6 rounded bg-[#BBCCD7]/10" />
          </div>
        </div>
      </Corner>
    </>
  );
}

export function About() {
  return (
    <section
      id="chi-sono"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      <CornerGlyphs />

      <div className="relative z-10 flex w-full flex-col items-center text-center">
        <FadeIn y={40} delay={0}>
          <h2 className="hero-heading text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            Chi sono
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 md:mt-16">
          <AnimatedText
            text={ABOUT_TEXT}
            className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
          />
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
