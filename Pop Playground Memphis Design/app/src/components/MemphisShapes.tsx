import { useEffect, useRef } from 'react';

const MemphisShapes = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use CSS custom properties for cursor position instead of state
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    // Throttle to ~60fps
    let ticking = false;
    const throttledMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleMouseMove(e);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {/* Memphis Shape 1 - Large Blob */}
      <div 
        className="absolute w-64 h-64 opacity-20 animate-blob"
        style={{
          top: '10%',
          left: '5%',
          background: 'linear-gradient(135deg, #F795E9 0%, #F7FC87 100%)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          animationDelay: '0s',
        }}
      />
      
      {/* Memphis Shape 2 - Circle */}
      <div 
        className="absolute w-32 h-32 opacity-15 animate-float"
        style={{
          top: '20%',
          right: '10%',
          background: '#8BF7A3',
          border: '3px solid #000',
          borderRadius: '50%',
          animationDelay: '1s',
        }}
      />
      
      {/* Memphis Shape 3 - Triangle */}
      <div 
        className="absolute w-0 h-0 opacity-20 animate-float-slow"
        style={{
          bottom: '30%',
          left: '8%',
          borderLeft: '40px solid transparent',
          borderRight: '40px solid transparent',
          borderBottom: '80px solid #F7FC87',
          filter: 'drop-shadow(3px 3px 0 #000)',
          animationDelay: '2s',
        }}
      />
      
      {/* Memphis Shape 4 - Wavy Blob */}
      <div 
        className="absolute w-48 h-48 opacity-15 animate-blob"
        style={{
          bottom: '15%',
          right: '15%',
          background: 'linear-gradient(45deg, #87D6F7 0%, #F78787 100%)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          animationDelay: '3s',
        }}
      />
      
      {/* Memphis Shape 5 - Small Circle */}
      <div 
        className="absolute w-16 h-16 opacity-25 animate-float"
        style={{
          top: '60%',
          left: '20%',
          background: '#F78787',
          border: '2px solid #000',
          borderRadius: '50%',
          animationDelay: '0.5s',
        }}
      />
      
      {/* Memphis Shape 6 - Square with rotation */}
      <div 
        className="absolute w-24 h-24 opacity-15 animate-wiggle"
        style={{
          top: '40%',
          right: '25%',
          background: '#F7B287',
          border: '3px solid #000',
          transform: 'rotate(15deg)',
        }}
      />
      
      {/* Memphis Shape 7 - Tiny dots pattern */}
      <div 
        className="absolute w-20 h-20 opacity-20"
        style={{
          bottom: '40%',
          left: '60%',
        }}
      >
        {[...Array(9)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-3 h-3 rounded-full animate-pulse"
            style={{
              background: ['#F795E9', '#F7FC87', '#8BF7A3'][i % 3],
              left: `${(i % 3) * 30}%`,
              top: `${Math.floor(i / 3) * 30}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Memphis Shape 8 - Arc/Semicircle */}
      <div 
        className="absolute w-40 h-20 opacity-15 animate-float-slow"
        style={{
          top: '70%',
          right: '5%',
          background: 'transparent',
          border: '4px solid #000',
          borderBottom: 'none',
          borderRadius: '100px 100px 0 0',
          animationDelay: '2.5s',
        }}
      />
      
      {/* Memphis Shape 9 - Cross/X shape */}
      <div 
        className="absolute opacity-15 animate-wiggle"
        style={{
          bottom: '60%',
          left: '75%',
          animationDelay: '1.5s',
        }}
      >
        <div className="w-8 h-24 bg-memphis-blue border-2 border-black" />
        <div className="w-24 h-8 bg-memphis-blue border-2 border-black absolute top-8 -left-4" />
      </div>
      
      {/* Memphis Shape 10 - Zigzag line */}
      <svg 
        className="absolute opacity-20 animate-float"
        style={{
          top: '15%',
          left: '40%',
          width: '100px',
          height: '60px',
        }}
      >
        <path 
          d="M0 30 L20 0 L40 60 L60 0 L80 60 L100 30" 
          stroke="#000" 
          strokeWidth="3" 
          fill="none"
          className="squiggle-line"
        />
      </svg>
      
      {/* Memphis Shape 11 - Small triangle cluster */}
      <div 
        className="absolute opacity-20"
        style={{
          bottom: '20%',
          left: '30%',
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-triangle-float"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${10 + i * 3}px solid transparent`,
              borderRight: `${10 + i * 3}px solid transparent`,
              borderBottom: `${20 + i * 5}px solid ${['#F795E9', '#F7FC87', '#8BF7A3', '#87D6F7', '#F78787'][i]}`,
              left: `${i * 25}px`,
              top: `${i % 2 * 10}px`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Memphis Shape 12 - Dotted circle */}
      <div 
        className="absolute w-36 h-36 opacity-15 animate-spin"
        style={{
          top: '5%',
          right: '30%',
          background: 'repeating-radial-gradient(circle at center, #F795E9 0, #F795E9 4px, transparent 4px, transparent 12px)',
          borderRadius: '50%',
          animationDuration: '30s',
        }}
      />
    </div>
  );
};

export default MemphisShapes;
