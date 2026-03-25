import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Phone, MapPin, Clock, ChefHat } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservation' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar (Desktop) */}
      <div className="hidden md:flex justify-between items-center py-2 px-6 bg-secondary text-white/80 text-sm">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><Phone size={14} /> +880 1234 567890</span>
          <span className="flex items-center gap-2"><MapPin size={14} /> 123 Food Street, Dhaka</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={14} /> Open Daily: 11:00 AM - 11:00 PM
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4 md:py-5'
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-display font-bold text-primary">
            <ChefHat size={32} className="text-primary" />
            <span>CookMan</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'font-medium transition-colors hover:text-primary',
                  location.pathname === link.path ? 'text-primary' : 'text-secondary/80'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/menu"
              className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
            >
              <ShoppingBag size={18} />
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-xl font-display font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'pb-2 border-b border-gray-100',
                    location.pathname === link.path ? 'text-primary' : 'text-secondary'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <Link
                to="/menu"
                className="flex justify-center items-center gap-2 bg-primary text-white py-4 rounded-xl font-medium text-lg"
              >
                <ShoppingBag size={20} />
                Order Now
              </Link>
              <Link
                to="/reservation"
                className="flex justify-center items-center gap-2 border-2 border-secondary text-secondary py-4 rounded-xl font-medium text-lg"
              >
                Reserve a Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white/80 pt-16 pb-24 md:pb-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-display font-bold text-white mb-4">
              <ChefHat size={32} className="text-primary" />
              <span>CookMan</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed">
              Delicious, hygienic, restaurant-quality meals delivered fast and affordably. Taste the difference today.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="font-bold">fb</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="font-bold">ig</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/menu" className="hover:text-primary transition-colors">Our Menu</Link></li>
              <li><Link to="/reservation" className="hover:text-primary transition-colors">Book a Table</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-lg mb-4">Contact Info</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>123 Food Street, Gulshan, Dhaka 1212, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary shrink-0" />
                <span>11:00 AM - 11:00 PM (Daily)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe for exclusive offers and updates.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary hover:bg-primary-hover text-white font-medium py-2.5 rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CookMan Restaurant. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-40 flex gap-3">
        <Link
          to="/menu"
          className="flex-1 bg-primary text-white py-3.5 rounded-xl font-medium flex justify-center items-center gap-2 shadow-lg shadow-primary/30"
        >
          <ShoppingBag size={18} />
          Order Now
        </Link>
        <a
          href="https://wa.me/8801234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-xl flex justify-center items-center shadow-lg shadow-[#25D366]/30"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
      </div>
    </div>
  );
}
