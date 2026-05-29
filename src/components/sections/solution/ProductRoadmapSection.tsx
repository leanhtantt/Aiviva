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
                      <div className={`bg-white rounded-3xl p-6 sm:p-8 border shadow-sm relative group overflow-hidden ${level.isMVP ? 'border-primary ring-2 ring-primary/20' : 'border-border'}`}>
                        {level.isMVP && (
                          <div className={`absolute top-0 ${isEven ? 'md:left-0' : 'md:right-0'} left-0 w-full sm:w-auto px-4 md:px-6 py-1 bg-gradient-to-r from-primary to-sky text-white text-xs sm:text-sm font-bold uppercase tracking-wider md:rounded-br-2xl md:text-left text-center block md:inline-block`}>
                            {level.mvpBadge}
                          </div>
                        )}
                        <h3 className={`text-2xl sm:text-3xl font-bold text-deep mb-2 ${level.isMVP ? 'mt-6 sm:mt-8' : ''}`}>
                          {level.title}
                        </h3>
                        <p className="text-primary font-medium mb-6">{level.subtitle}</p>
                        
                        <div className="py-4 border-t border-border mt-auto">
                          <p className="text-slate text-sm sm:text-base leading-relaxed">
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
