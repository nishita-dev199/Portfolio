import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Real-time Chat & Notification System ",
    description: "Real-time chat and notification system built for horizontal scaling — messages route across multiple backend instances via Redis Pub/Sub, load-balanced through Nginx and Docker. Presence tracking uses Redis TTL heartbeats instead of simple connect/disconnect flags.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["React", "Node.js", "Redis", "Socket.io", "Nginx", "Docker"],
    github: "#",
    demo: "#"
  },
  {
    title: "MarketFolio: A Marketing Website",
    description: "A marketing website built with Next.js and MongoDB, with performance and SEO baked in from the start: parallax scroll effects and interactive UI without sacrificing load speed or search visibility. It also includes an admin dashboard with a rich-text blog editor — bold, italic, image uploads, and links; so blog posts can be written and published directly from the site, no code changes or redeploys needed, letting non-technical stakeholders publish directly.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    tags: ["Next.js", "JavaScript", "MongoDB", "Seo-Optimised"],
    github: "https://github.com/nishita-dev199/MarketFolio",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative font-inter">
      <div className="container mx-auto max-w-[1400px]">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-start"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
           Projects
          </h2>
          <div className="w-24 h-1.5 bg-purple-light rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.1 } }}
              whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.3 } }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-6 md:p-8 border border-purple-light/10 hover:border-purple-light/30 transition-all duration-300 group flex flex-col h-full relative overflow-hidden gap-6"
            >
              {/* Subtle hover background decoration */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-light/5 rounded-full blur-3xl group-hover:bg-purple-light/10 transition-colors duration-500"></div>

              {/* Image Container */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-[2rem] bg-white/10 z-10 flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-surface-darker/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-[2px]">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-purple-light hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl">
                    <FaGithub size={24} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-purple-light hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-xl">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col z-10">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">{project.title}</h3>
                
                <div className="text-white/70 mb-8 flex-1 leading-relaxed text-sm md:text-base space-y-4">
                  {project.description.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold bg-purple-light/10 text-purple-light border border-purple-light/20 shadow-[0_0_10px_rgba(159,122,234,0.1)] rounded-full hover:bg-purple-light/20 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
