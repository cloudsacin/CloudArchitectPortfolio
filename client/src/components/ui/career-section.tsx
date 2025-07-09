import { Card, CardContent } from "@/components/ui/card";
import { Crown, Cloud, Users, ServerCog, Rocket } from "lucide-react";

export default function CareerSection() {
  const careerSteps = [
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Senior Cloud Architect",
      company: "Celebal Technologies",
      location: "Houston, Texas",
      duration: "Apr 2025 - Present",
      description: "Leading cloud architecture initiatives and driving strategic cloud adoption across enterprise clients.",
      color: "bg-accent"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Architect",
      company: "Celebal Technologies",
      location: "Jaipur, Rajasthan",
      duration: "Apr 2024 - Apr 2025",
      description: "Designed and implemented scalable cloud solutions, specializing in Azure and AWS architectures.",
      color: "bg-blue-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cloud Consultant",
      company: "Celebal Technologies",
      location: "Jaipur, Rajasthan",
      duration: "Apr 2023 - Mar 2024",
      description: "Provided strategic consulting services and technical guidance for cloud transformation projects.",
      color: "bg-green-500"
    },
    {
      icon: <ServerCog className="w-6 h-6" />,
      title: "Cloud Engineer",
      company: "Celebal Technologies",
      location: "Jaipur, Rajasthan",
      duration: "Apr 2022 - Mar 2023",
      description: "Implemented cloud infrastructure solutions and automation frameworks for enterprise clients.",
      color: "bg-purple-500"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Associate Cloud Engineer",
      company: "Celebal Technologies",
      location: "Jaipur, Rajasthan",
      duration: "Oct 2020 - Mar 2022",
      description: "Started my cloud journey, learning and implementing foundational cloud technologies and best practices.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="journey" className="py-16 bg-surface-custom">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Career Journey</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>
          
          <div className="relative">
            <div className="timeline-line"></div>
            
            <div className="space-y-8">
              {careerSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className={`flex-shrink-0 w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg text-white`}>
                    {step.icon}
                  </div>
                  <Card className="ml-6 bg-white shadow-md flex-1 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                        <span className="text-sm text-gray-500 mt-1 sm:mt-0">{step.duration}</span>
                      </div>
                      <p className="text-accent font-medium mb-2">{step.company} • {step.location}</p>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
