import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { Button } from '../../ui/Button';
import { Heart, Activity, Wind, Brain, Droplets } from 'lucide-react';

const MetricIconMap: Record<string, any> = {
  'Heart rate': Heart,
  'Nhịp tim': Heart,
  'SpO₂': Wind,
  'Blood pressure': Droplets,
  'Huyết áp': Droplets,
  'HRV': Activity,
  'Stress index': Brain,
  'Chỉ số căng thẳng': Brain,
};

function MetricCard({ metric, index }: { metric: any, index: number }) {
  const Icon = MetricIconMap[metric.name] || Activity;
  
  const statusColors: Record<string, string> = {
    'Normal': 'text-success bg-success/10',
    'Bình thường': 'text-success bg-success/10',
    'Good': 'text-success bg-success/10',
    'Tốt': 'text-success bg-success/10',
    'Average': 'text-warning bg-warning/10',
    'Trung bình': 'text-warning bg-warning/10',
  };

  const statusColorClass = statusColors[metric.status] || 'text-slate bg-mist';

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-3xl p-6 border border-border shadow-sm flex flex-col"
    >
       <div className="flex justify-between items-start mb-6">
         <div className="w-12 h-12 rounded-xl bg-mist flex items-center justify-center text-slate">
           <Icon className="w-6 h-6" />
         </div>
         <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColorClass}`}>
           {metric.status}
         </span>
       </div>
       
       <h4 className="text-slate font-medium mb-2">{metric.name}</h4>
       <div className="flex items-baseline gap-1">
         <span className="text-3xl font-bold text-ink">{metric.value}</span>
         {metric.unit && <span className="text-slate">{metric.unit}</span>}
       </div>
    </motion.div>
  );
}

export function SampleResultsDashboard({ content }: { content: any }) {
  return (
    <Section id="sample-results" variant="surface" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)]">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-deep mb-6"
          >
            {content.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate"
          >
            {content.subheadline}
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Dashboard Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {content.metrics.map((metric: any, idx: number) => (
              <MetricCard key={idx} metric={metric} index={idx} />
            ))}
          </div>

          <p className="text-center text-sm text-slate mb-16 bg-mist py-3 px-6 rounded-full inline-block mx-auto max-w-max">
            {content.disclaimer}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
            <Button variant="outline" size="lg" className="w-full md:w-auto">
              {content.cta.free}
            </Button>
            <Button variant="primary" size="lg" className="w-full md:w-auto shadow-lg hover:shadow-xl">
              {content.cta.premium}
            </Button>
          </div>
        </div>

      </div>
    </Section>
  );
}
