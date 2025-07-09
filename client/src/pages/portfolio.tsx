import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import AboutSection from "@/components/ui/about-section";
import ExpertiseSection from "@/components/ui/expertise-section";
import ServicesSection from "@/components/ui/services-section";
import CareerSection from "@/components/ui/career-section";
import CertificationsSection from "@/components/ui/certifications-section";
import ContactSection from "@/components/ui/contact-section";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection />
      <CareerSection />
      <CertificationsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Sachin Kumar Jha. All rights reserved. | Senior Cloud Architect | Multi-Cloud Expert
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
