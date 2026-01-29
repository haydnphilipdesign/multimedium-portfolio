import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

  const galleryImages = [
    { src: '/gallery1.jpg', rotation: '-5deg', color: 'bg-memphis-pink-light' },
    { src: '/gallery2.jpg', rotation: '7deg', color: 'bg-memphis-green-light' },
    { src: '/gallery3.jpg', rotation: '-3deg', color: 'bg-memphis-yellow-light' },
    { src: '/gallery4.jpg', rotation: '6deg', color: 'bg-memphis-purple-light' },
    { src: '/gallery5.jpg', rotation: '-8deg', color: 'bg-memphis-blue-light' },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-1/4 w-32 h-32 opacity-15 animate-blob"
          style={{
            background: 'linear-gradient(45deg, #F795E9 0%, #F7FC87 50%, #8BF7A3 100%)',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          }}
        />
        <div 
          className="absolute bottom-20 right-1/4 w-24 h-24 opacity-20 animate-float-slow"
          style={{
            background: '#87D6F7',
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
            <span className="section-label transform -rotate-1">Gallery</span>
          </div>
          <h2 
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 mt-6 font-display text-4xl sm:text-5xl lg:text-6xl"
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-memphis-pink">Colorful</span>{' '}
            <span className="text-memphis-green">Moments</span>
          </h2>
        </div>

        {/* Gallery Grid - Scattered Polaroid Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 transition-all duration-700 group"
              style={{ 
                transitionDelay: `${200 + index * 100}ms`,
                transform: `rotate(${image.rotation})`,
              }}
            >
              <div 
                className={`${image.color} p-3 pb-12 border-3 border-black shadow-sticker transition-all duration-300 group-hover:shadow-sticker-hover group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:rotate-0 cursor-pointer`}
                onClick={() => openLightbox(index)}
              >
                <div className="overflow-hidden bg-white border-2 border-black">
                  <img
                    src={image.src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <Heart className="w-5 h-5 text-gray-400 mx-auto group-hover:text-memphis-red group-hover:fill-memphis-red transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-center mt-12"
          style={{ transitionDelay: '700ms' }}
        >
          <button className="btn-secondary inline-flex items-center gap-2">
            View All Creations
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-memphis-pink transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-memphis-pink transition-colors"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-memphis-pink transition-colors"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
          
          <div 
            className="max-w-4xl max-h-[80vh] animate-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={`Gallery image ${selectedImage + 1}`}
              className="w-full h-full object-contain border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* CSS for scroll animations */}
      <style>{`
        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
        
        .animate-in {
          animation: zoom-in 0.3s ease-out;
        }
        
        @keyframes zoom-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
