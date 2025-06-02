
import { Leaf, Sprout, TreeDeciduous } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Like a gardener who tends to their plants with care and patience, 
            I nurture digital projects from seed to full bloom.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Cultivating Digital Experiences</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              With over 5 years of experience in web development, I've learned that 
              great software, like a thriving garden, requires the right foundation, 
              consistent care, and attention to detail.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              I specialize in creating responsive, user-friendly applications using 
              modern technologies. My approach combines technical expertise with 
              creative problem-solving to deliver solutions that not only work 
              beautifully but also grow with your needs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <Sprout className="text-green-600 w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800">Growth Mindset</h4>
                  <p className="text-sm text-gray-600 mt-2">Always learning and evolving</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <Leaf className="text-green-600 w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800">Sustainable Code</h4>
                  <p className="text-sm text-gray-600 mt-2">Clean, maintainable solutions</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <TreeDeciduous className="text-green-600 w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800">Rooted Knowledge</h4>
                  <p className="text-sm text-gray-600 mt-2">Strong foundation in fundamentals</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-green-200 to-emerald-300 rounded-2xl relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Beautiful garden scene"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-green-600 bg-opacity-20 rounded-2xl"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-600 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-500 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
