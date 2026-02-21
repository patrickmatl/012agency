import { Metadata } from 'next';
import { FaPalette, FaCode, FaMobileAlt, FaShoppingCart, FaSearch, FaPrint, FaMegaport, FaRegLightbulb, FaCamera, FaChartLine, FaComments, FaPencilAlt, FaRocket, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing Services Pretoria | SEO, Social Media & More | 012 Agency',
  description: 'Professional digital marketing services in Pretoria. 012 Agency offers SEO, social media management, content marketing, Google Ads, and brand strategy to grow your business online.',
  alternates: {
    canonical: 'https://012agency.co.za/digital-marketing-services-pretoria',
  },
};

const services = [
  {
    icon: FaPalette,
    name: 'Brand Identity Design',
    description: 'Create a memorable brand identity that resonates with your audience. We craft unique logos, color palettes, and brand guidelines that tell your story.',
    features: [
      'Logo Design & Development',
      'Brand Guidelines',
      'Visual Identity Systems',
      'Brand Strategy',
      'Typography Selection',
      'Color Palette Development'
    ],
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FaCode,
    name: 'Web Design & Development',
    description: 'Custom website solutions that combine stunning design with powerful functionality. We create responsive, user-friendly websites that drive results.',
    features: [
      'Custom Website Design',
      'E-commerce Solutions',
      'Responsive Development',
      'CMS Integration',
      'Website Maintenance',
      'Performance Optimization'
    ],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FaMobileAlt,
    name: 'UI/UX Design',
    description: 'Create intuitive and engaging digital experiences. Our UI/UX design services focus on user-centered design principles to maximize engagement.',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Wireframing & Prototyping',
      'Mobile App Design',
      'Usability Testing',
      'Interactive Design'
    ],
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FaPrint,
    name: 'Print Design',
    description: 'Professional print design services that make a lasting impression. From business cards to billboards, we ensure your print materials stand out.',
    features: [
      'Business Cards & Stationery',
      'Brochures & Catalogs',
      'Packaging Design',
      'Large Format Printing',
      'Marketing Materials',
      'Publication Design'
    ],
    image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FaSearch,
    name: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to boost your online presence. We help you reach and engage your target audience effectively.',
    features: [
      'Social Media Marketing',
      'SEO Optimization',
      'Content Strategy',
      'Email Marketing',
      'PPC Campaigns',
      'Analytics & Reporting'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FaMegaport,
    name: 'Motion Design',
    description: 'Bring your brand to life with dynamic motion graphics and animations. Create engaging visual content for all digital platforms.',
    features: [
      'Motion Graphics',
      'Video Production',
      'Animation',
      'Social Media Content',
      'Promotional Videos',
      'Interactive Media'
    ],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FaCamera,
    name: 'Photography & Retouching',
    description: 'Professional photography and photo editing services to showcase your products, services, and brand in the best light possible.',
    features: [
      'Product Photography',
      'Corporate Photography',
      'Photo Retouching',
      'Image Manipulation',
      'Color Correction',
      'Photo Compositing'
    ],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FaChartLine,
    name: 'Business Growth Strategy',
    description: 'Comprehensive business growth solutions combining design, marketing, and strategy to help your business reach its full potential.',
    features: [
      'Market Analysis',
      'Growth Planning',
      'Competitive Analysis',
      'Brand Positioning',
      'Marketing Strategy',
      'Performance Tracking'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FaComments,
    name: 'Social Media Management',
    description: 'Full-service social media management to build your brand presence and engage with your audience across all major platforms.',
    features: [
      'Content Creation',
      'Community Management',
      'Social Strategy',
      'Engagement Monitoring',
      'Campaign Management',
      'Analytics Reporting'
    ],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: FaPencilAlt,
    name: 'Content Creation',
    description: 'Professional content creation services to tell your brand story and engage your audience with compelling narratives.',
    features: [
      'Copywriting',
      'Blog Writing',
      'Product Descriptions',
      'Email Newsletters',
      'Social Media Copy',
      'Content Strategy'
    ],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Digital Marketing Services Pretoria',
            description:
              'Digital marketing services in Pretoria by 012 Agency. SEO, social media, content marketing, Google Ads and strategy to grow your business online.',
            url: 'https://012agency.co.za/digital-marketing-services-pretoria',
            serviceType: 'Digital marketing',
            category: 'Digital marketing services',
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
            areaServed: {
              '@type': 'City',
              name: 'Pretoria',
            },
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://012agency.co.za/get-in-touch-pretoria',
            },
          }),
        }}
      />
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-sm font-bold mb-6 tracking-wide uppercase">
            Pretoria's Digital Powerhouse
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Digital Services That <span className="text-[#FFD700]">Dominate</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We don't just clear the noise. We amplify your voice. Comprehensive creative solutions tailored to elevate your brand and drive business growth in Pretoria and beyond.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="px-8 py-4 bg-[#FFD700] text-black font-bold text-lg rounded-full hover:bg-white transition-all">
              Get an Instant Quote
            </Link>
            <Link href="#services" className="px-8 py-4 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* PAIN POINTS SECTION (New Content) */}
      <section className="py-20 bg-zinc-900 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Struggling to Break Through?</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                In a crowded digital marketplace, "good enough" is invisible. You need a partner who understands the difference between traffic and traction.
              </p>
              <ul className="space-y-4">
                {[
                  "Website not converting visitors into customers?",
                  "Brand identity looking outdated or inconsistent?",
                  "Social media posts getting zero engagement?",
                  "Spending money on ads with no ROI?"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaRocket className="text-[#FFD700] mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-2xl font-bold text-white mb-2">We Turn Problems Into Profit</div>
                <p className="text-gray-300">Our data-driven strategies are designed to solve these exact challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Introduction Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFD700]">Why Choose Us?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            With over a decade of experience, we combine creativity with strategic thinking to deliver solutions that make an impact. Our comprehensive approach ensures your brand stands out in today's competitive landscape.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaPalette,
                title: 'Creative Excellence',
                description: 'Innovative designs that capture attention and inspire action'
              },
              {
                icon: FaRegLightbulb,
                title: 'Strategic Approach',
                description: 'Data-driven solutions aligned with your business goals'
              },
              {
                icon: FaShoppingCart,
                title: 'Results Driven',
                description: 'Focus on delivering measurable business outcomes'
              }
            ].map((item, index) => (
              <div key={index} className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-[#FFD700]/30 transition-all duration-300 group">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-[#FFD700]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#FFD700] text-sm font-bold uppercase tracking-widest">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Comprehensive Digital Solutions</h2>
          </div>

          <div className="grid grid-cols-1 gap-24">
            {services.map((service, index) => (
              <div key={service.name} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                <div className="md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[#FFD700]/10 rounded-lg">
                      <service.icon className="w-8 h-8 text-[#FFD700]" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{service.name}</h2>
                  </div>

                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <FaCheckCircle className="text-[#FFD700] flex-shrink-0 text-sm" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.name)}`}
                    className="inline-flex items-center justify-center bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-[#FFD700] transition-colors duration-300"
                  >
                    Get Started
                  </Link>
                </div>

                <div className="md:w-1/2 w-full">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl border border-white/5 group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <div
                      className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FFD700] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Ready to Dominate Your Market?</h2>
          <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto font-medium">
            Stop guessing and start growing. Partner with Pretoria's leading digital agency and see the difference data-driven design makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-block bg-black text-white font-bold py-4 px-10 rounded-full hover:bg-zinc-800 transition-colors duration-300 shadow-xl"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-zinc-100 transition-colors duration-300 shadow-xl"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">Our Proven <span className="text-[#FFD700]">Process</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Discovery',
                description: 'We dive deep into your brand, goals, and audience to uncover hidden opportunities.'
              },
              {
                number: '02',
                title: 'Strategy',
                description: 'We map out a comprehensive roadmap tailored to achieve specific KPIs.'
              },
              {
                number: '03',
                title: 'Execution',
                description: 'Our creative and technical teams bring the vision to life with precision.'
              },
              {
                number: '04',
                title: 'Optimization',
                description: 'We analyze, refine, and scale based on real-world performance data.'
              }
            ].map((step, index) => (
              <div key={index} className="relative p-8 bg-zinc-900 border border-white/5 rounded-2xl group hover:border-[#FFD700]/50 transition-all duration-300">
                <div className="text-6xl font-bold text-[#FFD700]/10 absolute top-4 right-4 group-hover:text-[#FFD700]/20 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4 text-white relative z-10">{step.title}</h3>
                <p className="text-gray-400 relative z-10 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
