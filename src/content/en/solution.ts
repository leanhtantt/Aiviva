export const solutionContent = {
  overview: {
    headline: 'AIVIVA: Scan your face. Know your health.',
    subheadline: 'A 30-second selfie delivers full vital signs — no physical device required',
    coreTechTitle: 'Core technology',
    coreTechDesc: 'Camera captures micro color changes in facial blood flow → AI analyzes → results delivered.',
    processTitle: '4-step process',
    processSteps: [
      {
        title: 'Camera input',
        desc: 'Any smartphone, tablet, or laptop'
      },
      {
        title: 'rPPG + AI processing',
        desc: 'Noise elimination, >98% clinical-grade accuracy'
      },
      {
        title: 'Edge AI privacy',
        desc: 'Video processed on-device, no facial image stored, GDPR & VN Cybersecurity compliant'
      },
      {
        title: 'Vital signs output',
        desc: 'Heart rate, HRV, SpO₂, blood pressure, stress index in 30 seconds'
      }
    ],
    platformInfo: 'Platform: Mobile App + Web, 100% Vietnamese UI (pilot)',
    cta: 'Coming soon'
  },
  roadmap: {
    headline: '5-AI health intelligence platform',
    subheadline: 'Product roadmap from basic monitoring to a comprehensive health ecosystem',
    levels: [
      {
        level: 'L1',
        title: 'Foundation',
        subtitle: '(Basic monitoring)',
        features: 'Heart rate · HRV · SpO₂ · Blood pressure · Steps · Sleep',
        isMVP: false
      },
      {
        level: 'L2',
        title: 'Chronic Care',
        subtitle: '(Chronic disease management)',
        features: 'CGM Glucose · BMI · Cholesterol · Medication tracking',
        isMVP: false
      },
      {
        level: 'L3',
        title: 'Predictive AI',
        subtitle: '(Forecast & early intervention)',
        features: 'HRV · ECG · Stress · Risk prediction · Early alert',
        isMVP: true,
        mvpBadge: 'MVP — Jul 2026'
      },
      {
        level: 'L4',
        title: 'Holistic Health',
        subtitle: '(Comprehensive wellness)',
        features: 'Mental health · Lifestyle · Stroke risk · AI Coach 24/7',
        isMVP: false
      },
      {
        level: 'L5',
        title: 'Ecosystem',
        subtitle: '(Full health ecosystem)',
        features: 'Health Score 0–100 · Insurance link · Hospital link',
        isMVP: false
      }
    ]
  },
  fourPillars: {
    headline: 'Four ways AIVIVA transforms your health',
    subheadline: 'From hospital to home — one platform, four solutions',
    pillars: [
      {
        title: '1. Smart triage — Ease the burden on healthcare systems',
        desc: 'Remote health screening before patients arrive at medical facilities — helping hospitals and clinics focus resources on cases that truly need in-person care.'
      },
      {
        title: '2. Chronic care — Managed at home, peace of mind daily',
        desc: 'Diabetes, hypertension, heart conditions — monitor every morning in 30 seconds. No appointments. No waiting. Data sent straight to your doctor.'
      },
      {
        title: '3. Early detection — Proactive prevention',
        desc: 'AI analyzes health trends over time. Get alerts when metrics go off-track. Act before it\'s too late.'
      },
      {
        title: '4. Live well, feel beautiful every day',
        desc: 'Understand your body to fine-tune your lifestyle, sleep, and stress levels — making wellness a gentle daily habit, not a burden.'
      }
    ]
  },
  whoWeServe: {
    headline: 'Who we serve — What we solve',
    subheadline: 'Serving both individual users (B2C) and enterprise clients (B2B)',
    b2c: {
      title: '👤 B2C — End users:',
      items: [
        'Chronic patients 35–65 & elderly → Daily monitoring at home, zero device needed',
        'Health-conscious 25–45 → Track health via phone, anytime',
        'Elderly needing remote care → Families can monitor from afar'
      ]
    },
    b2b: {
      title: '🏢 B2B — Enterprise:',
      items: [
        'Clinics & telehealth platforms → API/SDK integration',
        'Insurance companies → Accurate risk underwriting data',
        'Corporate wellness programs → Employee health screening'
      ]
    }
  },
  competitiveAdvantage: {
    headline: 'Zero friction · Privacy first · Instant results',
    subheadline: 'AIVIVA fully solves the treatment compliance problem — no device, no hassle'
  }
};
