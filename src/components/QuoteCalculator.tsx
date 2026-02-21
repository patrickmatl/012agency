'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaDesktop,
    FaPalette,
    FaMobileAlt,
    FaCode,
    FaCamera,
    FaVideo,
    FaBullhorn,
    FaEnvelope,
    FaBook,
    FaTimes,
    FaCheck,
    FaPlus,
    FaMinus
} from 'react-icons/fa';

// Define types for our pricing logic
type ServiceCategory = 'web' | 'graphic' | 'marketing' | 'video' | 'photo' | 'publication' | 'app' | 'audio' | '3d';

// Pricing Model (ZAR)
const RATES = {
    web: {
        base: 4500, // Setup & Basic Framework
        perPage: 1200,
        // Features & Tools
        features: {
            contact_form: 500,
            booking: 3500,
            chat: 1000,
            newsletter: 1500,
            blog: 2500,
            multi_language: 4500,
            search: 1500,
            membership: 5500
        },
        // E-commerce
        ecommerce: {
            store_setup: 5500,
            payment_gateway: 1500,
            product_upload: 2500, // Bulk up to 50
            coupons: 1500,
            shipping: 2500,
            abandoned_cart: 1500
        },
        // SEO & Marketing
        marketing: {
            on_page_seo: 2500,
            keyword_research: 1500,
            analytics: 850,
            search_console: 850,
            meta_tags: 1500,
            local_seo: 2500, // Per city/page
            social_links: 500,
            email_marketing: 3500
        },
        // Speed & Security
        security: {
            ssl: 0, // Included usually, but logic kept
            speed_opt: 2500,
            image_compression: 1500,
            firewall: 1500,
            backup_system: 1500,
            uptime_monitor: 500
        },
        // Maintenance
        maintenance: {
            monthly_updates: 1500, // Monthly fee
            content_edits: 1500,
            security_checks: 850,
            perf_reports: 850,
            hosting: 450
        }
    },
    graphic: {
        // Brand Identity
        identity: {
            logo_design: 4500,
            logo_refresh: 2500,
            style_guide: 3500,
            color_font: 1500,
            business_card: 850,
            letterhead_email: 1200,
            brand_icons: 2500
        },
        // Marketing Materials
        marketing: {
            flyer: 1200,
            poster: 1500,
            brochure: 2500,
            slides: 3500,
            rollup: 1500,
            billboard: 3500,
            menu: 2500
        },
        profile: {
            base: 1500,
            perPage: 450
        },
        // Digital & Social
        digital: {
            social_post: 650,
            social_ad: 850,
            cover_image: 650,
            yt_thumbnail: 650,
            web_banner: 850,
            email_newsletter: 1500
        },
        // Product & Packaging
        packaging: {
            label: 2500,
            box: 4500,
            bottle_jar: 2500,
            mockups: 1500,
            sticker: 850,
            merch: 1500
        },
        // Web & App Visuals
        web_visuals: {
            web_layout: 3500,
            landing_page: 2500,
            app_screen: 1500,
            ui_elements: 2500,
            favicon: 450
        },
        // Print & Publishing
        publishing: {
            book_cover: 3500,
            magazine_layout: 5500, // Base
            catalogue: 4500,
            event_program: 2500,
            certificate: 850
        },
        // Illustration
        illustration: {
            vector: 1500,
            character: 3500,
            infographic: 2500,
            map: 1500,
            pattern: 1500
        },
        // Motion
        motion: {
            logo_anim: 3500,
            social_motion: 2500,
            intro_outro: 2500,
            gif: 1500
        },
        // Support
        support: {
            print_ready: 500,
            conversion: 350,
            retouch: 850,
            bg_removal: 250,
            template: 1500
        }
    },
    publication: {
        // Business Print
        business: {
            card_layout: 650,
            letterhead_layout: 650,
            envelope_layout: 650,
            invoice_quote: 1500,
            profile_layout: 3500
        },
        // Marketing Print
        marketing: {
            flyer_layout: 850,
            poster_layout: 1200,
            brochure_layout: 2500,
            catalogue_layout: 4500,
            menu_layout: 1500,
            rollup_layout: 850,
            ticket_layout: 650,
            coupon_layout: 650
        },
        // Publishing
        publishing: {
            book_interior: 5500, // Base
            book_cover: 3500,
            magazine: 6500,
            newsletter: 2500,
            annual_report: 8500,
            workbook: 3500
        },
        // Corporate & Events
        corporate: {
            handout: 1500,
            booklet: 3500,
            program: 2500,
            certificate: 850,
            invitation: 850,
            badge: 450
        },
        // Product & Retail
        product: {
            label_layout: 1500,
            box_layout: 3500,
            shelf_talker: 650,
            price_list: 1500
        },
        // Production Ready
        production: {
            pdf_setup: 350,
            bleed_crop: 250,
            cmyk_setup: 250,
            font_pack: 250,
            pre_press: 500
        }
    },
    // Keep others simplified for now as requested focus was on Web, Graphic, Print
    marketing: {
        platformBase: 1500,
        perPost: 450,
        extras: { ads_setup: 3500, email_setup: 2500, seo_monthly: 4500 }
    },
    video: {
        corporateBase: 6500, perMinuteEditing: 1500, droneAddon: 3500,
        extras: { scriptwriting: 2500, voiceover: 1500, subtitles: 850 }
    },
    photo: {
        baseSession: 2500, hourlyRate: 1500,
        retouching: { standard: 0, high_end: 1500 }
    },
    app: {
        base: 15000, perScreen: 1200,
        complexityMultiplier: { low: 1, medium: 1.5, high: 2.2 }
    },
    audio: {
        transcriptionPerMin: 25, captioningPerMin: 35, podcastPerEp: 1500
    },
    threeD: {
        baseSecond: 500, modeling: 4500, rendering: 2500,
        complexityMultiplier: { low: 1, medium: 1.8, high: 3.0 }
    }
};

