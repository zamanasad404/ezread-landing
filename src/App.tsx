import React, { useState } from "react";

const REGISTER_URL = "https://app.ezread.co.uk?register=individual";
const APP_URL = "https://app.ezread.co.uk?demo=individual";
const SYM = "https://firebasestorage.googleapis.com/v0/b/ez-read-pro-3761e.firebasestorage.app/o/EN-symbols%2F";

const templates = [
  { sym: "morning.svg", title: "Morning Routine", desc: "A step-by-step guide to getting up, washed and dressed. Reduces arguments and makes mornings calmer." },
  { sym: "tablets.svg", title: "Taking Medication", desc: "Clear visual instructions showing what each tablet looks like, when to take it, and how many." },
  { sym: "doctor_1a.svg", title: "Hospital Appointment", desc: "Turn any NHS letter into a simple visual guide — when, where, who they will see, what to bring." },
  { sym: "happy_lady.svg", title: "How I Feel Today", desc: "A simple emotions chart so the person you care for can show you how they are feeling." },
  { sym: "bed_time.svg", title: "Bedtime Routine", desc: "A calming visual guide to the end-of-day routine — washing, brushing teeth, getting ready for bed." },
  { sym: "worried_lady.svg", title: "When I Feel Anxious", desc: "Helps them recognise anxiety and know what to do — breathe, tell someone, take a break." },
  { sym: "shop.svg", title: "Going to the Shops", desc: "Step-by-step guide for an independent trip — what to buy, how to pay, when to come home." },
  { sym: "money.svg", title: "Understanding Money", desc: "Simple visual guide to budgeting, paying for things, and keeping track of spending." },
  { sym: "safety_goggles.svg", title: "Staying Safe at Home", desc: "Visual safety reminders for locking doors, not opening to strangers, and what to do in an emergency." },
];

const faqs = [
  { q: "Do I need any tech skills?", a: "None at all. If you can send a text message, you can use EZ Read Pro. Open a template, type your details, tap export. That is it." },
  { q: "Can I try it before subscribing?", a: "Yes — tap Try Free Demo below to explore every template and the full symbol library with no account needed." },
  { q: "What templates are included?", a: "All 35+ daily life templates — morning and bedtime routines, medication reminders, appointment guides, emotion charts, safety guides, social situations, money basics and more." },
  { q: "Is this only for people with learning disabilities?", a: "No. The templates work for anyone who benefits from clear visual communication — including people with dementia, brain injuries, low literacy, autism, or anyone who finds standard written information hard to follow." },
  { q: "How do I cancel?", a: "Log in to your Stripe account and cancel in one click. No phone calls, no forms, no notice period." },
  { q: "Is my payment secure?", a: "All payments are handled by Stripe. We never see or store your card details." },
];

const Tick = () => (
  <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-stone-200 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left bg-white gap-3">
        <span className="font-semibold text-stone-800 text-base leading-snug">{q}</span>
        <svg className="w-5 h-5 text-stone-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
        </svg>
      </button>
      {open && <div className="px-5 pb-5 text-stone-600 text-sm leading-relaxed bg-white border-t border-stone-100">{a}</div>}
    </div>
  );
};

