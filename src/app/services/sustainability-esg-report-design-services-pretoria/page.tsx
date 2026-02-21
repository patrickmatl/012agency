"use client";

import GetInTouchButton from "@/components/GetInTouchButton";
import Link from "next/link";



const faqs = [
  { q: "What is sustainability report design?", a: "Sustainability report design involves creating visually engaging, standards-compliant reports that communicate your ESG and sustainability performance to stakeholders." },
  { q: "Do you offer ESG report design services in Pretoria?", a: "Yes, we provide ESG and sustainability report design services in Pretoria and across South Africa." },
  { q: "Can you design integrated and annual reports?", a: "Absolutely. We design integrated, annual, and sustainability reports for listed and private companies." },
  { q: "How much does sustainability report design cost?", a: "Our packages start from R7,500, with pricing based on page count, complexity, and custom requirements." },
  { q: "What is included in your ESG report design packages?", a: "Packages include custom layouts, branding, infographics, compliance checks, and revision rounds. See our pricing for details." },
  { q: "Do you ensure compliance with GRI, JSE, or global standards?", a: "Yes, we design reports aligned with GRI, JSE, SASB, and other global ESG frameworks." },
  { q: "Can you help with copywriting for sustainability reports?", a: "We offer copywriting and content refinement for sustainability and ESG reports as an add-on service." },
  { q: "How long does it take to design an ESG report?", a: "Turnaround is typically 2–4 weeks depending on scope and complexity. Rush delivery is available on request." },
  { q: "Will my report be editable after delivery?", a: "Yes, we deliver editable files in InDesign, Word, or PDF formats as required." },
  { q: "Can you incorporate our company branding?", a: "Absolutely. We use your corporate identity, colors, fonts, and logos for full brand alignment." },
  { q: "What if I need revisions?", a: "All packages include at least one revision round. Additional changes can be arranged as needed." },
  { q: "Is my data confidential?", a: "Yes, all client data is treated as strictly confidential and NDAs can be signed if required." },
  { q: "Do you design for both digital and print?", a: "Yes, we provide both print-ready and digital versions of all reports." },
  { q: "Can you visualize complex ESG data?", a: "We specialize in clear, accurate visualizations of ESG and sustainability data for all audiences." },
  { q: "Do you offer infographics for sustainability reporting?", a: "Yes, we create custom infographics for KPIs, SDGs, and sustainability highlights." },
  { q: "Can you help with report structure and storytelling?", a: "We assist with structuring your report for clarity, compliance, and impact." },
  { q: "Do you provide support for online or interactive reports?", a: "We design interactive PDFs and digital-first reports for online distribution." },
  { q: "What industries do you serve with ESG report design?", a: "We serve all sectors, including mining, finance, retail, manufacturing, and more." },
  { q: "Can you redesign our existing sustainability report?", a: "Yes, we can update, modernize, and improve your current reports." },
  { q: "How do you ensure compliance with reporting standards?", a: "We work closely with your ESG/legal team to ensure all content meets reporting and compliance standards." },
  { q: "Do you offer copyediting and proofreading?", a: "We can provide copyediting and proofreading for all reports as an add-on service." },
  { q: "Can you design reports for international audiences?", a: "Yes, we design for both local and international stakeholders." },
  { q: "What payment methods do you accept?", a: "We accept EFT, credit card, and other common payment options." },
  { q: "Do you offer discounts for recurring or bulk projects?", a: "Yes, contact us for custom pricing on recurring or large-scale reporting projects." },
  { q: "Can you assist with report printing?", a: "We can provide print-ready files and coordinate with printers if required." },
  { q: "Do you provide editable graphics and charts?", a: "Yes, all graphics and charts are delivered in editable formats where possible." },
  { q: "How do I start a project with you?", a: "Contact us via the form or Get In Touch button to discuss your report design needs." },
  { q: "Are your services available outside Pretoria?", a: "Yes, we serve clients across South Africa and internationally via remote collaboration." },
  { q: "Can you design sustainability reports for NGOs and non-profits?", a: "Yes, we offer tailored services for NGOs and non-profit organizations." },
  { q: "Do you provide after-sales support?", a: "We offer limited after-sales support for minor tweaks and troubleshooting." },
  { q: "Do you offer training on using digital reports?", a: "We provide basic handover and guidance; full training can be arranged on request." },
  { q: "Can you create reports for SDG and UN Global Compact?", a: "Yes, we design reports aligned with SDG, UNGC, and other global frameworks." },
  { q: "How do you handle project communication?", a: "We communicate via email, phone, or video call for clear project updates and feedback." },
  { q: "Can you sign an NDA for sensitive projects?", a: "Yes, we are happy to sign NDAs to ensure confidentiality and data security." },
  { q: "What sets your Pretoria ESG report design apart?", a: "We combine local Pretoria insight with global ESG best practices for exceptional results." },
  { q: "Can you design integrated reports for JSE-listed companies?", a: "Yes, we have experience designing for JSE-listed and private companies alike." },
  { q: "Will my report be accessible and inclusive?", a: "We design with accessibility and inclusivity in mind, using readable fonts and clear layouts." },
  { q: "Do you offer student or academic report design?", a: "Yes, we assist students and academics with thesis and research report design." },
  { q: "Can you help with sustainability report assurance?", a: "We can refer you to trusted partners for report assurance and verification." },
  { q: "How do you ensure quality control?", a: "All reports undergo internal review and quality checks before final delivery." }
];

