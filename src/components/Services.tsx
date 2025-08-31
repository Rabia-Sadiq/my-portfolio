import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Database, Brain, Layers, Cpu } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Development",
      description: "Custom websites and web applications using React, Rails, HTML/CSS, and Bootstrap. From concept to deployment.",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Performance Focused"]
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile App Development", 
      description: "Native Android applications using Java and Kotlin with modern UI patterns and best practices.",
      features: ["Native Android", "Jetpack Compose", "Material Design", "Cross-platform Ready"]
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "AI & Python Projects",
      description: "Data analysis, machine learning basics, automation scripts, and intelligent application development.",
      features: ["Data Analysis", "ML Integration", "Automation", "AI-powered Features"]
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Database Design",
      description: "Comprehensive database solutions with proper design, optimization, and integration.",
      features: ["Database Design", "SQL Optimization", "Data Modeling", "Performance Tuning"]
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Full-Stack Solutions",
      description: "End-to-end development services combining frontend, backend, and database technologies.",
      features: ["MERN Stack", "Ruby on Rails", "API Development", "System Integration"]
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "Programming Projects",
      description: "Custom solutions in C/C++, data structures, algorithms, and academic project assistance.",
      features: ["Algorithm Design", "Data Structures", "Code Optimization", "Academic Support"]
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Services I Offer</h2>
            <div className="w-24 h-1 hero-gradient mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development services tailored to bring your ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-shadow hover:card-shadow-hover transition-all duration-300 scale-hover slide-up h-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-primary font-medium">
                        ✓ {feature}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;