import React from 'react';

interface NewsCategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  allLabel: string;
}

export function NewsCategoryTabs({ categories, activeCategory, onSelectCategory, allLabel }: NewsCategoryTabsProps) {
  const allCategories = [allLabel, ...categories];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {allCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              isActive 
                ? 'bg-ink text-white shadow-md' 
                : 'bg-white text-slate hover:bg-slate-50 border border-mist hover:border-slate-300'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
