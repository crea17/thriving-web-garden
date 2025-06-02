
import { Flower2, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 animate-float">
        <Flower2 className="text-pink-400 w-8 h-8 opacity-60 rotate-12" />
      </div>
      <div className="absolute top-40 right-32 animate-pulse">
        <Flower2 className="text-rose-400 w-6 h-6 opacity-40 -rotate-12" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-bounce delay-1000">
        <Flower2 className="text-pink-500 w-10 h-10 opacity-50 rotate-45" />
      </div>
      
      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mb-6 animate-scale-in shadow-lg">
            <Flower2 className="text-white w-10 h-10" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-fade-in font-serif">
          Magnolia
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-pink-600 mb-6 animate-fade-in font-serif">
          Freelance Graphic Designer & Video Editor
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          I create compelling visual stories through graphic design, video editing, 
          and multimedia content that helps brands bloom and connect with their audience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View My Work
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline"
            className="border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </Button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ArrowDown className="text-pink-500 w-8 h-8 mx-auto" />
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
