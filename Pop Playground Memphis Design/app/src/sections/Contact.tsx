import { useEffect, useRef, useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/3 left-10 w-40 h-40 opacity-15 animate-blob"
          style={{
            background: 'linear-gradient(135deg, #F795E9 0%, #F7FC87 100%)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          }}
        />
        <div 
          className="absolute bottom-1/3 right-10 w-32 h-32 opacity-20 animate-float"
          style={{
            background: '#8BF7A3',
            border: '3px solid #000',
            borderRadius: '50%',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block"
          >
            <span className="section-label transform rotate-1">Contact</span>
          </div>
          <h2 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-6 font-display text-4xl sm:text-5xl lg:text-6xl"
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-memphis-purple">Let's</span>{' '}
            <span className="inline-block px-6 py-2 bg-memphis-yellow border-4 border-black shadow-sticker-lg transform -rotate-2">
              Chat!
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Form */}
          <div 
            className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-700"
            style={{ transitionDelay: '200ms' }}
          >
            <div 
              className="p-8 border-4 border-black shadow-sticker-lg relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #F4C7EE 0%, #F7FAC7 50%, #CAF7D2 100%)',
              }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-memphis-pink opacity-50" 
                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} 
              />
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-memphis-green mx-auto mb-4" />
                  <h3 className="font-display text-2xl text-black mb-2">Message Sent!</h3>
                  <p className="font-body text-gray-700">We'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="block font-display text-lg text-black mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-memphis pl-12 py-4 font-body"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className="block font-display text-lg text-black mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-memphis pl-12 py-4 font-body"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="block font-display text-lg text-black mb-2">
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="input-memphis pl-12 py-4 font-body resize-none h-32"
                        placeholder="Tell us what you're thinking..."
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right - Image */}
          <div 
            className="animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 relative"
            style={{ transitionDelay: '400ms' }}
          >
            <div 
              className="overflow-hidden border-4 border-black shadow-sticker-lg bg-white transform rotate-2"
              style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)' }}
            >
              <img
                src="/contact.jpg"
                alt="Colorful art supplies"
                className="w-full h-auto aspect-square object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-memphis-yellow border-3 border-black animate-wiggle" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-memphis-pink border-3 border-black rounded-full animate-bounce" />
            
            {/* Contact info cards */}
            <div 
              className="absolute -right-4 top-1/4 bg-white border-2 border-black p-3 shadow-sticker transform -rotate-3"
            >
              <p className="font-body text-sm font-bold">hello@popplayground.com</p>
            </div>
            <div 
              className="absolute -left-4 bottom-1/4 bg-memphis-green-light border-2 border-black p-3 shadow-sticker transform rotate-2"
            >
              <p className="font-body text-sm font-bold">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for scroll animations */}
      <style>{`
        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) scale(1) !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;
