import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

/**
 * CategoryFilter Component
 * 
 * Displays category filter buttons with active state
 */
const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex gap-[8px] md:gap-[16px] lg:gap-[16px] items-center w-full max-w-[342px] md:max-w-[730px] lg:max-w-[1040px] overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`border rounded-[50px] px-[14px] md:px-[24px] lg:px-[24px] py-[4px] md:py-[8px] lg:py-[8px] whitespace-nowrap font-['Manrope'] font-medium text-[14px] md:text-[18px] lg:text-[18px] leading-[21px] md:leading-[27px] lg:leading-[27px] tracking-[-0.2px] md:tracking-[-0.4px] lg:tracking-[-0.4px] transition-all duration-300 shrink-0 ${
            selectedCategory === category
              ? 'border-[#a8382d] bg-[#a8382d] text-white'
              : 'border-[#d1d1d1] text-[#222] md:text-[#0d0d0d] lg:text-[#0d0d0d] hover:border-[#a8382d]'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
