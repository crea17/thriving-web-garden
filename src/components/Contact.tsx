
import { Leaf, TreeDeciduous, Sprout, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-pink-900 via-rose-800 to-pink-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Leaf className="text-pink-300 w-12 h-12 opacity-30" />
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <TreeDeciduous className="text-rose-300 w-16 h-16 opacity-20" />
      </div>
      <div className="absolute bottom-20 left-1/4 animate-float delay-2000">
        <Sprout className="text-pink-300 w-10 h-10 opacity-25" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Ready to bring your vision to life? I'd love to discuss your project 
            and explore how we can work together to achieve your goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Send className="w-6 h-6 text-pink-400" />
                Get In Touch
              </CardTitle>
              <p className="text-pink-200">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-pink-200 text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <Input 
                    placeholder="Your first name"
                    className="bg-white/20 border-white/30 text-white placeholder-pink-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-pink-200 text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <Input 
                    placeholder="Your last name"
                    className="bg-white/20 border-white/30 text-white placeholder-pink-200"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-pink-200 text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-white/20 border-white/30 text-white placeholder-pink-200"
                  required
                />
              </div>
              
              <div>
                <label className="block text-pink-200 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="bg-white/20 border-white/30 text-white placeholder-pink-200"
                />
              </div>
              
              <div>
                <label className="block text-pink-200 text-sm font-medium mb-2">
                  Project Type *
                </label>
                <select className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white" required>
                  <option value="">Select a project type</option>
                  <option value="branding">Brand Identity & Logo Design</option>
                  <option value="video">Video Editing & Production</option>
                  <option value="web">Web Design</option>
                  <option value="print">Print Design</option>
                  <option value="photography">Photography</option>
                  <option value="social">Social Media Content</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-pink-200 text-sm font-medium mb-2">
                  Project Budget
                </label>
                <select className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white">
                  <option value="">Select budget range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-plus">$10,000+</option>
                  <option value="discuss">Let's discuss</option>
                </select>
              </div>
              
              <div>
                <label className="block text-pink-200 text-sm font-medium mb-2">
                  Project Details *
                </label>
                <Textarea 
                  placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                  rows={4}
                  className="bg-white/20 border-white/30 text-white placeholder-pink-200"
                  required
                />
              </div>
              
              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg transition-all duration-300 hover:scale-105">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-pink-100">
                Get In Touch
              </h3>
              <p className="text-lg text-pink-200 leading-relaxed mb-8">
                Whether you're a startup looking to establish your brand or an 
                established company needing fresh creative direction, I'm here to help 
                bring your vision to life with professional multimedia design services.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-pink-100">Email</h4>
                  <p className="text-pink-200">hello@multimediadesigner.com</p>
                  <p className="text-sm text-pink-300">Primary contact method</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-pink-100">Phone</h4>
                  <p className="text-pink-200">(555) 123-4567</p>
                  <p className="text-sm text-pink-300">Available for consultations</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                  <MapPin className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-pink-100">Location</h4>
                  <p className="text-pink-200">San Francisco, CA</p>
                  <p className="text-sm text-pink-300">Remote work worldwide</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                  <Clock className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-pink-100">Response Time</h4>
                  <p className="text-pink-200">Within 24 hours</p>
                  <p className="text-sm text-pink-300">Usually much faster!</p>
                </div>
              </div>
            </div>
            
            {/* Professional Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-pink-100">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-pink-400 text-pink-200 hover:bg-pink-600 hover:text-white">
                  LinkedIn
                </Button>
                <Button variant="outline" className="border-pink-400 text-pink-200 hover:bg-pink-600 hover:text-white">
                  Behance
                </Button>
                <Button variant="outline" className="border-pink-400 text-pink-200 hover:bg-pink-600 hover:text-white">
                  Instagram
                </Button>
                <Button variant="outline" className="border-pink-400 text-pink-200 hover:bg-pink-600 hover:text-white">
                  Dribbble
                </Button>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold text-pink-100 mb-3">What to Expect</h4>
              <ul className="text-pink-200 space-y-2 text-sm">
                <li>• Free initial consultation to discuss your project</li>
                <li>• Detailed proposal with timeline and pricing</li>
                <li>• Regular updates throughout the project</li>
                <li>• Unlimited revisions until you're 100% satisfied</li>
                <li>• Final files delivered in all required formats</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/20 text-center">
          <p className="text-pink-200">
            © 2024 Multimedia Designer Portfolio. Creating visual stories that inspire action.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
