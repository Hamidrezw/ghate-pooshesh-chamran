import BreadCrumbs from "@/components/Layout/BreadCrumbs";
import Service from "@/components/Service";
import { fetchServiceDetail } from "@/lib/data";
import { TService } from "@/models/Service";
import { notFound } from "next/navigation";
import { use } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const serviceDetail: TService = (await fetchServiceDetail({
    slug: slug,
  })) as TService;
  return {
    title: serviceDetail?.meta_title || serviceDetail?.title,
    description: serviceDetail?.meta_description,
    keywords: serviceDetail?.meta_keywords?.split(", "),
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical:
        serviceDetail?.canonical_tag ||
        `${process.env.DOMAIN}${serviceDetail?.slug}`,
    },
  };
};

const Page = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);

  const serviceDetail: TService = use(
    fetchServiceDetail({ slug: slug })
  ) as TService;

  if (!serviceDetail) {
    return notFound();
  }

  return (
    <>
      <BreadCrumbs
        breadcrumbs={[
          ...(serviceDetail?.category?.father
            ? [
                {
                  title: serviceDetail.category?.father?.title,
                  link: `/${serviceDetail.category?.father?.slug}`,
                  isCurrent: false,
                },
              ]
            : []),
          {
            title: serviceDetail?.category?.title,
            link: `/${serviceDetail?.category?.slug}`,
            isCurrent: false,
          },
          {
            title: serviceDetail?.title,
            link: `/service/${serviceDetail?.slug}`,
            isCurrent: true,
          },
        ]}
      />

      <Service serviceDetail={serviceDetail} />
    </>
  );
};

export default Page;
