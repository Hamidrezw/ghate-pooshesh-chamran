import AboutUs from "@/components/AboutUs";
import BreadCrumbs from "@/components/Layout/BreadCrumbs";
import { fetchCertificates } from "@/lib/data";
import { TLicense } from "@/models/License";
import { use } from "react";

export const generateMetadata = () => {
  return {
    robots: {
      index: false,
      follow: false
    },
    alternates: {
      canonical: `${process.env.DOMAIN}/about_us`,
    },
  };
};

const Page = () => {
  const licenseList: TLicense[] = use(fetchCertificates()) as TLicense[];

  return (
    <>
      <BreadCrumbs
        breadcrumbs={[
          {
            title: "درباره ما",
            link: "/about_us",
            isCurrent: false, 
          },
        ]}
      />
      <AboutUs licenseList={licenseList} />
    </>
  );
};

export default Page;
