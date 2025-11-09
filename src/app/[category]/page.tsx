import BreadCrumbs from "@/components/Layout/BreadCrumbs";
import Services from "@/components/Services";
import { fetchCategoryDetail } from "@/lib/data";
import { TCategory } from "@/models/Category";
import { notFound } from "next/navigation";
import { use } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  const categoryDetail = (await fetchCategoryDetail({ category })) as TCategory;
  return {
    title: categoryDetail?.meta_title || categoryDetail?.title,
    description: categoryDetail?.meta_description,
    keywords: categoryDetail?.meta_keywords?.split(", "),
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical:
        categoryDetail?.canonical_tag ||
        `${process.env.DOMAIN}${categoryDetail?.slug}`,
    },
  };
};

const Page = ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = use(params);
  const categoryDetail = use(fetchCategoryDetail({ category })) as TCategory;

  if (!categoryDetail) {
    return notFound();
  }

  return (
    <>
      <BreadCrumbs
        breadcrumbs={[
          ...(categoryDetail?.father
            ? [
                {
                  title: categoryDetail.father.title,
                  link: `/${categoryDetail.father.slug}`,
                  isCurrent: false,
                },
              ]
            : []),
          {
            title: categoryDetail.title,
            link: `/${categoryDetail.slug}`,
            isCurrent: true,
          },
        ]}
      />
      <Services
        categorySlug={categoryDetail?.slug}
        content={categoryDetail?.content}
        faqs={categoryDetail?.faqs}
      />
    </>
  );
};

export default Page;
