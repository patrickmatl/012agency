'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/', label: 'Home' },
  {
    href: '/services',
    label: 'Services',
    subItems: [
      {
        label: 'Web Services',
        items: [
          { href: '/services/website-design-pretoria', label: 'Website Design' },
          { href: '/services/ecommerce-pretoria', label: 'E-commerce' },
          { href: '/services/custom-development-pretoria', label: 'Custom Development' },
          { href: '/services/website-maintenance-pretoria', label: 'Website Maintenance' },
          { href: '/services/mobile-solutions-pretoria', label: 'Mobile Solutions' }
        ]
      },
      {
        label: 'Design Services',
        items: [
          { href: '/services/graphic-design-pretoria', label: 'Graphic Design' },
          { href: '/services/brand-identity', label: 'Brand Identity' },
          { href: '/services/print-design-pretoria', label: 'Print Design' },
          { href: '/services/packaging-design-pretoria', label: 'Packaging Design' },
          { href: '/services/marketing-materials-pretoria', label: 'Marketing Materials' },
          { href: '/services/annual-report-design-and-print-pretoria', label: 'Annual Report Design & Print' },
          { href: '/services/transcription-services-pretoria-johannesburg', label: 'Transcription Services' },
          { href: '/services/copywriting-services-pretoria-johannesburg', label: 'Copywriting Services' },
          { href: '/services/copy-editing-services-pretoria-johannesburg', label: 'Copy Editing Services' }
        ]
      },
      {
        label: 'Marketing Services',
        items: [
          { href: '/services/seo-pretoria', label: 'SEO Services' },
          { href: '/services/google-ads-pretoria', label: 'Google Ads' },
          { href: '/services/social-media-pretoria', label: 'Social Media Marketing' },
          { href: '/services/content-marketing-pretoria', label: 'Content Marketing' },
          { href: '/services/email-marketing-pretoria', label: 'Email Marketing' }
        ]
      },
      {
        label: 'Video & Image Services',
        items: [
          { href: '/corporate-video-production-pretoria', label: 'Corporate Video' },
          { href: '/drone-services-pretoria', label: 'Drone Video' },
          { href: '/video-captioning-services-pretoria', label: 'Video Captioning' },
          { href: '/3d-design-pretoria', label: '3D Design' },
          { href: '/podcast-production-pretoria', label: 'Podcast Production' }
        ]
      },
      {
        label: 'More Services',
        items: [
          { href: '/transcription-services-pretoria', label: 'Transcription' },
          { href: '/book-cover-design-pretoria', label: 'Book Cover Design' },
          { href: '/seo-services-pretoria', label: 'SEO Services' },
          { href: '/copywriting-services-pretoria', label: 'Copywriting' },
          { href: '/website-maintenance-pretoria', label: 'Web Maintenance' },
          { href: '/locations', label: 'Service Areas' }
        ]
      }
    ]
  },
  { href: '/project-showcase-pretoria', label: 'Portfolio' },
  { href: '/creative-industry-blog-pretoria', label: 'Blog' },
  { href: '/about-graphic-design-company-pretoria', label: 'About' },
  { href: '/join-our-team-pretoria', label: 'Careers' },
  { href: '/get-in-touch-pretoria', label: 'Contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Fix hydration issue
  useEffect(() => {
    setMounted(true);

    // Close menu when route changes
    setIsOpen(false);
    setOpenSubmenu(null);
    setOpenCategory(null);
  }, [pathname]);

  if (!mounted) {
    return null;
  }

  const handleSubmenuClick = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
    setOpenCategory(null);
  };

  const handleCategoryClick = (label: string) => {
    setOpenCategory(openCategory === label ? null : label);
  };

  return (
    <>
      {/* Menu Button */}
      <div className="fixed top-8 right-8 z-50 flex items-center gap-4">
        <Link
          href="/quote"
          className="hidden md:flex items-center justify-center px-6 py-3 bg-[#FFD700] text-black font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm uppercase tracking-wider"
        >
          Get Instant Quote
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-[#FFD700]/80 text-sm uppercase tracking-wider font-medium hidden sm:block">
            {isOpen ? 'Close' : 'Menu'}
          </span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 flex flex-col justify-center items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full hover:scale-110 transition-all duration-300 hover:bg-[#FFD700]/10"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            <span className={`w-6 h-0.5 bg-[#FFD700] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#FFD700] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#FFD700] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-full py-20">
              {/* Menu Items */}
              <div className="space-y-6 text-center">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    {item.subItems ? (
                      <div className="relative">
                        <button
                          onClick={() => handleSubmenuClick(item.label)}
                          className={`text-2xl md:text-3xl transition-all duration-300 flex items-center gap-2 mx-auto group
                            ${openSubmenu === item.label ? 'text-[#FFD700]' : 'text-white hover:text-[#FFD700]'}`}
                        >
                          {item.label}
                          <FaChevronDown
                            className={`transition-transform duration-300 group-hover:text-[#FFD700] ${openSubmenu === item.label ? 'rotate-180 text-[#FFD700]' : ''
                              }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openSubmenu === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-4 space-y-6"
                            >
                              {item.subItems.map((category) => (
                                <div key={category.label} className="space-y-2">
                                  <button
                                    onClick={() => handleCategoryClick(category.label)}
                                    className={`text-xl transition-all duration-300 flex items-center gap-2 mx-auto group
                                      ${openCategory === category.label ? 'text-[#FFD700]' : 'text-[#FFD700]/60 hover:text-[#FFD700]'}`}
                                  >
                                    {category.label}
                                    <FaChevronDown
                                      className={`transition-transform duration-300 ${openCategory === category.label ? 'rotate-180' : ''
                                        }`}
                                    />
                                  </button>
                                  <AnimatePresence>
                                    {openCategory === category.label && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-2 pt-2"
                                      >
                                        {category.items.map((subItem) => (
                                          <Link
                                            key={subItem.label}
                                            href={subItem.href}
                                            className={`block text-lg transition-all duration-300
                                              ${pathname === subItem.href ? 'text-[#FFD700]' : 'text-white/60 hover:text-white'}`}
                                            onClick={() => setIsOpen(false)}
                                          >
                                            {subItem.label}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`text-2xl md:text-3xl transition-all duration-300 block
                          ${pathname === item.href ? 'text-[#FFD700]' : 'text-white hover:text-[#FFD700]'}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
