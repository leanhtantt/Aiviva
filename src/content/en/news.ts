import { NewsContent } from '../../types/news';

export const newsContentEn: NewsContent = {
  hero: {
    badge: 'News & Updates',
    headline: 'Latest news from AIVIVA',
    subheadline: 'Updates on product, partnerships, market trends and Telehealth AI technology.'
  },
  filter: {
    all: 'All',
    categories: ['Product', 'Partnership', 'Market', 'Health'],
    emptyState: 'No articles found in this category.'
  },
  detail: {
    backToNews: 'Back to News',
    articleNotFound: 'Article not found',
    relatedArticles: 'Related Articles',
    shareArticle: 'Share this article',
    linkCopied: 'Link copied'
  },
  newsletter: {
    headline: 'Subscribe to our newsletter',
    subheadline: 'Get the latest updates on Telehealth AI technology and AIVIVA product features.',
    placeholder: 'Enter your email address',
    button: 'Subscribe',
    success: 'Thank you for subscribing! We will keep you updated.'
  },
  articles: [
    {
      id: 'en-0',
      translationKey: 'ebola-risk-vietnam',
      slug: 'risk-of-ebola-entering-vietnam',
      category: 'Health',
      title: 'Risk of Ebola Entering Vietnam, Ministry of Health Urgently Requests Epidemic Prevention',
      excerpt: 'Faced with the risk of Ebola entering Vietnam, the Ministry of Health requires hospitals to strengthen epidemic prevention, ready to isolate, receive, and treat suspected cases.',
      date: 'May 30, 2026',
      readTime: '3 min read',
      featured: true,
      image: '/assets/images/news/ebola-risk-vietnam/thumb.jpg',
      heroImage: '/assets/images/news/ebola-risk-vietnam/hero.jpg',
      content: [
        { type: 'paragraph', text: 'The Ministry of Health has just issued an urgent dispatch to its affiliated units and the Departments of Health of provinces and cities on strengthening the prevention and control of Ebola in the face of complex developments in the world and the risk of entering the country\'s health system.' },
        { type: 'heading', text: 'Strengthening Preventive Measures' },
        { type: 'paragraph', text: 'To proactively prevent the epidemic, the Ministry of Health requires medical examination and treatment facilities to strictly implement the following measures:' },
        { type: 'list', items: [
          'Strengthen surveillance, early detection of suspected cases at border gates and medical facilities',
          'Prepare isolation areas and personal protective equipment to receive and treat suspected cases according to regulations',
          'Ensure adequate supply of medicines, medical equipment, and disinfectant chemicals'
        ]},
        { type: 'paragraph', text: 'Medical facilities also need to develop detailed plans to prevent cross-infection in hospitals, ensuring absolute safety for patients and medical staff.' },
        { type: 'quote', text: 'Strict surveillance and preparedness of response plans are key factors in preventing the disease from entering and spreading in the community.' },
        { type: 'paragraph', text: 'The Ministry of Health emphasizes the importance of continuously updating the latest treatment regimens and epidemic prevention guidelines from the World Health Organization (WHO).' }
      ]
    },
    {
      id: 'en-1',
      translationKey: 'platform-launch',
      slug: 'aiviva-launches-new-telehealth-platform',
      category: 'Product',
      title: 'AIVIVA Launches Next-Generation Telehealth Platform',
      excerpt: 'Our new platform integrates advanced AI scanning for seamless vitals monitoring directly from user smartphones.',
      date: 'May 28, 2026',
      readTime: '5 min read',
      content: [
        { type: 'paragraph', text: 'We are thrilled to announce the launch of our next-generation telehealth platform, designed to enhance remote healthcare through advanced artificial intelligence.' },
        { type: 'heading', text: 'Seamless Vital Monitoring' },
        { type: 'paragraph', text: 'Our new platform incorporates advanced AI scanning technology, allowing users to monitor their vital signs seamlessly using just their smartphone camera.' },
        { type: 'list', items: [
          'Heart rate monitoring without wearables',
          'Oxygen saturation (SpO2) estimation',
          'Stress level analysis and heart rate variability (HRV)'
        ]},
        { type: 'quote', text: 'This platform represents a major leap forward in making healthcare accessible, affordable, and actionable for everyone, anywhere.' },
        { type: 'paragraph', text: 'By removing the barrier of specialized hardware, we empower individuals to take control of their health effortlessly.' }
      ]
    },
    {
      id: 'en-2',
      translationKey: 'partner-pharmacy',
      slug: 'partnership-with-major-pharmacy-chain',
      category: 'Partnership',
      title: 'AIVIVA Partners with Major National Pharmacy Chain',
      excerpt: 'Bringing accessible telehealth kiosks and digital health solutions to over 500 locations nationwide.',
      date: 'May 15, 2026',
      readTime: '4 min read',
      content: [
        { type: 'paragraph', text: 'In a significant move to expand access to digital health tools, AIVIVA has partnered with a leading national pharmacy chain.' },
        { type: 'paragraph', text: 'This partnership will deploy our advanced telehealth kiosks in over 500 select locations nationwide, bringing AI-powered health monitoring to local communities.' },
        { type: 'heading', text: 'Bridging the Gap' },
        { type: 'paragraph', text: 'These community kiosks provide an essential bridge for individuals who may not have access to modern smartphones or stable internet connections at home.' },
        { type: 'list', items: [
          'Free vital sign checks at local pharmacies',
          'Instant connection to telehealth providers',
          'Secure sharing of health metrics with pharmacists'
        ]}
      ]
    },
    {
      id: 'en-3',
      translationKey: 'telehealth-trends',
      slug: 'telehealth-trends-southeast-asia-2026',
      category: 'Market',
      title: 'Telehealth Trends in Southeast Asia for 2026',
      excerpt: 'A comprehensive report on how artificial intelligence is transforming remote healthcare in emerging markets.',
      date: 'May 02, 2026',
      readTime: '7 min read',
      content: [
        { type: 'paragraph', text: 'Southeast Asia is experiencing a rapid digital transformation, and the healthcare sector is at the forefront of this shift.' },
        { type: 'heading', text: 'AI Drives Adoption' },
        { type: 'paragraph', text: 'Our latest market research indicates that AI-driven features are the primary catalyst for the increased adoption of telehealth platforms across the region.' },
        { type: 'quote', text: 'Patients are increasingly demanding proactive and personalized care, which AI technology is uniquely positioned to deliver at scale.' },
        { type: 'paragraph', text: 'We project a 40% year-over-year growth in remote consultations powered by preliminary AI health screenings.' }
      ]
    },
    {
      id: 'en-4',
      translationKey: 'hrv-intro',
      slug: 'understanding-hrv-and-stress',
      category: 'Health',
      title: 'Understanding Heart Rate Variability (HRV) and Stress',
      excerpt: 'How measuring your HRV can provide key insights into your nervous system and overall stress levels.',
      date: 'April 20, 2026',
      readTime: '6 min read',
      content: [
        { type: 'paragraph', text: 'Heart Rate Variability (HRV) is simply a measure of the variation in time between each heartbeat. Unlike your basic heart rate, HRV provides a deeper look into your autonomic nervous system.' },
        { type: 'heading', text: 'Why HRV Matters' },
        { type: 'paragraph', text: 'A higher HRV generally indicates that your body is resilient and can adapt well to stress, while a lower HRV may suggest that your body is under stress or fatigued.' },
        { type: 'list', items: [
          'Indicator of physical recovery',
          'Symptom of psychological stress',
          'Predictor of general well-being'
        ]},
        { type: 'paragraph', text: 'AIVIVA uses advanced rPPG technology to estimate your HRV conveniently using your smartphone camera.' }
      ]
    },
    {
      id: 'en-5',
      translationKey: 'research-update',
      slug: 'ai-vitals-scanning-accuracy-study',
      category: 'Product',
      title: 'Research Update: Smartphone Vitals Scanning',
      excerpt: 'Recent early evaluation explores the alignment of our rPPG technology across diverse skin tones.',
      date: 'April 10, 2026',
      readTime: '8 min read',
      content: [
        { type: 'paragraph', text: 'We are proud to share the results of a comprehensive early evaluation exploring the alignment of our AI-powered visual vital sign scanning technology.' },
        { type: 'heading', text: 'Key Findings' },
        { type: 'paragraph', text: 'The study, which included a diverse participant pool, demonstrated that our rPPG (remote photoplethysmography) algorithms show promising alignment with traditional medical-grade sensors.' },
        { type: 'quote', text: 'Crucially, the study noted that the algorithms were evaluated across diverse skin tones.' },
        { type: 'paragraph', text: 'This supports our commitment to creating inclusive digital health technologies that serve everyone equally.' }
      ]
    },
    {
      id: 'en-6',
      translationKey: 'insurance-integration',
      slug: 'expanding-health-insurance-partnerships',
      category: 'Partnership',
      title: 'Expanding Our Reach: New Health Insurance Integrations',
      excerpt: 'Users can now link their AIVIVA profiles with leading health insurance providers for seamless premium discounts.',
      date: 'March 25, 2026',
      readTime: '4 min read',
      content: [
        { type: 'paragraph', text: 'We are expanding our ecosystem by integrating with several leading health insurance providers.' },
        { type: 'paragraph', text: 'This new integration enables our users to proactively share their health metrics and wellness activities with their insurance companies.' },
        { type: 'heading', text: 'Rewarding Healthy Habits' },
        { type: 'paragraph', text: 'By participating in these programs, users can unlock premium discounts, wellness rewards, and personalized health coaching.' },
        { type: 'list', items: [
          'Opt-in data sharing for privacy',
          'Automated reward tracking',
          'Lower premiums for maintaining active lifestyles'
        ]}
      ]
    }
  ]
};
