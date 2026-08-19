import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import type { Project } from "./data";
import { PROJECTS } from "./data";
import { FadeIn, LiveProjectButton } from "./motion";
import { SiteShot } from "./previews";

function ProjectCard({
  p,
  i,
  progress,
  range,
  targetScale,
}: {
  p: Project;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const num = String(i + 1).padStart(2, "0");

  return (
    <div className="sticky flex h-[85vh] items-center justify-center" style={{ top: `${i * 28 + 16}px` }}>
      <motion.div style={{ scale }} className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[44px] sm:p-6 md:rounded-[56px] md:p-8">
          {/* top row */}
          <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-5">
            <div className="flex items-start gap-4 sm:gap-8">
              <span className="hero-heading shrink-0 text-[clamp(3rem,10vw,140px)] font-black leading-none">{num}</span>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#D7E2EA]/60">{p.category}</p>
                <h3 className="mt-1 text-[clamp(1.4rem,3vw,2.6rem)] font-black uppercase leading-none tracking-tight text-[#D7E2EA]">
                  {p.name}
                </h3>
                <p className="mt-2.5 max-w-md text-[13px] font-light leading-relaxed text-[#D7E2EA]/60">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.pills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-[#D7E2EA]/15 px-2.5 py-0.5 font-mono text-[10px] text-[#D7E2EA]/50"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <LiveProjectButton href={p.url} className="hidden lg:inline-flex" />
          </div>

          {/* image grid */}
          <div className="mt-5 flex gap-3 sm:mt-6 sm:gap-4">
            <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 sm:rounded-[36px]" style={{ height: "clamp(130px,16vw,230px)" }}>
                <SiteShot p={p} layout="browser" chrome />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 sm:rounded-[36px]" style={{ height: "clamp(160px,22vw,340px)" }}>
                <SiteShot p={p} layout="hero" />
              </div>
            </div>
            <div className="w-[60%] overflow-hidden rounded-2xl border border-white/10 sm:rounded-[36px]">
              <SiteShot p={p} layout="tall" className="h-full" />
            </div>
          </div>

          {/* mobile live button */}
          <div className="mt-5 lg:hidden">
            <LiveProjectButton href={p.url} className="w-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });
  const total = PROJECTS.length;

  return (
    <section
      id="progetti"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]"
    >
      <div className="mx-auto max-w-6xl px-4 pt-20 sm:px-6 sm:pt-24 md:px-8 md:pt-28">
        <FadeIn>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            Progetti
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-4 max-w-[520px] text-center text-[clamp(0.95rem,1.6vw,1.15rem)] font-light text-[#D7E2EA]/60">
            Cinque siti reali, online, per attività reali. Aprili e provali sul telefono: sono gli stessi che userebbero
            i tuoi clienti.
          </p>
        </FadeIn>
      </div>

      <div ref={container} className="mt-10 sm:mt-16">
        {PROJECTS.map((p, i) => {
          const targetScale = 1 - (total - 1 - i) * 0.03;
          return (
            <ProjectCard
              key={p.name}
              p={p}
              i={i}
              progress={scrollYProgress}
              range={[i / total, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
