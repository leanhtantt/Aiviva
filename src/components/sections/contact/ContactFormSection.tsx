import React from 'react';
import { motion } from 'motion/react';
import { ContactForm } from './ContactForm';
import { DirectContactInfo } from './DirectContactInfo';

export function ContactFormSection({ formContent, contactContent }: { formContent: any, contactContent: any }) {
  return (
    <section className="w-full bg-canvas pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] rounded-full bg-sky blur-[150px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-deep mb-6 leading-tight"
          >
            {formContent.headline}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate"
          >
            {formContent.subheadline}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
           {/* Direct Contact Info */}
           <div className="w-full lg:w-5/12 flex flex-col justify-center">
             <DirectContactInfo content={contactContent} />
           </div>

           {/* Contact Form */}
           <div className="w-full lg:w-7/12">
             <ContactForm content={formContent.form} />
           </div>
        </div>

      </div>
    </section>
  );
}
