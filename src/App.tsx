import React, { useState } from 'react';
import {
  ArrowRight,
  CheckSquare,
  Clock,
  FileText,
  ShieldCheck,
  Zap,
  HelpCircle,
  Edit3,
  Image,
  Printer,
  Star,
  X,
  Menu,
  Heart,
  AlertCircle,
  BookOpen,
  Smile,
  Home,
  Shield,
  ChevronDown,
  ChevronUp,
  Play
} from 'lucide-react';

const REGISTER_URL = "https://app.ezread.co.uk?register=individual";
const APP_URL = "https://app.ezread.co.uk";

const StarRating = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-[#FFD500] text-[#FFD500]" />
    ))}
  </div>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left font-black uppercase text-lg"
      >
        <span>{q}</span>
        {open ? <ChevronUp className="h-6 w-6 shrink-0" /> : <ChevronDown className="h-6 w-6 shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-6 font-medium text-gray-700 border-t-4 border-black pt-4">
          {a}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F4F0] font-sans text-black selection:bg-[#FFD500]">

      {/* STICKY NAV */}
      <nav className="sticky top-0 z-50 border-b-4 border-black bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center border-4 border-black bg-[#FFD500] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <FileText className="h-6 w-6 stroke-[3]" />
            </div>
            <span className="text-2xl font-black uppercase tracking-tight">EZ Read Pro</span>
          </div>
          <div className="hidden md:flex md:items-center md:gap-6">
            <a href="#how-it-works" className="font-bold hover:underline">How It Works</a>
            <a href="#pricing" className="font-bold hover:underline">Pricing</a>
            <a href="#faq" className="font-bold hover:underline">FAQ</a>
            <a href={APP_URL} className="font-bold hover:underline">Try Demo</a>
            <a
              href={REGISTER_URL}
              className="border-4 border-black bg-[#FFD500] px-6 py-2.5 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Subscribe — £14.99/mo
            </a>
          </div>
          <button
            className="md:hidden p-2 border-2 border-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 border-t-4 border-black pt-4 flex flex-col gap-4">
            <a href="#how-it-works" className="font-bold" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#pricing" className="font-bold" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="font-bold" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a href={APP_URL} className="font-bold" onClick={() => setMobileMenuOpen(false)}>Try Demo Free</a>
            <a href={REGISTER_URL} className="border-4 border-black bg-[#FFD500] px-6 py-3 font-black uppercase text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Subscribe — £14.99/mo
            </a>
          </div>
        )}
      </nav>

      {/* URGENCY BANNER */}
      <div className="bg-black text-white py-3 text-center">
        <p className="font-bold uppercase tracking-wider text-sm">
          Early subscriber pricing — £14.99/month. Cancel anytime, no commitment.
        </p>
      </div>

      {/* HERO */}
      <header className="border-b-4 border-black bg-[#FFD500] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="inline-block border-4 border-black bg-black text-white px-4 py-2 text-sm font-black uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(255,213,0,1)] mb-6">
            For parents, family members and carers
          </div>
          <h1 className="text-5xl font-black leading-[1.1] tracking-tight md:text-7xl">
            TURN ANY INFORMATION INTO SOMETHING THEY ACTUALLY UNDERSTAND.
          </h1>
          <p className="mt-8 text-xl font-medium leading-relaxed max-w-3xl border-l-8 border-black pl-6">
            EZ Read Pro lets you create visual, symbol-supported documents in minutes — daily routines, appointment guides, medication reminders and more. No training. No IT sign-off. Works on your phone.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={REGISTER_URL}
              className="inline-flex items-center justify-center border-4 border-black bg-black text-[#FFD500] px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all"
            >
              Start for £14.99/month <ArrowRight className="ml-3 h-6 w-6 stroke-[3]" />
            </a>
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center border-4 border-black bg-white px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all gap-3"
            >
              <Play className="h-6 w-6" /> Try Free Demo First
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 font-bold text-sm">
            <span className="flex items-center gap-2"><CheckSquare className="h-5 w-5" /> Cancel anytime</span>
            <span className="flex items-center gap-2"><CheckSquare className="h-5 w-5" /> No data stored</span>
            <span className="flex items-center gap-2"><CheckSquare className="h-5 w-5" /> Works on mobile</span>
            <span className="flex items-center gap-2"><CheckSquare className="h-5 w-5" /> Instant access after payment</span>
          </div>
        </div>
      </header>

      {/* BEFORE AND AFTER */}
      <section className="border-b-4 border-black bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black uppercase md:text-5xl text-center mb-4">See the difference</h2>
          <p className="text-center text-xl font-medium mb-16">This is what EZ Read Pro does — in under 5 minutes.</p>

          <div className="grid md:grid-cols-2 gap-0 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Before */}
            <div className="border-b-4 md:border-b-0 md:border-r-4 border-black">
              <div className="bg-black text-white px-6 py-3 font-black uppercase text-sm tracking-wider">
                Before — NHS Appointment Letter
              </div>
              <div className="p-6 bg-gray-50 font-mono text-sm text-gray-600 leading-relaxed">
                <p className="font-bold text-gray-800 mb-3">Dear Patient,</p>
                <p className="mb-3">You have been referred to the Outpatient Department at St George's Hospital for a consultation with Dr Ahmed, Consultant Neurologist, regarding your recent MRI findings and ongoing symptomatology.</p>
                <p className="mb-3">Please attend the Neurology Outpatient Clinic, Level 3, Block C on <strong>Tuesday 3rd June 2026 at 14:30</strong>. Please bring this letter, your medication list and arrive 15 minutes prior to your appointment time.</p>
                <p className="mb-3">Should you need to cancel or rearrange, please contact the outpatient booking team on 020 8672 1255 ext 4421 with no less than 48 hours notice.</p>
                <p className="text-xs text-gray-400 mt-4">NHS Trust Reference: STG/NEURO/2026/04421</p>
              </div>
            </div>
            {/* After */}
            <div>
              <div className="bg-[#FFD500] px-6 py-3 font-black uppercase text-sm tracking-wider border-b-4 border-black">
                After — EZ Read Pro Version
              </div>
              <div className="bg-white">
                {[
                  { sym: "https://firebasestorage.googleapis.com/v0/b/ez-read-pro-3761e.firebasestorage.app/o/EN-symbols%2Fdoctor_1a.svg?alt=media", text: "You have a doctor's appointment." },
                  { sym: "https://firebasestorage.googleapis.com/v0/b/ez-read-pro-3761e.firebasestorage.app/o/EN-symbols%2Fwhen.svg?alt=media", text: "When: Tuesday 3rd June at 2:30pm" },
                  { sym: "https://firebasestorage.googleapis.com/v0/b/ez-read-pro-3761e.firebasestorage.app/o/EN-symbols%2Fsurgery_health_centre.svg?alt=media", text: "Where: St George's Hospital, Level 3, Block C" },
                  { sym: "https://firebasestorage.googleapis.com/v0/b/ez-read-pro-3761e.firebasestorage.app/o/EN-symbols%2Fdoctor_1b.svg?alt=media", text: "You will see: Dr Ahmed" },
                  { sym: "https://firebasestorage.googleapis.com/v0/b/ez-read-pro-3761e.firebasestorage.app/o/EN-symbols%2Fletter.svg?alt=media", text: "Bring with you: This letter and your medicines list" },
                  { sym: "https://firebasestorage.googleapis.com/v0/b/ez-read-pro-3761e.firebasestorage.app/o/EN-symbols%2Fwhen.svg?alt=media", text: "Arrive: 15 minutes early" },
                  { sym: "https://firebasestorage.googleapis.com/v0/b/ez-read-pro-3761e.firebasestorage.app/o/EN-symbols%2Ftelephone_mobile_2_%2C_to.svg?alt=media", text: "To cancel, call: 020 8672 1255" },
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-[80px_1fr] border-b-2 border-black last:border-b-0">
                    <div className="border-r-2 border-black p-3 flex items-center justify-center bg-[#F4F4F0]">
                      <img src={item.sym} alt="" className="w-14 h-14 object-contain" />
                    </div>
                    <div className="p-4 flex items-center">
                      <p className="font-medium text-sm leading-snug">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={REGISTER_URL}
              className="inline-flex items-center justify-center border-4 border-black bg-[#FFD500] px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Create yours in minutes — £14.99/month <ArrowRight className="ml-3 h-6 w-6 stroke-[3]" />
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <div className="border-b-4 border-black bg-[#F4F4F0] py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 font-bold text-sm uppercase tracking-wide text-gray-600">
            <span>✓ Used by carers across the UK</span>
            <span className="hidden sm:inline">|</span>
            <span>✓ 3,400+ Mulberry Symbols</span>
            <span className="hidden sm:inline">|</span>
            <span>✓ Supports Accessible Information Standard</span>
            <span className="hidden sm:inline">|</span>
            <span>✓ Zero patient data stored</span>
          </div>
        </div>
      </div>

      {/* PAIN POINTS */}
      <section className="border-b-4 border-black bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase md:text-5xl max-w-3xl">
            If this sounds familiar, EZ Read Pro is for you.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#FF90E8]">
              <AlertCircle className="h-12 w-12 stroke-[2.5] mb-4" />
              <h3 className="text-2xl font-black uppercase">"They came home with a letter they couldn't understand at all."</h3>
              <p className="mt-3 font-medium">Clinical language means nothing to someone with a learning disability or dementia. You spend an hour translating what should take minutes.</p>
            </div>
            <div className="border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#00E5FF]">
              <Clock className="h-12 w-12 stroke-[2.5] mb-4" />
              <h3 className="text-2xl font-black uppercase">"The morning routine just doesn't stick no matter what I try."</h3>
              <p className="mt-3 font-medium">Written lists don't work. Visual step-by-step guides with pictures are proven to help — but creating them from scratch takes time you don't have.</p>
            </div>
            <div className="border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#FFD500]">
              <Zap className="h-12 w-12 stroke-[2.5] mb-4" />
              <h3 className="text-2xl font-black uppercase">"I tried other tools but they were too complicated."</h3>
              <p className="mt-3 font-medium">Professional Easy Read software costs hundreds per month and requires training. There was nothing built for individual carers and families. Until now.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-b-4 border-black bg-[#F4F4F0] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black uppercase md:text-5xl">Ready in 3 steps</h2>
          <p className="text-center mt-4 text-xl font-medium">No training. No IT team. No design skills needed.</p>

          <div className="mt-16 overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] border-b-4 border-black">
              <div className="flex items-center justify-center border-r-4 border-black p-4 md:p-8 bg-[#00E5FF]">
                <Edit3 className="h-10 w-10 md:h-16 md:w-16 stroke-[2.5]" />
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-2xl font-black uppercase md:text-3xl">1. Pick a template</h3>
                <p className="mt-3 text-lg font-medium text-gray-700">Choose from 35+ templates built for real daily-life situations — morning routines, medication guides, appointment letters, emotion charts and more.</p>
              </div>
            </div>
            <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] border-b-4 border-black">
              <div className="flex items-center justify-center border-r-4 border-black p-4 md:p-8 bg-[#FF90E8]">
                <Image className="h-10 w-10 md:h-16 md:w-16 stroke-[2.5]" />
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-2xl font-black uppercase md:text-3xl">2. Add your content and symbols</h3>
                <p className="mt-3 text-lg font-medium text-gray-700">Type your text and search over 3,400 specialist Mulberry Symbols. The app handles the layout — you just fill in the words.</p>
              </div>
            </div>
            <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr]">
              <div className="flex items-center justify-center border-r-4 border-black p-4 md:p-8 bg-[#FFD500]">
                <Printer className="h-10 w-10 md:h-16 md:w-16 stroke-[2.5]" />
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-2xl font-black uppercase md:text-3xl">3. Export and use it</h3>
                <p className="mt-3 text-lg font-medium text-gray-700">One tap generates a print-ready PDF. Print it, save it to your phone, or send it to their care team. Done in minutes.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={REGISTER_URL}
              className="inline-flex items-center justify-center border-4 border-black bg-[#FFD500] px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Start Today — £14.99/month <ArrowRight className="ml-3 h-6 w-6 stroke-[3]" />
            </a>
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center border-4 border-black bg-white px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all gap-2"
            >
              <Play className="h-5 w-5" /> Try the demo first
            </a>
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section className="border-b-4 border-black bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase md:text-5xl">Templates for real life</h2>
          <p className="mt-4 text-xl font-medium max-w-3xl border-l-8 border-black pl-6">
            Every template is built around a moment carers and families actually face.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Clock className="h-8 w-8" />, color: "bg-[#00E5FF]", title: "Daily Routine", desc: "Morning routine, bedtime routine, getting dressed, preparing meals" },
              { icon: <Heart className="h-8 w-8" />, color: "bg-[#FF90E8]", title: "Health", desc: "I don't feel well, taking medication, personal hygiene, GP visits" },
              { icon: <Smile className="h-8 w-8" />, color: "bg-[#FFD500]", title: "Emotions", desc: "How I feel today, anxiety, anger, asking for help, saying no" },
              { icon: <Shield className="h-8 w-8" />, color: "bg-[#F4F4F0]", title: "Safety", desc: "Staying safe at home, fire safety, online safety, emergencies" },
              { icon: <Home className="h-8 w-8" />, color: "bg-[#FFD500]", title: "Social", desc: "Going to the shops, public transport, restaurants, visiting someone" },
              { icon: <BookOpen className="h-8 w-8" />, color: "bg-[#00E5FF]", title: "Money", desc: "Understanding money, budgeting basics, bank visits" },
              { icon: <Heart className="h-8 w-8" />, color: "bg-[#FF90E8]", title: "Relationships", desc: "Friendships, appropriate touch, keeping safe with people" },
              { icon: <Edit3 className="h-8 w-8" />, color: "bg-[#F4F4F0]", title: "Blank Document", desc: "Start from scratch and build exactly what you need" },
            ].map((t, i) => (
              <div key={i} className={`border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${t.color}`}>
                <div className="mb-3">{t.icon}</div>
                <h3 className="text-lg font-black uppercase">{t.title}</h3>
                <p className="mt-2 text-sm font-medium">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href={APP_URL} className="font-black uppercase underline underline-offset-4 text-lg hover:text-gray-600 transition-colors">
              See all templates in the free demo →
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b-4 border-black bg-[#F4F4F0] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase md:text-5xl">What carers are saying</h2>
          <p className="mt-4 text-xl font-medium">Real feedback from people using EZ Read Pro every day.</p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "I used to dread explaining hospital appointments to my son. Now I create a visual guide the night before and he actually looks forward to going.",
                name: "Sarah M.",
                role: "Parent of a 24-year-old with Down's syndrome",
                color: "bg-[#FF90E8]"
              },
              {
                quote: "The medication reminder I made took five minutes. My mum now takes her tablets without any confusion. It's such a simple thing but it changed everything.",
                name: "James T.",
                role: "Full-time carer for his mother with dementia",
                color: "bg-[#00E5FF]"
              },
              {
                quote: "I'm a PA for three clients. This saves me hours every week. The templates are exactly what I needed and the symbols are spot on.",
                name: "Denise K.",
                role: "Personal Assistant, London",
                color: "bg-[#FFD500]"
              }
            ].map((t, i) => (
              <div key={i} className={`border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${t.color}`}>
                <StarRating />
                <p className="mt-4 text-lg font-medium leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 border-t-4 border-black pt-4">
                  <p className="font-black">{t.name}</p>
                  <p className="text-sm font-medium text-gray-700">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-b-4 border-black bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl font-black uppercase md:text-5xl">Simple, honest pricing</h2>
            <p className="mt-4 text-xl font-medium">One plan. Everything included. Cancel anytime.</p>
          </div>

          <div className="mt-12 border-4 border-black bg-[#FFD500] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative p-8 md:p-12">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 border-4 border-black bg-black text-white px-6 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(255,213,0,1)] whitespace-nowrap">
              Everything You Need
            </div>

            <div className="text-center mt-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-8xl font-black">£14.99</span>
                <span className="text-2xl font-bold">/ month</span>
              </div>
              <p className="mt-2 font-bold uppercase text-gray-700">or £134.99/year — 2 months free</p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                "35+ daily life templates",
                "3,400+ Mulberry Symbols",
                "Unlimited document creation",
                "Instant PDF export",
                "Works on any device",
                "No patient data stored — ever",
                "Cancel anytime, no penalties",
                "Email support included",
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3 font-bold">
                  <CheckSquare className="h-6 w-6 shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href={REGISTER_URL}
                className="inline-flex items-center justify-center border-4 border-black bg-black text-[#FFD500] px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Subscribe Now <ArrowRight className="ml-3 h-6 w-6 stroke-[3]" />
              </a>
              <a
                href={APP_URL}
                className="inline-flex items-center justify-center border-4 border-black bg-white text-black px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all gap-2"
              >
                <Play className="h-5 w-5" /> Try free demo
              </a>
            </div>

            <p className="text-center mt-6 font-bold text-sm uppercase text-gray-700">
              Secure payment via Stripe · Cancel anytime from your account
            </p>
          </div>

          <div className="mt-8 border-l-8 border-black pl-6">
            <p className="font-bold text-gray-700">
              Need it for your care home, GP surgery, or support team?{' '}
              <a href="mailto:support@ezread.co.uk" className="underline underline-offset-4 font-black">
                View organisation plans →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-b-4 border-black bg-[#F4F4F0] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <ShieldCheck className="mx-auto h-20 w-20 stroke-[2]" />
          <h2 className="mt-8 text-4xl font-black uppercase md:text-5xl">Built around privacy</h2>
          <p className="mt-6 text-xl font-medium max-w-2xl mx-auto">
            EZ Read Pro never sees, stores or processes any information about the person you care for. Everything stays on your device.
          </p>

          <div className="mt-12 grid gap-6 text-left md:grid-cols-2">
            {[
              { title: "Zero Data Storage", body: "Documents are created and saved on your own device. Nothing is uploaded to our servers." },
              { title: "No Personal Information Required", body: "You never enter details about the person you care for. The app doesn't ask for it." },
              { title: "Accessible Information Standard", body: "The AIS gives people with communication needs the legal right to information they can understand. EZ Read Pro helps you meet that." },
              { title: "Clinically Validated Symbols", body: "Mulberry Symbols are specialist assets designed specifically for learning disability and accessible communication — not generic clip art." },
            ].map((item, i) => (
              <div key={i} className="border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
                <h4 className="flex items-center text-xl font-black uppercase"><CheckSquare className="mr-3 h-6 w-6 shrink-0" /> {item.title}</h4>
                <p className="mt-2 font-medium">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b-4 border-black bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black uppercase md:text-5xl mb-12">Questions answered</h2>

          <div className="space-y-4">
            {[
              { q: "Do I need any design or IT skills?", a: "None at all. If you can type a text message, you can use EZ Read Pro. Pick a template, type your content, add symbols, export as PDF. That's it." },
              { q: "Is this only for people with learning disabilities?", a: "No. The templates work for anyone who benefits from visual, clear communication — including people with dementia, acquired brain injuries, low literacy, autism, or anyone who finds dense text difficult to process." },
              { q: "What templates are included?", a: "You get 35+ daily life templates covering: daily routines, health and medication, emotions, safety, social situations, money basics, and relationships. All fully customisable." },
              { q: "Can I try it before subscribing?", a: "Yes — click Try Free Demo to explore the full template library and editor with no account needed. The demo shows you exactly what you get." },
              { q: "Can I cancel if I don't need it anymore?", a: "Yes, anytime. No minimum term, no cancellation fees. You manage your subscription directly from the Stripe customer portal." },
              { q: "Is my payment secure?", a: "All payments are handled by Stripe, one of the world's most trusted payment processors. We never see or store your card details." },
              { q: "I'm a support worker or PA — is this right for me?", a: "Yes. The individual plan works well for personal assistants and support workers managing one or a small number of clients. For larger teams, email support@ezread.co.uk about organisation plans." },
            ].map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-b-4 border-black bg-black px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl font-black uppercase leading-tight md:text-7xl text-white">
            Ready to make a difference<br/>
            <span className="text-[#FFD500]">today?</span>
          </h2>
          <p className="mt-6 text-2xl font-bold text-gray-300">
            £14.99/month. Cancel anytime. Instant access after payment.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href={REGISTER_URL}
              className="inline-flex items-center justify-center border-4 border-[#FFD500] bg-[#FFD500] text-black px-12 py-6 font-black uppercase tracking-wider text-2xl shadow-[8px_8px_0px_0px_rgba(255,213,0,0.4)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(255,213,0,0.4)] transition-all w-full sm:w-auto"
            >
              Subscribe Now — £14.99/mo <ArrowRight className="ml-3 h-7 w-7 stroke-[3]" />
            </a>
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center border-4 border-white bg-transparent text-white px-12 py-6 font-black uppercase tracking-wider text-2xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] transition-all w-full sm:w-auto gap-3"
            >
              <Play className="h-7 w-7" /> Try Demo Free
            </a>
          </div>
          <p className="mt-8 text-gray-500 font-bold uppercase text-sm tracking-wider">
            No credit card required for demo · Secure checkout via Stripe
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t-4 border-[#FFD500] px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center border-2 border-[#FFD500] bg-[#FFD500]">
              <FileText className="h-5 w-5 text-black stroke-[3]" />
            </div>
            <span className="text-xl font-black uppercase tracking-tight">EZ Read Pro</span>
          </div>
          <div className="text-sm font-medium text-gray-400 text-center">
            &copy; {new Date().getFullYear()} EZ Read Pro. All rights reserved.
            <div className="mt-1 opacity-50">Mulberry Symbols are copyright 2018 to 2026 Steve Lee, licensed under Creative Commons Attribution-ShareAlike</div>
          </div>
          <div className="flex gap-6 text-sm font-bold uppercase">
            <a href="https://ezread.co.uk/privacy" className="hover:text-[#FFD500]">Privacy</a>
            <a href="https://ezread.co.uk/terms" className="hover:text-[#FFD500]">Terms</a>
            <a href="mailto:support@ezread.co.uk" className="hover:text-[#FFD500]">Support</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
