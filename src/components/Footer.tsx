'use client';

import Link from 'next/link';


export default function Footer() {

  return (
    <footer className="bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-syne font-bold text-lg mb-4">012 Agency</h3>
            <p className="text-neutral-400 text-sm">
              Transforming brands through creative excellence in Pretoria, South Africa.
            </p>
          </div>

          <div>
            <h3 className="text-white font-syne font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-graphic-design-company-pretoria" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing-services-pretoria" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/project-showcase-pretoria" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/creative-industry-blog-pretoria" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/get-in-touch-pretoria" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/transcription-services-pretoria" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Transcription
                </Link>
              </li>
              <li>
                <Link href="/video-captioning-services-pretoria" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Captioning
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-syne font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-neutral-400 text-sm">Email: info@012agency.co.za</li>
              <li className="text-neutral-400 text-sm">Phone: +27 (0)62 369 3769</li>
              <li className="text-neutral-400 text-sm">Park Lane West Building, 194 Bancor Ave, Waterkloof Glen, Pretoria, 0181, South Africa</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-8">
          <h3 className="text-white font-syne font-bold text-lg mb-4">Quick Answers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white text-sm font-semibold mb-2">Do you serve Pretoria and nearby areas?</h4>
              <p className="text-neutral-400 text-sm">
                Yes. We are based in Pretoria and serve clients across Gauteng and South Africa.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-2">What services do you offer?</h4>
              <p className="text-neutral-400 text-sm">
                We provide branding, graphic design, web design, marketing, and content production services.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-2">Can you handle strategy and execution?</h4>
              <p className="text-neutral-400 text-sm">
                Yes. We plan, design, and execute full campaigns from concept to delivery.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-2">How do we start a project?</h4>
              <p className="text-neutral-400 text-sm">
                Share your goals and timeline, and we will propose the best approach and next steps.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-neutral-400 text-sm">
              &copy; {new Date().getFullYear()} 012 Agency. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/data-protection-policy-pretoria" className="text-neutral-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/legal-terms-pretoria" className="text-neutral-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/website-cookie-guidelines-pretoria" className="text-neutral-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
