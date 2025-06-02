
import { Leaf, Sprout, TreeDeciduous, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
            A passionate multimedia designer with 5+ years of experience crafting 
            visual stories that resonate and inspire action.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">My Creative Journey</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              What sets me apart is my holistic approach to visual storytelling. I don't just 
              create designs or edit videos—I craft experiences that connect emotionally with 
              audiences while achieving measurable business results.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              My background spans from corporate branding to social media campaigns, 
              allowing me to adapt my creative vision to any project size or industry. 
              I believe great design grows from understanding both the message and the audience.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">What Makes Me Different:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <Leaf className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Strategic thinking combined with creative execution</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Leaf className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Cross-platform expertise from print to digital to video</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Leaf className="text-green-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Collaborative approach that values client input and feedback</span>
                </li>
              </ul>
            </div>

            <Button className="bg-green-600 hover:bg-green-700 text-white mt-6">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <Sprout className="text-green-600 w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800">Always Learning</h4>
                  <p className="text-sm text-gray-600 mt-2">Staying current with design trends</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <Leaf className="text-green-600 w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800">Detail Oriented</h4>
                  <p className="text-sm text-gray-600 mt-2">Pixel-perfect execution</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <TreeDeciduous className="text-green-600 w-12 h-12 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800">Results Driven</h4>
                  <p className="text-sm text-gray-600 mt-2">Designs that deliver ROI</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-green-200 to-emerald-300 rounded-2xl relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Creative workspace with design tools"
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