const SymCard = ({ sym, title, desc }: { sym: string; title: string; desc: string }) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 flex gap-4 items-start">
    <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100">
      <img src={`${SYM}${sym}?alt=media`} alt={title} className="w-10 h-10 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
    </div>
    <div>
      <h3 className="font-bold text-stone-800 text-base mb-1">{title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">

      <nav className="sticky top-0 z-50 bg-white border-b border-stone-100 shadow-sm">
        <div className="max-w-xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-bold text-stone-800 text-lg">EZ Read Pro</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={APP_URL} className="text-sm font-medium text-stone-500 hidden sm:block">Try Demo</a>
            <a href={REGISTER_URL} className="bg-amber-400 hover:bg-amber-500 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors">Get Access</a>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-amber-50 to-stone-50 px-5 pt-12 pb-16">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {["👩 Parents", "👴 Family carers", "🤝 Support workers"].map((tag, i) => (
              <span key={i} className="bg-white border border-stone-200 rounded-full px-4 py-1.5 text-sm font-medium text-stone-600 shadow-sm">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl font-bold leading-tight text-stone-900 mb-5">
            Everything you need to help them understand — already made for you.
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed mb-8">
            35+ ready-made guides for every situation you face as a carer. Morning routines, medication reminders, hospital appointments and more. Open a template, add your details, done in minutes.
          </p>
          <div className="flex flex-col gap-3 mb-8">
            <a href={REGISTER_URL} className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold text-lg py-4 rounded-2xl text-center transition-colors shadow-sm block">
              Get Access — £14.99/month
            </a>
            <a href={APP_URL} className="w-full bg-white hover:bg-stone-50 text-stone-700 font-semibold text-lg py-4 rounded-2xl text-center transition-colors border border-stone-200 shadow-sm block">
              Try Free Demo First
            </a>
          </div>
          <div className="flex flex-col gap-2">
            {["No starting from scratch — templates already built", "Works on your phone", "Cancel anytime — no commitment"].map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <Tick />
                <span className="text-stone-600 text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 bg-white">
        <div className="max-w-xl mx-auto">
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 mb-8">
            <p className="text-stone-700 text-lg leading-relaxed font-medium">
              "You already do everything you can for the person you care for. This makes one part of it easier."
            </p>
          </div>
          <h2 className="text-2xl font-bold text-stone-900 mb-5">Does this sound familiar?</h2>
          <div className="flex flex-col gap-4">
            {[
              { emoji: "📬", text: "They came home with an NHS letter they could not understand at all" },
              { emoji: "⏰", text: "The morning routine takes twice as long because nothing is written down clearly" },
              { emoji: "💊", text: "You worry about medication because the instructions are confusing" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-stone-50 rounded-2xl p-4 border border-stone-100">
                <span className="text-2xl">{item.emoji}</span>
                <p className="text-stone-700 font-medium leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-stone-600 text-base text-center font-medium">EZ Read Pro has a ready-made guide for all of these — and 32 more.</p>
        </div>
      </section>

      <section className="px-5 py-12 bg-stone-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">See the difference</h2>
          <p className="text-stone-500 mb-8">This is what EZ Read Pro does — in under 5 minutes.</p>
          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm mb-4">
            <div className="bg-stone-700 text-white px-4 py-3 text-xs font-bold uppercase tracking-wider">Before — NHS Appointment Letter</div>
            <div className="bg-white p-4 font-mono text-xs text-stone-500 leading-relaxed">
              <p className="font-bold text-stone-700 mb-2">Dear Patient,</p>
              <p className="mb-2">You have been referred to the Outpatient Department at St Georges Hospital for a consultation with Dr Ahmed, Consultant Neurologist, regarding your recent MRI findings and ongoing symptomatology.</p>
              <p className="mb-2">Please attend the Neurology Outpatient Clinic, Level 3, Block C on Tuesday 3rd June 2026 at 14:30. Please bring this letter and arrive 15 minutes prior.</p>
              <p className="text-stone-400 text-xs mt-2">NHS Trust Reference: STG/NEURO/2026/04421</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-amber-200 shadow-sm mb-6">
            <div className="bg-amber-400 text-white px-4 py-3 text-xs font-bold uppercase tracking-wider">After — EZ Read Pro Version</div>
            <div className="bg-white divide-y divide-stone-100">
              {[
                { sym: "doctor_1a.svg", text: "You have a doctors appointment." },
                { sym: "when.svg", text: "When: Tuesday 3rd June at 2:30pm" },
                { sym: "surgery_health_centre.svg", text: "Where: St Georges Hospital, Level 3, Block C" },
                { sym: "doctor_1b.svg", text: "You will see: Dr Ahmed" },
                { sym: "letter.svg", text: "Bring: This letter and your medicines list" },
                { sym: "when.svg", text: "Arrive 15 minutes early" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                    <img src={`${SYM}${item.sym}?alt=media`} alt="" className="w-8 h-8 object-contain" />
                  </div>
                  <p className="text-stone-700 text-sm font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <a href={REGISTER_URL} className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold text-lg py-4 rounded-2xl text-center transition-colors shadow-sm block">
            Create yours in minutes — £14.99/month
          </a>
        </div>
      </section>

      <section className="px-5 py-12 bg-white">
        <div className="max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 text-sm font-medium text-amber-700 mb-4">
            The template library
          </div>
          <h2 className="text-2xl font-bold text-stone-900 mb-2">35+ guides already made.</h2>
          <p className="text-stone-500 mb-8">Open, personalise, use. Every template uses specialist Mulberry Symbols — the same symbols used by speech and language therapists across the UK.</p>
          <div className="flex flex-col gap-4 mb-8">
            {templates.map((t, i) => (
              <SymCard key={i} sym={t.sym} title={t.title} desc={t.desc} />
            ))}
          </div>
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 mb-6">
            <p className="text-stone-700 font-medium text-sm">Plus 26 more templates covering personal hygiene, fire safety, online safety, friendships, relationships, public transport, restaurants, asking for help, saying no and more.</p>
          </div>
          <a href={REGISTER_URL} className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold text-lg py-4 rounded-2xl text-center transition-colors shadow-sm block mb-3">
            Get Access to All 35+ Templates
          </a>
          <a href={APP_URL} className="w-full bg-white hover:bg-stone-50 text-stone-700 font-semibold text-lg py-4 rounded-2xl text-center transition-colors border border-stone-200 shadow-sm block">
            Try Free Demo First
          </a>
        </div>
      </section>

      <section className="px-5 py-12 bg-stone-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">How it works</h2>
          <p className="text-stone-500 mb-8">Three steps. No training needed.</p>
          <div className="flex flex-col gap-4">
            {[
              { num: "1", color: "bg-blue-100 text-blue-600", title: "Open a template", body: "Browse 35+ guides by category. Find the one you need in seconds. Daily routines, health, emotions, safety and more." },
              { num: "2", color: "bg-amber-100 text-amber-600", title: "Add your details and symbols", body: "Type your specific information. Search 3,400+ specialist Mulberry Symbols and add them with one tap." },
              { num: "3", color: "bg-green-100 text-green-600", title: "Export as PDF and use it", body: "One tap creates a print-ready PDF. Print it, save it to your phone, or share with their care team." },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm flex gap-4 items-start">
                <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center font-bold text-lg shrink-0`}>{step.num}</div>
                <div>
                  <h3 className="font-bold text-stone-800 text-base mb-1">{step.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">What happens when you subscribe</h2>
          <p className="text-stone-500 mb-8">No waiting. Instant access.</p>
          <div className="flex flex-col gap-3 mb-6">
            {[
              { emoji: "✏️", title: "Create your account", body: "Enter your email and password. Takes 30 seconds." },
              { emoji: "🔒", title: "Pay securely via Stripe", body: "Taken to Stripes secure checkout. £14.99 is taken. That is it." },
              { emoji: "⚡", title: "Instant access", body: "As soon as payment confirms, your account is active. All 35+ templates available immediately." },
              { emoji: "📄", title: "Open your first template", body: "Browse the library, pick a template, add your details, export. All within minutes." },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-stone-50 rounded-2xl p-4 border border-stone-100">
                <span className="text-2xl">{step.emoji}</span>
                <div>
                  <h3 className="font-semibold text-stone-800 text-sm mb-0.5">{step.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-500 text-sm">Cancel anytime from your Stripe account — one click, no forms.</p>
        </div>
      </section>

      <section className="px-5 py-12 bg-stone-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">Simple, honest pricing</h2>
          <p className="text-stone-500 mb-8">One plan. Everything included.</p>
          <div className="bg-white rounded-2xl border border-amber-200 shadow-sm overflow-hidden mb-6">
            <div className="bg-amber-400 px-6 py-5">
              <p className="text-white font-bold text-sm uppercase tracking-wide">Everything included</p>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-5xl font-bold text-white">£14.99</span>
                <span className="text-white font-medium">/ month</span>
              </div>
              <p className="text-amber-100 text-sm mt-1">Less than 50p a day</p>
            </div>
            <div className="p-6 flex flex-col gap-3">
              {["All 35+ daily life templates","3,400+ specialist Mulberry Symbols","Unlimited document creation","Instant PDF export","Works on any phone, tablet or computer","No personal data ever stored","Cancel anytime — one click in Stripe","Email support included"].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Tick />
                  <span className="text-stone-700 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <a href={REGISTER_URL} className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold text-lg py-4 rounded-2xl text-center transition-colors shadow-sm block mb-3">
            Get Access Now
          </a>
          <a href={APP_URL} className="w-full bg-white hover:bg-stone-50 text-stone-700 font-semibold text-lg py-4 rounded-2xl text-center transition-colors border border-stone-200 shadow-sm block mb-6">
            Try Free Demo First
          </a>
          <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100 text-center">
            <p className="text-stone-600 text-sm">Need this for a care home? <a href="https://carehomes.ezread.co.uk" className="text-amber-600 font-semibold underline">View organisation plans →</a></p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Built around your privacy</h2>
          <div className="flex flex-col gap-4">
            {[
              { emoji: "🔒", title: "Zero data storage", body: "Documents are created on your own device. Nothing about the person you care for is uploaded to our servers — ever." },
              { emoji: "👤", title: "No personal information required", body: "You never enter details about the person you care for. The app does not ask for it." },
              { emoji: "✅", title: "Supports the Accessible Information Standard", body: "EZ Read Pro helps you provide information in a format people can understand — a legal right under the AIS." },
              { emoji: "🎨", title: "Specialist Mulberry Symbols", body: "Every symbol is a Mulberry Symbol — used by speech and language therapists across the UK. Not generic clip art." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-stone-50 rounded-2xl p-4 border border-stone-100">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <h3 className="font-semibold text-stone-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 bg-stone-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">Questions answered</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 bg-amber-400">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3 leading-tight">The guides are ready. You just need to open them.</h2>
          <p className="text-amber-100 text-lg mb-8">35+ templates. £14.99/month. Instant access. Cancel anytime.</p>
          <a href={REGISTER_URL} className="w-full bg-white hover:bg-stone-50 text-amber-600 font-bold text-lg py-4 rounded-2xl text-center transition-colors shadow-sm block mb-3">
            Get Access Now — £14.99/mo
          </a>
          <a href={APP_URL} className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold text-lg py-4 rounded-2xl text-center transition-colors block">
            Try Free Demo First
          </a>
          <p className="text-amber-200 text-sm mt-6">No credit card needed for demo · Secure checkout via Stripe</p>
        </div>
      </section>

      <footer className="bg-stone-800 px-5 py-10 text-stone-400">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="font-bold text-white">EZ Read Pro</span>
          </div>
          <div className="flex flex-wrap gap-5 text-sm mb-6">
            <a href="https://ezread.co.uk/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="https://ezread.co.uk/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:support@ezread.co.uk" className="hover:text-white transition-colors">Support</a>
            <a href="https://carehomes.ezread.co.uk" className="hover:text-white transition-colors">Care Homes</a>
          </div>
          <p className="text-xs text-stone-500 leading-relaxed">© 2026 EZ Read Pro. All rights reserved. Mulberry Symbols © 2018–2026 Steve Lee, licensed under Creative Commons Attribution-ShareAlike.</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-stone-200 px-4 py-3 flex gap-3 shadow-lg sm:hidden">
        <a href={APP_URL} className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold py-3 rounded-xl text-center text-sm transition-colors">Try Free</a>
        <a href={REGISTER_URL} className="flex-1 bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 rounded-xl text-center text-sm transition-colors">Get Access — £14.99</a>
      </div>
      <div className="h-16 sm:hidden"></div>

    </div>
  );
}
