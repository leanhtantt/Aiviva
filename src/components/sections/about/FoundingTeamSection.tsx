import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';

export function FoundingTeamSection({ content }: { content: any }) {
  return (
    <Section variant="surface" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-deep mb-6 leading-tight whitespace-pre-wrap"
          >
            {content.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate"
          >
            {content.subheadline}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.members.map((member: any, idx: number) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-border flex flex-col group"
             >
               <div className="aspect-[4/3] bg-sky/10 relative overflow-hidden flex items-center justify-center">
                 {/* Try to load real image, fallback to initial if it doesn't exist. In React we can't easily check file exist without error in rendering if using img tag, so we'll just use the image src and provide an alt, or we can use a placeholder if we know images are missing. Let's use an img tag with an error handler. */}
                 {member.image ? (
                   <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role}`} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={300}
                      onError={(e) => {
                        // Fallback to placeholder
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('fallback-visible');
                      }}
                   />
                 ) : null}
                 
                 {/* Initials fallback */}
                 <div className="absolute inset-0 flex items-center justify-center -z-10 group-[.fallback-visible]:z-10">
                   <span className="text-4xl font-bold text-primary/40">
                     {member.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2)}
                   </span>
                 </div>
               </div>
               
               <div className="p-8 flex flex-col flex-1">
                 <h3 className="text-2xl font-bold text-ink mb-1">{member.name}</h3>
                 <p className="text-primary font-medium mb-4">{member.role}</p>
                 <p className="text-slate text-sm leading-relaxed flex-1">{member.description}</p>
               </div>
             </motion.div>
          ))}
        </div>

        {content.cta && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
             <button className="text-primary font-bold uppercase tracking-widest text-sm hover:opacity-80 transition-opacity inline-flex items-center gap-2">
               {content.cta}
             </button>
          </motion.div>
        )}

      </div>
    </Section>
  );
}
