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
  Shield
} from 'lucide-react';

const STRIPE_LINK = "https://buy.stripe.com/PLACEHOLDER";
const APP_URL = "https://app.ezread.co.uk";

const BrutalButton = ({
  children,
  href,
  variant = 'primary',
  className = ''
}: {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}) => {
  const baseStyle = "inline-flex items-center justify-center border-4 border-black px-8 py-4 font-black uppercase tracking-wider text-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[6px] active:translate-x-[6px] active:shadow-none cursor-pointer";
  const variants = {
    primary: "bg-[#FFD500]",
    secondary: "bg-white",
    accent: "bg-[#00E5FF]",
  };
  return (
    <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};

const BrutalCard = ({
  children,
  className = '',
  bgColor = 'bg-white'
}: {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}) => (
  <div className={`border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${bgColor} ${className}`}>
    {children}
  </div>
);

const StarRating = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-[#FFD500] text-[#FFD500]" />
    ))}
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
            <a href="#how-it-works" className="font-bold hover:underline">How It Works</a>
            <a href="#pricing" className="font-bold hover:underline">Pricing</a>
            <a href="#faq" className="font-bold hover:underline">FAQ</a>
            <a
              href={STRIPE_LINK}
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
            <a href={STRIPE_LINK} className="border-4 border-black bg-[#FFD500] px-6 py-3 font-black uppercase text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Subscribe — £14.99/mo
            </a>
          </div>
        )}
      </nav>

      {/* URGENCY BANNER */}
      <div className="bg-black text-white py-3 text-center">
        <p className="font-bold uppercase tracking-wider text-sm">
          🎉 Early subscriber pricing — £14.99/month. Cancel anytime.
        </p>
      </div>

      {/* FREE TEMPLATES NOTICE */}
      <div className="border-b-4 border-black bg-[#00E5FF] px-6 py-4">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 shrink-0 stroke-[2.5]" />
            <p className="font-black uppercase tracking-wide text-sm">
              Looking for free easy read templates? We have ready-made templates for daily life situations — no subscription needed to browse.
            </p>
          </div>
          <a
            href="#free-templates"
            className="shrink-0 border-4 border-black bg-black text-[#00E5FF] px-5 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all whitespace-nowrap"
          >
            See Free Templates ↓
          </a>
        </div>
      </div>

      {/* HERO */}
      <header className="border-b-4 border-black bg-[#FFD500] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="inline-block border-4 border-black bg-black text-white px-4 py-2 text-sm font-black uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(255,213,0,1)] mb-6">
            For parents, family members &amp; personal carers
          </div>
          <h1 className="text-5xl font-black leading-[1.1] tracking-tight md:text-7xl">
            COMMUNICATE CLEARLY<br/>
            <span className="bg-black text-[#FFD500] px-2">WITH THE PERSON YOU CARE FOR.</span>
          </h1>
          <p className="mt-8 text-xl font-medium leading-relaxed max-w-3xl border-l-8 border-black pl-6">
            Create visual, easy-to-understand documents — daily routines, health guides, appointment letters — using specialist symbols. No training. No IT sign-off. Ready in minutes.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={STRIPE_LINK}
              className="inline-flex items-center justify-center border-4 border-black bg-black text-[#FFD500] px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(255,213,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(255,213,0,1)] transition-all"
            >
              Start Today — £14.99/month <ArrowRight className="ml-3 h-6 w-6 stroke-[3]" />
            </a>
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center border-4 border-black bg-white px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              See a Demo First
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 font-bold text-sm">
            <span className="flex items-center gap-2"><CheckSquare className="h-5 w-5" /> Cancel anytime</span>
            <span className="flex items-center gap-2"><CheckSquare className="h-5 w-5" /> No data stored</span>
            <span className="flex items-center gap-2"><CheckSquare className="h-5 w-5" /> Works on any device</span>
            <span className="flex items-center gap-2"><CheckSquare className="h-5 w-5" /> Instant access</span>
          </div>
        </div>
      </header>

      {/* SOCIAL PROOF STRIP */}
      <div className="border-b-4 border-black bg-white py-6 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 font-bold text-sm uppercase tracking-wide text-gray-600">
            <span>✓ Used by carers across the UK</span>
            <span className="hidden sm:inline">|</span>
            <span>✓ Mulberry Symbols — clinically validated</span>
            <span className="hidden sm:inline">|</span>
            <span>✓ Supports Accessible Information Standard</span>
            <span className="hidden sm:inline">|</span>
            <span>✓ Zero patient data stored</span>
          </div>
        </div>
      </div>

      {/* PAIN POINTS */}
      <section className="border-b-4 border-black bg-[#F4F4F0] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase md:text-6xl max-w-3xl">
            Sound familiar?
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <BrutalCard bgColor="bg-[#FF90E8]">
              <AlertCircle className="h-12 w-12 stroke-[2.5] mb-4" />
              <h3 className="text-2xl font-black uppercase">Hospital letters they can't understand</h3>
              <p className="mt-3 font-medium">Dense clinical language that means nothing to the person you care for. You spend hours trying to explain what should take minutes.</p>
            </BrutalCard>
            <BrutalCard bgColor="bg-[#00E5FF]">
              <Clock className="h-12 w-12 stroke-[2.5] mb-4" />
              <h3 className="text-2xl font-black uppercase">Daily routines that don't stick</h3>
              <p className="mt-3 font-medium">Written instructions get ignored. Visual schedules and picture-based guides are proven to work — but creating them takes time you don't have.</p>
            </BrutalCard>
            <BrutalCard bgColor="bg-[#FFD500]">
              <Zap className="h-12 w-12 stroke-[2.5] mb-4" />
              <h3 className="text-2xl font-black uppercase">No specialist tools available</h3>
              <p className="mt-3 font-medium">Professional Easy Read software costs hundreds per month and is built for organisations. Nothing existed for individual carers. Until now.</p>
            </BrutalCard>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="border-b-4 border-black bg-[#111] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-block border-4 border-[#FFD500] bg-[#FFD500] text-black px-4 py-2 text-sm font-black uppercase mb-6">
                The solution
              </div>
              <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
                Professional Easy Read tools.<br/>
                <span className="text-[#FFD500]">Built for you.</span>
              </h2>
              <p className="mt-6 text-xl font-medium text-gray-300">
                EZ Read Pro gives individual carers access to the same specialist tools used by healthcare professionals — at a price that makes sense for families. Create visual documents in minutes, not hours.
              </p>
              <a
                href={STRIPE_LINK}
                className="mt-8 inline-flex items-center justify-center border-4 border-[#FFD500] bg-[#FFD500] text-black px-8 py-4 font-black uppercase tracking-wider shadow-[6px_6px_0px_0px_rgba(255,213,0,0.4)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0px_0px_rgba(255,213,0,0.4)] transition-all"
              >
                Get Started — £14.99/month <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="space-y-6">
              <div className="border-4 border-white bg-black p-6 shadow-[6px_6px_0px_0px_rgba(255,213,0,1)]">
                <h3 className="text-xl font-black uppercase text-[#FFD500]">3,400+ Mulberry Symbols</h3>
                <p className="mt-3 font-medium text-gray-300">Specialist communication symbols clinically designed for people with learning disabilities, dementia, and low literacy. Not generic clip art.</p>
              </div>
              <div className="border-4 border-white bg-black p-6 shadow-[6px_6px_0px_0px_rgba(0,229,255,1)]">
                <h3 className="text-xl font-black uppercase text-[#00E5FF]">Instant PDF Export</h3>
                <p className="mt-3 font-medium text-gray-300">Every document exports as a clean, print-ready PDF. Print it, email it, or save it. Done in seconds.</p>
              </div>
              <div className="border-4 border-white bg-black p-6 shadow-[6px_6px_0px_0px_rgba(255,144,232,1)]">
                <h3 className="text-xl font-black uppercase text-[#FF90E8]">No Data Stored — Ever</h3>
                <p className="mt-3 font-medium text-gray-300">Documents are created and saved on your device only. We never see, store or process any information about the person you care for.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section id="free-templates" className="border-b-4 border-black bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase md:text-5xl">Templates built for daily life</h2>
          <p className="mt-4 text-xl font-medium max-w-3xl border-l-8 border-black pl-6">
            Every template targets a real moment in the life of someone you care for. Pick one, customise it, export it.
          </p>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Clock className="h-8 w-8" />, color: "bg-[#00E5FF]", title: "Daily Routine", desc: "Morning routine, bedtime routine, getting dressed, preparing meals" },
              { icon: <Heart className="h-8 w-8" />, color: "bg-[#FF90E8]", title: "Health", desc: "I don't feel well, taking medication, personal hygiene, GP visits" },
              { icon: <Smile className="h-8 w-8" />, color: "bg-[#FFD500]", title: "Emotions", desc: "How I feel today, when I feel anxious, when I feel angry, asking for help" },
              { icon: <Shield className="h-8 w-8" />, color: "bg-[#F4F4F0]", title: "Safety", desc: "Staying safe at home, fire safety, online safety, emergencies" },
              { icon: <Home className="h-8 w-8" />, color: "bg-[#FFD500]", title: "Social & Community", desc: "Going to the shops, public transport, restaurants, visiting someone" },
              { icon: <BookOpen className="h-8 w-8" />, color: "bg-[#00E5FF]", title: "Money", desc: "Understanding my money, budgeting basics, bank visits" },
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
              See all templates in the live demo →
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-b-4 border-black bg-[#F4F4F0] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black uppercase md:text-5xl">Ready in 3 steps</h2>
          <p className="text-center mt-4 text-xl font-medium">No training. No IT team. No design skills needed.</p>

          <div className="mt-16 overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] border-b-4 border-black">
              <div className="flex items-center justify-center border-r-4 border-black p-4 md:p-8 bg-[#00E5FF]">
                <Edit3 className="h-10 w-10 md:h-16 md:w-16 stroke-[2.5]" />
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-2xl font-black uppercase md:text-3xl">1. Pick a template and write your content</h3>
                <p className="mt-3 text-lg font-medium text-gray-700">Choose from 35+ templates built for real daily-life situations. Type your text in plain, simple language.</p>
              </div>
            </div>

            <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] border-b-4 border-black">
              <div className="flex items-center justify-center border-r-4 border-black p-4 md:p-8 bg-[#FF90E8]">
                <Image className="h-10 w-10 md:h-16 md:w-16 stroke-[2.5]" />
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-2xl font-black uppercase md:text-3xl">2. Add symbols from the library</h3>
                <p className="mt-3 text-lg font-medium text-gray-700">Search over 3,400 Mulberry Symbols and add them alongside your text. The app handles all the layout automatically.</p>
              </div>
            </div>

            <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr]">
              <div className="flex items-center justify-center border-r-4 border-black p-4 md:p-8 bg-[#FFD500]">
                <Printer className="h-10 w-10 md:h-16 md:w-16 stroke-[2.5]" />
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-2xl font-black uppercase md:text-3xl">3. Export as PDF and use it</h3>
                <p className="mt-3 text-lg font-medium text-gray-700">One click generates a print-ready PDF. Print it, save it to your phone, or email it to a care professional.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={STRIPE_LINK}
              className="inline-flex items-center justify-center border-4 border-black bg-[#FFD500] px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Start Today — £14.99/month <ArrowRight className="ml-3 h-6 w-6 stroke-[3]" />
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b-4 border-black bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase md:text-5xl">What carers are saying</h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
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
              <BrutalCard key={i} bgColor={t.color}>
                <StarRating />
                <p className="mt-4 text-lg font-medium leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 border-t-4 border-black pt-4">
                  <p className="font-black">{t.name}</p>
                  <p className="text-sm font-medium text-gray-700">{t.role}</p>
                </div>
              </BrutalCard>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-b-4 border-black bg-[#F4F4F0] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl font-black uppercase md:text-5xl">Simple pricing</h2>
            <p className="mt-4 text-xl font-medium">One plan. Everything included. Cancel anytime.</p>
          </div>

          <div className="mt-16">
            <BrutalCard bgColor="bg-[#FFD500]" className="relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 border-4 border-black bg-black text-white px-6 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(255,213,0,1)] whitespace-nowrap">
                Everything You Need
              </div>

              <div className="text-center mt-4">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-8xl font-black">£14.99</span>
                  <span className="text-2xl font-bold">/ month</span>
                </div>
                <p className="mt-2 font-bold uppercase text-gray-700">or £134.99/year — save 2 months</p>
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
                  href={STRIPE_LINK}
                  className="inline-flex items-center justify-center border-4 border-black bg-black text-[#FFD500] px-10 py-5 font-black uppercase tracking-wider text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  Subscribe Now <ArrowRight className="ml-3 h-6 w-6 stroke-[3]" />
                </a>
              </div>

              <p className="text-center mt-6 font-bold text-sm uppercase text-gray-700">
                Secure payment via Stripe · Cancel anytime from your account
              </p>
            </BrutalCard>
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

      {/* TRUST SECTION */}
      <section className="border-b-4 border-black bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <ShieldCheck className="mx-auto h-20 w-20 stroke-[2]" />
          <h2 className="mt-8 text-4xl font-black uppercase md:text-5xl">Your privacy is non-negotiable</h2>
          <p className="mt-6 text-xl font-medium max-w-2xl mx-auto">
            EZ Read Pro is a document creation tool. We do not store, see, or process any information about the person you care for. Ever.
          </p>

          <div className="mt-12 grid gap-6 text-left md:grid-cols-2">
            <BrutalCard>
              <h4 className="flex items-center text-xl font-black uppercase"><CheckSquare className="mr-3 h-6 w-6 shrink-0" /> Zero Data Storage</h4>
              <p className="mt-2 font-medium">Documents are created and saved on your own device. Nothing is uploaded to our servers.</p>
            </BrutalCard>
            <BrutalCard>
              <h4 className="flex items-center text-xl font-black uppercase"><CheckSquare className="mr-3 h-6 w-6 shrink-0" /> No Personal Information Required</h4>
              <p className="mt-2 font-medium">You do not need to enter any details about the person you care for to use the app.</p>
            </BrutalCard>
            <BrutalCard>
              <h4 className="flex items-center text-xl font-black uppercase"><CheckSquare className="mr-3 h-6 w-6 shrink-0" /> Accessible Information Standard</h4>
              <p className="mt-2 font-medium">The AIS gives people with communication needs the legal right to accessible information. EZ Read Pro helps you provide it.</p>
            </BrutalCard>
            <BrutalCard>
              <h4 className="flex items-center text-xl font-black uppercase"><CheckSquare className="mr-3 h-6 w-6 shrink-0" /> Clinically Validated Symbols</h4>
              <p className="mt-2 font-medium">Mulberry Symbols are specialist assets designed specifically for learning disability and accessible communication — not generic clip art.</p>
            </BrutalCard>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b-4 border-black bg-[#F4F4F0] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black uppercase md:text-5xl">Questions answered</h2>

          <div className="mt-12 space-y-6">
            {[
              {
                q: "Do I need any design or IT skills?",
                a: "None at all. If you can type a text message, you can use EZ Read Pro. Pick a template, type your content, add symbols from the library, export as PDF. That's it."
              },
              {
                q: "Is this only for people with learning disabilities?",
                a: "No. The templates and symbols work for anyone who benefits from visual, clear communication — including people with dementia, acquired brain injuries, low literacy, autism, or anyone who finds dense text difficult to process."
              },
              {
                q: "What templates are included in the personal plan?",
                a: "You get access to all daily life templates: morning and bedtime routines, medication reminders, emotion guides, safety documents, social situation guides, money basics, relationship guides, and more. Over 35 templates in total."
              },
              {
                q: "Can I cancel if I don't need it anymore?",
                a: "Yes, anytime. No minimum term, no cancellation fees. You can manage your subscription directly from the Stripe customer portal."
              },
              {
                q: "Is my payment secure?",
                a: "All payments are handled by Stripe, one of the world's most trusted payment processors. We never see or store your card details."
              },
              {
                q: "I'm a support worker or PA — is this right for me?",
                a: "Yes. The individual plan works well for personal assistants and support workers managing one or a small number of clients. If you work for a larger organisation, our org plans may be more suitable — email support@ezread.co.uk."
              }
            ].map((item, i) => (
              <BrutalCard key={i}>
                <h3 className="flex items-start text-xl font-black uppercase">
                  <HelpCircle className="mr-3 h-6 w-6 shrink-0 mt-0.5" /> {item.q}
                </h3>
                <p className="mt-3 font-medium text-gray-700">{item.a}</p>
              </BrutalCard>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-b-4 border-black bg-black px-6 py-32 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl font-black uppercase leading-tight md:text-7xl text-white">
            Start communicating<br/>
            <span className="text-[#FFD500]">more clearly today.</span>
          </h2>
          <p className="mt-6 text-2xl font-bold text-gray-300">
            £14.99/month. Cancel anytime. Instant access.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href={STRIPE_LINK}
              className="inline-flex items-center justify-center border-4 border-[#FFD500] bg-[#FFD500] text-black px-12 py-6 font-black uppercase tracking-wider text-2xl shadow-[8px_8px_0px_0px_rgba(255,213,0,0.4)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(255,213,0,0.4)] transition-all w-full sm:w-auto"
            >
              Subscribe Now — £14.99/mo <ArrowRight className="ml-3 h-7 w-7 stroke-[3]" />
            </a>
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center border-4 border-white bg-transparent text-white px-12 py-6 font-black uppercase tracking-wider text-2xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] transition-all w-full sm:w-auto"
            >
              Try Demo Free
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
