import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { Code, Stethoscope, Sparkles, HeartPulse, ActivitySquare } from 'lucide-react';

const icons = [Code, Stethoscope, Sparkles, HeartPulse, ActivitySquare];

export function ProductRoadmapSection({ content }: { content: any }) {
  return (
    <Section variant="surface" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep mb-6 leading-tight"
          >
            {content.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-slate max-w-3xl mx-auto"
          >
            {content.subheadline}
          </motion.p>
        </div>

        {/* Vertical Timeline on Mobile, Stepped on Desktop */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-border via-sky/30 to-border md:-translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-24">
            {content.levels.map((level: any, idx: number) => {
               const Icon = icons[idx] || ActivitySquare;
               const isEven = idx % 2 === 0;
               return (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ delay: 0.1 }}
                   className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                 >
                    {/* Number / Icon Node */}
                    <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-white border-4 border-surface shadow-md rounded-full flex items-center justify-center font-bold text-xl text-primary z-10 md:-translate-x-1/2 group-hover:scale-110 transition-transform">
                      {level.level}
                    </div>

                    <div className={`flex-1 w-full pl-20 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`rounded-3xl p-6 sm:p-8 border relative group overflow-hidden transition-all duration-300 hover:-translate-y-1 ${level.isMVP ? 'bg-gradient-to-br from-primary to-deep text-white shadow-[0_8px_30px_rgba(79,163,232,0.3)] border-sky/30' : 'bg-white border-border shadow-sm hover:shadow-md'}`}>
                        {level.isMVP && (
                          <div className={`absolute top-0 ${isEven ? 'md:left-0' : 'md:right-0'} left-0 w-full sm:w-auto px-5 md:px-8 py-2 bg-white text-primary text-xs sm:text-sm font-extrabold uppercase tracking-widest md:rounded-br-2xl md:text-left text-center block md:inline-block shadow-sm`}>
                            {level.mvpBadge}
                          </div>
                        )}
                        <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-2 transition-colors ${level.isMVP ? 'mt-8 sm:mt-10 text-white' : 'text-deep group-hover:text-primary'}`}>
                          {level.title}
                        </h3>
                        <p className={`font-medium mb-6 ${level.isMVP ? 'text-sky' : 'text-primary'}`}>{level.subtitle}</p>
                        
                        <div className={`py-4 border-t mt-auto ${level.isMVP ? 'border-white/20' : 'border-border'}`}>
                          <p className={`text-sm sm:text-base leading-relaxed ${level.isMVP ? 'text-white/80' : 'text-slate group-hover:text-ink'}`}>
                            {level.features}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex flex-1 justify-center opacity-10">
                       <Icon className="w-48 h-48" />
                    </div>
                 </motion.div>
               );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
