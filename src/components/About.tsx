import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Brain, Smartphone } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "MERN stack, Ruby on Rails, and modern frontend frameworks"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI & Machine Learning",
      description: "Python, NumPy, and building intelligent applications"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Mobile Development",
      description: "Java, Kotlin, and cross-platform solutions"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "BSIT Student",
      description: "Continuously learning and growing in technology"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h2>
            <div className="w-24 h-1 hero-gradient mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                I'm a <strong className="text-primary">Web Developer and AI Enthusiast</strong> with experience in building modern websites, mobile apps, and intelligent systems. Over the years, I've worked on projects ranging from frontend designs and database systems to full-stack web apps, AI-powered solutions, and mobile development.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                I specialize in creating clean, responsive, and user-friendly websites using technologies like <strong className="text-primary">React.js, Ruby on Rails, and Bootstrap</strong>, and I also develop mobile apps in Java and Kotlin. Alongside web and mobile, I enjoy working with Python, AI, and data projects to deliver smart, practical solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My goal as a freelancer is simple: <em className="text-primary font-semibold">help clients bring their ideas to life by delivering high-quality, reliable, and scalable digital products — on time and with care.</em>
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 slide-up">
              {highlights.map((item, index) => (
                <Card key={index} className="card-shadow hover:card-shadow-hover transition-all duration-300 scale-hover">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;