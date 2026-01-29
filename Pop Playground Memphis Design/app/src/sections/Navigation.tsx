import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Featured', href: '#featured' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 bg-memphis-pink rounded-full flex items-center justify-center border-2 border-black shadow-sticker group-hover:shadow-sticker-hover transition-all duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <span className="font-display text-2xl text-black hidden sm:block">
              Pop Playground
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="relative font-body text-base font-semibold text-black hover:text-memphis-purple transition-colors duration-200 group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="relative z-10 group-hover:-translate-y-0.5 transition-transform duration-200 inline-block">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-memphis-purple group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="hidden md:block btn-primary text-sm py-2 px-5 -rotate-2 hover:rotate-0"
          >
            Let's Play!
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-80 mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-memphis-yellow-light border-2 border-black p-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left font-body text-lg font-semibold text-black hover:text-memphis-purple transition-colors py-2"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary w-full text-center mt-4"
            >
              Let's Play!
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
