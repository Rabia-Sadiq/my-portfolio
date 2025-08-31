import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      category: "Backend Development", 
      skills: ["Ruby on Rails", "Node.js", "Django", "APIs", "RESTful Services"],
      color: "bg-green-100 text-green-800"
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Database Design"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      category: "AI & Data Science",
      skills: ["Python", "NumPy", "Machine Learning", "Data Analysis"],
      color: "bg-red-100 text-red-800"
    },
    {
      category: "Mobile Development",
      skills: ["Java (Android)", "Kotlin", "Jetpack Compose", "React Native"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Selenium", "Data Scraping", "Version Control"],
      color: "bg-gray-100 text-gray-800"
    }
  ];

  return (
    <section id="skills" className="section-padding dark-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Skills & Technologies</h2>
            <div className="w-24 h-1 hero-gradient mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across various domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-shadow hover:card-shadow-hover transition-all duration-300 scale-hover slide-up">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className={`${category.color} hover:scale-105 transition-transform duration-200`}
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;