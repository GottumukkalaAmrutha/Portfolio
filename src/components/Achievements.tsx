import { motion } from 'motion/react';
import resumeData from '../data/resume.json';
import { Trophy, Star, BookOpen, Award } from 'lucide-react';

export default function Achievements() {
  const { achievements } = resumeData;

  const getIcon = (category: string) => {
    switch (category) {
      case 'Awards & Recognition': return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 'Competitions': return <Star className="w-6 h-6 text-cyan-400" />;
      case 'Publications': return <BookOpen className="w-6 h-6 text-indigo-400" />;
      case 'Scholarships': return <Award className="w-6 h-6 text-emerald-400" />;
      default: return <Trophy className="w-6 h-6 text-slate-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-6 relative bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">Impact & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mx-auto" />
        </motion.div>

        {/* Top Impact Strip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { label: "SGPA", value: "9.54", sub: "2nd Rank" },
            { label: "Scholarship", value: "75%", sub: "4 Years" },
            { label: "Vocal Solo", value: "1st", sub: "YUVAMRITAM'20" },
            { label: "RMSE", value: "1.07", sub: "Accuracy" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-display">{stat.value}</div>
              <div className="text-sm font-medium text-cyan-400 mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  {getIcon(group.category)}
                </div>
                <h3 className="text-xl font-bold text-white">{group.category}</h3>
              </div>
              
              <ul className="space-y-4">
                {group.items.map((item, i) => {
                  const highlightedItem = item.replace(/(\d+(st|nd|rd|th)?|\b(75%|9\.54)\b)/g, '<span class="text-white font-semibold">$1</span>');
                  return (
                    <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400/50 shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: highlightedItem }} />
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
