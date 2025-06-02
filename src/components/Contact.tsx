
import { Leaf, TreeDeciduous, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Leaf className="text-green-300 w-12 h-12 opacity-30" />
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <TreeDeciduous className="text-emerald-300 w-16 h-16 opacity-20" />
      </div>
      <div className="absolute bottom-20 left-1/4 animate-float delay-2000">
        <Sprout className="text-teal-300 w-10 h-10 opacity-25" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Grow Something Together
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Ready to plant the seeds of your next project? 
            I'd love to help cultivate your ideas into reality.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Leaf className="w-6 h-6 text-green-400" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-green-200 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="Your first name"
                    className="bg-white/20 border-white/30 text-white placeholder-green-200"
                  />
                </div>
                <div>
                  <label className="block text-green-200 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Your last name"
                    className="bg-white/20 border-white/30 text-white placeholder-green-200"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-green-200 text-sm font-medium mb-2">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-white/20 border-white/30 text-white placeholder-green-200"
                />
              </div>
              
              <div>
                <label className="block text-green-200 text-sm font-medium mb-2">
                  Project Type
                </label>
                <select className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white">
                  <option value="">Select a project type</option>
                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-green-200 text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project ideas..."
                  rows={4}
                  className="bg-white/20 border-white/30 text-white placeholder-green-200"
                />
              </div>
              
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg transition-all duration-300 hover:scale-105">
                Plant the Seeds
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-green-100">
                Let's Connect
              </h3>
              <p className="text-lg text-green-200 leading-relaxed mb-8">
                Whether you have a specific project in mind or just want to explore 
                possibilities, I'm here to help your ideas flourish. Every great 
                project starts with a conversation.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-100">Email</h4>
                  <p className="text-green-200">hello@gardendev.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-100">LinkedIn</h4>
                  <p className="text-green-200">linkedin.com/in/gardendev</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🐙</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-100">GitHub</h4>
                  <p className="text-green-200">github.com/gardendev</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold text-green-100 mb-3">Response Time</h4>
              <p className="text-green-200">
                I typically respond within 24 hours. For urgent projects, 
                feel free to mention it in your message!
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/20 text-center">
          <p className="text-green-200">
            © 2024 Garden Dev Portfolio. Growing digital experiences with care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
