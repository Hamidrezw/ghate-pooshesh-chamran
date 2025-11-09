import CategoryCard from "./CategoryCard";
import TitleLine from "../../Layout/TitleLine";
import { TCategory } from "@/models/Category";

const ServiceList = ({ data }: { data: TCategory[] }) => {
  return (
    <>
      <TitleLine
        data={{
          title: "خدمات ما",
          moreText: "مشاهده همه خدمات",
          slug: "/service",
          size: "small",
        }}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-[75px] md:gap-y-[32px] mt-4">
        {data?.map((data, i) => (
          <CategoryCard data={data} key={i} />
        ))}
      </div>
    </>
  );
};
export default ServiceList;
