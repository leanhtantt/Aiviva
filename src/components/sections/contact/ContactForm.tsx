import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../../ui/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useLang } from '../../../lib/i18n';
import { submitGoogleForm } from '../../../lib/googleForms';

export function ContactForm({ content }: { content: any }) {
  const lang = useLang();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: content.typeOptions[0].value,
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = content.validation.required;
    if (!formData.email) {
      newErrors.email = content.validation.required;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = content.validation.email;
    }
    if (!formData.message) newErrors.message = content.validation.required;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getUTMParam = (name: string) => {
    return new URLSearchParams(window.location.search).get(name) || '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('submitting');
    
    try {
      const formId = import.meta.env.VITE_GOOGLE_CONTACT_FORM_ID;
      
      const entries: Record<string, string> = {};
      
      const nameKey = import.meta.env.VITE_GOOGLE_CONTACT_ENTRY_NAME;
      if (nameKey) entries[nameKey] = formData.name;
      
      const emailKey = import.meta.env.VITE_GOOGLE_CONTACT_ENTRY_EMAIL;
      if (emailKey) entries[emailKey] = formData.email;
      
      const phoneKey = import.meta.env.VITE_GOOGLE_CONTACT_ENTRY_PHONE;
      if (phoneKey) entries[phoneKey] = formData.phone;
      
      const typeKey = import.meta.env.VITE_GOOGLE_CONTACT_ENTRY_TYPE;
      if (typeKey) entries[typeKey] = formData.type;
      
      const messageKey = import.meta.env.VITE_GOOGLE_CONTACT_ENTRY_MESSAGE;
      if (messageKey) entries[messageKey] = formData.message;
      
      const langKey = import.meta.env.VITE_GOOGLE_CONTACT_ENTRY_LANG;
      if (langKey) entries[langKey] = lang;
      
      const pageKey = import.meta.env.VITE_GOOGLE_CONTACT_ENTRY_PAGE;
      if (pageKey) entries[pageKey] = window.location.href;

      const utmSourceKey = import.meta.env.VITE_GOOGLE_CONTACT_ENTRY_UTM_SOURCE;
      if (utmSourceKey) entries[utmSourceKey] = getUTMParam('utm_source');

      const utmMediumKey = import.meta.env.VITE_GOOGLE_CONTACT_ENTRY_UTM_MEDIUM;
      if (utmMediumKey) entries[utmMediumKey] = getUTMParam('utm_medium');

      const utmCampaignKey = import.meta.env.VITE_GOOGLE_CONTACT_ENTRY_UTM_CAMPAIGN;
      if (utmCampaignKey) entries[utmCampaignKey] = getUTMParam('utm_campaign');

      await submitGoogleForm(formId || '', entries);
      
      setStatus('success');
      setFormData({
        name: '', email: '', phone: '', type: content.typeOptions[0].value, message: ''
      });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2rem] p-8 md:p-12 border border-border shadow-md"
    >
      {status === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-12"
        >
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
          <h3 className="text-2xl font-bold text-ink mb-4">{content.successMsg}</h3>
          <Button onClick={() => setStatus('idle')} variant="outline" className="mt-8">
            Send another message
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === 'error' && (
            <div className="p-4 bg-error/10 text-error rounded-xl flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p className="text-sm font-medium">{content.errorMsg}</p>
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-deep">{content.nameLabel} <span className="text-error">*</span></label>
            <input 
              id="name"
              type="text" 
              className={`w-full px-5 py-4 rounded-xl border ${errors.name ? 'border-error/50 bg-error/5' : 'border-border bg-surface'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-ink`}
              value={formData.name}
              onChange={e => { setFormData({...formData, name: e.target.value}); if (errors.name) setErrors({...errors, name: ''}); }}
              placeholder={content.nameLabel}
            />
            {errors.name && <p className="text-error text-xs font-medium mt-1 pl-1">{errors.name}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-deep">{content.emailLabel} <span className="text-error">*</span></label>
              <input 
                id="email"
                type="email" 
                className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-error/50 bg-error/5' : 'border-border bg-surface'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-ink`}
                value={formData.email}
                onChange={e => { setFormData({...formData, email: e.target.value}); if (errors.email) setErrors({...errors, email: ''}); }}
                placeholder="Ex: hello@example.com"
              />
              {errors.email && <p className="text-error text-xs font-medium mt-1 pl-1">{errors.email}</p>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-deep">{content.phoneLabel}</label>
              <input 
                id="phone"
                type="tel" 
                className="w-full px-5 py-4 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-ink"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                placeholder="+84 ..."
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="type" className="text-sm font-semibold text-deep">{content.typeLabel}</label>
            <div className="relative">
              <select 
                id="type"
                className="w-full px-5 py-4 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-ink appearance-none"
                value={formData.type}
                onChange={e => setFormData({...formData, type: e.target.value})}
              >
                {content.typeOptions.map((opt: any) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-deep">{content.messageLabel} <span className="text-error">*</span></label>
            <textarea 
              id="message"
              rows={4}
              className={`w-full px-5 py-4 rounded-xl border ${errors.message ? 'border-error/50 bg-error/5' : 'border-border bg-surface'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-ink resize-none`}
              value={formData.message}
              onChange={e => { setFormData({...formData, message: e.target.value}); if (errors.message) setErrors({...errors, message: ''}); }}
              placeholder="..."
            ></textarea>
            {errors.message && <p className="text-error text-xs font-medium mt-1 pl-1">{errors.message}</p>}
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full relative overflow-hidden group shadow-lg text-lg !py-4"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? content.submittingBtn : content.submitBtn}
          </Button>

        </form>
      )}
    </motion.div>
  );
}
