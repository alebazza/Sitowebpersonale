import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { ContactButton } from "./motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const NAV = [
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#servizi", label: "Servizi" },
  { href: "#progetti", label: "Progetti" },
  { href: "#contatti", label: "Contatti" },
];

const Web3D = lazy(() => import("@/components/home/three/Web3D"));

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative flex h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      {/* nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative z-20 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
        aria-label="Navigazione principale"
      >
        {NAV.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {l.label}
          </a>
        ))}
      </motion.nav>

      {/* huge heading */}
      <div className="relative z-10 mt-6 overflow-hidden sm:mt-4 md:-mt-5">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="hero-heading w-full whitespace-nowrap text-center text-[12.5vw] font-black uppercase leading-none tracking-tight sm:text-[13vw] md:text-[14vw] lg:text-[14.5vw]"
        >
          Alessandro
          <br />
          Bazzani
        </motion.h1>
      </div>

      {/* bottom bar */}
      <div className="relative z-20 mt-auto flex items-end justify-between gap-6 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
        >
          Siti web su misura per attività locali — scritti a mano, veloci, onesti
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
        >
          <ContactButton />
        </motion.div>
      </div>

      {/* 3D WEB — rotating gradient text, no background */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
        className="absolute left-1/2 top-1/2 z-10 w-[240px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:w-[340px] sm:translate-y-0 sm:bottom-0 md:w-[430px] lg:w-[520px]"
      >
        <div className="aspect-[4/3]">
          <Suspense fallback={null}>
            <Web3D reduced={reduced} />
          </Suspense>
        </div>
      </motion.div>

      {/* soft ambient glow behind everything */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-[radial-gradient(ellipse_60%_55%_at_50%_100%,rgba(187,204,215,0.09),transparent_70%)]"
        aria-hidden="true"
      />
    </section>
  );
}
