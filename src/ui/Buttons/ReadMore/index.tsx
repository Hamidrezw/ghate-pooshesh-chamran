import Arrow from "@/components/Svgs/Arrow";
import Link from "next/link";

const ReadMoreButton = ({
  link,
  color,
  click,
  label,
}: {
  link?: string;
  color: string;
  click?: () => void;
  label?: string | React.ReactNode;
}) => {
  const content = (
    <div
      className={`flex items-center text-${color} hover:text-primary-dark transition-all duration-300 cursor-pointer select-none`}
    >
      <span className="ml-2 text-button">{label ?? "مطالعه بیشتر"}</span>
      <Arrow size="small" color="currentColor" position="left" />
    </div>
  );

  return link ? (
    <Link href={`/${link}`}>{content}</Link>
  ) : (
    <button onClick={click} type="button">
      {content}
    </button>
  );
};

export default ReadMoreButton;
