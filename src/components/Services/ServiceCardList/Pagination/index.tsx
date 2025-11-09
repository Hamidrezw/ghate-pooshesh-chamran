"use client";
import Arrow from "@/components/Svgs/Arrow";
import PaginationButton from "@/ui/Buttons/Pagiation";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const handlePageHref = (page: number) => {
    return `?page=${page}`;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <PaginationButton
        disabled={currentPage <= 1}
        href={currentPage > 1 ? handlePageHref(currentPage - 1) : undefined}
        onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
      >
        <Arrow size="big" color="currentColor" position="right" />
      </PaginationButton>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <PaginationButton
          key={page}
          isActive={page === currentPage}
          href={handlePageHref(page)}
          onClick={() => onPageChange?.(page)}
        >
          {page}
        </PaginationButton>
      ))}

      <PaginationButton
        disabled={currentPage >= totalPages}
        href={currentPage < totalPages ? handlePageHref(currentPage + 1) : undefined}
        onClick={() => currentPage < totalPages && onPageChange?.(currentPage + 1)}
      >
        <Arrow size="big" color="currentColor" position="left" />
      </PaginationButton>
    </div>
  );
};

export default Pagination;