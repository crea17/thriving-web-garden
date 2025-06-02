
import { Play, Eye, ExternalLink, Image, Video, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: Palette },
    { id: 'branding', name: 'Branding', icon: Image },
    { id: 'video', name: 'Video Editing', icon: Video },
    { id: 'digital', name: 'Digital Design', icon: Eye }
  ];

  const projects = [
    {
      title: "EcoTech Brand Identity",
      category: "branding",
      description: "Complete brand identity design for a sustainable technology startup, including logo, color palette, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      type: "Brand Identity",
      client: "EcoTech Solutions",
      duration: "3 weeks",
      testimonial: "Outstanding work! The brand identity perfectly captures our mission.",
      results: "40% increase in brand recognition",
      hasVideo: false
    },
    {
      title: "Product Launch Campaign",
      category: "video",
      description: "90-second promotional video for a tech product launch, including motion graphics, sound design, and color grading.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      type: "Video Production",
      client: "TechFlow Inc.",
      duration: "2 weeks",
      testimonial: "The video exceeded our expectations and drove amazing engagement.",
      results: "2M+ views, 15% conversion rate",
      hasVideo: true
    },
    {
      title: "E-commerce Website Design",
      category: "digital",
      description: "Complete UI/UX design for an online marketplace, focusing on user experience and conversion optimization.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      type: "Web Design",
      client: "GreenMarket",
      duration: "4 weeks",
      testimonial: "Beautiful design that significantly improved our sales.",
      results: "65% increase in conversions",
      hasVideo: false
    },
    {
      title: "Documentary Film Editing",
      category: "video",
      description: "Post-production editing for a 45-minute environmental documentary, including color correction and sound mixing.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      type: "Film Editing",
      client: "Nature Films Co.",
      duration: "6 weeks",
      testimonial: "Professional editing that brought our story to life.",
      results: "Film festival selection",
      hasVideo: true
    },
    {
      title: "Restaurant Brand Package",
      category: "branding",
      description: "Full branding package including logo, menu design, signage, and marketing materials for a farm-to-table restaurant.",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      type: "Brand Package",
      client: "Green Harvest",
      duration: "5 weeks",
      testimonial: "The branding perfectly reflects our farm-to-table philosophy.",
      results: "25% increase in reservations",
      hasVideo: false
    },
    {
      title: "Social Media Campaign",
      category: "digital",
      description: "Multi-platform social media campaign with custom graphics, animations, and video content for a fashion brand.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      type: "Social Media",
      client: "Style Forward",
      duration: "Ongoing",
      testimonial: "Our engagement rates have never been higher!",
      results: "300% increase in engagement",
      hasVideo: true
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-serif">
            Portfolio Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work across different mediums and industries, 
            each project crafted with attention to detail and strategic thinking.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className={`${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white'
                  : 'border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white'
              } transition-all duration-300`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs font-semibold rounded-full">
                    {project.type}
                  </span>
                </div>
                
                {/* Video Play Button */}
                {project.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="text-white w-8 h-8" />
                    </div>
                  </div>
                )}
                
                {/* Client Name */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-sm font-medium">{project.client}</p>
                  <p className="text-pink-200 text-xs">{project.duration}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors font-serif">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Results */}
                <div className="mb-4 p-3 bg-pink-50 rounded-lg">
                  <p className="text-sm font-semibold text-pink-800">Results:</p>
                  <p className="text-sm text-pink-700">{project.results}</p>
                </div>
                
                {/* Testimonial */}
                <blockquote className="italic text-gray-600 text-sm mb-4 border-l-4 border-pink-200 pl-3">
                  "{project.testimonial}"
                </blockquote>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white flex-1"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to bring your vision to life? Let's discuss your next project.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-3 shadow-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