export default function SustainabilityESGReportDesignServicesPretoria() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Sustainability & ESG Report Design Services Pretoria',
            description:
              'Sustainability and ESG report design services in Pretoria by 012 Agency. Standards-compliant, data-driven reports aligned to global frameworks.',
            url: 'https://012agency.co.za/services/sustainability-esg-report-design-services-pretoria',
            serviceType: 'Report design services',
            category: 'Corporate communications and report design services',
            provider: {
              '@type': 'LocalBusiness',
              '@id': 'https://012agency.co.za',
              name: '012 Agency',
              url: 'https://012agency.co.za',
              telephone: '+27 (0)62 369 3789',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Park Lane West Building, 194 Bancor Ave',
                addressLocality: 'Waterkloof Glen',
                addressRegion: 'Pretoria',
                postalCode: '0181',
                addressCountry: 'ZA',
              },
            },
            areaServed: { '@type': 'City', name: 'Pretoria' },
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://012agency.co.za/get-in-touch-pretoria',
            },
          }),
        }}
      />
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Sustainability & ESG Report Design Services Pretoria</h1>
        <p className="text-lg text-gray-300 mb-6">Design and production of sustainability and ESG reports for companies committed to corporate responsibility. Our reports are visually engaging, data-driven, and aligned with global standards.</p>
        <GetInTouchButton className="mx-auto" />
      </section>
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-[#FFD700]">
              ESG reports that make your impact and strategy crystal clear
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              We help Pretoria organisations translate complex sustainability data, frameworks and initiatives into reports that are easy for boards, investors and communities to understand.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4">
              Your ESG story is structured around material issues, performance and future commitments, with visual cues that guide readers through the most important information first.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Whether it is a standalone sustainability report or part of an integrated report, we make sure your design supports both compliance and genuinely engaging communication.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Framework-aligned layouts
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Sections planned around GRI, SASB, TCFD or internal frameworks so readers can quickly map disclosures.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Impactful data visualisation
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Charts and infographics that make KPIs, SDG links and trends easy to interpret, not just decorative.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Digital-first distribution
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Optimised PDFs and interactive versions that work beautifully on desktop and mobile for all stakeholders.
              </p>
            </div>
            <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-syne font-semibold text-white mb-3">
                Pretoria-based ESG partners
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                A local team that can collaborate closely with your sustainability, finance and communications leads.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto mb-16">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Calculate Your Custom Report Quote</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Need a specific page count or features? Use our calculator to get an instant estimate.
          </p>
          <Link href="/quote" className="inline-block bg-[#FFD700] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#FFE44D] transition-colors">
            Calculate Your Quote
          </Link>
        </div>
      </section>
      {/* FAQ Section (hidden for users, present for SEO) */}
      <section aria-label="Frequently Asked Questions" className="hidden">
        <h2>Sustainability & ESG Report Design Services FAQ</h2>
        <dl>
          {faqs.map((faq, i) => (
            <div key={i}>
              <dt>{faq.q}</dt>
              <dd>{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': faqs.map(faq => ({
              '@type': 'Question',
              'name': faq.q,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.a
              }
            }))
          })
        }}
      />
      {/* Hidden Keyword-Rich Content for SEO */}
      <section className="hidden" aria-label="SEO Content">
        <h2>a1. Sustainability & ESG Report Design in Pretoria</h2>
        <p>Our sustainability and ESG report design services in Pretoria help organizations communicate their environmental, social, and governance achievements. We create visually engaging, standards-compliant reports that meet global frameworks such as GRI, SASB, and King IV.</p>
        <p>Pretoria businesses trust us to design annual, integrated, and sustainability reports that build stakeholder trust and support regulatory compliance across South Africa.</p>
        <h3>b1. Why Choose Pretoria for ESG Reporting?</h3>
        <p>Pretoria is home to leading corporates, NGOs, and government agencies focused on sustainability. Our ESG report designers understand Pretoria’s regulatory landscape and tailor every report for local and international audiences.</p>
        <p>We help Pretoria organizations demonstrate their sustainability leadership and commitment to ESG best practices through clear, compelling report layouts and infographics.</p>
        <h4>c1. Custom ESG, Sustainability, and Integrated Reports</h4>
        <p>Every organization’s ESG journey is unique. We offer custom sustainability report design, integrated reporting, and impact report layouts for Pretoria clients. Our team ensures your data, KPIs, and stories are presented with clarity and impact.</p>
        <p>From listed companies to non-profits, our Pretoria ESG designers deliver professional, standards-aligned reports that engage stakeholders and support your sustainability strategy.</p>
        <h5>d1. Serving Pretoria’s Sustainability Community</h5>
        <p>We serve a diverse range of Pretoria clients, from large corporates to community organizations. Our ESG report design portfolio includes work for mining, finance, education, and healthcare sectors in Pretoria and Gauteng.</p>
        <p>Whether you need a one-off sustainability report or ongoing ESG communications, our Pretoria team is ready to help you achieve your goals.</p>
        <h2>e1. ESG Reporting Standards and Best Practices</h2>
        <p>Compliance and transparency are critical in ESG reporting. We ensure all Pretoria sustainability reports follow GRI, King IV, and global best practices, giving your stakeholders confidence in your disclosures.</p>
        <p>Our Pretoria ESG report design team stays current with evolving standards and trends, ensuring your reports are always relevant and effective.</p>
        <h3>f1. Affordable ESG Report Design Packages Pretoria</h3>
        <p>Our ESG report design packages are competitively priced for Pretoria organizations. We offer transparent pricing, fast turnaround, and scalable solutions for projects of any size.</p>
        <p>Contact us to discuss your sustainability report design needs in Pretoria and discover how we can elevate your ESG communications.</p>
        <h4>g1. Pretoria, Gauteng, and South Africa Coverage</h4>
        <p>Based in Pretoria, we work with clients across Gauteng and South Africa. Our remote collaboration tools allow us to deliver sustainability report design excellence nationwide.</p>
        <p>We understand Pretoria’s sustainability culture and can adapt our services for local, national, or global audiences.</p>
        <h5>h1. Get Started with Pretoria’s ESG Report Design Experts</h5>
        <p>Ready to enhance your sustainability reporting? Our Pretoria team is here to support your next integrated, annual, or ESG report with world-class design.</p>
        <p>Contact Pretoria’s leading ESG report design specialists for a free consultation and see how we can help you communicate your impact.</p>
      </section>
    </div>
  );
}
