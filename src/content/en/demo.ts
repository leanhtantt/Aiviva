export const demoContent = {
  intro: {
    headline: 'Try it now — All you need is your camera',
    subheadline: 'No app download. No signup. Scan right in your browser in 30 seconds.',
    cameraMock: {
      buttonStart: 'Start Scanning',
      scanning: 'Scanning...',
      detecting: 'Detecting face...',
      analyzing: 'Analyzing vitals...',
      success: 'Scan Complete',
      disclaimer: 'For demonstration purposes only. Not a medical device.'
    }
  },
  howToUse: {
    headline: 'How to use — Just 3 simple steps',
    subheadline: 'No medical knowledge needed. Anyone can do it.',
    steps: [
      {
        title: 'Step 1 — Prepare',
        items: ['Sit still, ensure good lighting, keep face in frame', 'Remove sunglasses or mask if wearing any']
      },
      {
        title: 'Step 2 — Scan',
        items: ['Tap "Start scanning" button', 'Hold still for 30 seconds — progress bar shows countdown', 'Animation: face detection circle + heartbeat pulse']
      },
      {
        title: 'Step 3 — Get results',
        items: ['Results dashboard: Heart rate, SpO₂, Blood pressure, HRV, Stress', 'Each metric has icon + explanation + normal range', 'Share results or save as PDF']
      }
    ]
  },
  sampleResults: {
    headline: 'Sample scan results — Here\'s what you\'ll get',
    subheadline: 'Visual dashboard with 5 key vital signs',
    disclaimer: 'Results are for reference only. Consult a doctor for accurate diagnosis.',
    metrics: [
      { name: 'Heart rate', value: '72', unit: 'bpm', status: 'Normal' },
      { name: 'SpO₂', value: '98', unit: '%', status: 'Normal' },
      { name: 'Blood pressure', value: '120/80', unit: 'mmHg', status: 'Normal' },
      { name: 'HRV', value: '45', unit: 'ms', status: 'Average' },
      { name: 'Stress index', value: 'Low', unit: '', status: 'Good' }
    ],
    cta: {
      free: 'Want continuous tracking? Create a free account',
      premium: 'Upgrade to Premium to unlock all metrics — just $7.99/month'
    }
  }
};
