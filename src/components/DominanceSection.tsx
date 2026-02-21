"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCrown, FaRocket, FaChartLine, FaShieldAlt, FaGlobeAfrica, FaLayerGroup } from "react-icons/fa";

export default function DominanceSection() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-[#FFD700] rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-20 w-72 h-72 bg-[#FFD700] rounded-full blur-[96px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* PART 1: THE AUTHORITY (Alternating Layout) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-syne font-bold mb-6 text-white">
                            Undisputed <span className="text-[#FFD700]">Titans</span> of Design
                        </h2>
                        <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                            In the heart of Pretoria, 012 Agency stands as the undisputed titan of creative design. We don’t just build websites; we engineer digital empires that dominate search rankings and captivate audiences from the first pixel.
                        </p>
                        <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                            Our dominance isn't accidental. It’s forged from over 15 years of relentless innovation, serving Pretoria’s most ambitious businesses. We have redefined what it means to be a graphic design agency, blending aesthetic mastery with military-grade marketing strategy.
                        </p>
                        <p className="text-neutral-300 text-lg leading-relaxed">
                            When you partner with us, you aren't hiring a freelancer. You are deploying a battalion of creative experts dedicated to one singular goal: making your brand the market leader in its sector.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700]/20 to-transparent rounded-2xl transform rotate-3 scale-105" />
                        <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl relative shadow-2xl">
                            <FaCrown className="text-6xl text-[#FFD700] mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">The 012 Standard</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-neutral-300">
                                    <span className="w-2 h-2 bg-[#FFD700] rounded-full" />
                                    Premimum Grade Execution
                                </li>
                                <li className="flex items-center gap-3 text-neutral-300">
                                    <span className="w-2 h-2 bg-[#FFD700] rounded-full" />
                                    Market-Dominating Strategy
                                </li>
                                <li className="flex items-center gap-3 text-neutral-300">
                                    <span className="w-2 h-2 bg-[#FFD700] rounded-full" />
                                    Unmatched Local Authority
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* PART 2: STRATEGIC MASTERY (Bento/Grid Layout) */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-syne font-bold text-white mb-4">The Science of <span className="text-[#FFD700]">Dominance</span></h3>
                        <p className="text-neutral-400 max-w-2xl mx-auto">We operate at the intersection of psychology and technology. Every pixel is a calculated move.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl hover:border-[#FFD700]/50 transition-colors"
                        >
                            <FaRocket className="text-3xl text-[#FFD700] mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">Speed Kills</h4>
                            <p className="text-sm text-neutral-400 leading-relaxed">
                                Our web design philosophy is simple: Speed kills competition. We build hyper-optimized platforms that convert visitors before competitors' sites even load.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl hover:border-[#FFD700]/50 transition-colors lg:col-span-2"
                        >
                            <FaGlobeAfrica className="text-3xl text-[#FFD700] mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">Local Market Intelligence</h4>
                            <p className="text-sm text-neutral-400 leading-relaxed">
                                From Menlyn to Centurion, our digital footprint is unmatched. We understand the local Pretoria market nuances better than anyone, ensuring your message resonates deeply with the local demographic while maintaining world-class standards.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl hover:border-[#FFD700]/50 transition-colors"
                        >
                            <FaChartLine className="text-3xl text-[#FFD700] mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">Data Driven</h4>
                            <p className="text-sm text-neutral-400 leading-relaxed">
                                We analyze user behavior, market trends, and competitive gaps to position your brand exactly where it needs to be—at the top.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* PART 3: HOLISTIC ECOSYSTEM (Centered/Wide) */}
                <div className="bg-gradient-to-r from-zinc-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-[80px]" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-syne font-bold text-white mb-6">
                                Total Market <span className="text-[#FFD700]">Command</span>
                            </h3>
                            <p className="text-neutral-300 mb-6 leading-relaxed">
                                True dominance requires a holistic approach. You cannot win with just a logo or just a website. You need a cohesive ecosystem where your branding, social media, and digital presence reinforce each other in a virtuous cycle of growth.
                            </p>
                            <p className="text-neutral-300 mb-6 leading-relaxed">
                                We are the architects of that ecosystem. 012 Agency provides a seamless integration of services, meaning you have one point of contact for your entire brand evolution. No fragmentation, just pure, concentrated brand power.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Link href="/quote" className="px-8 py-3 bg-[#FFD700] text-black font-bold rounded-full hover:bg-white transition-colors text-center">
                                    Start Dominating
                                </Link>
                                <Link href="/services" className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-center">
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 translate-y-8">
                                <div className="bg-black border border-white/10 p-6 rounded-xl">
                                    <FaShieldAlt className="text-2xl text-[#FFD700] mb-3" />
                                    <div className="font-bold text-white">Brand Security</div>
                                </div>
                                <div className="bg-black border border-white/10 p-6 rounded-xl">
                                    <FaLayerGroup className="text-2xl text-[#FFD700] mb-3" />
                                    <div className="font-bold text-white">Scaleable Assets</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-black border border-white/10 p-6 rounded-xl">
                                    <FaChartLine className="text-2xl text-[#FFD700] mb-3" />
                                    <div className="font-bold text-white">High ROI</div>
                                </div>
                                <div className="bg-[#FFD700] p-6 rounded-xl">
                                    <FaCrown className="text-2xl text-black mb-3" />
                                    <div className="font-bold text-black">Market Leader</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <p className="text-2xl font-syne font-bold text-white mb-6">Stop settling for participation trophies. It’s time to claim the gold.</p>
                    <p className="text-neutral-400">Join the ranks of Pretoria’s elite businesses who trust 012 Agency to define their identity.</p>
                </div>

            </div>
        </section>
    );
}
