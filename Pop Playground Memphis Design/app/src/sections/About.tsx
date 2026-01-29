import { useEffect, useRef } from 'react';
import { Palette, Sparkles, Paintbrush } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: Paintbrush,
      title: 'Messy Art Sessions',
      description: 'Let your creativity run wild with paint, glue, and glitter!',
      color: 'bg-memphis-pink-light',
    },
    {
      icon: Sparkles,
      title: 'Wild Imagination Workshops',
      description: 'Storytelling, roleplay, and creative problem solving.',
      color: 'bg-memphis-green-light',
    },
    {
      icon: Palette,
      title: 'Color Explosion Events',
      description: 'Themed parties and events bursting with color and fun!',
      color: 'bg-memphis-yellow-light',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 right-10 w-48 h-48 opacity-10 animate-spin"
          style={{ 
            background: 'repeating-conic-gradient(from 0deg, #F795E9 0deg 30deg, #F7FC87 30deg 60deg)',
            borderRadius: '50%',
            animationDuration: '60s',
          }}
        />
        <div 
          className="absolute bottom-20 left-10 w-32 h-32 opacity-15 animate-blob"
          style={{
            background: 'linear-gradient(135deg, #8BF7A3 0%, #87D6F7 100%)',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-block"
          >
            <span className="section-label">About</span>
          </div>
          <h2 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-6 font-display text-4xl sm:text-5xl lg:text-6xl"
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-memphis-purple">Pop</span>{' '}
            <span className="text-memphis-green">Play</span>{' '}
            <span className="text-memphis-pink">ground</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Cluster */}
          <div className="relative">
            {/* Main Image */}
            <div 
              className="animate-on-scroll opacity-0 scale-95 transition-all duration-700 relative z-10"
              style={{ transitionDelay: '200ms' }}
            >
              <div 
                className="overflow-hidden border-4 border-black shadow-sticker-lg bg-white transform rotate-2"
                style={{ clipPath: 'polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)' }}
              >
                <img
                  src="/about1.jpg"
                  alt="Colorful art supplies"
                  className="w-full h-auto object-cover aspect-square hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Secondary Image */}
            <div 
              className="animate-on-scroll opacity-0 transition-all duration-700 absolute -top-8 -right-4 w-40 h-40 z-20"
              style={{ transitionDelay: '400ms' }}
            >
              <div 
                className="overflow-hidden border-3 border-black shadow-sticker bg-white animate-float-slow"
                style={{ 
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  transform: 'rotate(-5deg)',
                }}
              >
                <img
                  src="/about2.jpg"
                  alt="Children crafting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Tertiary Image */}
            <div 
              className="animate-on-scroll opacity-0 transition-all duration-700 absolute -bottom-8 -left-8 w-36 h-36 z-20"
              style={{ transitionDelay: '600ms' }}
            >
              <div 
                className="overflow-hidden border-3 border-black shadow-sticker bg-white animate-float"
                style={{ 
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  transform: 'rotate(8deg)',
                }}
              >
                <img
                  src="/about3.jpg"
                  alt="Paper ice cream crafts"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative shapes */}
            <div className="absolute -top-4 left-1/4 w-8 h-8 bg-memphis-yellow border-2 border-black animate-bounce" />
            <div className="absolute bottom-1/4 -right-4 w-6 h-6 bg-memphis-pink border-2 border-black animate-wiggle" />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: '300ms' }}
            >
              <p className="font-body text-xl text-gray-700 leading-relaxed">
                We're not your average creative studio. We're an{' '}
                <span className="bg-memphis-pink-light px-2 py-1 font-bold">explosion of color</span>,
                a rebellion against boring, and a celebration of pure, unfiltered{' '}
                <span className="bg-memphis-yellow-light px-2 py-1 font-bold">imagination</span>.
              </p>
            </div>

            <p 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 font-body text-lg text-gray-600 leading-relaxed"
              style={{ transitionDelay: '400ms' }}
            >
              At Pop Playground, we believe that every child is born an artist. Our mission is to nurture that creative spirit through messy, joyful, and utterly unforgettable experiences.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 group"
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div 
                    className={`${feature.color} p-5 border-2 border-black shadow-sticker transition-all duration-300 group-hover:shadow-sticker-hover group-hover:-translate-x-1 group-hover:-translate-y-1`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-black mb-1">
                          {feature.title}
                        </h3>
                        <p className="font-body text-sm text-gray-700">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for scroll animations */}
      <style>{`
        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
      `}</style>
    </section>
  );
};

export default About;
