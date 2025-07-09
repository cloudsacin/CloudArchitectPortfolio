import { Card, CardContent } from "@/components/ui/card";
import { Cloud, ServerCog, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ExpertiseSection() {
  const cloudPlatforms = [
    { name: "Microsoft Azure", percentage: 95, color: "bg-blue-500" },
    { name: "Amazon AWS", percentage: 85, color: "bg-orange-500" },
    { name: "Google Cloud Platform", percentage: 80, color: "bg-green-500" }
  ];

  const coreTechnologies = [
    { name: "Cloud Migration", percentage: 90, color: "bg-blue-500" },
    { name: "Data Platform Implementation", percentage: 85, color: "bg-purple-500" },
    { name: "Cloud Security Solutions", percentage: 80, color: "bg-red-500" }
  ];

  const specializedSkills = [
    { name: "BCDR & Migration", percentage: 95, color: "bg-green-500" },
    { name: "Automation & DPI", percentage: 90, color: "bg-indigo-500" },
    { name: "Enterprise Landing Zone", percentage: 85, color: "bg-teal-500" }
  ];

  return (
    <section id="expertise" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Technical Expertise</h2>
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
                <div className="space-y-4">
                  {cloudPlatforms.map((platform, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{platform.name}</span>
                        <span className="text-sm font-semibold text-gray-600">{platform.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${platform.color}`}
                          style={{ width: `${platform.percentage}%` }}
                        ></div>
                      </div>
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
                <div className="space-y-4">
                  {coreTechnologies.map((tech, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{tech.name}</span>
                        <span className="text-sm font-semibold text-gray-600">{tech.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${tech.color}`}
                          style={{ width: `${tech.percentage}%` }}
                        ></div>
                      </div>
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
                <div className="space-y-4">
                  {specializedSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm font-semibold text-gray-600">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${skill.color}`}
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
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
