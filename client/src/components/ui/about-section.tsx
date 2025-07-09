import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Shield, ServerCog, Database } from "lucide-react";

export default function AboutSection() {
  const specializations = [
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Cloud Migration & Modernization"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Business Continuity & Disaster Recovery"
    },
    {
      icon: <ServerCog className="w-5 h-5" />,
      title: "Infrastructure Automation"
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data Platform Implementation"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <Card className="bg-surface-custom shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">Cloud Architecture Expert</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    As a Senior Cloud Architect at Celebal Technologies with 4+ years of experience, I specialize in designing, implementing, and managing cloud infrastructure. My expertise spans across Azure, AWS, and GCP platforms, helping businesses optimize their cloud journey.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    I'm passionate about staying current with the latest cloud technologies and providing customized solutions that align with each client's unique business objectives. My role involves bridging the gap between technical and non-technical stakeholders.
                  </p>
                </div>
                <div>
                  <Card className="bg-white shadow-md">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-primary mb-4">Key Specializations</h4>
                      <div className="space-y-3">
                        {specializations.map((spec, index) => (
                          <div key={index} className="flex items-center">
                            <div className="text-accent mr-3">
                              {spec.icon}
                            </div>
                            <span className="text-gray-700">{spec.title}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
