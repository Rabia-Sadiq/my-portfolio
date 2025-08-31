import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "rabia@gamail.com",
      link: "mailto:abdullahazor2016@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Lahore",
      content: "Pakistan",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      username: "@rabia-sadiq",
      link: "https://github.com/Rabia-Sadiq"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      username: "Rabia Sadiq",
      link: "https://www.linkedin.com/in/rabia-sadiq-73656a270/"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Let's Connect</h2>
            <div className="w-24 h-1 hero-gradient mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="slide-up">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.title}</div>
                      {info.link ? (
                        <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Follow Me</h4>
                {socialLinks.map((social, index) => (
                  <Card key={index} className="hover:card-shadow-hover transition-all duration-300 scale-hover">
                    <CardContent className="p-4">
                      <a href={social.link} className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors">
                        <div className="text-primary">
                          {social.icon}
                        </div>
                        <div>
                          <div className="font-medium">{social.title}</div>
                          <div className="text-sm">{social.username}</div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="card-shadow hover:card-shadow-hover transition-all duration-300 slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input id="name" placeholder="Your Name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Project Inquiry" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full hero-gradient text-white font-semibold" size="lg">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;