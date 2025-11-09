import Link from "next/link";

const TitleLine = ({
  data
}: {
  data: { title: string; moreText?: string; slug?: string; size: "big" | "small"};
}) => {

  const big = data.size === "big"
  const font = big ? "text-primary text-h2" : "text-h3" 

  return (
    <div className="w-full relative select-none ">
      <div className="w-full h-[2px] bg-border" />
      <div className={`relative top-[-13px] ${big ? "lg:top-[-22px]" : "lg:top-[-18px]"} flex items-center justify-between`}>
        <div className="flex items-center bg-background w-fit ">
          <div className="bg-primary-light w-4.5 h-4.5 lg:w-[28px] lg:h-[28px] rounded-full" />
          <h3 className={`mr-[-10px] lg:mr-[-17px] mb-[-3px] pl-2 lg:pl-4 ${font}`}>{data.title}</h3>
        </div>
        {data?.moreText && data?.moreText.length > 0 && (
          <Link href={data?.slug || ""}>
            <h3 className="bg-background pr-2 lg:pr-4 text-button text-primary hover:text-primary-dark transition-all duration-300">
              {data?.moreText}
            </h3>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TitleLine;