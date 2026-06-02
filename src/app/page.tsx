"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeLargeTitles"
      background="grid"
      cardStyle="soft-shadow"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="DigitalFrontier Agency"
          navItems={[
            { name: "Home", id: "#hero" },
            { name: "About", id: "#about" },
            { name: "Services", id: "#features" },
            { name: "Portfolio", id: "#products" },
            { name: "Insights", id: "#faq" },
            { name: "Contact", id: "#contact" }
          ]}
          button={{
            text: "Start Project",            href: "#contact"
          }}
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Enterprise Web Solutions That Drive Growth"
          description="We transform complex digital challenges into scalable, high-performance web experiences. Trusted by Fortune 500 companies and ambitious startups alike."
          background={{ variant: "animated-grid" }}
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/goal-oriented-entrepreneur-luxurious-corporate-office-plans-strategy_482257-128191.jpg", imageAlt: "Modern software dashboard" },
            { imageSrc: "http://img.b2bpic.net/free-vector/smart-home-management_23-2148649626.jpg", imageAlt: "Responsive web application" },
            { imageSrc: "http://img.b2bpic.net/free-photo/online-shopping-sale-app_23-2151952980.jpg", imageAlt: "E-commerce platform backend" },
            { imageSrc: "http://img.b2bpic.net/free-photo/colleagues-data-center-comission_482257-80594.jpg", imageAlt: "Cloud infrastructure management" },
            { imageSrc: "http://img.b2bpic.net/free-photo/businessman-studying-infographics-performance-metrics_482257-122632.jpg", imageAlt: "AI-powered analytics platform" },
            { imageSrc: "http://img.b2bpic.net/free-photo/male-entrepreneur-conducting-financial-planning-goal-setting_482257-122658.jpg", imageAlt: "Content management system" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/woman-shopping-online_23-2151952964.jpg", imageAlt: "FinTech application" },
            { imageSrc: "http://img.b2bpic.net/free-photo/closeup-couple-measuring-blood-pressure-having-video-call-with-their-doctor-from-home_637285-12140.jpg", imageAlt: "Health-tech patient portal" },
            { imageSrc: "http://img.b2bpic.net/free-photo/workers-office-use-cad-software-design-house-interior_482257-126684.jpg", imageAlt: "Logistics management dashboard" },
            { imageSrc: "http://img.b2bpic.net/free-photo/cybersecurity-analyst-monitoring-system_23-2152004071.jpg", imageAlt: "Cybersecurity operations center" },
            { imageSrc: "http://img.b2bpic.net/free-photo/chrome-key-tablet-updating-ai-systems_482257-90828.jpg", imageAlt: "EdTech platform" },
            { imageSrc: "http://img.b2bpic.net/free-photo/business-teammates-working-late_23-2148991316.jpg", imageAlt: "Human resources management system" }
          ]}
          buttons={[
            { text: "Start Your Project", href: "#contact" }
          ]}
        />
      </div>
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Your Digital Transformation Partner"
          description={[
            "As a leading web development agency, we specialize in crafting custom digital solutions that propel mid-to-large enterprises forward. Our expertise spans complex web applications, robust e-commerce platforms, and intuitive corporate websites, all built with scalability and security in mind.",            "We partner with C-suite executives and marketing directors to translate ambitious visions into tangible digital assets, ensuring seamless integration with existing systems and delivering measurable ROI."
          ]}
          useInvertedBackground={true}
          buttons={[
            { text: "Learn More About Us", href: "#about" }
          ]}
        />
      </div>
      <div id="features" data-section="features">
        <FeatureCardOne
          title="Our Expertise, Your Advantage"
          description="We leverage cutting-edge technologies and proven methodologies to deliver exceptional web solutions tailored to your unique business needs."
          features={[
            { title: "Custom Web Applications", description: "Building bespoke applications from concept to deployment, designed for efficiency, scalability, and seamless integration.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-hands-holding-tablet_23-2150162740.jpg", imageAlt: "Custom web application UI" },
            { title: "Robust Backend Development", description: "Crafting secure, high-performance server-side solutions that power your most critical business processes.", imageSrc: "http://img.b2bpic.net/free-photo/isometric-view-3d-rendering-neon-city_23-2150900801.jpg", imageAlt: "Robust backend infrastructure" },
            { title: "Data & Analytics Integration", description: "Transforming raw data into actionable insights with powerful analytics dashboards and business intelligence tools.", imageSrc: "http://img.b2bpic.net/free-photo/man-sits-front-laptop-with-chart-notepad-night_169016-55174.jpg", imageAlt: "Data analytics and business intelligence" }
          ]}
          animationType="depth-3d"
          gridVariant="bento-grid"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="products" data-section="products">
        <ProductCardTwo
          title="Impactful Solutions, Proven Results"
          description="Explore our recent client success stories, showcasing how custom web development translates into significant business growth and operational efficiency."
          products={[
            { id: "prod-1", brand: "Luxury Retailer", name: "E-commerce Platform Redesign", price: "$500k+", rating: 5, reviewCount: "24 reviews", imageSrc: "http://img.b2bpic.net/free-photo/shopping-online-shopaholics-e-commerce-e-shopping-concept_53876-120673.jpg", imageAlt: "E-commerce platform screenshot" },
            { id: "prod-2", brand: "SaaS Provider", name: "Custom CRM Development", price: "$750k+", rating: 5, reviewCount: "18 reviews", imageSrc: "http://img.b2bpic.net/free-photo/tablet-with-applications_1134-123.jpg", imageAlt: "Custom CRM interface" },
            { id: "prod-3", brand: "Global Enterprise", name: "Intranet Modernization", price: "$1.2M+", rating: 5, reviewCount: "30 reviews", imageSrc: "http://img.b2bpic.net/free-photo/top-view-digital-tablet-with-search-job-screen-yellow-background_169016-39375.jpg", imageAlt: "Corporate intranet portal" },
            { id: "prod-4", brand: "Education Institute", name: "E-learning Platform Build", price: "$600k+", rating: 5, reviewCount: "22 reviews", imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-colleagues-looking-computer-screen-together-office_1098-20601.jpg", imageAlt: "Educational platform dashboard" },
            { id: "prod-5", brand: "Financial Services", name: "Financial Reporting System", price: "$900k+", rating: 5, reviewCount: "28 reviews", imageSrc: "http://img.b2bpic.net/free-photo/mockup-tablet-front-inspector-server-room-admin-checking-documents_482257-117961.jpg", imageAlt: "Financial reporting dashboard" },
            { id: "prod-6", brand: "Research Lab", name: "Scientific Data Visualization", price: "$800k+", rating: 5, reviewCount: "15 reviews", imageSrc: "http://img.b2bpic.net/free-photo/3d-medical-background-with-dna-strands-code_1048-8637.jpg", imageAlt: "Scientific data visualization" }
          ]}
          carouselMode="buttons"
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Quantifiable Success, Real Impact"
          description="Our commitment to excellence and client satisfaction is reflected in the tangible results we achieve for businesses worldwide."
          metrics={[
            { id: "m1", value: "+30%", title: "Average ROI for Clients", items: ["Measurable business growth", "Enhanced operational efficiency"] },
            { id: "m2", value: "98%", title: "Client Retention Rate", items: ["Long-term partnerships", "Exceptional support and service"] },
            { id: "m3", value: "100+", title: "Enterprise Projects Delivered", items: ["Proven expertise in complex solutions", "Successful track record with large organizations"] },
            { id: "m4", value: "5/5", title: "Average Project Rating", items: ["Unwavering commitment to quality", "Client satisfaction guaranteed"] }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Clients Say"
          description="Hear directly from the C-suite executives and marketing leaders who have entrusted us with their most critical digital initiatives."
          testimonials={[
            { id: "1", name: "Sarah Johnson", date: "May 2024", title: "Transformative E-commerce Solution", quote: "DigitalFrontier Agency delivered an e-commerce platform that not only looks stunning but has also significantly boosted our online sales and customer engagement. Their technical expertise is unparalleled.", tag: "E-commerce", avatarSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-business-woman-sitting-table_1262-2422.jpg", avatarAlt: "Sarah Johnson", imageSrc: "http://img.b2bpic.net/free-photo/virtual-beauty-shopping_23-2151952961.jpg", imageAlt: "E-commerce website screenshot" },
            { id: "2", name: "Michael Chen", date: "April 2024", title: "Revolutionary CRM Development", quote: "The custom CRM developed by DigitalFrontier Agency has revolutionized how we manage our client relationships. It's intuitive, powerful, and perfectly tailored to our B2B needs. A true partnership!", tag: "CRM", avatarSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg", avatarAlt: "Michael Chen", imageSrc: "http://img.b2bpic.net/free-photo/customer-relationship-management-concept_23-2150038405.jpg", imageAlt: "Custom CRM interface on tablet" },
            { id: "3", name: "Emily Rodriguez", date: "March 2024", title: "Seamless Project Management App", quote: "Our internal project management application built by DigitalFrontier Agency has streamlined our operations, improving team collaboration and efficiency across departments. Highly recommended for enterprise solutions.", tag: "Project Management", avatarSrc: "http://img.b2bpic.net/free-photo/serious-focused-freelancer-using-laptop_1262-18611.jpg", avatarAlt: "Emily Rodriguez", imageSrc: "http://img.b2bpic.net/free-photo/businessman-doing-research-analysis-computer-screen-plan-financial-statistics-with-charts-graphs-data-male-employee-working-with-diagram-report-find-sales-profit-e-commerce_482257-40940.jpg", imageAlt: "Project management dashboard" },
            { id: "4", name: "David Kim", date: "February 2024", title: "Exceptional Corporate Website Redesign", quote: "DigitalFrontier Agency executed a flawless redesign of our corporate website. The new site accurately reflects our brand's prestige and has significantly improved user experience and lead generation.", tag: "Web Redesign", avatarSrc: "http://img.b2bpic.net/free-photo/portrait-happy-man-standing-with-arms-crossed-front-ai-brain_482257-91021.jpg", avatarAlt: "David Kim", imageSrc: "http://img.b2bpic.net/free-photo/job-search-concept-find-your-career-online-website_169016-39046.jpg", imageAlt: "Corporate website redesign" },
            { id: "5", name: "Jessica Lee", date: "January 2024", title: "Innovative Mobile Banking Application", quote: "The mobile banking app developed by DigitalFrontier Agency is a game-changer for our customers. It's secure, user-friendly, and packed with innovative features. Their team truly understands FinTech.", tag: "FinTech", avatarSrc: "http://img.b2bpic.net/free-photo/woman-architect-using-touch-screen-building-model-maquette-layout-engineer-working-with-blueprint-plan-construction-development-graphic-design-architectural-office_482257-31903.jpg", avatarAlt: "Jessica Lee", imageSrc: "http://img.b2bpic.net/free-photo/elevated-view-finance-word-with-graph-white-background_23-2147892168.jpg", imageAlt: "Mobile banking app interface" }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Our portfolio proudly features collaborations with a diverse range of enterprise and mid-market clients, from Fortune 500 stalwarts to innovative startups."
          names={[
            "TechInnovate Corp",            "Global Solutions Inc.",            "Apex Systems",            "FutureBridge Group",            "Quantum Dynamics",            "Strategic Ventures",            "Horizon Digital",            "Catalyst Innovations",            "Pinnacle Tech",            "VentureWorks"
          ]}
          useInvertedBackground={false}
          textboxLayout="default"
        />
      </div>
      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our web development process, client engagement, and post-launch support."
          faqs={[
            { id: "faq-1", title: "What is your typical project timeline?", content: "Project timelines vary based on complexity and scope. A typical enterprise web application can take anywhere from 4 to 12 months, while a comprehensive website redesign might be 3-6 months. We provide detailed timelines after the initial discovery phase." },
            { id: "faq-2", title: "How do you ensure project success and ROI?", content: "Our process is heavily client-centric, focusing on clear communication, agile development methodologies, and continuous feedback. We define key performance indicators (KPIs) at the outset to ensure our solutions align with your business objectives and deliver measurable return on investment." },
            { id: "faq-3", title: "Do you offer post-launch support and maintenance?", content: "Yes, we provide comprehensive post-launch support and maintenance packages tailored to your needs. This includes bug fixes, security updates, performance monitoring, and ongoing feature enhancements to ensure your digital solution remains robust and up-to-date." },
            { id: "faq-4", title: "What technologies do you specialize in?", content: "Our expertise spans a wide range of modern technologies, including React, Next.js, Node.js, Python, various cloud platforms (AWS, Azure, GCP), and advanced database solutions. We select the best tech stack to meet your project's specific requirements and future scalability." }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/man-playing-gaming-pc-using-headphones-discuss-with-viewers_482257-124503.jpg"
          imageAlt="Support team and FAQ interface"
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Let's Build Your Vision Together"
          description="Ready to elevate your digital presence? Reach out to our team to discuss your project requirements and discover how we can drive your growth."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Business Email", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: true }
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your project...",            rows: 5,
            required: true
          }}
          imageSrc="http://img.b2bpic.net/free-photo/object-shot-switched-off-laptop-with-open-cover-black-screen-headphones-desk-office-front-window-daytime_1098-17098.jpg"
          imageAlt="Modern office with contact form on laptop"
          mediaAnimation="none"
          mediaPosition="right"
          buttonText="Send Inquiry"
          useInvertedBackground={false}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoText="DigitalFrontier Agency"
          columns={[
            { title: "Services", items: [{ label: "Web Applications", href: "#features" }, { label: "E-commerce Solutions", href: "#features" }, { label: "Digital Transformation", href: "#features" }, { label: "Backend Development", href: "#features" }] },
            { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Our Work", href: "#products" }, { label: "Client Testimonials", href: "#testimonials" }, { label: "Contact Us", href: "#contact" }] },
            { title: "Resources", items: [{ label: "FAQ", href: "#faq" }, { label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] }
          ]}
          copyrightText="© 2024 DigitalFrontier Agency. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
