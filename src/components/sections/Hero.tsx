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
      </div>
    </section>
  );
}
