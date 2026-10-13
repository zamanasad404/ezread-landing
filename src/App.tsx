import React, { useState } from "react";
import { isValidEmail, joinWaitlist, type WaitlistProduct } from "./waitlist";

const APP_URL = "https://app.ezread.co.uk";
const CAREHOMES_URL = "https://carehomes.ezread.co.uk";
const EXTENSION_ZIP = "https://app.ezread.co.uk/downloads/ez-read-extension.zip";
const SUPPORT_EMAIL = "hello@ezread.co.uk";

const display = "font-display tracking-tight";

// Mulberry Symbols (CC BY-SA 4.0) copied into public/symbols. Decorative, so alt="".
const Sym = ({ name, className = "w-12 h-12" }: { name: string; className?: string }) => (
  <img src={`/symbols/${name}.svg`} alt="" className={`object-contain select-none ${className}`} draggable={false} />
);

// A symbol sitting in a soft coloured circle.
const SymBadge = ({ name, tint, size = "w-20 h-20", img = "w-14 h-14", className = "" }: { name: string; tint: string; size?: string; img?: string; className?: string }) => (
  <span className={`grid place-items-center rounded-full ${tint} ${size} ${className}`} aria-hidden="true">
    <Sym name={name} className={img} />
  </span>
);

const Logo = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <span className="grid place-items-center w-10 h-10 rounded-xl bg-ink text-ez font-display font-extrabold text-lg leading-none" aria-hidden="true">
      EZ
    </span>
    <span className="font-display font-bold text-xl">EZ Software</span>
  </span>
);

const Check = () => (
  <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Arrow = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
  </svg>
);

function WaitlistForm({ product, cta, dark = false }: { product: WaitlistProduct; cta: string; dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "saving" | "done" | "error">("idle");
  const valid = isValidEmail(email.trim());
  const inputId = `waitlist-${product}`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || state === "saving") return;
    setState("saving");
    try {
      await joinWaitlist(email, product);
      setState("done");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <p role="status" className={`flex items-start gap-2 font-semibold ${dark ? "text-neon" : "text-ink"}`}>
        <Check /> You're on the list. We'll email you when it's ready.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="w-full" noValidate>
      <label htmlFor={inputId} className={`block text-sm font-semibold mb-2 ${dark ? "text-white/80" : "text-ink-soft"}`}>
        Your email address
      </label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          id={inputId}
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (state === "error") setState("idle"); }}
          placeholder="name@example.com"
          className={`flex-1 min-w-0 rounded-xl px-4 py-3.5 text-base border-2 outline-none focus:ring-4 ${
            dark
              ? "bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-neon focus:ring-neon/25"
              : "bg-white border-line text-ink placeholder:text-ink-soft/50 focus:border-ink focus:ring-ez/40"
          }`}
        />
        <button
          type="submit"
          disabled={!valid || state === "saving"}
          className={`rounded-xl px-6 py-3.5 font-bold text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            dark ? "bg-neon text-ink hover:bg-white" : "bg-ink text-white hover:bg-plum"
          }`}
        >
          {state === "saving" ? "Adding you…" : cta}
        </button>
      </div>
      {state === "error" && (
        <p role="alert" className={`mt-2 text-sm ${dark ? "text-red-300" : "text-red-700"}`}>
          Sorry, that didn't work. Please try again, or email {SUPPORT_EMAIL}.
        </p>
      )}
      <p className={`mt-2 text-xs ${dark ? "text-white/50" : "text-ink-soft"}`}>
        We'll only use your email to tell you about this. Nothing else.
      </p>
    </form>
  );
}

