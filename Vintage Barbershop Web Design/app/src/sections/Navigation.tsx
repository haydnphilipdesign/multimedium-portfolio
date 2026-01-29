import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

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
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#barbers', label: 'Barbers' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#F5F1E8]/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-[#E63946] flex items-center justify-center group-hover:bg-[#1D3557] transition-colors duration-300">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-xl text-[#1D3557]">GENTLEMAN'S</span>
                <span className="font-display text-xl text-[#E63946] ml-1">BLADE</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="nav-pill"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="ticket-btn text-xs py-2 px-4"
              >
                BOOK NOW
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#1D3557] hover:text-[#E63946] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-[#F5F1E8] border-t border-[#1D3557]/10 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="block font-body text-lg text-[#1D3557] hover:text-[#E63946] transition-colors py-2 border-b border-[#1D3557]/10"
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="w-full ticket-btn mt-4"
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </nav>

      {/* Barber pole accent on mobile */}
      <div className="lg:hidden fixed left-0 top-0 bottom-0 w-2 barber-pole-stripes z-40" />
    </>
  );
};

export default Navigation;
