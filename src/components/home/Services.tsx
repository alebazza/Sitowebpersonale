import { SERVICES } from "./data";
import { FadeIn } from "./motion";

export function Services() {
  return (
    <section
      id="servizi"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28">
            Servizi
          </h2>
        </FadeIn>

        <div>
          {SERVICES.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.1}>
              <div
                className={`flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:gap-8 sm:py-10 md:gap-12 md:py-12 ${
                  i > 0 ? "border-t border-[rgba(12,12,12,0.15)]" : ""
                }`}
              >
                <div className="shrink-0 text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#0C0C0C]">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight text-[#0C0C0C]">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-[#0C0C0C] opacity-60">
                    {s.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
