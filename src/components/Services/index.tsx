import TitleLine from "@/components/Layout/TitleLine";
import SidebarFilter from "./SidebarFilter";
import ServiceCardList from "./ServiceCardList";
import Faqs from "./Faqs";
import ServicesContent from "./Content";
import { TFaq } from "@/models/Faq";
import { Suspense } from "react";

interface TServicesProps {
  content: string;
  faqs: TFaq[];
  categorySlug?: string;
}

const Services = ({
  content,
  faqs,
  categorySlug,
}: TServicesProps) => {
  return (
    <>
      <div className="mt-10">
        <TitleLine data={{ title: "خدمات ما", size: "small" }} />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="col-span-4 lg:col-span-1">
          <SidebarFilter />
        </div>
        <div className="col-span-4 lg:col-span-3">
        <Suspense>
          <ServiceCardList categorySlug={categorySlug} />
        </Suspense>
        </div>
      </div>
      {content && content.length > 13 && (
        <div className="mt-10">
          <ServicesContent data={content} />
        </div>
      )}
      {faqs?.length > 0 && (
        <div className="mt-11 lg:mt-17.5">
          <Faqs data={faqs} />
        </div>
      )}
    </>
  );
};

export default Services;
