"use client";

import HeroSection from "./HeroSection";
import Link from "next/link";
import FAQAccordion from "./FAQ/FAQAccordion";
import { homeFaqs } from "@/data/homeFaqs";
import DominanceSection from "./DominanceSection";

export default function HomeContent() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden perspective-1000">
      {/* Hero Section (Visible Content) */}
      <HeroSection
        title="012"
        subtitle="Agency"
        description="Design agency Pretoria businesses trust for branding, web design, and marketing that drives growth."
      />

      {/* Defer below-the-fold work from initial render */}
      <div style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px' }}>
        <section className="py-10 px-4 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-syne font-semibold text-white mb-3">
              Design Agency Pretoria
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed">
              012 Agency is a Pretoria-based design agency delivering branding, graphic design, web design, and digital marketing for businesses that want to stand out locally and grow across Gauteng.
            </p>
          </div>
        </section>
        {/* Visual Content Sections */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-syne font-semibold mb-4 text-[#FFD700] opacity-90">
              Design Agency Pretoria — Graphic Design Company
            </h2>
            <p className="mb-4 text-neutral-300 text-base leading-relaxed">
              Welcome to <Link href="/" className="text-[#FFD700] hover:underline">012 Agency</Link>, the leading graphic design company and agency in Pretoria, South Africa. We specialize in creating visually stunning and impactful designs that help businesses stand out in today's competitive market. Explore our
              <Link href="/branding-solutions-pretoria" className="text-[#FFD700] hover:underline"> branding solutions</Link> and
              <Link href="/visual-communication-services-pretoria" className="text-[#FFD700] hover:underline"> visual communication services</Link> tailored for Pretoria.
            </p>
            <p className="text-neutral-300 text-base leading-relaxed mb-6">
              As one of the top <Link href="/services" className="text-[#FFD700] hover:underline">graphic design companies in Pretoria</Link>, we pride ourselves on delivering innovative and creative solutions tailored to your unique needs. From <Link href="/services/branding" className="text-[#FFD700] hover:underline">branding</Link> and <Link href="/services/logo-design" className="text-[#FFD700] hover:underline">logo design</Link> to <Link href="/services/web-design" className="text-[#FFD700] hover:underline">web design</Link> and marketing materials, we've got you covered.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Link href="/branding-solutions-pretoria" className="group">
                <div className="bg-black/50 p-6 rounded-lg hover:bg-black/70 transition-all">
                  <h3 className="text-2xl font-syne font-bold mb-4 text-[#FFD700]">Branding Solutions</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Build a memorable brand presence with Pretoria-focused strategy and design. We craft complete identities — logos, color systems, typography, and guidelines — that connect with local audiences and scale across print and digital.
                  </p>
                </div>
              </Link>
              <Link href="/visual-communication-services-pretoria" className="group">
                <div className="bg-black/50 p-6 rounded-lg hover:bg-black/70 transition-all">
                  <h3 className="text-2xl font-syne font-bold mb-4 text-[#FFD700]">Web & Visual Communication</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Engage Pretoria customers with fast, responsive websites and targeted visual content. We design UX-focused sites, landing pages, and campaign assets that improve conversions and SEO visibility in Gauteng.
                  </p>
                </div>
              </Link>
              <Link href="/branding-solutions-pretoria" className="group">
                <div className="bg-black/50 p-6 rounded-lg hover:bg-black/70 transition-all">
                  <h3 className="text-2xl font-syne font-bold mb-4 text-[#FFD700]">Logo Design</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Distinctive logos that feel at home in Pretoria’s market. We translate your story into a versatile mark with strong typography and scalable geometry.
                  </p>
                </div>
              </Link>
              <Link href="/visual-communication-services-pretoria" className="group">
                <div className="bg-black/50 p-6 rounded-lg hover:bg-black/70 transition-all">
                  <h3 className="text-2xl font-syne font-bold mb-4 text-[#FFD700]">Print Design</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    High-impact brochures, flyers, posters, and packaging designed for Pretoria audiences.
                  </p>
                </div>
              </Link>
            </div>
            <div className="mt-12 text-center">
              <Link href="/contact" className="inline-block bg-[#FFD700] text-black px-8 py-3 rounded-full font-bold hover:bg-[#FFD700]/90 transition-all">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-syne font-bold text-white">
                Full-Service Creative & Digital Agency in Pretoria
              </h2>
              <p className="text-neutral-300 mt-4 max-w-3xl mx-auto">
                Everything you need to build, launch, and grow your brand under one roof. Strategy, design, development, and marketing aligned to measurable business goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Branding & Identity',
                  text: 'Brand strategy, logo design, visual systems, and brand guidelines that stay consistent across every touchpoint.',
                  href: '/branding-solutions-pretoria'
                },
                {
                  title: 'Web Design & Development',
                  text: 'Modern, fast, and mobile-first websites built to convert and rank locally in Pretoria and Gauteng.',
                  href: '/services/website-design-pretoria'
                },
                {
                  title: 'Digital Marketing',
                  text: 'SEO, Google Ads, and content strategy that drive qualified leads and build authority.',
                  href: '/digital-marketing-services-pretoria'
                },
                {
                  title: 'Logo Design',
                  text: 'Distinctive, scalable logos crafted for Pretoria brands that need clarity and recognition.',
                  href: '/logo-design-pretoria'
                },
                {
                  title: 'Print & Packaging',
                  text: 'Brochures, flyers, packaging, and marketing collateral designed for real-world impact.',
                  href: '/services/packaging-design-pretoria'
                },
                {
                  title: 'Content & Social',
                  text: 'Design and content production for campaigns, social media, and ongoing marketing.',
                  href: '/services/social-media-pretoria'
                }
              ].map(service => (
                <Link key={service.title} href={service.href} className="group">
                  <div className="bg-zinc-900/60 border border-white/5 rounded-xl p-6 hover:border-[#FFD700]/40 transition-all">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-3">{service.title}</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">{service.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-gray-950 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-syne font-bold text-white mb-4">
                  Clear Process, Faster Results
                </h2>
                <p className="text-neutral-300 mb-6">
                  We keep projects organized and transparent with a clear delivery roadmap. You always know what happens next and what is required.
                </p>
                <div className="space-y-4">
                  {[
                    { title: 'Discovery & Strategy', text: 'We align goals, audience, competitors, and positioning before design starts.' },
                    { title: 'Creative Direction', text: 'We develop concepts, moodboards, and creative systems for your approval.' },
                    { title: 'Production & Build', text: 'We design and build assets, websites, and campaigns with quality control.' },
                    { title: 'Launch & Optimization', text: 'We refine, launch, and track performance for continuous improvement.' }
                  ].map(step => (
                    <div key={step.title} className="bg-black/40 border border-white/5 rounded-xl p-5">
                      <h3 className="text-lg font-semibold text-[#FFD700]">{step.title}</h3>
                      <p className="text-neutral-300 text-sm mt-2">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-zinc-900/60 border border-white/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">What you get with 012 Agency</h3>
                <ul className="space-y-3 text-neutral-300">
                  {[
                    'A clear scope, timeline, and milestones',
                    'Design systems that scale across channels',
                    'Conversion-focused web and campaign assets',
                    'SEO-ready structure and on-page fundamentals',
                    'Local Pretoria expertise with national reach'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[#FFD700]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/quote" className="inline-flex items-center justify-center bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#FFD700]/90 transition-all">
                    Get an Instant Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-syne font-bold text-white">
                Serving Pretoria Businesses Across Every Industry
              </h2>
              <p className="text-neutral-300 mt-4 max-w-3xl mx-auto">
                From startups to established enterprises, we build brand systems and digital experiences that scale with your growth.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-neutral-300">
              {[
                'Property & Real Estate',
                'Hospitality & Tourism',
                'Professional Services',
                'Retail & E-commerce',
                'Healthcare & Wellness',
                'Education & Training',
                'Finance & Fintech',
                'Technology & SaaS'
              ].map(industry => (
                <div key={industry} className="bg-zinc-900/60 border border-white/5 rounded-lg p-4 text-center">
                  <h3 className="text-white font-semibold">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DominanceSection />




        {/* Internal Links: Strengthen Site Architecture */}
        <section className="py-10 px-4 bg-black/60">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-syne font-semibold mb-3 text-[#FFD700] opacity-90">Popular Pretoria Pages</h2>
            <ul className="flex flex-wrap gap-3 text-sm text-neutral-300">
              <li><Link href="/branding-solutions-pretoria" className="text-[#FFD700] hover:underline">Branding Solutions – Pretoria</Link></li>
              <li><Link href="/visual-communication-services-pretoria" className="text-[#FFD700] hover:underline">Visual Communication – Pretoria</Link></li>
              <li><Link href="/project-showcase-pretoria" className="text-[#FFD700] hover:underline">Project Showcase – Pretoria</Link></li>
              <li><Link href="/get-in-touch-pretoria" className="text-[#FFD700] hover:underline">Get in Touch – Pretoria</Link></li>
            </ul>
          </div>
        </section>

        {/* NAP Block: Name, Address, Phone */}
        <section className="py-8 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-syne font-semibold mb-3 text-[#FFD700] opacity-90">Contact & Location (Pretoria)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-neutral-300">
              <div>
                <p className="text-white font-semibold">012 Agency</p>
                <p>Park Lane West Building, 194 Bancor Ave</p>
                <p>Waterkloof Glen, Pretoria, 0181</p>
              </div>
              <div>
                <p className="text-white font-semibold">Phone</p>
                <p>+27 (0)62 369 3789</p>
              </div>
              <div>
                <p className="text-white font-semibold">Hours</p>
                <p>Mon–Fri: 08:00–17:00</p>
                <p>Sat: 08:00–15:00</p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-8 text-[#FFD700]">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={homeFaqs} />
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              Ready to Elevate Your Brand?
            </h2>
            <p className="mb-8 text-neutral-300 text-lg">
              Partner with Pretoria's leading graphic design company and take your business to the next level. Whether you need a new logo, a website redesign, or a complete branding strategy, we're here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#FFD700] text-black hover:bg-[#FFD700]/90 transition-all duration-300 font-medium text-lg"
            >
              Get a Free Consultation
            </Link>
          </div>
        </section>

        {/* Contextual link to homepage with varied phrasing */}
        <section className="py-6 px-4 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-neutral-400 text-sm">
              Discover more on our <Link href="/" className="text-[#FFD700] hover:underline">homepage</Link> — including pricing, services, and projects.
            </p>
          </div>
        </section>
      </div>
    </main >
  );
}
