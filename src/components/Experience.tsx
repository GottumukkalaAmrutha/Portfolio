import { motion } from 'motion/react';
import resumeData from '../data/resume.json';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-0 space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
              
              <div className="group relative bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 hover:bg-white/[0.07] transition-colors">
                {/* Hover gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', padding: '1px' }} />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-cyan-400 font-medium">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.dates}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => {
                    // Highlight numbers or key metrics
                    const highlightedBullet = bullet.replace(/(\d+(\.\d+)?%?|\b(IRR|DSCR|Payback Period|RMSE|SVD|KNN|XGBoost)\b)/g, '<span class="text-white font-semibold">$1</span>');
                    
                    return (
                      <li key={i} className="text-slate-300 leading-relaxed flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400/50 shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: highlightedBullet }} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
