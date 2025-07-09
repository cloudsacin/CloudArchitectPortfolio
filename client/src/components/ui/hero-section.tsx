import { Button } from "@/components/ui/button";
import professionalImage from "@assets/image_1752047859982.png";

export default function HeroSection() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Senior Cloud Architect
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              7x Azure | 2x AWS | 1x GCP Certified
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Helping businesses unlock the full potential of cloud technology with 4+ years of expertise in cloud architecture, migration, and optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleContactClick}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-center font-medium"
              >
                View Projects
              </Button>
              <Button 
                variant="outline"
                onClick={handleContactClick}
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-center font-medium"
              >
                Available for Projects
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={professionalImage} 
                alt="Sachin Kumar Jha - Senior Cloud Architect" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
