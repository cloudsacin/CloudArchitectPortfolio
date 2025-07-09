import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building, Award, Mail, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      content: "Houston, Texas, United States"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Company",
      content: "Celebal Technologies"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certifications",
      content: "7x Azure | 2x AWS | 1x GCP"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to transform your cloud infrastructure? Let's discuss your project.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="text-accent mb-3 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{info.title}</h3>
                  <p className="text-gray-300">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              asChild
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 font-medium"
            >
              <a 
                href="https://linkedin.com/in/sachinjha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <i className="fab fa-linkedin mr-2"></i>
                Connect on LinkedIn
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button 
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-medium"
            >
              <a 
                href="mailto:sachin@celebaltech.com"
                className="inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
