import { Github, Mail, MessageCircle, Phone } from "lucide-react";
import { FadeIn } from "./motion";

const CHANNELS = [
  {
    label: "WhatsApp",
    detail: "Risposta rapida",
    href: "https://wa.me/393335295659",
    icon: MessageCircle,
  },
  {
    label: "Email",
    detail: "alebazza08@gmail.com",
    href: "mailto:alebazza08@gmail.com",
    icon: Mail,
  },
  {
    label: "Telefono",
    detail: "+39 333 529 5659",
    href: "tel:+393335295659",
    icon: Phone,
  },
  {
    label: "GitHub",
    detail: "github.com/alebazza",
    href: "https://github.com/alebazza",
    icon: Github,
  },
];

export function Contact() {
  return (
    <section id="contatti" className="relative overflow-hidden bg-[#0C0C0C] px-5 py-24 sm:px-8 md:px-10 md:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-[radial-gradient(ellipse_60%_55%_at_50%_100%,rgba(187,204,215,0.08),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <FadeIn>
          <h2 className="hero-heading text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            Contattami
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-6 max-w-[480px] text-[clamp(1rem,1.8vw,1.25rem)] font-light leading-relaxed text-[#D7E2EA]/70">
            Raccontami la tua attività: rispondo entro 24 ore con un preventivo gratuito, senza impegno.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c, i) => (
            <FadeIn key={c.label} delay={0.15 + i * 0.08} className="h-full">
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener" : undefined}
                className="group flex h-full flex-col items-center gap-2.5 rounded-2xl border border-[#D7E2EA]/15 px-4 py-7 transition-colors duration-200 hover:border-[#D7E2EA]/40 hover:bg-[#D7E2EA]/5"
              >
                <c.icon className="h-5 w-5 text-[#D7E2EA] opacity-70 transition-opacity duration-200 group-hover:opacity-100" />
                <span className="text-[14px] font-medium uppercase tracking-wider text-[#D7E2EA]">{c.label}</span>
                <span className="font-mono text-[11px] text-[#D7E2EA]/50">{c.detail}</span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="mt-16 border-t border-[#D7E2EA]/10 pt-8 font-mono text-[11.5px] text-[#D7E2EA]/40">
            © 2026 Alessandro Bazzani — Siti web su misura · niente template, mai.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
