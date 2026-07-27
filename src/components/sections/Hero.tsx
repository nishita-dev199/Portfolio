import { motion } from 'framer-motion';
import { FaLaptopCode } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { personalInfo } from '../../config';

export default function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] md:min-h-screen relative flex items-center justify-center pt-6 pb-2 md:pt-24 md:pb-8 px-6 md:px-12 w-full overflow-hidden font-inter">
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-dark rounded-full opacity-20 blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-dark rounded-full opacity-20 blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10 w-full h-full">
        
        {/* Left Side Content - Typography & CTA */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center text-left space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-xl md:text-2xl font-medium text-silver mb-2 tracking-wide">
              Hi, I am
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-black text-white uppercase tracking-tighter leading-none mb-4">
              NISHITA<br />NAMDEO
            </h1>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-light tracking-wide mb-6">
              Full-Stack Engineer — React, Node.js, Socket.io, AWS
            </h3>
            
            <p className="text-silver text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              2 years building production systems end-to-end — from a real-time chat platform handling live notifications with Socket.io and Redis Pub/Sub, to a face-recognition attendance system used by real teams. I lead a small engineering team at Evander Digital Marketing and ship across the full MERN stack, from database design to AWS deployment.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >

            <a href="#projects" className="glass-button flex items-center px-6 py-3 w-max gap-3 shadow-xl group hover:-translate-y-1">
              <span className="font-semibold">My Projects</span>
              <span className="border border-white/30 rounded-full p-1.5 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <FaLaptopCode size={16} />
              </span>
            </a>
            <a href={personalInfo.resume} download className="glass-button flex items-center px-6 py-3 w-max gap-3 shadow-xl group hover:-translate-y-1">
              <span className="font-semibold">Download Resume</span>
              <span className="border border-white/30 rounded-full p-1.5 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <FaDownload size={16} />
              </span>
            </a>
           
            <a href="#contact" className="glass-button flex items-center px-6 py-3 w-max gap-3 shadow-xl group hover:-translate-y-1">
              <span className="font-semibold">Contact Me</span>
              <span className="border border-white/30 rounded-full p-1.5 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <FiPhone size={16} />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Side Content - Info Containers */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center items-center mt-12 lg:mt-0 relative z-10">
          <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
            
            {/* Education Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full border border-purple-light/30 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center text-center p-3 md:p-4 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:-translate-y-2 transition-all duration-300"
            >
              <span className="text-purple-light text-xs md:text-sm font-semibold mb-1 uppercase tracking-wider">Education</span>
              <span className="text-white font-bold text-xs md:text-sm leading-tight">B.Tech in Computer Science</span>
            </motion.div>

            {/* Experience Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full border border-purple-light/30 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center text-center p-3 md:p-4 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:-translate-y-2 transition-all duration-300 mt-0 lg:mt-12"
            >
              <span className="text-purple-light text-xs md:text-sm font-semibold mb-1 uppercase tracking-wider">Experience</span>
              <span className="text-white font-bold text-base md:text-xl">2 Years</span>
            </motion.div>

            {/* Notice Period Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full border border-purple-light/30 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center text-center p-3 md:p-4 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:-translate-y-2 transition-all duration-300 -mt-0 lg:-mt-12"
            >
              <span className="text-purple-light text-xs md:text-sm font-semibold mb-1 uppercase tracking-wider">Notice Period</span>
              <span className="text-white font-bold text-base md:text-xl">15 Days</span>
            </motion.div>

            {/* Open To Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full border border-purple-light/30 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center text-center p-3 md:p-4 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:-translate-y-2 transition-all duration-300"
            >
              <span className="text-purple-light text-xs md:text-sm font-semibold mb-1 uppercase tracking-wider">Open To</span>
              <span className="text-white font-bold text-xs md:text-sm leading-tight">Full-time:<br/>SDE-1 /<br/>Full Stack</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
