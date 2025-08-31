import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(124, 58, 237, 0.9), rgba(99, 102, 241, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">Rabia</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-purple-100 font-medium">
            Web Developer • AI Enthusiast • Problem Solver
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-purple-50 max-w-2xl mx-auto leading-relaxed">
            I build modern web and mobile apps, and I'm passionate about creating intelligent systems that make life easier.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 text-lg"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="portfolio" 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 text-lg"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-pink-200 transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href="#" className="text-white hover:text-pink-200 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="#" className="text-white hover:text-pink-200 transition-colors">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;