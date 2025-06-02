
import { Leaf, Sprout, TreeDeciduous, TreePalm, Trees, Shrub, Flower } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Leaf,
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"],
      color: "green"
    },
    {
      title: "Backend Development", 
      icon: TreeDeciduous,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
      color: "emerald"
    },
    {
      title: "DevOps & Tools",
      icon: Trees,
      skills: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
      color: "teal"
    },
    {
      title: "Mobile Development",
      icon: TreePalm,
      skills: ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps"],
      color: "green"
    },
    {
      title: "Design & UX",
      icon: Flower,
      skills: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Responsive Design", "Accessibility"],
      color: "emerald"
    },
    {
      title: "Data & Analytics",
      icon: Sprout,
      skills: ["D3.js", "Chart.js", "Google Analytics", "Data Visualization", "Machine Learning"],
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-600 text-green-600 bg-green-100",
      emerald: "bg-emerald-600 text-emerald-600 bg-emerald-100", 
      teal: "bg-teal-600 text-teal-600 bg-teal-100"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Like a diverse garden ecosystem, my skills span multiple domains, 
            each complementing the others to create robust solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const [bgColor, textColor, lightBg] = colorClasses.split(' ');
            
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${bgColor} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className={`flex items-center justify-between p-3 ${lightBg} rounded-lg hover:scale-105 transition-all duration-200`}
                      >
                        <span className="font-medium text-gray-800">{skill}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i}
                              className={`w-2 h-2 rounded-full ${i < 4 ? bgColor : 'bg-gray-300'}`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Additional decorative elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-gray-600">
            <Shrub className="w-6 h-6" />
            <span className="text-lg">Always growing, always learning</span>
            <Shrub className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
