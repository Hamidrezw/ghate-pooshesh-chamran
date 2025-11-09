import { TService } from "@/models/Service";
import ContactUsForm from "../ContacUsForm";
import CategorySlider from "./ImageSlider";
import MoreServiceSlider from "./MoreServicesSlider";
import ServiceInfo from "./Info";

const Service = ({ serviceDetail }: { serviceDetail: TService }) => {
  const hasGallery = serviceDetail?.gallery?.length > 0;
  return (
    <>
      <div
        className={`grid gap-4 lg:gap-6 mt-5 lg:mt-10 ${
          hasGallery ? "grid-cols-12" : ""
        }`}
      >
        {hasGallery && (
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
            <CategorySlider data={serviceDetail.gallery} />
          </div>
        )}

        <div
          className={`col-span-12 ${ hasGallery ? "lg:col-span-5 order-2 lg:order-1" : ""}
          flex flex-col px-2 lg:px-6 py-4 lg:py-8 rounded-[10px] lg:rounded-[25px] border border-border`}
        >
          <h1 className="text-primary text-h2">{serviceDetail.title}</h1>
          <p className="text-h4 mt-2 lg:mt-5">{serviceDetail?.introduction}</p>
        </div>
      </div>
      {serviceDetail?.content && serviceDetail?.content?.length > 13 && (
        <div className="mt-4 lg:mt-10">
          <ServiceInfo content={serviceDetail?.content} />
        </div>
      )}
      <div className="mt-12.5 lg:mt-16">
        <ContactUsForm id={serviceDetail?.id}/>
      </div>
      {serviceDetail?.related_services?.length > 0 && (
        <div className="mt-12.5 lg:mt-16">
          <MoreServiceSlider data={serviceDetail?.related_services} />
        </div>
      )}
    </>
  );
};

export default Service;
