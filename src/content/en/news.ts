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
  newsletter: {
    headline: 'Subscribe to our newsletter',
    subheadline: 'Get the latest updates on Telehealth AI technology and AIVIVA product features.',
    placeholder: 'Enter your email address',
    button: 'Subscribe',
    success: 'Thank you for subscribing! We will keep you updated.'
  },
  articles: [
    {
      id: 'en-1',
      slug: 'aiviva-launches-new-telehealth-platform',
      category: 'Product',
      title: 'AIVIVA Launches Next-Generation Telehealth Platform',
      excerpt: 'Our new platform integrates advanced AI scanning for seamless vitals monitoring directly from user smartphones.',
      date: 'May 28, 2026',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 'en-2',
      slug: 'partnership-with-major-pharmacy-chain',
      category: 'Partnership',
      title: 'AIVIVA Partners with Major National Pharmacy Chain',
      excerpt: 'Bringing accessible telehealth kiosks and digital health solutions to over 500 locations nationwide.',
      date: 'May 15, 2026',
      readTime: '4 min read'
    },
    {
      id: 'en-3',
      slug: 'telehealth-trends-southeast-asia-2026',
      category: 'Market',
      title: 'Telehealth Trends in Southeast Asia for 2026',
      excerpt: 'A comprehensive report on how artificial intelligence is transforming remote healthcare in emerging markets.',
      date: 'May 02, 2026',
      readTime: '7 min read'
    },
    {
      id: 'en-4',
      slug: 'understanding-hrv-and-stress',
      category: 'Health',
      title: 'Understanding Heart Rate Variability (HRV) and Stress',
      excerpt: 'How measuring your HRV can provide key insights into your nervous system and overall stress levels.',
      date: 'April 20, 2026',
      readTime: '6 min read'
    },
    {
      id: 'en-5',
      slug: 'ai-vitals-scanning-accuracy-study',
      category: 'Product',
      title: 'Clinical Accuracy Study: Smartphone Vitals Scanning',
      excerpt: 'Recent peer-reviewed study validates the accuracy of our rPPG technology across diverse skin tones.',
      date: 'April 10, 2026',
      readTime: '8 min read'
    },
    {
      id: 'en-6',
      slug: 'expanding-health-insurance-partnerships',
      category: 'Partnership',
      title: 'Expanding Our Reach: New Health Insurance Integrations',
      excerpt: 'Users can now link their AIVIVA profiles with leading health insurance providers for seamless premium discounts.',
      date: 'March 25, 2026',
      readTime: '4 min read'
    }
  ]
};
