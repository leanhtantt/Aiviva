export const contactContent = {
  formSection: {
    headline: 'Get in touch',
    subheadline: 'Have a question, want to partner, or need consultation? Send us a message. We respond within 24 hours.',
    form: {
      nameLabel: 'Full name',
      emailLabel: 'Email',
      phoneLabel: 'Phone number (optional)',
      typeLabel: 'Request type',
      typeOptions: [
        { value: 'personal', label: 'Personal inquiry' },
        { value: 'b2b', label: 'B2B partnership' },
        { value: 'partner', label: 'Pharmacy/clinic partner' },
        { value: 'investor', label: 'Investor' },
        { value: 'press', label: 'Press & Media' },
        { value: 'other', label: 'Other' },
      ],
      messageLabel: 'Message',
      submitBtn: 'Send message',
      submittingBtn: 'Sending...',
      successMsg: "Thank you! We'll respond within 24 hours.",
      sendAnotherBtn: 'Send another message',
      errorMsg: 'There was an error sending your message. Please try again.',
      validation: {
        required: 'This field is required',
        email: 'Please enter a valid email address'
      }
    }
  },
  directContact: {
    headline: 'Connect directly with AIVIVA',
    subheadline: '',
    email: 'hello@aiviva.io',
    phone: '+84 938 127 266',
    website: 'www.aiviva.io',
    address: '412 Nguyen Thi Minh Khai, Ban Co Ward, Ho Chi Minh City, Vietnam',
    businessHoursData: {
      title: 'Business hours',
      hours: 'Monday – Friday: 9:00 AM – 6:00 PM (GMT+7)',
      support: 'Email & WhatsApp support available 24/7'
    }
  },
  partnerInvestor: {
    headline: 'Partner with AIVIVA',
    subheadline: "Are you a pharmacy, clinic, insurer, or investor? Let's build the future of Telehealth AI together.",
    cards: [
      {
        title: 'B2B Partners',
        desc: 'Integrate AIVIVA into your system. API/SDK ready',
        btnText: 'Explore B2B partnership',
        type: 'primary'
      },
      {
        title: 'Investors',
        desc: 'AIVIVA is raising Seed Round 2026. Join us',
        btnText: 'Request investor materials',
        type: 'default'
      },
      {
        title: 'Press & Media',
        desc: 'PR contact: press@aiviva.io',
        btnText: 'Download Press Kit',
        type: 'outline'
      }
    ]
  }
};
