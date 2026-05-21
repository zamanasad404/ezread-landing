import React, { useState } from 'react';
import {
  ArrowRight,
  CheckSquare,
  Clock,
  FileText,
  ShieldCheck,
  Star,
  X,
  Menu,
  Heart,
  ChevronDown,
  ChevronUp,
  Play,
  Smile,
  Shield,
  BookOpen,
  Phone,
  Pill,
  Home,
  AlertCircle,
  Users,
  Wallet
} from 'lucide-react';

const REGISTER_URL = "https://app.ezread.co.uk?register=individual";
const APP_URL = "https://app.ezread.co.uk";
const SYM = "https://firebasestorage.googleapis.com/v0/b/ez-read-pro-3761e.firebasestorage.app/o/EN-symbols%2F";

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
        className="w-full flex items-center justify-between p-6 text-left font-black uppercase text-lg gap-4"
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

const TemplateCard = ({ icon, color, title, desc, symbol }: { icon: React.ReactNode; color: string; title: string; desc: string; symbol: string }) => (
  <div className={`border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${color} p-6`}>
    <div className="flex items-center gap-4 mb-4">
      <div className="w-16 h-16 border-4 border-black bg-white flex items-center justify-center flex-shrink-0">
        <img src={`${SYM}${symbol}?alt=media`} alt="" className="w-12 h-12 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }} />
      </div>
      <h3 className="text-xl font-black uppercase leading-tight">{title}</h3>
    </div>
    <p className="font-medium text-gray-800 text-sm leading-relaxed">{desc}</p>
  </div>
);

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
            <a href="#templates" className="font-bold hover:underline">Templates</a>
            <a href="#how-it-works" className="font-bold hover:underline">How It Works</a>
            <a href="#pricing" className="font-bold hover:underline">Pricing</a>
            <a href="#faq" className="font-bold hover:underline">FAQ</a>
            <a href={APP_URL} className="font-bold hover:underline">Try Demo</a>
            
              <a
              href={REGISTER_URL}
              className="border-4 border-black bg-[#FFD500] px-6 py-2.5 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Get Access — £14.99/mo
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
            <a href="#templates" className="font-bold" onClick={() => setMobileMenuOpen(false)}>Templates</a>
            <a href="#how-it-works" className="font-bold" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#pricing" className="font-bold" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="font-bold" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a href={APP_URL} className="font-bold" onClick={() => setMobileMenuOpen(false)}>Try Demo Free</a>
            <a href={REGISTER_URL} className="border-4 border-black bg-[#FFD500] px-6 py-3 font-black uppercase text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Get Access — £14.99/mo
            </a>
          </div>
        )}
      </nav>

      {/* URGENCY BANNER */}
      <div className="bg-black text-white py-3 text-center px-4">
        <p className="font-bold uppercase tracking-wider text-sm">
          35+ ready-made guides for carers and families — £14.99/month, cancel anytime
        </p>
      </div>

      {/* HERO */}
      <header className="border-b-4 border-black bg-[#FFD500] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="inline-block border-4 border-black bg-black text-white px-4 py-2 text-sm font-black uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(255,213,0,1)] mb-6">
            For parents, family carers and support workers
          </div>
          <h1 className="text-5xl font-black leading-[1.1] tracking-tight md:text-7xl">
            EVERYTHING YOU NEED TO COMMUNICATE CLEARLY — ALREADY MADE FOR YOU.
          </h1>
          <p className="mt-8 text-xl font-medium leading-relaxed max-w-3xl border-l-8 border-black pl-6">
            35+ ready-made guides for every situation you face as a carer — morning routines, medication reminders, appointment letters, emotion guides and more. Open a template, add your details, done in minutes. No starting from scratch. No design skills needed.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            
              <a
              href={REGISTER_URL}
              className="inline-flex items-center justify-center border-4 border-black bg-black text-[#FFD500] px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all"
            >
              Get Access — £14.99/month <ArrowRight className="ml-3 h-6 w-6 stroke-[3]" />
            </a>
            
              <a
              href={APP_URL}
              className="inline-flex items-center justify-center border-4 border-black bg-white px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all gap-3"
            >
              <Play className="h-6 w-6" /> Try Free Demo First
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 font-bold text-sm">
            <span className="flex items-center gap-2"><CheckSquare className="h-5 w-5" /> No starting from scratch</span>
            <span className="flex items-center gap-2"><CheckSquare className="h-5 w-5" /> Works on your phone</span>
            <span className="flex items-center gap-2"><CheckSquare className="h-5 w-5" /> Cancel anytime</span>
            <span className="flex items-center gap-2"><CheckSquare className="h-5 w-5" /> Instant access</span>
          </div>
        </div>
      </header>

      {/* EMOTIONAL HOOK */}
      <section className="border-b-4 border-black bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="border-l-8 border-[#FFD500] pl-8">
            <p className="text-2xl md:text-3xl font-black leading-relaxed text-gray-900">
              "You already do everything you can for the person you care for. This makes one part of it easier — the part where you need them to actually understand."
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { icon: <AlertCircle className="h-8 w-8" />, text: "They got a letter from the hospital but couldn't understand a word of it" },
              { icon: <Clock className="h-8 w-8" />, text: "The morning routine takes twice as long because nothing is written down clearly" },
              { icon: <Pill className="h-8 w-8" />, text: "Medication is confusing and you worry they might take the wrong dose" },
            ].map((item, i) => (
              <div key={i} className="border-4 border-black p-6 bg-[#F4F4F0] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-3 text-gray-700">{item.icon}</div>
                <p className="font-bold text-lg leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xl font-bold text-center">EZ Read Pro has a ready-made guide for all of these — and 32 more.</p>
        </div>
      </section>

      {/* TEMPLATE LIBRARY */}
      <section id="templates" className="border-b-4 border-black bg-[#F4F4F0] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 inline-block border-4 border-black bg-[#FFD500] px-4 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            The template library
          </div>
          <h2 className="text-4xl font-black uppercase md:text-5xl max-w-3xl">
            35+ guides already made. Open, personalise, use.
          </h2>
          <p className="mt-4 text-xl font-medium max-w-3xl">
            Every template uses specialist Mulberry Symbols — the same symbols used by speech and language therapists across the UK. Just add your details and it's ready.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TemplateCard
              icon={<Clock />}
              color="bg-[#00E5FF]"
              title="Morning Routine"
              desc="A step-by-step visual guide to getting up, washed and dressed. Reduces arguments and makes mornings calmer for everyone."
              symbol="morning.svg"
            />
            <TemplateCard
              icon={<Pill />}
              color="bg-[#FF90E8]"
              title="Taking Medication"
              desc="Clear visual instructions for when to take medication, how much, and what it looks like. Reduces confusion and missed doses."
              symbol="tablets.svg"
            />
            <TemplateCard
              icon={<FileText />}
              color="bg-[#FFD500]"
              title="Hospital Appointment"
              desc="Turn any NHS appointment letter into a clear, visual guide — when, where, who they'll see, and what to bring."
              symbol="doctor_1a.svg"
            />
            <TemplateCard
              icon={<Smile />}
              color="bg-[#F4F4F0]"
              title="How I Feel Today"
              desc="A simple emotions guide that helps the person you care for tell you how they're feeling without needing to find the words."
              symbol="happy_lady.svg"
            />
            <TemplateCard
              icon={<Shield />}
              color="bg-[#00E5FF]"
              title="Staying Safe at Home"
              desc="Visual safety reminders for locking doors, not opening to strangers, and what to do in an emergency."
              symbol="safety_goggles.svg"
            />
            <TemplateCard
              icon={<Heart />}
              color="bg-[#FF90E8]"
              title="Bedtime Routine"
              desc="A calming visual guide to the end-of-day routine — washing, brushing teeth, getting ready for bed."
              symbol="bed_time.svg"
            />
            <TemplateCard
              icon={<Users />}
              color="bg-[#FFD500]"
              title="Going to the Shops"
              desc="Step-by-step guide for an independent trip to the shops — what to buy, how to pay, when to come home."
              symbol="shop.svg"
            />
            <TemplateCard
              icon={<AlertCircle />}
              color="bg-[#F4F4F0]"
              title="When I Feel Anxious"
              desc="A guide that helps them recognise anxiety and know what to do — breathe, tell someone, take a break."
              symbol="worried_lady.svg"
            />
            <TemplateCard
              icon={<Wallet />}
              color="bg-[#00E5FF]"
              title="Understanding My Money"
              desc="Simple visual guide to budgeting, paying for things, and keeping track of spending."
              symbol="money.svg"
            />
          </div>

          <div className="mt-8 border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-black text-lg text-center">Plus 26 more templates covering: personal hygiene, fire safety, online safety, friendships, relationships, public transport, restaurants, asking for help, saying no, and more.</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            
              <a
              href={REGISTER_URL}
              className="inline-flex items-center justify-center border-4 border-black bg-[#FFD500] px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Get Access to All 35+ Templates <ArrowRight className="ml-3 h-6 w-6 stroke-[3]" />
            </a>
            
              <a
              href={APP_URL}
              className="inline-flex items-center justify-center border-4 border-black bg-white px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all gap-2"
            >
              <Play className="h-5 w-5" /> Try the demo free
            </a>
          </div>
        </div>
      </section>

      {/* BEFORE AND AFTER */}
      <section className="border-b-4 border-black bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black uppercase md:text-5xl text-center mb-4">See what it does</h2>
          <p className="text-center text-xl font-medium mb-16">Take any confusing letter or document — turn it into something they can actually read. In minutes.</p>

          <div className="grid md:grid-cols-2 gap-0 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
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
            <div>
              <div className="bg-[#FFD500] px-6 py-3 font-black uppercase text-sm tracking-wider border-b-4 border-black">
                After — EZ Read Pro Version
              </div>
              <div className="bg-white">
                {[
                  { sym: "doctor_1a.svg", text: "You have a doctor's appointment." },
                  { sym: "when.svg", text: "When: Tuesday 3rd June at 2:30pm" },
                  { sym: "surgery_health_centre.svg", text: "Where: St George's Hospital, Level 3, Block C" },
                  { sym: "doctor_1b.svg", text: "You will see: Dr Ahmed" },
                  { sym: "letter.svg", text: "Bring with you: This letter and your medicines list" },
                  { sym: "when.svg", text: "Arrive: 15 minutes early" },
                  { sym: "telephone_mobile_2_%2C_to.svg", text: "To cancel, call: 020 8672 1255" },
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-[80px_1fr] border-b-2 border-black last:border-b-0">
                    <div className="border-r-2 border-black p-3 flex items-center justify-center bg-[#F4F4F0]">
                      <img src={`${SYM}${item.sym}?alt=media`} alt="" className="w-14 h-14 object-contain" />
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
              Get Access — £14.99/month <ArrowRight className="ml-3 h-6 w-6 stroke-[3]" />
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-b-4 border-black bg-[#F4F4F0] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black uppercase md:text-5xl">How it works</h2>
          <p className="text-center mt-4 text-xl font-medium">Three steps. No training. No fuss.</p>

          <div className="mt-16 overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] border-b-4 border-black">
              <div className="flex items-center justify-center border-r-4 border-black p-4 md:p-8 bg-[#00E5FF]">
                <span className="text-5xl font-black">1</span>
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-2xl font-black uppercase md:text-3xl">Open a template that fits your situation</h3>
                <p className="mt-3 text-lg font-medium text-gray-700">Browse 35+ guides organised by category — daily routines, health, emotions, safety, social situations and more. Find the one you need in seconds.</p>
              </div>
            </div>
            <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] border-b-4 border-black">
              <div className="flex items-center justify-center border-r-4 border-black p-4 md:p-8 bg-[#FF90E8]">
                <span className="text-5xl font-black">2</span>
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-2xl font-black uppercase md:text-3xl">Add your details and choose symbols</h3>
                <p className="mt-3 text-lg font-medium text-gray-700">Type your specific information — names, times, places. Search 3,400+ specialist Mulberry Symbols and add them alongside your text. The layout is handled automatically.</p>
              </div>
            </div>
            <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr]">
              <div className="flex items-center justify-center border-r-4 border-black p-4 md:p-8 bg-[#FFD500]">
                <span className="text-5xl font-black">3</span>
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-2xl font-black uppercase md:text-3xl">Export as PDF and use it immediately</h3>
                <p className="mt-3 text-lg font-medium text-gray-700">One tap creates a print-ready PDF. Print it out, save it to your phone, or send it to their care team. Done in minutes — ready to use today.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            
              <a
              href={REGISTER_URL}
              className="inline-flex items-center justify-center border-4 border-black bg-[#FFD500] px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Get Started — £14.99/month <ArrowRight className="ml-3 h-6 w-6 stroke-[3]" />
            </a>
            
              <a
              href={APP_URL}
              className="inline-flex items-center justify-center border-4 border-black bg-white px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all gap-2"
            >
              <Play className="h-5 w-5" /> Try free first
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b-4 border-black bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase md:text-5xl">What carers are saying</h2>
          <p className="mt-4 text-xl font-medium">From people who use it every week.</p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "I used to dread explaining hospital appointments to my son. Now I open the appointment template, fill in the details, and he actually looks forward to going. It takes me four minutes.",
                name: "Sarah M.",
                role: "Parent of a 24-year-old with Down's syndrome",
                color: "bg-[#FF90E8]"
              },
              {
                quote: "The medication reminder template changed everything. My mum now takes her tablets without any confusion. I printed it out and stuck it on the fridge. Simple as that.",
                name: "James T.",
                role: "Full-time carer for his mother with dementia",
                color: "bg-[#00E5FF]"
              },
              {
                quote: "I support three clients. Having a library of ready-made guides saves me hours every week. The symbols are exactly right — not clip art, proper accessible symbols.",
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

      {/* WHAT HAPPENS NEXT */}
      <section className="border-b-4 border-black bg-[#F4F4F0] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black uppercase md:text-5xl text-center">What happens when you subscribe</h2>
          <p className="text-center mt-4 text-xl font-medium">No waiting. No complicated setup. Instant access.</p>

          <div className="mt-12 overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {[
              { step: "1", color: "bg-[#FFD500]", title: "Create your account", desc: "Enter your email and password on the register page — takes 30 seconds." },
              { step: "2", color: "bg-[#00E5FF]", title: "Pay securely via Stripe", desc: "You're taken to Stripe's secure checkout page. Enter your card details. £14.99 is taken. That's it." },
              { step: "3", color: "bg-[#FF90E8]", title: "Your account is created instantly", desc: "As soon as payment confirms, your account is active. Sign in and you have access to all 35+ templates immediately." },
              { step: "4", color: "bg-[#FFD500]", title: "Open your first template", desc: "Browse the library, pick the template you need, add your details, and export your first document — all within minutes." },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-[60px_1fr] border-b-4 border-black last:border-b-0">
                <div className={`flex items-center justify-center border-r-4 border-black p-4 ${item.color}`}>
                  <span className="text-2xl font-black">{item.step}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black uppercase">{item.title}</h3>
                  <p className="mt-1 font-medium text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-6 font-bold text-gray-600">Cancel anytime from your Stripe account — no phone calls, no forms, one click.</p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-b-4 border-black bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl font-black uppercase md:text-5xl">Simple, honest pricing</h2>
            <p className="mt-4 text-xl font-medium">One plan. All 35+ templates included. Cancel anytime.</p>
          </div>

          <div className="mt-12 border-4 border-black bg-[#FFD500] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative p-8 md:p-12">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 border-4 border-black bg-black text-white px-6 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(255,213,0,1)] whitespace-nowrap">
              Everything included
            </div>

            <div className="text-center mt-4">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-8xl font-black">£14.99</span>
                <span className="text-2xl font-bold">/ month</span>
              </div>
              <p className="mt-2 font-bold uppercase text-gray-700">Less than 50p a day</p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                "All 35+ daily life templates",
                "3,400+ specialist Mulberry Symbols",
                "Unlimited document creation",
                "Instant PDF export and printing",
                "Works on any phone, tablet or computer",
                "No personal data ever stored",
                "Cancel anytime — one click in Stripe",
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
                Get Access Now <ArrowRight className="ml-3 h-6 w-6 stroke-[3]" />
              </a>
              
                <a
                href={APP_URL}
                className="inline-flex items-center justify-center border-4 border-black bg-white text-black px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all gap-2"
              >
                <Play className="h-5 w-5" /> Try free demo first
              </a>
            </div>

            <p className="text-center mt-6 font-bold text-sm uppercase text-gray-700">
              Secure payment via Stripe · Cancel anytime · Instant access
            </p>
          </div>

          <div className="mt-8 border-l-8 border-black pl-6">
            <p className="font-bold text-gray-700">
              Need this for a care home or support team?{' '}
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
          <h2 className="mt-8 text-4xl font-black uppercase md:text-5xl">Built around your privacy</h2>
          <p className="mt-6 text-xl font-medium max-w-2xl mx-auto">
            EZ Read Pro never sees, stores or processes any information about the person you care for. Everything stays on your device.
          </p>

          <div className="mt-12 grid gap-6 text-left md:grid-cols-2">
            {[
              { title: "Zero Data Storage", body: "Documents are created and saved on your own device. Nothing about the person you care for is uploaded to our servers — ever." },
              { title: "No Personal Information Required", body: "You never enter details about the person you care for. The app doesn't ask for it and doesn't need it." },
              { title: "Supports the Accessible Information Standard", body: "The AIS gives people with communication needs the legal right to accessible information. EZ Read Pro helps you provide it — at home, not just in clinical settings." },
              { title: "Specialist Mulberry Symbols", body: "Every symbol in the library is a Mulberry Symbol — the trusted open symbol set used by speech and language therapists and AAC specialists across the UK. Not generic clip art." },
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
              { q: "Do I need any design or tech skills?", a: "None at all. If you can send a text message, you can use EZ Read Pro. Open a template, type your details, tap export. That's it — no design experience needed." },
              { q: "Can I try it before subscribing?", a: "Yes — click Try Free Demo to explore the full template library and editor with no account needed. You'll see exactly what you're getting before you pay a penny." },
              { q: "What templates are included?", a: "All 35+ daily life templates are included: morning and bedtime routines, medication reminders, appointment guides, emotion charts, safety guides, social situation guides, money basics, relationship guides, and more. All with specialist Mulberry Symbols." },
              { q: "Is this only for people with learning disabilities?", a: "No. The templates and symbols work for anyone who benefits from clear, visual communication — including people with dementia, acquired brain injuries, low literacy, autism, or anyone who finds standard written information difficult to process." },
              { q: "What happens to my documents if I cancel?", a: "Because nothing is stored on our servers, there is nothing to lose. Your documents live on your own device. You keep everything you've created." },
              { q: "How do I cancel if I need to?", a: "Log in to your Stripe customer portal — one click and your subscription is cancelled. No phone calls, no forms, no 30-day notice periods." },
              { q: "Is my payment secure?", a: "All payments are handled by Stripe, one of the world's most trusted payment processors. We never see or store your card details." },
              { q: "I'm a support worker or PA — is this right for me?", a: "Yes. The individual plan works well for personal assistants and support workers looking after one or a small number of people. If you work for a larger organisation, email support@ezread.co.uk about team plans." },
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
            The guides are ready.<br/>
            <span className="text-[#FFD500]">You just need to open them.</span>
          </h2>
          <p className="mt-6 text-2xl font-bold text-gray-300">
            35+ templates. £14.99/month. Instant access. Cancel anytime.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            
              <a
              href={REGISTER_URL}
              className="inline-flex items-center justify-center border-4 border-[#FFD500] bg-[#FFD500] text-black px-12 py-6 font-black uppercase tracking-wider text-2xl shadow-[8px_8px_0px_0px_rgba(255,213,0,0.4)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(255,213,0,0.4)] transition-all w-full sm:w-auto"
            >
              Get Access Now — £14.99/mo <ArrowRight className="ml-3 h-7 w-7 stroke-[3]" />
            </a>
            
              <a
              href={APP_URL}
              className="inline-flex items-center justify-center border-4 border-white bg-transparent text-white px-12 py-6 font-black uppercase tracking-wider text-2xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] transition-all w-full sm:w-auto gap-3"
            >
              <Play className="h-7 w-7" /> Try Demo Free
            </a>
          </div>
          <p className="mt-8 text-gray-500 font-bold uppercase text-sm tracking-wider">
            No credit card needed for demo · Secure checkout via Stripe · Instant access
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
