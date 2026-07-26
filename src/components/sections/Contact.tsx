import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, ArrowRight, X } from 'lucide-react';
import { personalInfo } from '../../config';

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: '', email: '', subject: '', message: '' });
  const [toast, setToast] = useState<{ visible: boolean; message: string; type: 'success' | 'error' }>({ visible: false, message: '', type: 'success' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, visible: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setToast({ visible: true, message: "Please fill in all mandatory fields.", type: 'error' });
      return;
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.fullName)) {
      setToast({ visible: true, message: "Full Name can only contain letters and spaces.", type: 'error' });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a8a667d8-61b1-447c-a6a4-e9b0a7aeeed6",
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject || "New Message from Portfolio Contact Form",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setToast({ visible: true, message: "Message sent successfully!", type: 'success' });
        setFormData({ fullName: '', email: '', subject: '', message: '' });
      } else {
        setToast({ visible: true, message: "Failed to send message. Please try again.", type: 'error' });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setToast({ visible: true, message: "Failed to send message. Please try again.", type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 px-6 md:px-12 relative font-inter overflow-hidden flex items-center min-h-[calc(100vh-80px)]">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-24 left-1/2 z-[100] flex items-center gap-4 bg-[#1a0b2e]/90 backdrop-blur-xl border border-white/10 px-5 py-3.5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] min-w-[300px]"
          >
            {/* Glowing Ball */}
            <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
              toast.type === 'success' 
                ? 'bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]' 
                : 'bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]'
            }`}></div>
            
            <p className="text-white text-sm font-semibold flex-1 pr-4">{toast.message}</p>
            
            <button 
              onClick={() => setToast({ ...toast, visible: false })}
              className="text-white/50 hover:text-white transition-colors p-1"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto max-w-[1400px]">
        
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full glass-card p-6 md:p-10 lg:p-12 relative overflow-hidden shadow-purple-light/10"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-light/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between">
            
            {/* Left Side: Text */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none mb-4">
                Let's Build<br/><span className="text-purple-light">Together</span>
              </h2>
              
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Whether you have a specific project in mind, want to hire me for your team, want to discuss tech or just want to connect, my inbox is always open. Let's make something amazing :)
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Mail size={18} />, title: "Email", info: personalInfo.email, link: `mailto:${personalInfo.email}` },
                  { icon: <MapPin size={18} />, title: "Location", info: personalInfo.address, link: "#" },
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.link}
                    className="flex items-center gap-4 group w-max"
                  >
                    <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center text-white group-hover:bg-purple-light group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white/70 uppercase tracking-wide">{item.title}</p>
                      <p className="text-base md:text-lg font-black text-white">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-7/12">
              <div className="bg-transparent rounded-[2.5rem]">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-white ml-2">Full Name <span className="text-red-700">*</span></label>
                      <input 
                        type="text" 
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your Full Name" 
                        className="w-full bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-light text-white shadow-sm text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-bold text-white ml-2">Email <span className="text-red-700">*</span></label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email" 
                        className="w-full bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-light text-white shadow-sm text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-white ml-2">Subject</label>
                    <input 
                      type="text" 
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Subject" 
                      className="w-full bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-light text-white shadow-sm text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-white ml-2">Message <span className="text-red-700">*</span></label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your Message.." 
                      className="w-full bg-white/5 backdrop-blur-md border border-white/10 px-5 py-3.5 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-purple-light text-white shadow-sm resize-none text-sm"
                    ></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="glass-button flex items-center justify-between w-full md:w-auto px-6 py-3.5 gap-6 shadow-xl group mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                    <span className="font-bold text-base">{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <span className="bg-white/10 border border-white/20 rounded-full p-2 group-hover:bg-white group-hover:text-purple-light transition-colors">
                      <ArrowRight size={18} />
                    </span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
