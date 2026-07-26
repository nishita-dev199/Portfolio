import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { FaLaptopCode } from "react-icons/fa";


const experiences = [
  {
    role: "Full Stack Software Engineer",
    company: "EVANDER DIGITAL MARKETING",
    date: "April 2026 - Present",
    description: [
      "Led a small engineering team building an employee attendance platform from scratch (MERN), including a face-verification system with 84% match accuracy and role-based portals backed by Redis."
    ]
  },
  {
    role: "SDE-1",
    company: "STUDYIX",
    date: "Mar 2025 - Jan 2026",
    description: [
      "Built and scaled real-time quiz APIs (Node.js, MySQL, AWS) serving 150+ concurrent users, cutting database load ~40% with Redis caching while reviewing 50+ PRs."
    ]
  },
  {
    role: "Web Developer",
    company: "VASI GATEWAYS PVT. LTD.",
    date: "Mar 2024 - Oct 2024",
    description: [
      "Built a role-based college management system end-to-end (React + REST APIs), automating workflows across admin, faculty, and student roles."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "DRDO",
    date: "Dec 2022 - Feb 2023",
    description: [
      "Built CNN-based deep learning models for radar signal classification, hitting 90%+ accuracy distinguishing real vs. false aerial targets."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative font-inter overflow-hidden">
      
      <div className="container mx-auto max-w-[1400px] relative z-10 mb-16">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1.5 bg-purple-light rounded-full"></div>
        </motion.div>
      </div>

      <div className="container mx-auto max-w-5xl relative">

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-purple-light/20 md:-translate-x-1/2 z-0 rounded-full"></div>

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot & Icon */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-white/5 backdrop-blur-md border border-white/10 rounded-full border-4 border-purple-light flex items-center justify-center z-20 shadow-lg shadow-purple-light/30">
                    <FaLaptopCode  className="text-purple-light" size={20} />
                  </div>

                  {/* Empty space for the opposite side on desktop */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 100 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                    className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'} z-10`}
                  >
                    <div className="glass-card p-8 md:p-10 border-purple-light/10 hover:shadow-purple-light/10 relative overflow-hidden group">
                      
                      {/* Subtle hover background decoration */}
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-light/5 rounded-full blur-2xl group-hover:bg-purple-light/10 transition-colors duration-500"></div>

                      <div className="inline-flex items-center gap-2 bg-transparent text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                        <Calendar size={14} className="text-purple-light" />
                        <span>{exp.date}</span>
                      </div>

                      <h3 className="text-2xl font-black tracking-tight text-white mb-2">{exp.role}</h3>
                      <h4 className="text-purple-light font-bold text-lg mb-6">{exp.company}</h4>

                      <ul className="space-y-3">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-3">
                            {/* <span className="w-1.5 h-1.5 rounded-full bg-purple-light mt-2 flex-shrink-0"></span> */}
                            <span className="text-white/70 text-[15px] leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                      
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
