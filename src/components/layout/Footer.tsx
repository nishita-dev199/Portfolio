import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../config';

export default function Footer() {
  const links = [
    { icon: <FaGithub size={18} />, label: "GitHub", href: personalInfo.github },
    { icon: <FaLinkedin size={18} />, label: "LinkedIn", href: personalInfo.linkedin },
    { icon: <Mail size={18} />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
  ];

  return (
    <footer className="glass-card !border-x-0 !border-b-0 !rounded-b-none py-8 font-inter relative z-10 rounded-t-[2.5rem] mt-8 shadow-none">
      <div className="container mx-auto px-6 max-w-[1400px] flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter">
          NN
        </div>

        {/* Social Icons with Tooltips */}
        <div className="flex items-center gap-6">
          {links.map((link, idx) => (
            <div key={idx} className="relative group flex justify-center">
              <a 
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : "_blank"}
                rel={link.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center text-white hover:bg-purple-light hover:text-white transition-colors duration-300 shadow-sm"
              >
                {link.icon}
              </a>
              
              {/* Tooltip */}
              <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none z-20">
                <div className="bg-surface-dark text-white text-xs font-bold py-2 px-4 rounded-xl whitespace-nowrap shadow-xl">
                  {link.label}
                </div>
                {/* Tooltip Arrow */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-surface-dark rotate-45"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-white/70 text-sm font-bold">
          ©2026 Nishita Namdeo. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}
