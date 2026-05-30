import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../../ui/Section';
import { Button } from '../../ui/Button';
import { Heart, Activity, Wind, Brain, Droplets, Info } from 'lucide-react';

export interface DemoMetric {
  name: string;
  value: string;
  unit: string;
  status: string;
}

export interface SampleResultsContent {
  headline: string;
  subheadline: string;
  disclaimer: string;
  metrics: DemoMetric[];
  cta: {
    free: string;
    premium: string;
  };
}

export function SampleResultsDashboard({ content }: { content: SampleResultsContent }) {
  const hrMetric = content.metrics[0];
  const spo2Metric = content.metrics[1];
  const bpMetric = content.metrics[2];
  const hrvMetric = content.metrics[3];
  const stressMetric = content.metrics[4];

  const getStatusColor = (status: string) => {
    const isGood = status === 'Normal' || status === 'Bình thường' || status === 'Good' || status === 'Tốt';
    const isWarning = status === 'Average' || status === 'Trung bình';
    if (isGood) return 'text-success bg-success/10 border-success/20';
    if (isWarning) return 'text-warning bg-warning/10 border-warning/20';
    return 'text-slate bg-mist border-border';
  };

  return (
    <Section id="sample-results" variant="surface" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradients for premium feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-sky/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-deep mb-6 tracking-tight"
          >
            {content.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate leading-relaxed"
          >
            {content.subheadline}
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Main Hero Card - Heart Rate */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 bg-white rounded-[2.5rem] p-8 border border-border shadow-xl shadow-primary/5 flex flex-col relative overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-300"
            >
               <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                  <Heart className="w-48 h-48 text-primary" />
               </div>
               
               <div className="flex justify-between items-start mb-8 relative z-10">
                 <div className="flex items-center gap-3">
                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-sky flex items-center justify-center text-white shadow-lg shadow-primary/20">
                     <Heart className="w-6 h-6 fill-current" />
                   </div>
                   <h3 className="text-xl font-bold text-ink">{hrMetric.name}</h3>
                 </div>
                 <span className={`px-4 py-1.5 text-sm font-bold rounded-full border ${getStatusColor(hrMetric.status)}`}>
                   {hrMetric.status}
                 </span>
               </div>

               <div className="flex-1 flex flex-col items-center justify-center py-8 relative z-10">
                  <div className="relative flex items-center justify-center w-full">
                    {/* Semi-circular gauge mock */}
                    <svg className="w-full h-auto max-w-[200px]" viewBox="0 0 100 50">
                      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-canvas" />
                      <path d="M 10 50 A 40 40 0 0 1 70 15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-primary drop-shadow-[0_0_8px_rgba(20,85,181,0.5)]" />
                    </svg>
                    <div className="absolute bottom-0 text-center">
                      <div className="flex items-end justify-center gap-1">
                        <span className="text-6xl font-extrabold tracking-tighter text-deep">{hrMetric.value}</span>
                        <span className="text-lg font-medium text-slate mb-2">{hrMetric.unit}</span>
                      </div>
                    </div>
                  </div>
               </div>

               <div className="mt-auto pt-6 border-t border-mist flex items-center justify-center gap-2 text-sm text-slate">
                 <Activity className="w-4 h-4 text-primary" />
                 <span>Regular rhythm detected</span>
               </div>
            </motion.div>

            {/* Grid for other 4 metrics */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* SpO2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[2rem] p-6 sm:p-8 border border-border flex flex-col hover:border-sky/40 transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky/10 flex items-center justify-center text-sky">
                      <Wind className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-ink">{spo2Metric.name}</h4>
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${getStatusColor(spo2Metric.status)}`}>{spo2Metric.status}</span>
                </div>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold tracking-tight text-deep">{spo2Metric.value}</span>
                  <span className="text-slate font-medium mb-1">{spo2Metric.unit}</span>
                </div>
                {/* Linear progress gauge */}
                <div className="mt-auto">
                   <div className="w-full bg-mist rounded-full h-2 mb-2">
                     <div className="bg-sky h-2 rounded-full" style={{ width: '98%' }}></div>
                   </div>
                   <div className="flex justify-between text-xs text-slate font-medium">
                     <span>90%</span>
                     <span>100%</span>
                   </div>
                </div>
              </motion.div>

              {/* BP */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[2rem] p-6 sm:p-8 border border-border flex flex-col hover:border-primary/40 transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-ink">{bpMetric.name}</h4>
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${getStatusColor(bpMetric.status)}`}>{bpMetric.status}</span>
                </div>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold tracking-tight text-deep">{bpMetric.value}</span>
                  <span className="text-slate font-medium mb-1">{bpMetric.unit}</span>
                </div>
                {/* Segmented bar */}
                <div className="mt-auto flex gap-1 h-2">
                  <div className="w-1/3 bg-success/30 rounded-l-full"></div>
                  <div className="w-1/3 bg-success rounded-sm"></div>
                  <div className="w-1/3 bg-warning/30 rounded-r-full"></div>
                </div>
              </motion.div>

              {/* HRV */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-[2rem] p-6 sm:p-8 border border-border flex flex-col hover:border-sky/40 transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky/10 flex items-center justify-center text-sky">
                      <Activity className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-ink">{hrvMetric.name}</h4>
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${getStatusColor(hrvMetric.status)}`}>{hrvMetric.status}</span>
                </div>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold tracking-tight text-deep">{hrvMetric.value}</span>
                  <span className="text-slate font-medium mb-1">{hrvMetric.unit}</span>
                </div>
                <div className="mt-auto relative w-full h-8 flex items-center">
                   <div className="w-full h-2 bg-gradient-to-r from-warning via-success to-primary rounded-full opacity-50"></div>
                   <div className="absolute left-[45%] w-3 h-4 bg-ink rounded-full border-2 border-white shadow-sm -translate-x-1/2"></div>
                </div>
              </motion.div>

              {/* Stress */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-[2rem] p-6 sm:p-8 border border-border flex flex-col hover:border-primary/40 transition-colors"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-mist flex items-center justify-center text-slate">
                      <Brain className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-ink">{stressMetric.name}</h4>
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${getStatusColor(stressMetric.status)}`}>{stressMetric.status}</span>
                </div>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold tracking-tight text-deep">{stressMetric.value}</span>
                  <span className="text-slate font-medium mb-1">{stressMetric.unit}</span>
                </div>
                <div className="mt-auto flex items-center gap-2">
                   <div className="flex-1 h-3 rounded-full bg-mist overflow-hidden flex">
                     <div className="w-1/4 bg-success"></div>
                   </div>
                </div>
              </motion.div>

            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-16"
          >
            <p className="text-sm text-slate bg-white shadow-sm border border-border py-4 px-6 rounded-2xl inline-flex items-center gap-3">
              <Info className="w-5 h-5 text-primary shrink-0" />
              <span>{content.disclaimer}</span>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 bg-gradient-to-r from-primary/5 to-sky/5 p-8 rounded-[2.5rem] border border-primary/10"
          >
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 font-semibold bg-white">
              {content.cta.free}
            </Button>
            <Button variant="primary" size="lg" className="w-full sm:w-auto px-8 font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              {content.cta.premium}
            </Button>
          </motion.div>

        </div>

      </div>
    </Section>
  );
}
