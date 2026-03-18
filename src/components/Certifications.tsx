import { motion } from 'motion/react';
import resumeData from '../data/resume.json';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { certifications } = resumeData;

  return (
    <section id="certifications" className="py-24 px-6 relative bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const isClickable = Boolean(cert.link);
            const CardWrapper = isClickable ? motion.a : motion.div;
            
            return (
              <CardWrapper
                key={index}
                href={isClickable ? cert.link : undefined}
                target={isClickable ? "_blank" : undefined}
                rel={isClickable ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                className={`group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.08] transition-colors flex flex-col h-full relative overflow-hidden ${isClickable ? 'cursor-pointer' : ''}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                    <h3 className={`text-lg font-bold leading-tight transition-colors ${isClickable ? 'text-white group-hover:text-cyan-300' : 'text-white'}`}>
                      {cert.name}
                    </h3>
                  </div>
                  {isClickable && (
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0 mt-1" />
                  )}
                </div>
                
                <ul className="space-y-2">
                  {cert.bullets.map((bullet, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
