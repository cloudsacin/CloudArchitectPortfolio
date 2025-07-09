import { Card, CardContent } from "@/components/ui/card";
import { Cloud, ServerCog, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ExpertiseSection() {
  const cloudPlatforms = [
    { name: "Microsoft Azure", certifications: "7x Certified", color: "bg-blue-100 text-blue-800" },
    { name: "Amazon Web Services", certifications: "2x Certified", color: "bg-orange-100 text-orange-800" },
    { name: "Google Cloud Platform", certifications: "1x Certified", color: "bg-green-100 text-green-800" }
  ];

  const coreTechnologies = [
    "Cloud Migration",
    "Data Platform Implementation", 
    "Cloud Security Solutions",
    "Enterprise Landing Zone"
  ];

  const specializedSkills = [
    "BCDR Solutions",
    "Azure Kubernetes Service",
    "Infrastructure Automation",
    "AI/ML Integration"
  ];

  return (
    <section id="expertise" className="py-16 bg-surface-custom">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cloud Platforms */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Cloud className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary">Cloud Platforms</h3>
                </div>
                <div className="space-y-3">
                  {cloudPlatforms.map((platform, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">{platform.name}</span>
                      <Badge className={`text-xs ${platform.color}`}>
                        {platform.certifications}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Core Technologies */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <ServerCog className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary">Core Technologies</h3>
                </div>
                <div className="space-y-3">
                  {coreTechnologies.map((tech, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="text-gray-700 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specialized Skills */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Wrench className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary">Specialized Skills</h3>
                </div>
                <div className="space-y-3">
                  {specializedSkills.map((skill, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