/* Hero illustration: an EZ Browser window guiding a click, with an Easy Read card beside it. */
function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] mt-10 lg:mt-0" aria-hidden="true">
      <div className="rounded-2xl bg-ink shadow-2xl shadow-ink/25 overflow-hidden border border-ink">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1f2230]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 flex-1 rounded-lg bg-white/10 text-white/60 text-xs px-3 py-1.5 truncate">video-site.com/upload</span>
          <span className="rounded-lg bg-neon text-ink text-xs font-bold px-2.5 py-1.5">Help me</span>
        </div>
        <div className="relative bg-white p-6 sm:p-8 min-h-[300px]">
          <div className="space-y-3">
            <div className="h-4 w-2/3 rounded bg-slate-200" />
            <div className="h-3 w-full rounded bg-slate-100" />
            <div className="h-3 w-5/6 rounded bg-slate-100" />
            <div className="flex gap-3 pt-4">
              <div className="h-11 w-28 rounded-lg bg-slate-200" />
              <div className="relative z-20">
                <div className="h-11 px-5 rounded-lg bg-[#2563eb] text-white text-sm font-bold grid place-items-center neon-ring">Upload</div>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2"><div className="nudge text-neon text-2xl leading-none">▲</div></div>
              </div>
            </div>
            <div className="h-3 w-1/2 rounded bg-slate-100 pt-6" />
          </div>
          {/* dim layer */}
          <div className="absolute inset-0 z-10 bg-ink/55" />
          {/* speech bubble */}
          <div className="absolute z-30 left-4 right-4 sm:right-auto sm:left-6 bottom-5 sm:w-64 rounded-2xl bg-white p-4 shadow-xl">
            <p className="text-[11px] font-bold uppercase tracking-wider text-plum mb-1">Step 2 of 4</p>
            <p className="text-ink font-semibold leading-snug">Click the blue <span className="underline decoration-neon decoration-4 underline-offset-2">Upload</span> button.</p>
          </div>
        </div>
      </div>

      {/* friendly faces */}
      <div className="absolute -top-16 -left-4 sm:-left-16 rotate-[-6deg] bg-white rounded-3xl shadow-lg border-2 border-ink px-3 py-2 flex items-center gap-2">
        <Sym name="happy-lady" className="w-12 h-12" />
        <span className="font-display font-bold text-ink pr-1">“Oh, that's easy!”</span>
      </div>
      <SymBadge name="thumbs" tint="bg-ez" size="w-20 h-20" img="w-14 h-14" className="absolute -bottom-14 left-2 sm:-left-12 rotate-[-8deg] shadow-lg border-2 border-ink" />

      {/* Easy Read card */}
      <div className="absolute -right-2 sm:-right-8 -bottom-24 sm:-bottom-16 w-52 sm:w-56 rotate-[3deg] rounded-2xl bg-white border-2 border-ink p-4 shadow-xl">
        <p className="text-[11px] font-bold uppercase tracking-wider text-ez-deep mb-2">Easy Read</p>
        <div className="flex items-center gap-3">
          <Sym name="doctor" className="w-12 h-12 shrink-0" />
          <p className="text-ink font-semibold leading-snug text-sm">You will see the doctor on Monday.</p>
        </div>
      </div>
    </div>
  );
}

type Product = {
  id: string;
  name: string;
  status: "Available now" | "Free download" | "Coming soon";
  kind: string;
  blurb: string;
  points: string[];
  accent: string;
  icon: React.ReactNode;
  actions: React.ReactNode;
};

const products: Product[] = [
  {
    id: "ez-read-pro",
    name: "EZ Read Pro",
    status: "Available now",
    kind: "Web app",
    blurb: "Turn letters, plans and leaflets into Easy Read, with clear pictures beside every key idea. Ready to print in minutes.",
    points: ["3,400+ Mulberry symbols", "Ready-made templates", "Works on any device, no install"],
    accent: "bg-amber-100",
    icon: <Sym name="read" className="w-14 h-14" />,
    actions: (
      <>
        <a href={APP_URL} className="inline-flex items-center gap-2 rounded-xl bg-ink text-white font-bold px-5 py-3 hover:bg-plum transition-colors">
          Open EZ Read Pro <Arrow />
        </a>
        <a href={CAREHOMES_URL} className="inline-flex items-center gap-2 font-semibold text-ink underline underline-offset-4 decoration-2 decoration-ez hover:decoration-ink px-1 py-3">
          For care homes
        </a>
      </>
    ),
  },
  {
    id: "ez-read-extension",
    name: "EZ Read for Chrome & Edge",
    status: "Free download",
    kind: "Browser extension",
    blurb: "Make any web page Easy Read with one click: short sentences, everyday words and a picture beside each idea.",
    points: ["One click on any website", "Pictures, or your licensed Makaton signs", "Chrome and Microsoft Edge"],
    accent: "bg-sky-100",
    icon: <Sym name="laptop" className="w-14 h-14" />,
    actions: (
      <>
        <a href={EXTENSION_ZIP} download className="inline-flex items-center gap-2 rounded-xl bg-ink text-white font-bold px-5 py-3 hover:bg-plum transition-colors">
          Download free
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14" /></svg>
        </a>
        <a href={APP_URL} className="inline-flex items-center gap-2 font-semibold text-ink underline underline-offset-4 decoration-2 decoration-ez hover:decoration-ink px-1 py-3">
          How to install
        </a>
      </>
    ),
  },
  {
    id: "ez-browser",
    name: "EZ Browser",
    status: "Coming soon",
    kind: "Desktop app · Windows & Mac",
    blurb: "A web browser with a friendly guide built in. Ask for help, and it lights up the exact thing to click next.",
    points: ["Type or say what you want to do", "One glowing step at a time", "Warns you before paying or posting"],
    accent: "bg-emerald-100",
    icon: <Sym name="point" className="w-14 h-14" />,
    actions: (
      <a href="#ez-browser-detail" className="inline-flex items-center gap-2 rounded-xl bg-ink text-white font-bold px-5 py-3 hover:bg-plum transition-colors">
        Join the waitlist <Arrow />
      </a>
    ),
  },
];

