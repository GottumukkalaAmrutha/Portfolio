import { motion } from 'motion/react';
import resumeData from '../data/resume.json';
import { Code2, ExternalLink } from 'lucide-react';

export default function Projects() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3">
                  {project.bullets.map((bullet, i) => {
                    const highlightedBullet = bullet.replace(/(\b(100M\+|RMSE|1\.0703)\b)/g, '<span class="text-white font-semibold">$1</span>');
                    return (
                      <li key={i} className="text-slate-300 leading-relaxed flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400/50 shrink-0" />
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
