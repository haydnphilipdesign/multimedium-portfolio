import { useEffect, useRef, useState } from 'react';
import { Sparkles, Facebook, Twitter, Instagram, Send, Heart } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

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

    const elements = footerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative pt-20 pb-8 overflow-hidden"
    >
      {/* Memphis Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, #F795E9 2px, transparent 2px),
              radial-gradient(circle at 80% 30%, #F7FC87 2px, transparent 2px),
              radial-gradient(circle at 40% 70%, #8BF7A3 2px, transparent 2px),
              radial-gradient(circle at 70% 80%, #87D6F7 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px, 80px 80px, 100px 100px, 120px 120px',
          }}
        />
      </div>

      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-10 -left-10 w-40 h-40 opacity-10 animate-blob"
          style={{
            background: 'linear-gradient(45deg, #F795E9 0%, #F7FC87 100%)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          }}
        />
        <div
          className="absolute -top-5 -right-5 w-32 h-32 opacity-15 animate-float"
          style={{
            background: '#8BF7A3',
            border: '3px solid #000',
            borderRadius: '50%',
          }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-24 h-24 opacity-10 animate-float-slow"
          style={{
            background: '#87D6F7',
            border: '3px solid #000',
            transform: 'rotate(20deg)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 lg:col-span-2"
          >
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-memphis-pink rounded-full flex items-center justify-center border-3 border-black shadow-sticker group-hover:shadow-sticker-hover transition-all duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <span className="font-display text-3xl text-black">
                Pop Playground
              </span>
            </a>
            <p className="font-body text-gray-700 mb-6 max-w-md">
              Where creativity knows no bounds and every day is a new adventure! Join our colorful world of imagination and fun.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center hover:bg-memphis-purple hover:border-memphis-purple hover:rotate-12 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-5 h-5 text-black hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="font-display text-xl text-black mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-gray-700 hover:text-memphis-purple hover:translate-x-2 transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-memphis-purple group-hover:w-4 transition-all duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="font-display text-xl text-black mb-6">Stay Colorful!</h3>
            <p className="font-body text-gray-700 mb-4">
              Subscribe to our newsletter for creative tips and updates!
            </p>

            {isSubscribed ? (
              <div className="flex items-center gap-2 text-memphis-green font-body font-bold">
                <Heart className="w-5 h-5 fill-current" />
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="input-memphis pr-12 py-3 font-body"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-memphis-pink flex items-center justify-center hover:bg-memphis-red transition-colors"
                  >
                    <Send className="w-4 h-4 text-black" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 border-t-2 border-black pt-8"
          style={{ transitionDelay: '300ms' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-body text-sm text-gray-600">
              <p>© 2024 Pop Playground. All rights reserved.</p>
              <p className="mt-1">
                Site by{' '}
                <a
                  href="https://www.multimedium.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-memphis-purple transition-colors underline underline-offset-2"
                >
                  Multimedium
                </a>
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="font-body text-sm text-gray-600 hover:text-memphis-purple transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-gray-600 hover:text-memphis-purple transition-colors">
                Terms of Service
              </a>
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
    </footer>
  );
};

export default Footer;
