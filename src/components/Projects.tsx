import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
const projects = [
  {
    title: "RailsProject",
    description: "A Ruby on Rails project showcasing modern web development with HTML integration and backend logic.",
    technologies: ["Ruby on Rails", "HTML", "PostgreSQL"],
    featured: true,
    github: "https://github.com/Rabia-Sadiq/RailsProject",
    demo: "https://www.linkedin.com/posts/rabia-sadiq-73656a270_ai-fullstackdevelopment-rubyonrails-activity-7338789252681338882-XG1O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJKaZoBVPAkRrA_LjDeicdLz0Mkh-jgbYE" // no live demo yet
  },
  {
  title: "Zameen.com Clone",
  description: "A MERN stack property listing platform with pages like Home, Area Guide, Map, Login/Signup.",
  technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  featured: true,
  github: "https://github.com/your-username/Zameen.com-Clone", // replace with actual repo name if different
  demo: "https://www.linkedin.com/posts/rabia-sadiq-73656a270_mern-webdevelopment-reactjs-activity-7296512718717542400-ikdc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJKaZoBVPAkRrA_LjDeicdLz0Mkh-jgbYE" // you can add a deployed link if hosted (Netlify/Vercel/Render)
},

  {
    title: "YT-Summarizer",
    description: "A Python-based application that summarizes YouTube videos by extracting and condensing key information.",
    technologies: ["Python", "NLP"],
    featured: true,
    github: "https://github.com/Rabia-Sadiq/yt-summerizer",
    demo: "https://www.linkedin.com/posts/rabia-sadiq-73656a270_techjourney-pythonprojects-whisperai-activity-7354070652309356545-o4Ug?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJKaZoBVPAkRrA_LjDeicdLz0Mkh-jgbYE" // could add streamlit or flask demo later
  },
  {
    title: "Sales Prediction",
    description: "A desktop-based Java Swing application that predicts sales trends using simple machine learning logic.",
    technologies: ["Java", "Swing", "Machine Learning"],
    featured: true,
    github: "https://github.com/Rabia-Sadiq/SalesPrediction",
    demo: "" // desktop app → no live demo
  },
  {
    title: "Mini Olympic System",
    description: "A relational database project to manage athletes, event registrations, and results in a mini Olympic-style system.",
    technologies: ["MySQL", "Database Design", "SQL"],
    featured: true,
    github: "https://github.com/Rabia-Sadiq/Mini-Olympic-System",
    demo: "" 
  },
  {
  title: "Tic Tac Toe (Two Player)",
  description: "A classic two-player Tic Tac Toe game built with Java Swing, featuring a simple and interactive GUI.",
  technologies: ["Java", "Swing", "OOP"],
  featured: false,
  github: "https://github.com/Rabia-Sadiq/FinalGame", // replace with exact repo
  demo: "" // desktop app → no live demo
},
  {
    title: "Little Taco Shop",
    description: "A responsive website for a taco shop, built with HTML and CSS, showcasing menu browsing and order placement.",
    technologies: ["HTML", "CSS"],
    featured: false,
    github: "https://github.com/Rabia-Sadiq/Little-Taco-Shop",
    demo: "https://rabia-sadiq.github.io/Little-Taco-Shop/"
  },
  {
  title: "EventMate",
  description: "A simple event management platform frontend built with HTML and CSS, allowing users to browse, create, and manage events with a clean responsive UI.",
  technologies: ["HTML", "CSS", "JavaScript"],
  featured: false,
  github: "https://github.com/Rabia-Sadiq/EventMate-Frontend", // replace with exact repo link
  demo: "https://rabia-sadiq.github.io/EventMate-Frontend/" // if deployed via GitHub Pages
}
];

  return (
    <section id="projects" className="section-padding dark-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Projects</h2>
            <div className="w-24 h-1 hero-gradient mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development journey and technical capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`card-shadow hover:card-shadow-hover transition-all duration-300 scale-hover slide-up ${
                  project.featured ? 'lg:col-span-2 md:col-span-2' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                    {project.featured && (
                      <Badge className="hero-gradient text-white border-0">Featured</Badge>
                    )}
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;