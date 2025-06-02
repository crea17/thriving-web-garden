
import { Leaf, TreePalm, Trees } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "EcoCommerce Platform",
      description: "A sustainable e-commerce platform built with React and Node.js, featuring eco-friendly product recommendations and carbon footprint tracking.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: Trees,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Live"
    },
    {
      title: "Garden Planning App",
      description: "A mobile-first application that helps users plan and track their garden growth, with weather integration and plant care reminders.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: Leaf,
      tech: ["React Native", "Firebase", "Weather API"],
      status: "In Development"
    },
    {
      title: "Green Energy Dashboard",
      description: "An analytics dashboard for renewable energy monitoring, featuring real-time data visualization and predictive analytics.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: TreePalm,
      tech: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Projects in Bloom
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each project is carefully cultivated from concept to completion, 
            growing into something beautiful and functional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-green-600 p-2 rounded-full">
                    <project.icon className="text-white w-5 h-5" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Live' ? 'bg-green-500 text-white' :
                    project.status === 'In Development' ? 'bg-yellow-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 group-hover:text-green-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700 text-white flex-1"
                  >
                    View Project
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  >
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
