import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "./data";
import { SiteShot } from "./previews";

export function Marquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const row1 = [...PROJECTS, ...PROJECTS, ...PROJECTS];
  const rotated = [...PROJECTS.slice(2), ...PROJECTS.slice(0, 2)];
  const row2 = [...rotated, ...rotated, ...rotated];

  const tile = (p: (typeof PROJECTS)[number], key: string) => (
    <div
      key={key}
      className="h-[190px] w-[300px] shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:h-[230px] sm:w-[360px] md:h-[270px] md:w-[420px]"
    >
      <SiteShot p={p} layout="tile" />
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0C0C0C] pt-24 pb-10 sm:pt-32 md:pt-40"
      aria-label="Progetti in evidenza"
    >
      <div className="flex w-max gap-3" style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}>
        {row1.map((p, i) => tile(p, `a-${i}`))}
      </div>
      <div className="mt-3 flex w-max gap-3" style={{ transform: `translateX(${200 - offset}px)`, willChange: "transform" }}>
        {row2.map((p, i) => tile(p, `b-${i}`))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0C0C0C] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0C0C0C] to-transparent" />
    </section>
  );
}
