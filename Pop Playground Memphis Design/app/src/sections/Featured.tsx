import { useEffect, useRef } from 'react';
import { ArrowRight, Star, Zap, Rainbow, Sun } from 'lucide-react';

const Featured = () => {
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

  const activities = [
    {
      icon: Star,
      title: 'Rainbow Painting',
      description: 'Create your own masterpiece with every color imaginable!',
      color: 'bg-memphis-pink-light',
      rotation: '-3deg',
    },
    {
      icon: Zap,
      title: 'Crafty Creations',
      description: 'From paper to clay, bring your ideas to life.',
      color: 'bg-memphis-green-light',
      rotation: '2deg',
    },
    {
      icon: Rainbow,
      title: 'Color Splash',
      description: 'Dive into a world of vibrant colors and patterns.',
      color: 'bg-memphis-yellow-light',
      rotation: '-2deg',
    },
    {
      icon: Sun,
      title: 'Sunny Sculptures',
      description: 'Shape and mold your imagination into reality.',
      color: 'bg-memphis-orange-light',
      rotation: '3deg',
    },
  ];

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 opacity-10 animate-spin"
          style={{
            background: 'conic-gradient(from 0deg, #F795E9, #F7FC87, #8BF7A3, #87D6F7, #F795E9)',
            borderRadius: '50%',
            animationDuration: '30s',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 opacity-15 animate-blob"
          style={{
            background: 'radial-gradient(circle, #F7FC87 0%, transparent 70%)',
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
            <span className="section-label transform rotate-2">Featured</span>
          </div>
          <h2 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-6 font-display text-4xl sm:text-5xl lg:text-6xl"
            style={{ transitionDelay: '100ms' }}
          >
            <span className="inline-block px-6 py-3 bg-memphis-purple-light border-4 border-black shadow-sticker-lg transform -rotate-1">
              Creative Chaos
            </span>
          </h2>
          <p 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-6 font-body text-xl text-gray-700 max-w-2xl mx-auto"
            style={{ transitionDelay: '200ms' }}
          >
            Dive into our world of colorful adventures and let your imagination run wild!
          </p>
        </div>

        {/* Images Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Image 1 */}
          <div 
            className="animate-on-scroll opacity-0 translate-x-8 transition-all duration-700"
            style={{ transitionDelay: '300ms' }}
          >
            <div 
              className="overflow-hidden border-4 border-black shadow-sticker-lg bg-white transform -rotate-2 hover:rotate-0 transition-transform duration-300"
              style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
            >
              <img
                src="/featured1.jpg"
                alt="Colorful art supplies"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Image 2 */}
          <div 
            className="animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700"
            style={{ transitionDelay: '400ms' }}
          >
            <div 
              className="overflow-hidden border-4 border-black shadow-sticker-lg bg-white transform rotate-1 hover:rotate-0 transition-transform duration-300"
              style={{ clipPath: 'polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)' }}
            >
              <img
                src="/featured2.jpg"
                alt="Children making crafts"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Activity Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 group"
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div 
                className={`${activity.color} p-6 border-3 border-black shadow-sticker transition-all duration-300 group-hover:shadow-sticker-hover group-hover:-translate-x-1 group-hover:-translate-y-1 h-full`}
                style={{ transform: `rotate(${activity.rotation})` }}
              >
                <div className="w-14 h-14 bg-white border-2 border-black flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <activity.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="font-display text-xl text-black mb-2">
                  {activity.title}
                </h3>
                <p className="font-body text-sm text-gray-700">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-center mt-12"
          style={{ transitionDelay: '900ms' }}
        >
          <button className="btn-primary group inline-flex items-center gap-2">
            Explore More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* CSS for scroll animations */}
      <style>{`
        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) scale(1) !important;
        }
        
        @keyframes triangle-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        .animate-triangle-float {
          animation: triangle-float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Featured;
