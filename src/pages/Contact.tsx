import React from 'react';
import { useLang } from '@/lib/i18n';

// Import content
import { contactContent as enContent } from '../content/en/contact';
import { contactContent as viContent } from '../content/vi/contact';

// Import sections
import { ContactFormSection } from '../components/sections/contact/ContactFormSection';
import { PartnerInvestorSection } from '../components/sections/contact/PartnerInvestorSection';

export default function Contact() {
  const lang = useLang();
  const content = lang === 'en' ? enContent : viContent;

  return (
    <div className="w-full flex-1 flex flex-col">
       <ContactFormSection formContent={content.formSection} contactContent={content.directContact} />
       <PartnerInvestorSection content={content.partnerInvestor} />
    </div>
  );
}
