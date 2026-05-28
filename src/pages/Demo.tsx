import React, { useState } from 'react';
import { demoContentEn } from '@/content/en/demo';
import { demoContentVi } from '@/content/vi/demo';
import { Button } from '@/components/ui/Button';
import { PhoneScanMockup } from '@/components/ui/PhoneScanMockup';
import { Info, User, ScanLine, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { useLang } from '@/lib/i18n';

const contentMap = {
  en: demoContentEn,
  vi: demoContentVi
};

export default function Demo() {
  const lang = useLang();
  const content = contentMap[lang];
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="w-full bg-canvas min-h-screen pb-20">
      {/* Intro Header */}
      <div className="bg-canvas border-b border-border py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)]">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-deep mb-4 tracking-tight">
              {content.title}
            </h1>
            <p className="text-slate text-lg md:text-xl">
              {content.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-[var(--container-padding-desktop)] mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Mockup Area */}
          <div className="bg-surface rounded-2xl p-6 md:p-10 border border-border shadow-[var(--shadow-card)] flex flex-col items-center justify-center relative overflow-hidden">
             
             {isScanning ? (
                <div className="w-full flex-1 min-h-[500px] flex items-center justify-center animate-in fade-in zoom-in duration-500">
                  <PhoneScanMockup />
                </div>
             ) : (
                <div className="text-center py-12 max-w-sm">
                  <div className="w-20 h-20 mx-auto rounded-full bg-mist text-primary flex items-center justify-center mb-6">
                    <ScanLine className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-semibold text-ink mb-4">
                    {content.demo.mockupTitle}
                  </h2>
                  <div className="flex items-start gap-3 bg-mist p-4 rounded-xl text-left mb-8">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate">
                      {content.demo.mockupDescription}
                    </p>
                  </div>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full shadow-lg hover:shadow-xl transition-all"
                    onClick={() => setIsScanning(true)}
                  >
                    {content.demo.startScan}
                  </Button>
                </div>
             )}
          </div>

          {/* Info & Steps */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-deep mb-8">{content.demo.steps.title}</h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-[19px] before:w-[2px] before:bg-border">
              {/* Step 1 */}
              <div className="relative flex items-start gap-6">
                <div className="w-10 h-10 rounded-full bg-surface border-2 border-border flex items-center justify-center shadow-sm z-10 shrink-0 text-slate group-hover:text-primary group-hover:border-primary transition-colors">
                  <User className="w-4 h-4" />
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-ink text-lg mb-2">{content.demo.steps.prepare}</h3>
                  <p className="text-slate leading-relaxed">{content.demo.steps.prepareDesc}</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-6">
                <div className="w-10 h-10 rounded-full bg-surface border-2 border-primary flex items-center justify-center shadow-sm z-10 shrink-0 text-primary">
                  <ScanLine className="w-4 h-4" />
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-ink text-lg mb-2">{content.demo.steps.scan}</h3>
                  <p className="text-slate leading-relaxed">{content.demo.steps.scanDesc}</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-6">
                <div className="w-10 h-10 rounded-full bg-surface border-2 border-border flex items-center justify-center shadow-sm z-10 shrink-0 text-slate">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-ink text-lg mb-2">{content.demo.steps.results}</h3>
                  <p className="text-slate leading-relaxed">{content.demo.steps.resultsDesc}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
