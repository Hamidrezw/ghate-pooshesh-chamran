import ContactUs from "@/components/ContactUs";
import BreadCrumbs from "@/components/Layout/BreadCrumbs";
import { fetchContactUs } from "@/lib/data";
import { TContactUs } from "@/models/ContactUs";
import { use } from "react";

export const generateMetadata = () => {
  return {
    robots: {
      index: false,
      follow: false
    },
    alternates: {
      canonical: `${process.env.DOMAIN}/contact_us`,
    },
  };
};

const Page = () => {
  const contactUs: TContactUs = use(fetchContactUs()) as TContactUs;

  return (
    <>
      <BreadCrumbs breadcrumbs={[{ title: "تماس با ما" }]} />
      <ContactUs contactUs={contactUs} />
    </>
  );
};

export default Page;
