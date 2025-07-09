import { Card, CardContent } from "@/components/ui/card";
import { CloudUpload, Network, TrendingUp, Shield, Bot, Handshake } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <CloudUpload className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamless migration of legacy systems to cloud platforms with minimal downtime and maximum efficiency.",
      gradient: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100",
      iconColor: "text-blue-500"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Infrastructure Design",
      description: "Scalable and secure cloud infrastructure architecture tailored to your business requirements.",
      gradient: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-100",
      iconColor: "text-green-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Cost Optimization",
      description: "Strategic cloud cost management and optimization to maximize ROI and operational efficiency.",
      gradient: "bg-gradient-to-br from-purple-50 to-violet-50 border-purple-100",
      iconColor: "text-purple-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "BCDR Solutions",
      description: "Comprehensive business continuity and disaster recovery planning for critical operations.",
      gradient: "bg-gradient-to-br from-red-50 to-rose-50 border-red-100",
      iconColor: "text-red-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Infrastructure Automation",
      description: "Automated deployment and management solutions to reduce manual overhead and errors.",
      gradient: "bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Cloud Consulting",
      description: "Strategic guidance and technical expertise to accelerate your cloud transformation journey.",
      gradient: "bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-100",
      iconColor: "text-teal-500"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Services Offered</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`${service.gradient} border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className={`${service.iconColor} mb-3 flex justify-center`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-800 text-center leading-relaxed font-medium">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
