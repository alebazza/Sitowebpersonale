import type { Project } from "./data";

/* ------------------------------------------------------------------ */
/* per-variant body (the actual "site content" inside the window)      */
/* ------------------------------------------------------------------ */
function PreviewBody({ p }: { p: Project }) {
  const accent = p.accent;
  switch (p.variant) {
    case "food":
      return (
        <div className="flex h-full w-full flex-col gap-2.5 p-4">
          <div className="rounded-lg bg-gradient-to-br from-[#ff9500] to-[#e8590c] p-3">
            <p className="text-[13px] font-extrabold tracking-tight text-white">Pizza &amp; Core</p>
            <div className="mt-1 h-1 w-3/4 rounded bg-white/30" />
            <div className="mt-1 h-1 w-1/2 rounded bg-white/20" />
            <div className="mt-2.5 inline-flex rounded-md bg-white px-3 py-1 font-mono text-[9px] font-bold text-[#b45309]">
              Ordina ora
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-2.5">
            {[0, 1].map((i) => (
              <div key={i} className="rounded-lg border border-white/5 bg-white/[0.03] p-2.5">
                <div className="h-8 rounded-md" style={{ backgroundColor: `${accent}33` }} />
                <div className="mt-2 h-1.5 w-4/5 rounded bg-white/15" />
                <div className="mt-1 h-1.5 w-3/5 rounded bg-white/[0.08]" />
              </div>
            ))}
          </div>
        </div>
      );
    case "street":
      return (
        <div className="flex h-full w-full flex-col gap-2.5 p-4">
          <div className="rounded-lg bg-gradient-to-br from-[#ff3b30]/90 to-[#b91c1c]/80 p-3">
            <p className="text-[13px] font-extrabold tracking-tight text-white">Kebab House</p>
            <div className="mt-1 h-1 w-2/3 rounded bg-white/30" />
            <div className="mt-2.5 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-4 flex-1 rounded bg-white/20" />
              ))}
            </div>
          </div>
          <div className="flex flex-1 gap-2.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1 rounded-lg border border-white/5 bg-white/[0.03] p-2.5">
                <div className="h-8 rounded-md" style={{ backgroundColor: `${accent}2e` }} />
                <div className="mt-2 h-1.5 w-full rounded bg-white/15" />
              </div>
            ))}
          </div>
        </div>
      );
    case "gym":
      return (
        <div className="flex h-full w-full flex-col gap-2.5 p-4">
          <div className="flex items-end justify-between rounded-lg bg-gradient-to-br from-[#5856d6]/85 to-[#3b3b9e]/70 p-3">
            <div>
              <p className="text-[14px] font-extrabold tracking-tight text-white">ELITE</p>
              <div className="mt-1 h-1 w-16 rounded bg-white/30" />
            </div>
            <div className="font-mono text-[15px] font-bold text-white/90">+30%</div>
          </div>
          <div className="flex flex-1 items-end gap-1.5">
            {[0.45, 0.75, 0.55, 1, 0.65].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{ height: `${h * 100}%`, backgroundColor: `${accent}${i === 3 ? "cc" : "66"}` }}
              />
            ))}
          </div>
        </div>
      );
    case "salon":
      return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.02] p-4">
          <p className="text-[12px] font-semibold tracking-[0.24em] text-white/85">SALON</p>
          <div className="h-1 w-16 rounded" style={{ backgroundColor: accent }} />
          <div className="mt-1 flex w-4/5 flex-col gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-1 flex-1 rounded bg-white/10" />
                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: `${accent}aa` }} />
              </div>
            ))}
          </div>
        </div>
      );
    case "gourmet":
      return (
        <div className="flex h-full w-full flex-col gap-2.5 p-4">
          <div className="rounded-lg bg-gradient-to-br from-[#4cd964]/70 to-[#1f8f45]/60 p-3">
            <p className="text-[13px] font-extrabold tracking-tight text-white">Gusto &amp; Co.</p>
            <div className="mt-1 h-1 w-1/2 rounded bg-white/30" />
          </div>
          <div className="grid flex-1 grid-cols-3 gap-2.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-white/5 bg-white/[0.03] p-2.5">
                <div className="h-8 rounded-md" style={{ backgroundColor: `${accent}2e` }} />
                <div className="mt-2 h-1.5 w-full rounded bg-white/15" />
              </div>
            ))}
          </div>
        </div>
      );
  }
}

