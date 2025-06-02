
import { Leaf, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 animate-bounce">
        <Leaf className="text-green-600 w-8 h-8 opacity-60" />
      </div>
      <div className="absolute top-40 right-32 animate-pulse">
        <Leaf className="text-emerald-500 w-6 h-6 opacity-40" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-bounce delay-1000">
        <Leaf className="text-teal-600 w-10 h-10 opacity-50" />
      </div>
      
      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6 animate-scale-in">
            <Leaf className="text-white w-10 h-10" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
          Growing
          <span className="text-green-600 block">Digital Gardens</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          I'm a passionate developer who cultivates beautiful, functional web experiences 
          that grow and flourish in the digital landscape.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            onClick={scrollToAbout}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Explore My Work
          </Button>
          <Button 
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ArrowDown className="text-green-600 w-8 h-8 mx-auto" />
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
