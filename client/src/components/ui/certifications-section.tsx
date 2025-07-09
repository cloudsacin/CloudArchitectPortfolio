import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      provider: "AWS",
      title: "AWS Solutions Architect",
      level: "Professional",
      validity: "Mar 2025 - Mar 2028",
      icon: "fab fa-aws",
      gradient:
        "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
      iconColor: "text-orange-500",
    },
    {
      provider: "Google Cloud",
      title: "Professional Cloud Architect",
      level: "Professional",
      validity: "Jan 2025 - Jan 2027",
      icon: "fab fa-google",
      gradient: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
      iconColor: "text-green-500",
    },
    {
      provider: "Microsoft",
      title: "Microsoft Certified Trainer",
      level: "MCT",
      validity: "Active Certification",
      icon: "fab fa-microsoft",
      gradient: "bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200",
      iconColor: "text-blue-500",
    },
    {
      provider: "Microsoft",
      title: "Azure Security Engineer",
      level: "Associate",
      validity: "Active Certification",
      icon: "fab fa-microsoft",
      gradient:
        "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
      iconColor: "text-purple-500",
    },
    {
      provider: "Google",
      title: "Google Analytics",
      level: "Certification",
      validity: "Dec 2024",
      icon: "fab fa-google",
      gradient: "bg-gradient-to-br from-red-50 to-red-100 border-red-200",
      iconColor: "text-red-500",
    },
    {
      provider: "DeepLearning.AI",
      title: "AI for Everyone",
      level: "Certification",
      validity: "Jul 2024",
      icon: "fas fa-brain",
      gradient: "bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200",
      iconColor: "text-teal-500",
    },
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Certifications & Credentials
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`${cert.gradient} border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <i
                      className={`${cert.icon} text-2xl ${cert.iconColor} mr-3 mt-1`}
                    ></i>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary text-lg leading-tight">
                        {cert.title}
                      </h3>
                      <Badge variant="secondary" className="mt-1 text-xs bg-white/80">
                        {cert.level}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-800 mb-3 font-medium">{cert.provider}</p>
                  <p className="text-sm text-gray-700 mb-4 font-medium">{cert.validity}</p>
                  <a
                    href="https://linkedin.com/in/sachinjha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                  >
                    <i className="fab fa-linkedin mr-2"></i>
                    View on LinkedIn
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-6 mb-6 shadow-lg border-l-4 border-l-accent">
              <p className="text-gray-800 text-lg mb-4 font-semibold">
                Total Certifications: 7x Azure | 2x AWS | 1x GCP | Multiple
                Specialized Certifications
              </p>
              <a
                href="https://www.linkedin.com/in/sachin-kumar-jha-746005161/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-lg transition-colors bg-accent/10 px-4 py-2 rounded-lg hover:bg-accent/20"
              >
                <i className="fab fa-linkedin mr-2"></i>
                View All Certifications on LinkedIn
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
