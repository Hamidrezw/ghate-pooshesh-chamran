import BreadCrumbs from "@/components/Layout/BreadCrumbs";
import Services from "@/components/Services";
import { fetchServicePage } from "@/lib/data";
import { TServicePage } from "@/models/Service";
import { use } from "react";

export const generateMetadata = async () => {
  const servicePage: TServicePage = (await fetchServicePage()) as TServicePage;
  return {
    title: servicePage?.meta_title,
    description: servicePage?.meta_description,
    keywords: servicePage?.meta_keywords?.split(", "),
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: servicePage?.canonical_tag || `${process.env.DOMAIN}/service`,
    },
  };
};

const Page = () => {
  const servicePage: TServicePage = use(fetchServicePage()) as TServicePage;

  return (
    <>
      <BreadCrumbs breadcrumbs={[{ title: "خدمات" }]} />
      <Services
        content={servicePage?.content}
        faqs={servicePage?.faqs}
      />
    </>
  );
};

export default Page;
