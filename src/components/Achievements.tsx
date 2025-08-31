import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Brain, Code } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Python Programming",
      description: "Completed comprehensive Python courses covering Introduction and Intermediate levels",
      type: "Programming",
      color: "bg-blue-100 text-blue-800"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "NumPy & Data Analysis",
      description: "Specialized certification in data analysis and numerical computing with NumPy",
      type: "Data Science",
      color: "bg-green-100 text-green-800"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "AI Fundamentals",
      description: "Completed 3-course specialization: AI Introduction, ChatGPT Applications, and ML Basics",
      type: "Artificial Intelligence",
      color: "bg-purple-100 text-purple-800"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Machine Learning Specialization",
      description: "Currently pursuing advanced machine learning concepts and applications",
      type: "In Progress",
      color: "bg-yellow-100 text-yellow-800"
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "6", label: "Certifications" },
    { number: "5+", label: "Technologies Mastered" },
    { number: "2", label: "Years Learning" }
  ];

  return (
    <section id="achievements" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Achievements & Certifications</h2>
            <div className="w-24 h-1 hero-gradient mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development milestones
            </p>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center slide-up">
                <div className="text-4xl md:text-5xl font-bold hero-gradient bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Achievements Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-shadow hover:card-shadow-hover transition-all duration-300 scale-hover slide-up">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary mt-1">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-foreground">{achievement.title}</h3>
                        <Badge className={achievement.color}>
                          {achievement.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
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

export default Achievements;