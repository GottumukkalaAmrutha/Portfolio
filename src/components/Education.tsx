import { motion } from 'motion/react';
import resumeData from '../data/resume.json';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const { education } = resumeData;

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.07] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 shrink-0 hidden sm:block">
                  <GraduationCap className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-slate-400">{edu.institute}</p>
                </div>
              </div>
              
              <div className="flex flex-row md:flex-col gap-4 md:gap-1 items-baseline md:items-end text-sm font-mono">
                <div className="text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full">
                  {edu.score}
                </div>
                <div className="text-slate-500">
                  {edu.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
