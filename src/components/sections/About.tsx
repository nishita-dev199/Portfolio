import { motion } from 'framer-motion';
import { Download, ExternalLink, GraduationCap, Briefcase, Layout, Server, FolderDown } from 'lucide-react';
import { FaRegStar } from "react-icons/fa";
import { personalInfo} from '../../config';

export default function About() {
  return (
    <section 
      id="resume" 
      className="py-12 md:py-16 px-6 md:px-12 relative font-inter overflow-hidden flex items-center min-h-[calc(100vh-80px)]"
    >
      <div className="container mx-auto max-w-[1400px]">
        
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full glass-card p-8 md:p-12 relative overflow-hidden shadow-purple-light/10"
        >
          {/* Background decorative blob inside the card */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-purple-light/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Text */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-start"
              >
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                RESUME
                </h2>
                <div className="w-24 h-1.5 bg-purple-light rounded-full mb-4"></div>
              </motion.div>
              
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                I build real-time systems and scalable backends — from chat infra to auth pipelines. 2 years shipping full-stack products end to end — React/Next.js on the front, Node.js and Redis on the back, deployed on AWS.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-5 group w-max">
                  <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center text-white group-hover:bg-purple-light group-hover:text-white transition-colors duration-300">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/70 uppercase tracking-wide">Education</p>
                    <p className="text-base font-black text-white">B.Tech in Computer Science</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 group w-max">
                  <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center text-white group-hover:bg-purple-light group-hover:text-white transition-colors duration-300">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/70 uppercase tracking-wide">Experience</p>
                    <p className="text-base font-black text-white">2 Years</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 group w-max">
                  <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center text-white group-hover:bg-purple-light group-hover:text-white transition-colors duration-300">
                    <Layout size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/70 uppercase tracking-wide">Notice Period</p>
                    <p className="text-base font-black text-white">15 Days</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 group w-max">
                  <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center text-white group-hover:bg-purple-light group-hover:text-white transition-colors duration-300">
                    <Server size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/70 uppercase tracking-wide">Open To</p>
                    <p className="text-base font-black text-white">Full-time: SDE-1 / Full Stack Roles </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Feature Cards / Resume Download */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
              <div className="bg-transparent rounded-[2.5rem] p-6 md:p-8 flex flex-col items-center text-center max-w-sm w-full border border-white/5 shadow-inner">
                
                <div className="w-20 h-20 mb-8 relative group">
                  <div className="absolute inset-0 bg-white/5 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 border border-white/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-dark to-purple flex items-center justify-center rounded-2xl shadow-xl -rotate-3 group-hover:rotate-0 transition-transform duration-300 border border-purple-light/20">
                    <FolderDown size={32} className="text-white drop-shadow-md" />
                  </div>
                </div>
                
                <div className="flex flex-col w-full gap-4">
                  <a 
                    href={personalInfo.resume} 
                    download 
                    className="glass-button flex items-center justify-between w-full px-6 py-4 gap-4 shadow-xl group"
                  >
                    <span className="font-bold text-base md:text-lg">Download PDF</span>
                    <span className="bg-white/10 border border-white/20 rounded-full p-2 group-hover:bg-white group-hover:text-purple-light transition-colors">
                      <Download size={18} />
                    </span>
                  </a>
                  
                  <a 
                    href={personalInfo.onlineView} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-6 py-4 gap-4 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors group"
                  >
                    <span className="font-bold text-base md:text-lg">View Online</span>
                    <span className="bg-white/5 border border-white/10 rounded-full p-2 group-hover:bg-white/10 transition-colors">
                      <ExternalLink size={18} className="text-white/70 group-hover:text-white" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