/* ------------------------------------------------------------------ */
/* layout bodies                                                       */
/* ------------------------------------------------------------------ */
function HeroBody({ p }: { p: Project }) {
  const Icon = p.icon;
  return (
    <div
      className="flex h-full w-full flex-col justify-between p-5 sm:p-7"
      style={{ background: `linear-gradient(150deg, ${p.accent}e6 0%, ${p.accent}66 55%, #0e0e10 100%)` }}
    >
      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">{p.category}</p>
        <h3 className="mt-1.5 font-black uppercase leading-[0.95] tracking-tight text-white text-[clamp(1.5rem,4vw,3rem)]">
          {p.name}
        </h3>
        <div className="mt-2.5 h-1.5 w-2/3 rounded bg-white/30" />
        <div className="mt-1.5 h-1.5 w-1/2 rounded bg-white/20" />
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full bg-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0C0C0C]">
          {p.cta}
        </span>
        <Icon className="h-6 w-6 text-white/80" />
      </div>
    </div>
  );
}

function ListBody({ p }: { p: Project }) {
  return (
    <div className="flex h-full w-full flex-col gap-2.5 p-5 sm:p-7">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: p.accent }}>
        {p.category}
      </p>
      {[0, 1, 2, 3, 4].map((r) => (
        <div key={r} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
          <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: p.accent, opacity: 0.4 + r * 0.14 }} />
          <div className="h-1.5 w-1/3 rounded bg-white/15" />
          <div className="h-1.5 flex-1 rounded bg-white/[0.07]" />
        </div>
      ))}
    </div>
  );
}

function TallBody({ p }: { p: Project }) {
  const Icon = p.icon;
  return (
    <div className="flex h-full w-full flex-col">
      <div
        className="flex h-[42%] min-h-[110px] items-end justify-between p-5 sm:p-7"
        style={{ background: `linear-gradient(150deg, ${p.accent}d9 0%, ${p.accent}4d 60%, #0e0e10 100%)` }}
      >
        <div>
          <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/70">{p.category}</p>
          <h4 className="mt-1 font-black uppercase leading-none tracking-tight text-white text-[clamp(1.3rem,3vw,2.4rem)]">
            {p.name}
          </h4>
        </div>
        <Icon className="h-5 w-5 text-white/70" />
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-2.5 p-4 sm:p-6">
        {[0, 1, 2, 3].map((r) => (
          <div key={r} className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3.5 py-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: p.accent, opacity: 0.4 + r * 0.18 }} />
            <div className="h-1.5 flex-1 rounded bg-white/15" />
          </div>
        ))}
      </div>
    </div>
  );
}

function TileBody({ p }: { p: Project }) {
  return (
    <div className="flex h-full w-full flex-col">
      <div
        className="flex h-[52%] items-end p-4"
        style={{ background: `linear-gradient(150deg, ${p.accent}d9 0%, ${p.accent}40 70%, #0e0e10 100%)` }}
      >
        <div>
          <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/70">{p.category}</p>
          <h4 className="mt-0.5 font-black uppercase leading-none tracking-tight text-white text-[clamp(1.1rem,3vw,1.9rem)]">
            {p.name}
          </h4>
          <div className="mt-2 h-1 w-24 rounded bg-white/30" />
        </div>
      </div>
      <div className="flex min-h-0 flex-1 items-center gap-2.5 p-3">
        {[0, 1, 2].map((c) => (
          <div key={c} className="h-full flex-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
            <div className="h-[36%] rounded-md" style={{ backgroundColor: `${p.accent}2e` }} />
            <div className="mt-1.5 h-1 w-4/5 rounded bg-white/15" />
            <div className="mt-1 h-1 w-3/5 rounded bg-white/[0.08]" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* frame (browser chrome)                                              */
/* ------------------------------------------------------------------ */
function ChromeBar({ p }: { p: Project }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/5 bg-[#0c0c0e] px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      <div className="ml-3 flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-white/[0.04] px-2.5 py-1">
        <span className="h-2 w-2 shrink-0 rounded-full border border-white/25" />
        <span className="truncate font-mono text-[10px] text-[#D7E2EA]/60">{p.urlShort}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* main export                                                         */
/* ------------------------------------------------------------------ */
export function SiteShot({
  p,
  layout = "browser",
  chrome = false,
  className = "",
}: {
  p: Project;
  layout?: "browser" | "hero" | "list" | "tall" | "tile";
  chrome?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative flex h-full w-full flex-col overflow-hidden bg-[#0e0e10] ${className}`}>
      {chrome && <ChromeBar p={p} />}
      <div className="flex min-h-0 flex-1 flex-col">
        {layout === "browser" ? (
          <PreviewBody p={p} />
        ) : layout === "hero" ? (
          <HeroBody p={p} />
        ) : layout === "list" ? (
          <ListBody p={p} />
        ) : layout === "tile" ? (
          <TileBody p={p} />
        ) : (
          <TallBody p={p} />
        )}
      </div>
    </div>
  );
}
