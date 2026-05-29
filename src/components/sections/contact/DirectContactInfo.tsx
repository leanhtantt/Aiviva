import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Globe, MapPin, Clock } from 'lucide-react';

export function DirectContactInfo({ content }: { content: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-10"
    >
      <div>
        <h2 className="text-3xl font-bold text-deep mb-4">{content.headline}</h2>
        {content.subheadline && <p className="text-slate text-lg">{content.subheadline}</p>}
      </div>

      <div className="space-y-6">
        <a href={`mailto:${content.email}`} className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-slate mb-0.5 uppercase tracking-wider font-semibold">Email</p>
            <p className="font-medium text-ink group-hover:text-primary transition-colors">{content.email}</p>
          </div>
        </a>

        <a href={`tel:${content.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-slate mb-0.5 uppercase tracking-wider font-semibold">WhatsApp</p>
            <p className="font-medium text-ink group-hover:text-primary transition-colors">{content.phone}</p>
          </div>
        </a>

        <a href={`https://${content.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-slate mb-0.5 uppercase tracking-wider font-semibold">Website</p>
            <p className="font-medium text-ink group-hover:text-primary transition-colors">{content.website}</p>
          </div>
        </a>

        <div className="flex items-start gap-4 pt-2">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-slate mb-0.5 uppercase tracking-wider font-semibold">Address</p>
            <p className="font-medium text-ink leading-relaxed max-w-[250px]">{content.address}</p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border">
         <div className="flex items-start gap-4">
            <div className="mt-1">
              <Clock className="w-6 h-6 text-slate" />
            </div>
            <div>
              <h3 className="font-bold text-ink mb-2">{content.businessHoursData.title}</h3>
              <p className="text-slate mb-1">{content.businessHoursData.hours}</p>
              <p className="text-slate">{content.businessHoursData.support}</p>
            </div>
         </div>
      </div>

      <div className="pt-4">
         <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-slate hover:text-primary hover:border-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-slate hover:text-primary hover:border-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-slate hover:text-primary hover:border-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
         </div>
      </div>
    </motion.div>
  );
}
