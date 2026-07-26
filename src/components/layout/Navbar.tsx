import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEye } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../config';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Resume', href: '#resume' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 px-4 md:px-16 flex items-center justify-between font-inter ${
      isScrolled 
        ? 'backdrop-blur-[20px] rounded-b-[1.2rem] border-b-[1.5px] border-white/30 shadow-[0_16px_40px_0_rgba(0,0,0,0.5)] py-2 md:py-4' 
        : 'pt-4 pb-2 md:pt-8 md:pb-4'
    }`}>

      {/* Left Links */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a 
              key={link.name} 
              href={link.href} 
              className={`relative text-sm font-bold transition-colors py-2 ${isActive ? 'text-purple-light' : 'text-white hover:text-purple-light'}`}
            >
              {link.name}
              {isActive && (
                <motion.div 
                  layoutId="nav-indicator" 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-light rounded-full" 
                />
              )}
            </a>
          );
        })}
      </div>

      {/* Right Icons & Button (On mobile, this becomes the left element!) */}
      <div className="flex items-center gap-6">
        {[
          { icon: <FaGithub size={20} />, label: "GitHub", href: personalInfo.github },
          { icon: <FaLinkedin size={20} />, label: "LinkedIn", href: personalInfo.linkedin },
        ].map((link, idx) => (
          <div key={idx} className="relative group hidden sm:flex justify-center items-center">
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-light transition-colors p-1">
              {link.icon}
            </a>
            {/* Tooltip */}
            <div className="absolute top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 pointer-events-none z-20">
              <div className="bg-surface-dark text-white text-xs font-bold py-2 px-4 rounded-xl whitespace-nowrap shadow-xl">
                {link.label}
              </div>
              {/* Tooltip Arrow pointing up */}
              <div className="w-3 h-3 bg-surface-dark transform rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        ))}
        
        {/* Outline Pill Button for Resume */}
        <a 
          href={personalInfo.onlineView} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 border-2 border-purple-light rounded-full px-5 py-2 text-purple-light hover:bg-purple-light hover:text-white transition-all font-bold text-sm bg-white/10 backdrop-blur-sm"
        >
          <FaEye size={16} />
          Resume
        </a>
      </div>

      {/* Mobile Toggle (On mobile, this becomes the right element!) */}
      <button className="lg:hidden text-white hover:text-purple-light p-2 -mr-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Nav - Dropdown Layout */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#11111a]/95 backdrop-blur-xl lg:hidden flex flex-col items-center py-10 gap-8 overflow-hidden z-40 border-t border-white/5 shadow-2xl rounded-b-3xl"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-bold transition-all relative ${isActive ? 'text-purple-light' : 'text-white hover:text-purple-light'}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="mobile-nav-indicator" 
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-purple-light rounded-full" 
                    />
                  )}
                </a>
              );
            })}

            {/* Social Icons (Mobile Only) */}
            <div className="flex items-center gap-8 mt-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-light transition-colors p-2">
                <FaGithub size={28} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-light transition-colors p-2">
                <FaLinkedin size={28} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
