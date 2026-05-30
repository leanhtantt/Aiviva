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
    }
  ]
};
