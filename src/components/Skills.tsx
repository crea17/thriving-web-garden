
import { Palette, Video, Camera, Code, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Graphic Design",
      icon: Palette,
      skills: [
        { name: "Adobe Creative Suite", level: 5 },
        { name: "Brand Identity Design", level: 5 },
        { name: "Print Design", level: 4 },
        { name: "Typography", level: 5 },
        { name: "Layout Design", level: 5 }
      ],
      color: "pink"
    },
    {
      title: "Video Production", 
      icon: Video,
      skills: [
        { name: "Adobe Premiere Pro", level: 5 },
        { name: "After Effects", level: 4 },
        { name: "Color Grading", level: 4 },
        { name: "Motion Graphics", level: 4 },
        { name: "Sound Design", level: 3 }
      ],
      color: "rose"
    },
    {
      title: "Photography",
      icon: Camera,
      skills: [
        { name: "Product Photography", level: 4 },
        { name: "Portrait Photography", level: 4 },
        { name: "Photo Retouching", level: 5 },
        { name: "Lighting Setup", level: 4 },
        { name: "Studio Management", level: 3 }
      ],
      color: "pink"
    },
    {
      title: "Digital Design",
      icon: Code,
      skills: [
        { name: "UI/UX Design", level: 4 },
        { name: "Web Design", level: 4 },
        { name: "Social Media Design", level: 5 },
        { name: "Email Design", level: 4 },
        { name: "Responsive Design", level: 4 }
      ],
      color: "rose"
    },
    {
      title: "Creative Strategy",
      icon: Lightbulb,
      skills: [
        { name: "Brand Strategy", level: 4 },
        { name: "Campaign Development", level: 4 },
        { name: "Creative Direction", level: 4 },
        { name: "Trend Analysis", level: 4 },
        { name: "Concept Development", level: 5 }
      ],
      color: "pink"
    },
    {
      title: "Client Relations",
      icon: Users,
      skills: [
        { name: "Project Management", level: 5 },
        { name: "Client Communication", level: 5 },
        { name: "Presentation Skills", level: 4 },
        { name: "Feedback Integration", level: 5 },
        { name: "Timeline Management", level: 4 }
      ],
      color: "rose"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      pink: { bg: "bg-gradient-to-r from-pink-500 to-rose-600", text: "text-pink-600", light: "bg-pink-100" },
      rose: { bg: "bg-gradient-to-r from-rose-500 to-pink-600", text: "text-rose-600", light: "bg-rose-100" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.pink;
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-serif">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit developed through years of hands-on experience 
            across diverse projects and industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-pink-50">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.bg} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 font-serif">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className={`p-3 ${colors.light} rounded-lg hover:scale-105 transition-all duration-200`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-800">{skill.name}</span>
                          <span className={`text-sm ${colors.text} font-semibold`}>
                            {skill.level}/5
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-pink-500 to-rose-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(skill.level / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Software Proficiency */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 font-serif">Software Proficiency</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", 
              "Adobe After Effects", "Adobe InDesign", "Figma", 
              "Cinema 4D", "DaVinci Resolve", "Canva Pro", "Sketch"
            ].map((software, index) => (
              <div key={index} className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors duration-200 border border-pink-100">
                <p className="text-sm font-medium text-gray-700">{software}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
