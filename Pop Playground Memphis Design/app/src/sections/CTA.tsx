import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Star, Heart } from 'lucide-react';

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Energy lines SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F795E9" />
              <stop offset="50%" stopColor="#F7FC87" />
              <stop offset="100%" stopColor="#8BF7A3" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <line
              key={i}
              x1={`${10 + i * 20}%`}
              y1="0"
              x2="50%"
              y2="100%"
              stroke="url(#energyGradient)"
              strokeWidth="2"
              strokeDasharray="10 5"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
        
        {/* Floating shapes */}
        <div 
          className="absolute top-20 left-10 w-20 h-20 opacity-20 animate-float"
          style={{
            background: '#F795E9',
            border: '3px solid #000',
            borderRadius: '50%',
          }}
        />
        <div 
          className="absolute top-40 right-20 w-16 h-16 opacity-15 animate-float-slow"
          style={{
            background: '#8BF7A3',
            border: '3px solid #000',
            transform: 'rotate(15deg)',
          }}
        />
        <div 
          className="absolute bottom-32 left-20 w-24 h-24 opacity-10 animate-blob"
          style={{
            background: 'linear-gradient(45deg, #F7FC87 0%, #87D6F7 100%)',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="relative order-2 lg:order-1">
            {/* Image 1 */}
            <div 
              className="animate-on-scroll opacity-0 transition-all duration-700 relative z-10"
              style={{ transitionDelay: '200ms' }}
            >
              <div 
                className="overflow-hidden border-4 border-black shadow-sticker-lg bg-white transform -rotate-6 animate-float-slow"
                style={{ clipPath: 'polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)' }}
              >
                <img
                  src="/cta1.jpg"
                  alt="Colorful art supplies"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div 
              className="animate-on-scroll opacity-0 transition-all duration-700 absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 z-20"
              style={{ transitionDelay: '400ms' }}
            >
              <div 
                className="overflow-hidden border-4 border-black shadow-sticker-lg bg-white transform rotate-6 animate-float"
                style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
              >
                <img
                  src="/cta2.jpg"
                  alt="Children crafting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 left-1/4 animate-wiggle">
              <Star className="w-8 h-8 text-memphis-yellow fill-memphis-yellow" />
            </div>
            <div className="absolute -bottom-4 right-1/4 animate-bounce">
              <Sparkles className="w-6 h-6 text-memphis-pink" />
            </div>
            <div className="absolute top-1/2 -left-8 animate-float">
              <Heart className="w-7 h-7 text-memphis-red fill-memphis-red" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Headline */}
            <h2 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight"
            >
              <span className="text-black">Ready to</span>
              <br />
              <span className="text-memphis-purple">Create</span>{' '}
              <span className="text-memphis-green">Something</span>
              <br />
              <span 
                className="inline-block px-6 py-3 bg-memphis-yellow border-4 border-black shadow-sticker-lg transform rotate-2 mt-2"
              >
                Amazing?
              </span>
            </h2>

            <p 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-6 font-body text-xl text-gray-700 max-w-lg mx-auto lg:mx-0"
              style={{ transitionDelay: '200ms' }}
            >
              Join thousands of young artists in our creative community. Let's make something beautiful together!
            </p>

            {/* CTA Button */}
            <div 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-8"
              style={{ transitionDelay: '400ms' }}
            >
              <button className="btn-primary group text-xl px-10 py-5 inline-flex items-center gap-3 animate-pulse">
                Join the Fun!
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Trust badges */}
            <div 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
              style={{ transitionDelay: '500ms' }}
            >
              {['Safe Environment', 'Expert Guides', 'All Ages Welcome'].map((badge, i) => (
                <span 
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black text-sm font-body"
                  style={{ transform: `rotate(${-2 + i * 2}deg)` }}
                >
                  <Sparkles className="w-4 h-4 text-memphis-purple" />
                  {badge}
                </span>
              ))}
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

export default CTA;
