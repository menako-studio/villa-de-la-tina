import React from 'react';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * PaginationControls Component
 * 
 * Navigation controls for paginated content
 */
const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center gap-[8px]">
      {/* Previous Button */}
      <button
        disabled={currentPage === 1}
        onClick={handlePrevious}
        className={`w-[32px] h-[32px] border border-[#d1d1d1] bg-white flex items-center justify-center ${
          currentPage === 1 ? 'opacity-24 cursor-not-allowed' : 'hover:border-[#8c3128] cursor-pointer'
        }`}
        aria-label="Previous page"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="#222222"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-[32px] h-[32px] border flex items-center justify-center font-['Manrope'] font-semibold text-[14px] leading-[21px] tracking-[-0.2px] transition-all ${
            page === currentPage
              ? 'bg-[#fdf4f3] border-[#8c3128] text-[#8c3128]'
              : 'bg-white border-[#d1d1d1] text-[#222] hover:border-[#8c3128]'
          }`}
          aria-label={`Go to page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`w-[32px] h-[32px] border border-[#d1d1d1] bg-white flex items-center justify-center ${
          currentPage === totalPages ? 'opacity-24 cursor-not-allowed' : 'hover:border-[#8c3128] cursor-pointer'
        }`}
        aria-label="Next page"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6L15 12L9 18"
            stroke="#222222"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default PaginationControls;