export default function QuoteCalculator() {
    // State for user selections
    const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('web');

    // Website
    const [webPages, setWebPages] = useState(5);
    const [webFeatures, setWebFeatures] = useState<string[]>([]);
    const [webEcommerce, setWebEcommerce] = useState<string[]>([]);
    const [webMarketing, setWebMarketing] = useState<string[]>([]);
    const [webSecurity, setWebSecurity] = useState<string[]>([]);
    const [webMaintenance, setWebMaintenance] = useState<string[]>([]);

    // Graphic
    const [graphicIdentity, setGraphicIdentity] = useState<string[]>([]);
    const [graphicMarketing, setGraphicMarketing] = useState<string[]>([]);
    const [graphicDigital, setGraphicDigital] = useState<string[]>([]);
    const [graphicPackaging, setGraphicPackaging] = useState<string[]>([]);
    const [graphicWebVisuals, setGraphicWebVisuals] = useState<string[]>([]);
    const [graphicPublishing, setGraphicPublishing] = useState<string[]>([]);
    const [graphicIllustration, setGraphicIllustration] = useState<string[]>([]);
    const [graphicMotion, setGraphicMotion] = useState<string[]>([]);
    const [graphicSupport, setGraphicSupport] = useState<string[]>([]);
    const [includeProfile, setIncludeProfile] = useState(false);
    const [profilePages, setProfilePages] = useState(8);

    // Publication / Print Layout
    const [printBusiness, setPrintBusiness] = useState<string[]>([]);
    const [printMarketing, setPrintMarketing] = useState<string[]>([]);
    const [printPublishing, setPrintPublishing] = useState<string[]>([]);
    const [printCorporate, setPrintCorporate] = useState<string[]>([]);
    const [printProduct, setPrintProduct] = useState<string[]>([]);
    const [printProduction, setPrintProduction] = useState<string[]>([]);

    // Legacy / Other Vars (kept for compatibility with other tabs)
    const [socialPlatforms, setSocialPlatforms] = useState<string[]>([]);
    const [postsPerWeek, setPostsPerWeek] = useState(3);
    const [marketingExtras, setMarketingExtras] = useState<string[]>([]);
    const [videoType, setVideoType] = useState('corporate');
    const [videoDuration, setVideoDuration] = useState(2);
    const [videoExtras, setVideoExtras] = useState<string[]>([]);
    const [photoHours, setPhotoHours] = useState(2);
    const [photoRetouching, setPhotoRetouching] = useState('standard');
    const [appType, setAppType] = useState('mobile_app');
    const [appScreens, setAppScreens] = useState(10);
    const [appComplexity, setAppComplexity] = useState('medium');
    const [transcriptionMins, setTranscriptionMins] = useState(30);
    const [captioningMins, setCaptioningMins] = useState(10);
    const [podcastEpisodes, setPodcastEpisodes] = useState(4);
    const [audioServices, setAudioServices] = useState<string[]>([]);
    const [threeDSeconds, setThreeDSeconds] = useState(15);
    const [threeDComplexity, setThreeDComplexity] = useState('medium');
    const [threeDServices, setThreeDServices] = useState<string[]>([]);

    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientCompany, setClientCompany] = useState('');
    const [showEmailForm, setShowEmailForm] = useState(false);
    const [estimatedPrice, setEstimatedPrice] = useState(0);
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
    const [quoteStatus, setQuoteStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [quoteError, setQuoteError] = useState<string | null>(null);
    const [quoteWebsite, setQuoteWebsite] = useState('');

    // Calculation Effect
    useEffect(() => {
        let total = 0;

        const sumCategory = (selectedItems: string[], rates: Record<string, number>) => {
            return selectedItems.reduce((acc, item) => acc + (rates[item] || 0), 0);
        };

        switch (selectedCategory) {
            case 'web':
                total += RATES.web.base + (webPages * RATES.web.perPage);
                total += sumCategory(webFeatures, RATES.web.features);
                total += sumCategory(webEcommerce, RATES.web.ecommerce);
                total += sumCategory(webMarketing, RATES.web.marketing);
                total += sumCategory(webSecurity, RATES.web.security);
                total += sumCategory(webMaintenance, RATES.web.maintenance);
                break;

            case 'graphic':
                total += sumCategory(graphicIdentity, RATES.graphic.identity);
                total += sumCategory(graphicMarketing, RATES.graphic.marketing);
                total += sumCategory(graphicDigital, RATES.graphic.digital);
                total += sumCategory(graphicPackaging, RATES.graphic.packaging);
                total += sumCategory(graphicWebVisuals, RATES.graphic.web_visuals);
                total += sumCategory(graphicPublishing, RATES.graphic.publishing);
                total += sumCategory(graphicIllustration, RATES.graphic.illustration);
                total += sumCategory(graphicMotion, RATES.graphic.motion);
                total += sumCategory(graphicSupport, RATES.graphic.support);
                if (includeProfile) total += RATES.graphic.profile.base + (profilePages * RATES.graphic.profile.perPage);
                break;

            case 'publication':
                total += sumCategory(printBusiness, RATES.publication.business);
                total += sumCategory(printMarketing, RATES.publication.marketing);
                total += sumCategory(printPublishing, RATES.publication.publishing);
                total += sumCategory(printCorporate, RATES.publication.corporate);
                total += sumCategory(printProduct, RATES.publication.product);
                total += sumCategory(printProduction, RATES.publication.production);
                break;

            case 'marketing':
                if (socialPlatforms.length > 0) total += (postsPerWeek * 4 * RATES.marketing.perPost);
                total += (socialPlatforms.length * RATES.marketing.platformBase);
                // @ts-expect-error: Legacy support
                marketingExtras.forEach(e => { if (RATES.marketing.extras[e]) total += RATES.marketing.extras[e]; });
                break;

            case 'video':
                total += RATES.video.corporateBase;
                if (videoDuration > 1) total += (videoDuration - 1) * RATES.video.perMinuteEditing;
                // @ts-expect-error: Legacy support
                videoExtras.forEach(e => { if (RATES.video.extras[e]) total += RATES.video.extras[e]; if (e === 'drone_addon') total += RATES.video.droneAddon; });
                break;

            case 'photo':
                total += RATES.photo.baseSession;
                if (photoHours > 1) total += (photoHours - 1) * RATES.photo.hourlyRate;
                // @ts-expect-error: Legacy support
                if (photoRetouching !== 'standard') total += RATES.photo.retouching[photoRetouching];
                break;

            case 'app':
                total += RATES.app.base + (appScreens * RATES.app.perScreen);
                // @ts-expect-error: Legacy support
                total = total * RATES.app.complexityMultiplier[appComplexity];
                break;

            case 'audio':
                if (audioServices.includes('transcription')) total += transcriptionMins * RATES.audio.transcriptionPerMin;
                if (audioServices.includes('captioning')) total += captioningMins * RATES.audio.captioningPerMin;
                if (audioServices.includes('podcast')) total += podcastEpisodes * RATES.audio.podcastPerEp;
                break;

            case '3d':
                if (threeDServices.includes('motion')) {
                    // @ts-expect-error: Legacy support
                    total += (threeDSeconds * RATES.threeD.baseSecond) * RATES.threeD.complexityMultiplier[threeDComplexity];
                }
                if (threeDServices.includes('modeling')) total += RATES.threeD.modeling;
                if (threeDServices.includes('rendering')) total += RATES.threeD.rendering;
                break;
        }

        setEstimatedPrice(Math.round(total));
        setEstimatedPrice(Math.round(total));
    }, [
        selectedCategory, webPages, webFeatures, webEcommerce, webMarketing, webSecurity, webMaintenance,
        graphicIdentity, graphicMarketing, graphicDigital, graphicPackaging, graphicWebVisuals, graphicPublishing, graphicIllustration, graphicMotion, graphicSupport, includeProfile, profilePages,
        printBusiness, printMarketing, printPublishing, printCorporate, printProduct, printProduction,
        socialPlatforms, postsPerWeek, marketingExtras, videoType, videoDuration, videoExtras, photoHours, photoRetouching,
        appScreens, appComplexity, transcriptionMins, captioningMins, podcastEpisodes, audioServices, threeDSeconds, threeDComplexity, threeDServices
    ]);

    const toggleItem = (item: string, currentList: string[], setList: (items: string[]) => void) => {
        setList(currentList.includes(item) ? currentList.filter(i => i !== item) : [...currentList, item]);
    };

    const handleEmailQuote = async (e: React.FormEvent) => {
        e.preventDefault();

        if (quoteWebsite.trim()) {
            setShowEmailForm(false);
            setQuoteStatus('success');
            return;
        }

        if (!clientName || !clientEmail) {
            window.alert('Please enter your name and email so we can send your quote.');
            return;
        }

        try {
            setQuoteError(null);
            setQuoteStatus('sending');

            const response = await fetch('/api/quote-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    clientName,
                    clientEmail,
                    clientCompany,
                    estimatedPrice,
                    category: selectedCategory,
                }),
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            setQuoteStatus('success');
            setShowEmailForm(false);
        } catch {
            setQuoteStatus('error');
            setQuoteError('We could not send your quote email right now. Please try again.');
        }
    };

    const handleDownloadPdf = async () => {
        if (!clientName || !clientEmail) {
            setShowEmailForm(true);
            window.alert('Please enter at least your name and email so we can personalise your quote PDF.');
            return;
        }

        try {
            setIsGeneratingPdf(true);
            const { PDFDocument, StandardFonts } = await import('pdf-lib');

            const pdfDoc = await PDFDocument.create();
            const page = pdfDoc.addPage();
            const { width, height } = page.getSize();
            const margin = 50;
            const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
            const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

            let y = height - margin;

            const drawLine = (text: string, size = 12, bold = false) => {
                const usedFont = bold ? boldFont : font;
                page.drawText(text, {
                    x: margin,
                    y,
                    size,
                    font: usedFont,
                });
                y -= size + 6;
            };

            try {
                const logoCandidates = ['/logo-012.png', '/logo.png'];
                for (const logoPath of logoCandidates) {
                    const response = await fetch(logoPath);
                    if (response.ok) {
                        const logoBytes = await response.arrayBuffer();
                        const logoImage = await pdfDoc.embedPng(logoBytes);
                        const logoDims = logoImage.scale(0.4);
                        page.drawImage(logoImage, {
                            x: width - margin - logoDims.width,
                            y: y - logoDims.height + 10,
                            width: logoDims.width,
                            height: logoDims.height,
                        });
                        break;
                    }
                }
            } catch {
            }

            drawLine('012 Agency', 20, true);
            drawLine('Park Lane West Building, 194 Bancor Ave', 10);
            drawLine('Waterkloof Glen, Pretoria, 0181, South Africa', 10);
            drawLine('Phone: +27 62 369 3789  |  Email: info@012agency.co.za', 10);
            drawLine('Website: www.012agency.co.za', 10);

            y -= 10;
            drawLine('Quote', 18, true);

            const today = new Date();
            drawLine(`Date: ${today.toLocaleDateString()}`, 12);

            y -= 4;
            drawLine('Prepared for:', 12, true);
            drawLine(clientName, 12);
            if (clientCompany) {
                drawLine(clientCompany, 12);
            }
            drawLine(clientEmail, 12);

            y -= 10;
            const categoryLabelMap: Record<ServiceCategory, string> = {
                web: 'Web Design & Development',
                graphic: 'Graphic Design',
                marketing: 'Marketing Services',
                video: 'Video Production',
                photo: 'Photography',
                publication: 'Print Layout & Publication',
                app: 'App Design & Development',
                audio: 'Audio & Post Production',
                threeD: '3D & Animation',
            };

            drawLine(`Service Category: ${categoryLabelMap[selectedCategory]}`, 12);
            drawLine(`Estimated Total (incl. design scope shown below): R${estimatedPrice.toLocaleString()}.00`, 12, true);

            y -= 10;
            drawLine('Selected Scope Overview', 14, true);

            const selectedLines: string[] = [];

            if (selectedCategory === 'web') {
                selectedLines.push(`Base website with ${webPages} pages`);
                [
                    ...webFeatures,
                    ...webEcommerce,
                    ...webMarketing,
                    ...webSecurity,
                    ...webMaintenance,
                ].forEach((item) => selectedLines.push(item.replace(/_/g, ' ')));
            }

            if (selectedCategory === 'graphic') {
                if (includeProfile) {
                    selectedLines.push(`Company profile design, ${profilePages} pages`);
                }
                [
                    ...graphicIdentity,
                    ...graphicMarketing,
                    ...graphicDigital,
                    ...graphicPackaging,
                    ...graphicWebVisuals,
                    ...graphicPublishing,
                    ...graphicIllustration,
                    ...graphicMotion,
                    ...graphicSupport,
                ].forEach((item) => selectedLines.push(item.replace(/_/g, ' ')));
            }

            if (selectedCategory === 'publication') {
                [
                    ...printBusiness,
                    ...printMarketing,
                    ...printPublishing,
                    ...printCorporate,
                    ...printProduct,
                    ...printProduction,
                ].forEach((item) => selectedLines.push(item.replace(/_/g, ' ')));
            }

            if (selectedCategory === 'marketing') {
                if (socialPlatforms.length > 0) {
                    selectedLines.push(`${socialPlatforms.length} social platforms`);
                    selectedLines.push(`${postsPerWeek} posts per week per platform`);
                }
                marketingExtras.forEach((item) => selectedLines.push(item.replace(/_/g, ' ')));
            }

            if (selectedCategory === 'video') {
                selectedLines.push(`${videoType === 'corporate' ? 'Corporate/Promo' : 'Social'} video`);
                selectedLines.push(`${videoDuration} minute duration`);
                videoExtras.forEach((item) => selectedLines.push(item.replace(/_/g, ' ')));
            }

            if (selectedCategory === 'photo') {
                selectedLines.push(`${photoHours} hour photo session`);
                selectedLines.push(
                    photoRetouching === 'standard' ? 'Standard retouching' : 'High-end retouching',
                );
            }

            if (selectedCategory === 'app') {
                selectedLines.push(
                    `App type: ${appType === 'mobile_app' ? 'Mobile app' : 'Web app'}`,
                );
                selectedLines.push(`${appScreens} screens`);
                selectedLines.push(`Complexity: ${appComplexity}`);
            }

            if (selectedCategory === 'audio') {
                if (audioServices.includes('transcription')) {
                    selectedLines.push(`Transcription: ${transcriptionMins} minutes`);
                }
                if (audioServices.includes('captioning')) {
                    selectedLines.push(`Captioning: ${captioningMins} minutes`);
                }
                if (audioServices.includes('podcast')) {
                    selectedLines.push(`Podcast production: ${podcastEpisodes} episodes`);
                }
            }

            if (selectedCategory === '3d') {
                threeDServices.forEach((service) =>
                    selectedLines.push(`3D service: ${service.replace(/_/g, ' ')}`),
                );
                if (threeDServices.includes('motion')) {
                    selectedLines.push(`Animation duration: ${threeDSeconds} seconds`);
                    selectedLines.push(`Complexity: ${threeDComplexity}`);
                }
            }

            if (selectedLines.length === 0) {
                selectedLines.push('Base package configuration for this service category.');
            }

            selectedLines.forEach((line) => {
                if (y < margin + 40) {
                    y = height - margin;
                    drawLine('Continued scope...', 12, true);
                }
                drawLine(`• ${line}`, 11);
            });

            y -= 10;
            drawLine('Estimate Summary', 14, true);
            drawLine(`Number of scope items in this estimate: ${selectedLines.length}`, 11);
            drawLine('Includes base service for this category plus selected options above.', 11);

            y -= 16;
            drawLine('Notes', 14, true);
            drawLine('This is an indicative estimate based on your current selections.', 11);
            drawLine('Final pricing may adjust after a detailed project briefing.', 11);

            y -= 10;
            drawLine('Terms & Conditions', 14, true);
            const termsLines = [
                'This estimate is indicative and subject to a formal proposal.',
                'Pricing may change based on final brief, scope, and timelines.',
                'Third-party costs (stock, fonts, plugins, hosting) are quoted separately.',
                'Payment terms and project milestones will be agreed in writing.',
                'All work is subject to 012 Agency standard service terms.',
            ];
            termsLines.forEach((line) => {
                if (y < margin + 40) {
                    y = height - margin;
                    drawLine('Continued terms...', 12, true);
                }
                drawLine(line, 10);
            });

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            const safeName = clientName || 'client';
            link.download = `012-agency-quote-${safeName.replace(/\s+/g, '-').toLowerCase()}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } finally {
            setIsGeneratingPdf(false);
        }
    };

    // UI Helper for counters
    interface CounterProps {
        label: string;
        value: number;
        onChange: (val: number) => void;
        min?: number;
        max?: number;
        step?: number;
    }

    const Counter = ({ label, value, onChange, min = 1, max = 100, step = 1 }: CounterProps) => (
        <div className="flex items-center justify-between bg-zinc-800 p-4 rounded-lg">
            <span className="font-medium text-white">{label}</span>
            <div className="flex items-center gap-3">
                <button onClick={() => onChange(Math.max(min, value - step))} className="w-8 h-8 flex items-center justify-center bg-zinc-700 text-white rounded hover:bg-zinc-600"><FaMinus size={10} /></button>
                <span className="w-8 text-center font-bold text-[#FFD700]">{value}</span>
                <button onClick={() => onChange(Math.min(max, value + step))} className="w-8 h-8 flex items-center justify-center bg-zinc-700 text-white rounded hover:bg-zinc-600"><FaPlus size={10} /></button>
            </div>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto" id="calculator">
            <div className="bg-zinc-900 rounded-3xl p-6 md:p-10 border border-zinc-800 shadow-2xl overflow-hidden relative">
                {/* Decorative background vibe */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-3xl -z-10" />

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight"><span className="text-[#FFD700]">Customize</span> Your Quote</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Select your service and fine-tune every detail. Transparency is our policy.</p>
                </div>

                {/* Category Navigation */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                    {[
                        { id: 'web', label: 'Web', icon: <FaDesktop /> },
                        { id: 'graphic', label: 'Graphic', icon: <FaPalette /> },
                        { id: 'marketing', label: 'Marketing', icon: <FaBullhorn /> },
                        { id: 'video', label: 'Video', icon: <FaVideo /> },
                        { id: 'photo', label: 'Photo', icon: <FaCamera /> },
                        { id: 'app', label: 'App', icon: <FaMobileAlt /> },
                        { id: 'publication', label: 'Print/Layout', icon: <FaBook /> },
                        { id: 'audio', label: 'Audio', icon: <FaCode /> },
                        { id: '3d', label: '3D/Anim', icon: <FaCode /> },
                    ].map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id as ServiceCategory)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${selectedCategory === category.id
                                ? 'bg-[#FFD700] text-black scale-110 shadow-[0_0_20px_rgba(255,215,0,0.3)]'
                                : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white'
                                }`}
                        >
                            {category.icon}
                            <span className="hidden md:inline">{category.label}</span>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Controls Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedCategory}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                {/* WEB CONTROLS */}
                                {selectedCategory === 'web' && (
                                    <div className="space-y-6">
                                        <Counter label="Number of Web Pages" value={webPages} onChange={setWebPages} max={50} />

                                        {[
                                            { title: 'Features & Tools', list: RATES.web.features, state: webFeatures, set: setWebFeatures },
                                            { title: 'E-commerce', list: RATES.web.ecommerce, state: webEcommerce, set: setWebEcommerce },
                                            { title: 'SEO & Marketing', list: RATES.web.marketing, state: webMarketing, set: setWebMarketing },
                                            { title: 'Speed & Security', list: RATES.web.security, state: webSecurity, set: setWebSecurity },
                                            { title: 'Maintenance Plans (Monthly)', list: RATES.web.maintenance, state: webMaintenance, set: setWebMaintenance },
                                        ].map((group) => (
                                            <div key={group.title} className="bg-zinc-800/50 p-5 rounded-xl border border-zinc-700">
                                                <h4 className="font-bold text-white mb-4 text-[#FFD700]">{group.title}</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {Object.entries(group.list).map(([key, price]) => (
                                                        <button key={key} onClick={() => toggleItem(key, group.state, group.set)}
                                                            className={`flex justify-between items-center p-3 rounded-lg text-sm font-medium transition-all ${group.state.includes(key) ? 'bg-[#FFD700] text-black shadow-lg' : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'}`}>
                                                            <span className="capitalize">{key.replace(/_/g, ' ')}</span>
                                                            <span className="text-xs opacity-60">R{price}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* GRAPHIC CONTROLS */}
                                {selectedCategory === 'graphic' && (
                                    <div className="space-y-6">
                                        {/* Company Profile Dedicated Section */}
                                        <div className="bg-zinc-800 p-4 rounded-xl">
                                            <label className="flex items-center justify-between mb-4 cursor-pointer">
                                                <span className="font-bold text-white text-lg">Company Profile Design</span>
                                                <input
                                                    type="checkbox"
                                                    checked={includeProfile}
                                                    onChange={(e) => setIncludeProfile(e.target.checked)}
                                                    className="accent-[#FFD700] w-6 h-6"
                                                />
                                            </label>
                                            {includeProfile && (
                                                <div className="mt-4 border-t border-zinc-700 pt-4">
                                                    <Counter label="Number of Pages" value={profilePages} onChange={setProfilePages} max={100} step={2} />
                                                    <p className="text-xs text-gray-500 mt-2">Includes layout, typesetting, and image sourcing.</p>
                                                </div>
                                            )}
                                        </div>

                                        {[
                                            { title: 'Brand Identity', list: RATES.graphic.identity, state: graphicIdentity, set: setGraphicIdentity },
                                            { title: 'Marketing Materials', list: RATES.graphic.marketing, state: graphicMarketing, set: setGraphicMarketing },
                                            { title: 'Digital & Social Media', list: RATES.graphic.digital, state: graphicDigital, set: setGraphicDigital },
                                            { title: 'Product & Packaging', list: RATES.graphic.packaging, state: graphicPackaging, set: setGraphicPackaging },
                                            { title: 'Web & App Visuals', list: RATES.graphic.web_visuals, state: graphicWebVisuals, set: setGraphicWebVisuals },
                                            { title: 'Print & Publishing', list: RATES.graphic.publishing, state: graphicPublishing, set: setGraphicPublishing },
                                            { title: 'Illustration & Art', list: RATES.graphic.illustration, state: graphicIllustration, set: setGraphicIllustration },
                                            { title: 'Motion & Media', list: RATES.graphic.motion, state: graphicMotion, set: setGraphicMotion },
                                            { title: 'Support Services', list: RATES.graphic.support, state: graphicSupport, set: setGraphicSupport },
                                        ].map((group) => (
                                            <div key={group.title} className="bg-zinc-800/50 p-5 rounded-xl border border-zinc-700">
                                                <h4 className="font-bold text-white mb-4 text-[#FFD700]">{group.title}</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {Object.entries(group.list).map(([key, price]) => (
                                                        <button key={key} onClick={() => toggleItem(key, group.state, group.set)}
                                                            className={`flex justify-between items-center p-3 rounded-lg text-sm font-medium transition-all ${group.state.includes(key) ? 'bg-[#FFD700] text-black shadow-lg' : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'}`}>
                                                            <span className="capitalize">{key.replace(/_/g, ' ')}</span>
                                                            <span className="text-xs opacity-60">R{price}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* PUBLICATION (PRINT & LAYOUT) CONTROLS */}
                                {selectedCategory === 'publication' && (
                                    <div className="space-y-6">
                                        {[
                                            { title: 'Business Print Layout', list: RATES.publication.business, state: printBusiness, set: setPrintBusiness },
                                            { title: 'Marketing Print Layout', list: RATES.publication.marketing, state: printMarketing, set: setPrintMarketing },
                                            { title: 'Publishing Layout', list: RATES.publication.publishing, state: printPublishing, set: setPrintPublishing },
                                            { title: 'Corporate & Events', list: RATES.publication.corporate, state: printCorporate, set: setPrintCorporate },
                                            { title: 'Product & Retail', list: RATES.publication.product, state: printProduct, set: setPrintProduct },
                                            { title: 'Production Ready Setup', list: RATES.publication.production, state: printProduction, set: setPrintProduction },
                                        ].map((group) => (
                                            <div key={group.title} className="bg-zinc-800/50 p-5 rounded-xl border border-zinc-700">
                                                <h4 className="font-bold text-white mb-4 text-[#FFD700]">{group.title}</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {Object.entries(group.list).map(([key, price]) => (
                                                        <button key={key} onClick={() => toggleItem(key, group.state, group.set)}
                                                            className={`flex justify-between items-center p-3 rounded-lg text-sm font-medium transition-all ${group.state.includes(key) ? 'bg-[#FFD700] text-black shadow-lg' : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'}`}>
                                                            <span className="capitalize">{key.replace(/_/g, ' ')}</span>
                                                            <span className="text-xs opacity-60">R{price}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* MARKETING CONTROLS */}
                                {selectedCategory === 'marketing' && (
                                    <>
                                        <div>
                                            <h4 className="font-bold text-white mb-4">Platforms to Manage</h4>
                                            <div className="flex flex-wrap gap-3">
                                                {['Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'Twitter'].map(p => (
                                                    <button key={p} onClick={() => toggleItem(p, socialPlatforms, setSocialPlatforms)}
                                                        className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${socialPlatforms.includes(p) ? 'bg-blue-600 border-blue-600 text-white' : 'bg-transparent border-zinc-700 text-gray-400 hover:border-gray-500'}`}>
                                                        {p}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {socialPlatforms.length > 0 && (
                                            <Counter label="Posts Per Week (Per Platform)" value={postsPerWeek} onChange={setPostsPerWeek} min={1} max={7} />
                                        )}

                                        <div>
                                            <h4 className="font-bold text-white mb-4">Marketing Extras</h4>
                                            <div className="grid grid-cols-2 gap-3">
                                                {[
                                                    { id: 'ads_setup', label: 'Paid Ads Setup' },
                                                    { id: 'email_setup', label: 'Email Funnel' },
                                                    { id: 'seo_monthly', label: 'Monthly SEO' },
                                                ].map(e => (
                                                    <button key={e.id} onClick={() => toggleItem(e.id, marketingExtras, setMarketingExtras)}
                                                        className={`p-3 rounded-lg text-sm font-medium transition-all ${marketingExtras.includes(e.id) ? 'bg-[#FFD700] text-black' : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'}`}>
                                                        {e.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* VIDEO CONTROLS */}
                                {selectedCategory === 'video' && (
                                    <>
                                        <div>
                                            <h4 className="font-bold text-white mb-4">Video Type</h4>
                                            <div className="flex gap-3">
                                                <button onClick={() => setVideoType('corporate')} className={`flex-1 py-3 rounded-lg font-bold ${videoType === 'corporate' ? 'bg-[#FFD700] text-black' : 'bg-zinc-800 text-gray-400'}`}>Corporate / Promo</button>
                                                <button onClick={() => setVideoType('social')} className={`flex-1 py-3 rounded-lg font-bold ${videoType === 'social' ? 'bg-[#FFD700] text-black' : 'bg-zinc-800 text-gray-400'}`}>Social Content</button>
                                            </div>
                                        </div>
                                        <Counter label="Video Duration (Minutes)" value={videoDuration} onChange={setVideoDuration} max={60} />

                                        <div>
                                            <h4 className="font-bold text-white mb-4">Production Extras</h4>
                                            <div className="grid grid-cols-2 gap-3">
                                                {[
                                                    { id: 'drone_addon', label: 'Add Drone Footage' },
                                                    { id: 'scriptwriting', label: 'Scriptwriting' },
                                                    { id: 'voiceover', label: 'Pro Voiceover' },
                                                    { id: 'subtitles', label: 'Subtitles' },
                                                ].map(e => (
                                                    <button key={e.id} onClick={() => toggleItem(e.id, videoExtras, setVideoExtras)}
                                                        className={`p-3 rounded-lg text-sm font-medium transition-all ${videoExtras.includes(e.id) ? 'bg-[#FFD700] text-black' : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'}`}>
                                                        {e.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* PHOTO CONTROLS */}
                                {selectedCategory === 'photo' && (
                                    <div className="space-y-6">
                                        <Counter label="Session Hours" value={photoHours} onChange={setPhotoHours} min={1} max={8} />
                                        <div>
                                            <h4 className="font-bold text-white mb-4">Retouching Level</h4>
                                            <div className="flex gap-3">
                                                <button onClick={() => setPhotoRetouching('standard')} className={`flex-1 py-3 rounded-lg font-bold ${photoRetouching === 'standard' ? 'bg-[#FFD700] text-black' : 'bg-zinc-800 text-gray-400'}`}>Standard</button>
                                                <button onClick={() => setPhotoRetouching('high_end')} className={`flex-1 py-3 rounded-lg font-bold ${photoRetouching === 'high_end' ? 'bg-[#FFD700] text-black' : 'bg-zinc-800 text-gray-400'}`}>High-End</button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* APP CONTROLS */}
                                {selectedCategory === 'app' && (
                                    <>
                                        <div>
                                            <h4 className="font-bold text-white mb-4">App Type</h4>
                                            <div className="flex gap-3">
                                                <button onClick={() => setAppType('mobile_app')} className={`flex-1 py-3 rounded-lg font-bold ${appType === 'mobile_app' ? 'bg-[#FFD700] text-black' : 'bg-zinc-800 text-gray-400'}`}>Mobile App</button>
                                                <button onClick={() => setAppType('web_app')} className={`flex-1 py-3 rounded-lg font-bold ${appType === 'web_app' ? 'bg-[#FFD700] text-black' : 'bg-zinc-800 text-gray-400'}`}>Web App</button>
                                            </div>
                                        </div>
                                        <Counter label="Number of Screens" value={appScreens} onChange={setAppScreens} max={100} />

                                        <div>
                                            <h4 className="font-bold text-white mb-4">Complexity Level</h4>
                                            <div className="flex gap-3">
                                                {['low', 'medium', 'high'].map(l => (
                                                    <button key={l} onClick={() => setAppComplexity(l)}
                                                        className={`flex-1 py-3 rounded-lg text-sm font-bold capitalize transition-all ${appComplexity === l ? 'bg-[#FFD700] text-black' : 'bg-zinc-800 text-gray-400'}`}>
                                                        {l}
                                                    </button>
                                                ))}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">Low: Standard lists/data. Medium: User profiles, specialized logic. High: Real-time, complex algorithm.</p>
                                        </div>
                                    </>
                                )}

                                {/* AUDIO CONTROLS */}
                                {selectedCategory === 'audio' && (
                                    <div className="space-y-6">
                                        <div className="bg-zinc-800 p-4 rounded-xl">
                                            <label className="flex items-center justify-between mb-4 cursor-pointer">
                                                <span className="font-bold text-white">Transcription</span>
                                                <input type="checkbox" checked={audioServices.includes('transcription')} onChange={() => toggleItem('transcription', audioServices, setAudioServices)} className="accent-[#FFD700] w-5 h-5" />
                                            </label>
                                            {audioServices.includes('transcription') && <Counter label="Minutes" value={transcriptionMins} onChange={setTranscriptionMins} step={5} max={500} />}
                                        </div>
                                        <div className="bg-zinc-800 p-4 rounded-xl">
                                            <label className="flex items-center justify-between mb-4 cursor-pointer">
                                                <span className="font-bold text-white">Video Captioning</span>
                                                <input type="checkbox" checked={audioServices.includes('captioning')} onChange={() => toggleItem('captioning', audioServices, setAudioServices)} className="accent-[#FFD700] w-5 h-5" />
                                            </label>
                                            {audioServices.includes('captioning') && <Counter label="Minutes" value={captioningMins} onChange={setCaptioningMins} step={5} max={500} />}
                                        </div>
                                        <div className="bg-zinc-800 p-4 rounded-xl">
                                            <label className="flex items-center justify-between mb-4 cursor-pointer">
                                                <span className="font-bold text-white">Podcast Production</span>
                                                <input type="checkbox" checked={audioServices.includes('podcast')} onChange={() => toggleItem('podcast', audioServices, setAudioServices)} className="accent-[#FFD700] w-5 h-5" />
                                            </label>
                                            {audioServices.includes('podcast') && <Counter label="Episodes" value={podcastEpisodes} onChange={setPodcastEpisodes} max={20} />}
                                        </div>
                                    </div>
                                )}

                                {/* 3D CONTROLS */}
                                {selectedCategory === '3d' && (
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-white mb-4">Services Needed</h4>
                                            <div className="flex gap-3">
                                                {['modeling', 'rendering', 'motion'].map(s => (
                                                    <button key={s} onClick={() => toggleItem(s, threeDServices, setThreeDServices)}
                                                        className={`flex-1 py-3 rounded-lg text-sm font-bold capitalize transition-all ${threeDServices.includes(s) ? 'bg-[#FFD700] text-black' : 'bg-zinc-800 text-gray-400'}`}>
                                                        {s}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        {threeDServices.includes('motion') && (
                                            <Counter label="Animation Duration (Seconds)" value={threeDSeconds} onChange={setThreeDSeconds} step={5} max={300} />
                                        )}

                                        <div>
                                            <h4 className="font-bold text-white mb-4">Complexity</h4>
                                            <div className="flex gap-3">
                                                {['low', 'medium', 'high'].map(l => (
                                                    <button key={l} onClick={() => setThreeDComplexity(l)}
                                                        className={`flex-1 py-3 rounded-lg text-sm font-bold capitalize transition-all ${threeDComplexity === l ? 'bg-[#FFD700] text-black' : 'bg-zinc-800 text-gray-400'}`}>
                                                        {l}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Summary Column */}
                    <div className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800 flex flex-col justify-between h-auto min-h-[500px] sticky top-10">
                        <div>
                            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Estimated Total</h3>
                            <div className="text-5xl font-black text-white mb-6">
                                R{estimatedPrice.toLocaleString()}
                                <span className="text-lg text-gray-500 font-normal ml-1">.00</span>
                            </div>

                            <div className="border-t border-zinc-800 pt-6 space-y-3">
                                <h4 className="font-bold text-[#FFD700] mb-4 text-sm uppercase">Breakdown</h4>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    {selectedCategory === 'web' && (
                                        <>
                                            <li className="flex justify-between"><span>Base + {webPages} Pages</span> <span>Included</span></li>
                                            {[
                                                ...webFeatures, ...webEcommerce, ...webMarketing,
                                                ...webSecurity, ...webMaintenance
                                            ].map(f => (
                                                <li key={f} className="flex justify-between capitalize text-white">
                                                    <span>+ {f.replace(/_/g, ' ')}</span> <FaCheck className="text-[#FFD700]" />
                                                </li>
                                            ))}
                                        </>
                                    )}
                                    {selectedCategory === 'graphic' && (
                                        <>
                                            {includeProfile && <li className="flex justify-between text-white font-bold"><span>Company Profile ({profilePages} Pages)</span> <FaCheck className="text-[#FFD700]" /></li>}
                                            {[
                                                ...graphicIdentity, ...graphicMarketing, ...graphicDigital,
                                                ...graphicPackaging, ...graphicWebVisuals, ...graphicPublishing,
                                                ...graphicIllustration, ...graphicMotion, ...graphicSupport
                                            ].map(i => (
                                                <li key={i} className="flex justify-between capitalize text-white">
                                                    <span>+ {i.replace(/_/g, ' ')}</span> <FaCheck className="text-[#FFD700]" />
                                                </li>
                                            ))}
                                        </>
                                    )}
                                    {selectedCategory === 'marketing' && (
                                        <>
                                            <li className="flex justify-between"><span>{socialPlatforms.length} Platforms</span> <span>Included</span></li>
                                            <li className="flex justify-between"><span>{postsPerWeek} Posts / Week</span> <span>Included</span></li>
                                            {marketingExtras.map(e => <li key={e} className="flex justify-between capitalize text-white"><span>+ {e.replace('_', ' ')}</span> <FaCheck className="text-[#FFD700]" /></li>)}
                                        </>
                                    )}
                                    {selectedCategory === 'app' && (
                                        <>
                                            <li className="flex justify-between capitalize text-white"><span>Type: {appType.replace('_', ' ')}</span></li>
                                            <li className="flex justify-between"><span>{appScreens} Screens</span> <span>Included</span></li>
                                            <li className="flex justify-between capitalize"><span>Complexity: {appComplexity}</span></li>
                                        </>
                                    )}
                                    {selectedCategory === 'publication' && (
                                        <>
                                            {[
                                                ...printBusiness, ...printMarketing, ...printPublishing,
                                                ...printCorporate, ...printProduct, ...printProduction
                                            ].map(p => (
                                                <li key={p} className="flex justify-between capitalize text-white">
                                                    <span>+ {p.replace(/_/g, ' ')}</span> <FaCheck className="text-[#FFD700]" />
                                                </li>
                                            ))}
                                        </>
                                    )}
                                    {/* Add similar breakdowns for other cats as needed */}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-3 mt-8">
                            <button
                                type="button"
                                onClick={handleDownloadPdf}
                                disabled={isGeneratingPdf}
                                className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform shadow-lg ${isGeneratingPdf ? 'bg-zinc-700 text-gray-300 cursor-not-allowed' : 'bg-white text-black hover:scale-105'}`}
                            >
                                {isGeneratingPdf ? 'Generating PDF…' : 'Download PDF Quote'}
                            </button>
                            {!showEmailForm ? (
                                <button
                                    onClick={() => setShowEmailForm(true)}
                                    className="w-full bg-[#FFD700] text-black font-bold py-4 rounded-xl hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
                                >
                                    <FaEnvelope /> Email This Quote
                                </button>
                            ) : (
                                <form onSubmit={handleEmailQuote} className="space-y-3 animate-fadeIn">
                                    <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                                        <label htmlFor="quote-website">Website</label>
                                        <input
                                            type="text"
                                            id="quote-website"
                                            name="quote-website"
                                            tabIndex={-1}
                                            autoComplete="off"
                                            value={quoteWebsite}
                                            onChange={e => setQuoteWebsite(e.target.value)}
                                        />
                                    </div>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full p-3 bg-zinc-800 rounded-lg text-white border border-transparent focus:border-[#FFD700] outline-none"
                                        onChange={e => setClientName(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="w-full p-3 bg-zinc-800 rounded-lg text-white border border-transparent focus:border-[#FFD700] outline-none"
                                        onChange={e => setClientCompany(e.target.value)}
                                    />
                                    <input
                                        required
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full p-3 bg-zinc-800 rounded-lg text-white border border-transparent focus:border-[#FFD700] outline-none"
                                        onChange={e => setClientEmail(e.target.value)}
                                    />
                                    <div className="flex gap-2">
                                        <button
                                            type="submit"
                                            disabled={quoteStatus === 'sending'}
                                            className="flex-1 bg-[#FFD700] text-black font-bold py-3 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {quoteStatus === 'sending' ? 'Sending…' : 'Send'}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowEmailForm(false)}
                                            className="px-4 bg-zinc-800 text-white rounded-lg"
                                        >
                                            <FaTimes />
                                        </button>
                                    </div>
                                    {quoteError && (
                                        <p className="text-xs text-red-400">{quoteError}</p>
                                    )}
                                    {quoteStatus === 'success' && !quoteError && (
                                        <p className="text-xs text-emerald-400">
                                            Your quote has been emailed. Please check your inbox.
                                        </p>
                                    )}
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
