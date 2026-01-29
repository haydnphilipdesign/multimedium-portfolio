import { useEffect, useRef } from 'react';
import { ArrowRight, Paintbrush, Star, Heart } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Memphis Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Squiggly lines SVG */}
        <svg className="absolute top-20 left-10 w-32 h-32 opacity-20" viewBox="0 0 100 100">
          <path
            d="M10 50 Q 25 25, 50 50 T 90 50"
            stroke="#000"
            strokeWidth="2"
            fill="none"
            className="squiggle-line"
          />
          <path
            d="M10 60 Q 25 35, 50 60 T 90 60"
            stroke="#F795E9"
            strokeWidth="2"
            fill="none"
            className="squiggle-line"
          />
        </svg>
        
        {/* Dotted circle */}
        <div 
          className="absolute top-40 right-20 w-24 h-24 opacity-20 animate-spin"
          style={{
            background: 'repeating-radial-gradient(circle, #8BF7A3 0, #8BF7A3 3px, transparent 3px, transparent 8px)',
            borderRadius: '50%',
            animationDuration: '40s',
          }}
        />
        
        {/* Scattered triangles */}
        <div className="absolute bottom-32 left-20 opacity-20">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                width: 0,
                height: 0,
                borderLeft: '15px solid transparent',
                borderRight: '15px solid transparent',
                borderBottom: `30px solid ${['#F795E9', '#F7FC87', '#8BF7A3', '#87D6F7'][i]}`,
                left: `${i * 40}px`,
                top: `${i % 2 * 20}px`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Decorative badge */}
            <div 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-memphis-yellow border-2 border-black shadow-sticker transform -rotate-2">
                <Paintbrush className="w-5 h-5 text-black" />
                <span className="font-body text-sm font-bold uppercase tracking-wide">
                  Creative Fun for Kids
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 font-display text-5xl sm:text-6xl lg:text-7xl leading-tight"
                style={{ transitionDelay: '200ms' }}
              >
                <span className="text-black">Unleash</span>
              </h1>
              <h1 
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 font-display text-5xl sm:text-6xl lg:text-7xl leading-tight"
                style={{ transitionDelay: '300ms' }}
              >
                <span className="text-memphis-purple">Your</span>{' '}
                <span className="text-memphis-green">Inner</span>
              </h1>
              <h1 
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 font-display text-5xl sm:text-6xl lg:text-7xl leading-tight"
                style={{ transitionDelay: '400ms' }}
              >
                <span className="inline-block px-6 py-2 bg-memphis-pink border-4 border-black shadow-sticker-lg transform rotate-1">
                  Artist
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 font-body text-xl text-gray-700 max-w-lg"
              style={{ transitionDelay: '500ms' }}
            >
              Where creativity meets chaos in the most colorful way! Join our playful world of art, crafts, and endless imagination.
            </p>

            {/* CTA Buttons */}
            <div 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex flex-wrap gap-4"
              style={{ transitionDelay: '600ms' }}
            >
              <button className="btn-primary group flex items-center gap-2">
                Start Creating
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Star className="w-5 h-5" />
                Explore Activities
              </button>
            </div>

            {/* Stats */}
            <div 
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex gap-8 pt-4"
              style={{ transitionDelay: '700ms' }}
            >
              {[
                { number: '10K+', label: 'Happy Artists' },
                { number: '500+', label: 'Activities' },
                { number: '50+', label: 'Colors' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-3xl text-black">{stat.number}</div>
                  <div className="font-body text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            {/* Main Hero Image */}
            <div 
              className="animate-on-scroll opacity-0 scale-95 transition-all duration-700 relative z-10"
              style={{ transitionDelay: '400ms' }}
            >
              <div className="relative">
                <div 
                  className="wonky-shape-2 overflow-hidden border-4 border-black shadow-sticker-lg bg-white"
                  style={{ transform: 'rotate(-2deg)' }}
                >
                  <img
                    src="/hero-main.jpg"
                    alt="Child painting with colorful art supplies"
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
                
                {/* Floating badge on image */}
                <div 
                  className="absolute -bottom-4 -left-4 bg-memphis-green px-4 py-2 border-3 border-black shadow-sticker transform rotate-3"
                >
                  <span className="font-display text-lg">Fun & Safe!</span>
                </div>
              </div>
            </div>

            {/* Decorative Image 1 */}
            <div 
              className="animate-on-scroll opacity-0 transition-all duration-700 absolute -top-8 -right-8 w-32 h-32 z-20"
              style={{ transitionDelay: '600ms' }}
            >
              <div className="blob-shape overflow-hidden border-3 border-black shadow-sticker bg-white animate-float">
                <img
                  src="/hero-deco1.jpg"
                  alt="Abstract Memphis design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Image 2 */}
            <div 
              className="animate-on-scroll opacity-0 transition-all duration-700 absolute -bottom-8 -right-12 w-36 h-36 z-20"
              style={{ transitionDelay: '750ms' }}
            >
              <div 
                className="overflow-hidden border-3 border-black shadow-sticker bg-white animate-float-slow"
                style={{ 
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  transform: 'rotate(5deg)',
                }}
              >
                <img
                  src="/hero-deco2.jpg"
                  alt="Cute whale illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating hearts */}
            <div className="absolute top-10 -left-10 animate-float">
              <Heart className="w-8 h-8 text-memphis-red fill-memphis-red" />
            </div>
            <div className="absolute bottom-20 -left-16 animate-float-slow">
              <Heart className="w-6 h-6 text-memphis-pink fill-memphis-pink" />
            </div>
            
            {/* Star decorations */}
            <div className="absolute top-1/2 -right-16 animate-wiggle">
              <Star className="w-10 h-10 text-memphis-yellow fill-memphis-yellow" />
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

export default Hero;
