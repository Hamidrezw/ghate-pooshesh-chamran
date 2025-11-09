"use client";
import { usePathname } from "next/navigation";
import { TService } from "@/models/Service";
import Image from "next/image";
import Link from "next/link";
import { TCategory } from "@/models/Category";

const CategoryCard = ({ data }: { data: TService | TCategory }) => {
  const pathName = usePathname();
  const showIntro = pathName !== "/";
  return (
    <Link href={showIntro ? `/service/${data?.slug}` : `/${data?.slug}`}>
      <div
        className={`border-[1px] bg-background-subtle hover:bg-primary border-primary-light text-primary hover:text-background group rounded-[15px] ${
          showIntro ? "lg:rounded-[15px]" : "lg:rounded-[25px]"
        } cursor-pointer p-2 pb-0 transition-all duration-300`}
      >
        <div
          className={`w-full h-[80px] ${
            !showIntro ? "lg:h-[220px]" : "lg:h-[170px]"
          } relative`}
        >
          <Image
            src={
              (data?.image && data?.image != "None")
                ? process.env.NEXT_PUBLIC_SERVER_URL + data?.image
                : "/images/no-image.png"
            }
            alt={data.title}
            fill
            className={`rounded-[10px] ${!showIntro && "lg:rounded-[20px]"}`}
            quality={100}
          />
        </div>
        <h3 className="mt-4 text-center text-h2 line-clamp-1">{data.title}</h3>
        {showIntro &&
          "introduction" in data &&
          data?.introduction?.length > 0 && (
            <h4 className="text-h4 mt-4 text-text-primary line-clamp-2 group-hover:text-background transition-all duration-300 text-center w-full">
              {data?.introduction}
            </h4>
          )}
        <div className="w-[60%] lg:w-[45%] h-1 lg:h-1.5 mx-auto rounded-tr-[10px] bg-current rounded-tl-[10px] mt-3 lg:mt-6 mb-[-1px]" />
      </div>
    </Link>
  );
};

export default CategoryCard;
