import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Flame, Dog, Coffee, Send, Twitter, BarChart3, ShoppingCart, Wallet, Coins, ArrowRightLeft, Sparkles } from "lucide-react";
import fineDog from "@/assets/fine-dog.png";
import fineOg from "@/assets/fine-og.gif.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$FINE — This Is Fine. The Real OG Meme on Solana" },
      { name: "description", content: "$FINE is the real OG 'This Is Fine' meme coin on Solana. Timeless, iconic, internet history." },
      { property: "og:title", content: "$FINE — This Is Fine. The Real OG." },
      { property: "og:description", content: "Legendary classic meme with true OG status. $FINE will be remembered." },
    ],
  }),
  component: Index,
});

const CA = "757jFkG6Y65ghwubn921XL4kQKXZ4vAgU1nhfTEKtMwo";
const DEX_URL = "https://dexscreener.com/solana/CLJHSFDnh1ys6vbwiXMVf2Pme9Wpef7abThXifUw1rwe";
const X_URL = "https://x.com/i/communities/2036792815955677398";
const TG_URL = "https://t.me/OGFinePortal";

function Flames({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none flex items-end gap-1 ${className}`} aria-hidden>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          className="animate-flicker"
          style={{
            animationDelay: `${i * 0.15}s`,
            width: "clamp(20px, 4vw, 48px)",
            height: `clamp(40px, ${6 + (i % 3) * 2}vw, 90px)`,
            background: "var(--gradient-fire)",
            clipPath: "polygon(50% 0%, 80% 30%, 100% 70%, 75% 100%, 25% 100%, 0% 70%, 20% 30%)",
            border: "2px solid var(--ink)",
          }}
        />
      ))}
    </div>
  );
}

function CopyCA() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(CA);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="group flex w-full max-w-2xl items-center justify-between gap-3 rounded-xl border-4 border-foreground bg-card px-4 py-3 text-left font-mono text-xs sm:text-sm md:text-base"
      style={{ boxShadow: "var(--shadow-comic)" }}
    >
      <span className="truncate">{CA}</span>
      <span className="rounded-md border-2 border-foreground bg-primary px-3 py-1 text-primary-foreground transition-transform group-hover:scale-105">
        {copied ? "COPIED!" : "COPY CA"}
      </span>
    </button>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--gradient-sky)" }}>
      {/* NAV */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-8">
        <div className="flex items-center gap-2 text-2xl sm:text-3xl">
          <span className="text-stroke text-primary">$FINE</span>
          <Flame className="text-primary" size={28} strokeWidth={2.5} fill="currentColor" />
        </div>
        <nav className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
          <a href="#about" className="hidden rounded-lg border-2 border-foreground bg-card px-3 py-2 sm:block" style={{ boxShadow: "3px 3px 0 var(--ink)" }}>ABOUT</a>
          <a href="#chart" className="hidden rounded-lg border-2 border-foreground bg-card px-3 py-2 sm:block" style={{ boxShadow: "3px 3px 0 var(--ink)" }}>CHART</a>
          <a href={DEX_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border-2 border-foreground bg-primary px-3 py-2 text-primary-foreground" style={{ boxShadow: "3px 3px 0 var(--ink)" }}>
            <ShoppingCart size={16} strokeWidth={2.5} /> BUY NOW
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-8 sm:pt-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-accent px-4 py-1 text-sm animate-wobble" style={{ boxShadow: "3px 3px 0 var(--ink)" }}>
              <Dog size={16} strokeWidth={2.5} /> THE REAL OG IS HERE
            </div>
            <h1 className="text-stroke text-5xl leading-none text-primary-foreground sm:text-7xl md:text-8xl">
              THIS IS<br/>FINE.
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base sm:text-lg" style={{ fontFamily: "Inter, system-ui" }}>
              <strong>$FINE</strong> is internet history on Solana. The most iconic meme of all time —
              timeless, instantly recognizable, deeply rooted in meme culture. Real OG memes are rare.
              This one is the real one.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={DEX_URL} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-4 border-foreground bg-primary px-6 py-3 text-lg text-primary-foreground transition-transform hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-comic)" }}>
                <Flame size={20} strokeWidth={2.5} fill="currentColor" /> BUY $FINE
              </a>
              <a href={X_URL} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-4 border-foreground bg-card px-6 py-3 text-lg transition-transform hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-comic)" }}>
                <Twitter size={20} strokeWidth={2.5} /> JOIN X
              </a>
              <a href={TG_URL} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-4 border-foreground bg-card px-6 py-3 text-lg transition-transform hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-comic)" }}>
                <Send size={20} strokeWidth={2.5} /> TELEGRAM
              </a>
            </div>
            <div className="mt-8">
              <p className="mb-2 text-sm uppercase tracking-widest" style={{ fontFamily: "Inter, system-ui" }}>Contract Address</p>
              <CopyCA />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-accent/40 blur-2xl" aria-hidden />
            <div className="relative rounded-3xl border-4 border-foreground bg-card p-3 animate-wobble" style={{ boxShadow: "var(--shadow-comic-lg)" }}>
              <img src={fineDog} alt="This is Fine dog sipping coffee surrounded by flames" className="w-full rounded-2xl border-2 border-foreground" />
            </div>
            <div className="absolute -bottom-6 -right-4 rotate-6 rounded-2xl border-4 border-foreground bg-primary px-4 py-2 text-primary-foreground text-xl" style={{ boxShadow: "var(--shadow-comic)" }}>
              $FINE / SOL
            </div>
          </div>
        </div>

        <Flames className="mt-10 justify-center" />
      </section>

      {/* MARQUEE */}
      <div className="border-y-4 border-foreground bg-foreground py-3 text-background overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap text-2xl sm:text-3xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10">
              <span>THIS IS FINE</span>
              <Flame size={28} fill="currentColor" />
              <span>REAL OG</span>
              <Dog size={28} />
              <span>INTERNET HISTORY</span>
              <Flame size={28} fill="currentColor" />
              <span>$FINE WILL BE REMEMBERED</span>
              <Coffee size={28} />
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-8">
        <h2 className="text-stroke text-center text-5xl text-primary sm:text-6xl">WHY $FINE?</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "REAL OG STATUS", d: "Most memes are fake runners — wrong tickers, wrong images, lost narratives. $FINE is the real one.", e: "🐶" },
            { t: "TIMELESS ICON", d: '"This Is Fine" is one of the most legendary memes in internet history. Instantly recognizable everywhere.', e: "🔥" },
            { t: "PERFECT NARRATIVE", d: "The narrative fits the current market perfectly. A legendary classic doesn't appear often.", e: "☕" },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border-4 border-foreground bg-card p-6" style={{ boxShadow: "var(--shadow-comic)" }}>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border-2 border-foreground bg-primary text-primary-foreground">
                {c.e === "🐶" ? <Dog size={32} strokeWidth={2.5} /> : c.e === "🔥" ? <Flame size={32} strokeWidth={2.5} fill="currentColor" /> : <Sparkles size={32} strokeWidth={2.5} />}
              </div>
              <h3 className="mt-4 text-2xl text-primary">{c.t}</h3>
              <p className="mt-2" style={{ fontFamily: "Inter, system-ui" }}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OG MOMENT */}
      {/* <section id="og" className="mx-auto max-w-6xl px-4 pb-20 sm:px-8">
        <h2 className="text-stroke mb-8 text-center text-5xl text-primary sm:text-6xl">THE OG MOMENT</h2>
        <div className="relative rounded-3xl border-4 border-foreground bg-card p-3" style={{ boxShadow: "var(--shadow-comic-lg)" }}>
          <img src={fineOg.url} alt="This Is Fine OG meme" className="w-full rounded-2xl border-2 border-foreground" />
          <div className="absolute -top-5 -left-4 -rotate-3 rounded-2xl border-4 border-foreground bg-accent px-4 py-2 text-xl" style={{ boxShadow: "var(--shadow-comic)" }}>
            "THIS IS FINE OG"
          </div>
        </div>
      </section> */}

      {/* CHART */}
      <section id="chart" className="mx-auto max-w-6xl px-4 pb-20 sm:px-8">
        <h2 className="text-stroke mb-8 text-center text-5xl text-primary sm:text-6xl">LIVE CHART</h2>
        <div className="rounded-3xl border-4 border-foreground bg-card p-3" style={{ boxShadow: "var(--shadow-comic-lg)" }}>
          <div style={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
            <iframe
              title="$FINE chart"
              src="https://dexscreener.com/solana/CLJHSFDnh1ys6vbwiXMVf2Pme9Wpef7abThXifUw1rwe?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=5"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, borderRadius: 16 }}
            />
          </div>
        </div>
      </section>

      {/* HOW TO BUY */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-8">
        <h2 className="text-stroke mb-10 text-center text-5xl text-primary sm:text-6xl">HOW TO BUY</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { n: "01", t: "GET A WALLET", d: "Download Phantom or Solflare.", Icon: Wallet },
            { n: "02", t: "FUND IT", d: "Send some SOL to your wallet.", Icon: Coins },
            { n: "03", t: "SWAP", d: "Open Jupiter or Raydium and paste the CA.", Icon: ArrowRightLeft },
            { n: "04", t: "STAY FINE", d: "Hold $FINE. Sip your coffee.", Icon: Coffee },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border-4 border-foreground bg-accent p-5" style={{ boxShadow: "var(--shadow-comic)" }}>
              <div className="flex items-center justify-between">
                <div className="text-stroke text-4xl text-primary-foreground">{s.n}</div>
                <s.Icon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="mt-2 text-xl">{s.t}</h3>
              <p className="mt-1 text-sm" style={{ fontFamily: "Inter, system-ui" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-8">
        <div className="rounded-3xl border-4 border-foreground bg-primary p-10 text-center text-primary-foreground" style={{ boxShadow: "var(--shadow-comic-lg)" }}>
          <h2 className="text-stroke text-4xl sm:text-6xl">BID ON THE REAL OG.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ fontFamily: "Inter, system-ui" }}>
            This isn't just another meme coin. It's internet history. $FINE will be remembered.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={DEX_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border-4 border-foreground bg-card px-6 py-3 text-lg text-foreground" style={{ boxShadow: "var(--shadow-comic)" }}>
              <BarChart3 size={20} strokeWidth={2.5} /> VIEW ON DEXSCREENER
            </a>
            <a href={TG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border-4 border-foreground bg-accent px-6 py-3 text-lg text-foreground" style={{ boxShadow: "var(--shadow-comic)" }}>
              <Send size={20} strokeWidth={2.5} /> JOIN THE PORTAL
            </a>
          </div>
        </div>
        <Flames className="mt-8 justify-center" />
      </section>

      <footer className="border-t-4 border-foreground bg-foreground py-6 text-center text-background" style={{ fontFamily: "Inter, system-ui" }}>
        <p className="inline-flex items-center justify-center gap-2">
          <Flame size={16} fill="currentColor" /> $FINE — This Is Fine · Not financial advice. Memes only. <Dog size={16} />
        </p>
      </footer>
    </div>
  );
}
