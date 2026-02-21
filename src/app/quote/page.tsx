import { Metadata } from 'next'
import QuoteCalculator from '@/components/QuoteCalculator'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Get a Quote | 012 Agency',
    description: 'Calculate an instant estimate for your design, web, or marketing project with 012 Agency. Professional services tailored to your budget.',
    alternates: {
        canonical: 'https://012agency.co.za/quote',
    },
}

export default function QuotePage() {
    const steps = [
        {
            title: '1. Build your package',
            text: 'Select services, add-ons, and volume to match your project.'
        },
        {
            title: '2. Get an instant estimate',
            text: 'See a transparent range based on typical scope.'
        },
        {
            title: '3. Confirm the details',
            text: 'We review your needs and send a formal proposal.'
        }
    ]
    const checklist = [
        'Business goals and success metrics',
        'Examples of designs or sites you like',
        'Content you already have (logos, copy, images)',
        'Target audience and service areas',
        'Preferred timeline and budget range'
    ]
    const deliverables = [
        'Itemized estimate summary',
        'Scope recommendations and priorities',
        'Suggested timeline and milestones',
        'Clear next steps and proposal'
    ]
    const faqs = [
        {
            q: 'Is the estimate final pricing?',
            a: 'The estimate is a baseline based on your selections. Final pricing is confirmed after a brief project review.'
        },
        {
            q: 'Can I combine services?',
            a: 'Yes. The calculator supports multi-service packages, and we can tailor cross-service bundles.'
        },
        {
            q: 'How fast can we start?',
            a: 'Most projects can begin within 1–2 weeks after scope and deposit are confirmed.'
        },
        {
            q: 'Do you offer payment plans?',
            a: 'Yes. We structure payments around milestones for larger projects.'
        }
    ]
    return (
        <div className="min-h-screen bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-syne font-bold text-white mb-6">
                        Get Your Quote
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Transparent pricing for professional results. Customize your package below to get an instant estimate for your project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {steps.map(step => (
                        <div key={step.title} className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-neutral-400">{step.text}</p>
                        </div>
                    ))}
                </div>

                <QuoteCalculator />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                        <h2 className="text-2xl font-bold text-white mb-4">What you will receive</h2>
                        <ul className="space-y-3 text-neutral-300">
                            {deliverables.map(item => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="text-[#FFD700]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                        <h2 className="text-2xl font-bold text-white mb-4">What helps us quote accurately</h2>
                        <ul className="space-y-3 text-neutral-300">
                            {checklist.map(item => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="text-[#FFD700]">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                        <h3 className="text-xl font-bold text-[#FFD700] mb-4">Value First</h3>
                        <p className="text-gray-400">Our pricing is based on the value we deliver, not just the hours we work. We focus on ROI for your business.</p>
                    </div>
                    <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                        <h3 className="text-xl font-bold text-[#FFD700] mb-4">No Hidden Details</h3>
                        <p className="text-gray-400">The estimate you see is the baseline for your project. We believe in transparency from day one.</p>
                    </div>
                    <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                        <h3 className="text-xl font-bold text-[#FFD700] mb-4">Custom Needs?</h3>
                        <p className="text-gray-400">Don&apos;t see exactly what you need? We create custom packages for unique requirements.</p>
                        <Link href="/contact" className="text-[#FFD700] underline mt-4 inline-block hover:text-white">
                            Contact Us Directly
                        </Link>
                    </div>
                </div>

                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white">Quote FAQs</h2>
                        <p className="text-neutral-400 mt-3">Clear answers so you know what to expect.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.map(faq => (
                            <div key={faq.q} className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                                <p className="text-neutral-400">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
