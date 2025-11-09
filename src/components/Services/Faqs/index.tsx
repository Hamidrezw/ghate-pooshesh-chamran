import TitleLine from "@/components/Layout/TitleLine";
import FaqCard from "./FaqCard";
import { TFaq } from "@/models/Faq";

const Faqs = ({ data }: { data: TFaq[] }) => {
  return (
    <>
      <TitleLine data={{ title: "سوالات متداول", size: "small" }} />
      <div className="flex flex-col gap-y-6 mt-4">
        {data?.map((data, i) => (
          <FaqCard data={data} key={i} />
        ))}
      </div>
    </>
  );
};

export default Faqs;