const statusStyle: Record<Product["status"], string> = {
  "Available now": "bg-emerald-100 text-emerald-900",
  "Free download": "bg-sky-100 text-sky-900",
  "Coming soon": "bg-violet-100 text-violet-900",
};

function ProductCard({ p }: { p: Product }) {
  return (
    <article id={p.id} className="scroll-mt-24 flex flex-col rounded-[2rem] bg-white border-2 border-line hover:border-ink hover:-translate-y-1 transition-all p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className={`grid place-items-center w-20 h-20 rounded-full ${p.accent}`} aria-hidden="true">{p.icon}</div>
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyle[p.status]}`}>{p.status}</span>
      </div>
      <p className="text-sm font-semibold text-ink-soft">{p.kind}</p>
      <h3 className={`${display} text-2xl font-bold mt-1 mb-3`}>{p.name}</h3>
      <p className="text-ink-soft leading-relaxed mb-5">{p.blurb}</p>
      <ul className="space-y-2 mb-7">
        {p.points.map((pt) => (
          <li key={pt} className="flex items-start gap-2 text-ink"><Check /><span>{pt}</span></li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2">{p.actions}</div>
    </article>
  );
}

const audiences = [
  { sym: "older-lady", tint: "bg-amber-100", title: "Grandparents getting online", body: "Video calls, emails and online shopping, without the panic." },
  { sym: "happy-man", tint: "bg-sky-100", title: "People who like things simple", body: "Pictures and plain words, for learning disabilities, autism and more." },
  { sym: "family", tint: "bg-rose-100", title: "Families", body: "Help your loved ones do more on their own, even when you're not there." },
  { sym: "carer", tint: "bg-emerald-100", title: "Carers and support teams", body: "Easy Read letters and guides in minutes, not hours." },
];

const promises = [
  { sym: "talk", tint: "bg-amber-100", title: "Plain words", body: "No jargon. Every button says what it does, and every instruction is one short step." },
  { sym: "glasses", tint: "bg-sky-100", title: "Big and clear", body: "Large text, strong contrast and generous buttons, so nothing is fiddly or hard to see." },
  { sym: "thumbs", tint: "bg-emerald-100", title: "No training needed", body: "If you can send a text message, you can use EZ software. Open it and go." },
  { sym: "key", tint: "bg-violet-100", title: "Private by design", body: "We keep as little data as we can. EZ Browser turns your voice into text on your own computer." },
];

const browserFeatures = [
  { sym: "talk", title: "Ask in your own words", body: "Press Help me, then type or say what you want, like “How do I upload a video?”" },
  { sym: "point", title: "It shows you where", body: "The screen dims and a glowing box appears around the one thing to click next." },
  { sym: "mouse", title: "Wrong clicks are caught", body: "Clicks outside the glowing box are stopped, so you can't end up somewhere unexpected." },
  { sym: "loud", title: "Read aloud", body: "Each step can be spoken out loud, and repeated as many times as you like." },
  { sym: "warning", title: "Safety first", body: "It warns you before you pay, post or delete, flags pages that look like scams, and never asks for passwords." },
  { sym: "hold-hands", title: "Set up by someone you trust", body: "A family member or support worker can set it up once. Big buttons and a simple home page do the rest." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    { href: "#software", label: "Our software" },
    { href: "#ez-browser-detail", label: "EZ Browser" },
    { href: "#promise", label: "The EZ promise" },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink font-sans antialiased">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] bg-ink text-white px-4 py-2 rounded-lg">
        Skip to content
      </a>

      <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-line">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-18 py-3 flex items-center justify-between" aria-label="Main">
          <a href="#top" aria-label="EZ Software home"><Logo /></a>
          <div className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="font-semibold text-ink-soft hover:text-ink">{n.label}</a>
            ))}
            <a href={APP_URL} className="rounded-xl bg-ink text-white font-bold px-5 py-2.5 hover:bg-plum transition-colors">Open EZ Read Pro</a>
          </div>
          <button
            className="md:hidden p-2.5 rounded-xl border-2 border-line"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
              <path strokeLinecap="round" d={menuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </nav>
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-line px-4 pb-5 pt-2 flex flex-col">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="py-3 text-lg font-semibold border-b border-line">{n.label}</a>
            ))}
            <a href={APP_URL} className="mt-4 rounded-xl bg-ink text-white font-bold px-5 py-3.5 text-center">Open EZ Read Pro</a>
          </div>
        )}
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-ez/25 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute top-10 -left-40 w-[380px] h-[380px] rounded-full bg-neon/10 blur-3xl" aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative pt-14 pb-40 sm:pt-20 sm:pb-32 grid lg:grid-cols-[1.05fr_1fr] gap-16 lg:gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <SymBadge name="hello" tint="bg-white border-2 border-line" size="w-16 h-16" img="w-12 h-12" />
                <p className="relative rounded-2xl rounded-bl-sm bg-white border-2 border-line px-4 py-2 font-semibold">
                  Hello! <span className="text-ink-soft font-normal">EZ Browser is coming soon.</span>
                </p>
              </div>
              <h1 className={`${display} text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.98] mb-6`}>
                Technology,<br />
                made <span className="relative inline-block">
                  <span className="relative z-10">EZ.</span>
                  <span className="absolute left-0 right-0 bottom-1 sm:bottom-2 h-4 sm:h-5 bg-ez -z-0 -rotate-1" aria-hidden="true" />
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-ink-soft leading-relaxed max-w-xl mb-9">
                Friendly software for anyone who finds technology tricky, and for the families, carers and teams who help them. No jargon, no stress, just one easy step at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#software" className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink text-white font-bold text-lg px-7 py-4 hover:bg-plum transition-colors">
                  See our software <Arrow />
                </a>
                <a href="#ez-browser-detail" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border-2 border-ink font-bold text-lg px-7 py-4 hover:bg-ez transition-colors">
                  Join the EZ Browser waitlist
                </a>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        {/* Who it's for */}
        <section aria-labelledby="who-heading" className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
            <h2 id="who-heading" className={`${display} text-3xl sm:text-4xl font-bold text-center mb-10`}>Made for people like…</h2>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {audiences.map((a) => (
                <li key={a.title} className="flex flex-col items-center text-center rounded-[2rem] bg-white border-2 border-line p-5 sm:p-6">
                  <SymBadge name={a.sym} tint={a.tint} size="w-24 h-24 sm:w-28 sm:h-28" img="w-16 h-16 sm:w-20 sm:h-20" className="mb-4" />
                  <h3 className="font-display font-bold text-lg leading-tight mb-1">{a.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{a.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Products */}
        <section id="software" className="scroll-mt-20 bg-white border-y border-line">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
            <div className="max-w-2xl mb-12">
              <p className="font-bold text-ez-deep uppercase tracking-wider text-sm mb-3">Our software</p>
              <h2 className={`${display} text-4xl sm:text-5xl font-bold leading-tight mb-4`}>One family of tools. One simple idea.</h2>
              <p className="text-lg text-ink-soft leading-relaxed">Every EZ product does one job and does it clearly, so nobody gets left behind by technology.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => <React.Fragment key={p.id}><ProductCard p={p} /></React.Fragment>)}
            </div>

            <div className="mt-6 rounded-3xl border-2 border-dashed border-line p-6 sm:p-8 grid md:grid-cols-[1fr_1.1fr] gap-6 items-center">
              <div className="flex items-start gap-4">
                <SymBadge name="lightbulb" tint="bg-amber-100" size="w-16 h-16 shrink-0" img="w-11 h-11" />
                <div>
                <h3 className={`${display} text-2xl font-bold mb-2`}>More EZ software is on the way</h3>
                <p className="text-ink-soft leading-relaxed">We're building more tools in the same spirit. Leave your email and we'll tell you when something new launches.</p>
                </div>
              </div>
              <WaitlistForm product="ez-updates" cta="Keep me posted" />
            </div>
          </div>
        </section>

        {/* EZ Browser spotlight */}
        <section id="ez-browser-detail" className="scroll-mt-20 bg-ink text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
              <div className="lg:sticky lg:top-28">
                <span className="inline-block rounded-full bg-neon text-ink text-xs font-bold px-3 py-1 mb-5">Coming soon</span>
                <h2 className={`${display} text-4xl sm:text-5xl font-bold leading-tight mb-5`}>
                  EZ Browser.<br />
                  <span className="text-neon">Help is one click away.</span>
                </h2>
                <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
                  For anyone who needs a hand with technology. Say what you want to do, and EZ Browser guides you there one glowing step at a time, so nobody has to sit beside you.
                </p>
                <div className="rounded-2xl bg-white/5 border border-white/15 p-5 sm:p-6 max-w-lg">
                  <p className={`${display} text-xl font-bold mb-1`}>Be first to try it</p>
                  <p className="text-white/70 mb-4">Join the waitlist and we'll email you as soon as EZ Browser is ready to download.</p>
                  <WaitlistForm product="ez-browser" cta="Join the waitlist" dark />
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {browserFeatures.map((f) => (
                  <li key={f.title} className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
                    <SymBadge name={f.sym} tint="bg-white" size="w-16 h-16" img="w-11 h-11" className="mb-4 ring-4 ring-neon/30" />
                    <h3 className="font-bold text-lg mb-1.5">{f.title}</h3>
                    <p className="text-white/70 leading-relaxed">{f.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Promise */}
        <section id="promise" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
            <div className="max-w-2xl mb-12">
              <p className="font-bold text-ez-deep uppercase tracking-wider text-sm mb-3">The EZ promise</p>
              <h2 className={`${display} text-4xl sm:text-5xl font-bold leading-tight`}>Built for the people tech forgets.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {promises.map((p) => (
                <div key={p.title} className="rounded-[2rem] bg-white border-2 border-line p-6">
                  <SymBadge name={p.sym} tint={p.tint} size="w-16 h-16" img="w-11 h-11" className="mb-4" />
                  <h3 className={`${display} text-xl font-bold mb-2`}>{p.title}</h3>
                  <p className="text-ink-soft leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact band */}
        <section className="px-4 sm:px-6 pb-20">
          <div className="max-w-6xl mx-auto rounded-3xl bg-ez p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <SymBadge name="ask" tint="bg-white" size="w-20 h-20 shrink-0" img="w-14 h-14" className="hidden sm:grid" />
              <div>
              <h2 className={`${display} text-3xl sm:text-4xl font-bold mb-2`}>Questions? Just ask.</h2>
              <p className="text-lg text-ink/80">We're real people and we're happy to help, whether you're a family, a carer or an organisation.</p>
              </div>
            </div>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink text-white font-bold text-lg px-7 py-4 hover:bg-plum transition-colors shrink-0">
              {SUPPORT_EMAIL}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div>
            <Logo />
            <p className="text-sm text-ink-soft mt-3">© {new Date().getFullYear()} Novare Enterprises. Technology, made EZ.</p>
            <p className="text-xs text-ink-soft mt-1">
              Pictures: <a href="https://mulberrysymbols.org" className="underline hover:text-ink">Mulberry Symbols</a> © Garry Paxton, Steve Lee,{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="underline hover:text-ink">CC BY-SA 4.0</a>
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-ink-soft">
            <li><a href={APP_URL} className="hover:text-ink">EZ Read Pro</a></li>
            <li><a href={EXTENSION_ZIP} className="hover:text-ink">EZ Read extension</a></li>
            <li><a href="#ez-browser-detail" className="hover:text-ink">EZ Browser</a></li>
            <li><a href={CAREHOMES_URL} className="hover:text-ink">For care homes</a></li>
            <li><a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-ink">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
