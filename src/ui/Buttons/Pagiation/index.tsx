import Link from "next/link";

interface PaginationButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}

const PaginationButton = ({ children, isActive, disabled, href, onClick }: PaginationButtonProps) => {
  if (!href || disabled) {
    return (
      <button
        disabled={disabled}
        className={`w-[33px] h-[33px] rounded-[8px] border-[1.5px] border-primary flex items-center justify-center text-button
          ${
            isActive
              ? "bg-a01 text-white"
              : disabled
              ? "text-text-secondary cursor-not-allowed"
              : "text-a01 hover:bg-a01 hover:text-white"
          }`}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`w-[33px] h-[33px] rounded-[8px] border-[1.5px] border-primary flex items-center justify-center text-button
        ${isActive ? "bg-a01 text-white" : "text-a01 hover:bg-a01 hover:text-white"}`}
    >
      {children}
    </Link>
  );
};

export default PaginationButton