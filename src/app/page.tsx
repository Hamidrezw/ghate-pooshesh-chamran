import Home from "@/components/Home";
import { fetchBanners, fetchBlogList, fetchCategoryList } from "@/lib/data";
import { TBanner } from "@/models/Banner";
import { TBlogList } from "@/models/Blog";
import { TCategory } from "@/models/Category";
import { use } from "react";

export const generateMetadata = () => {
  return {
    alternates: {
      canonical: `${process.env.DOMAIN}`,
    },
  };
};

const Page = () => {
  const banners: TBanner[] =  use(fetchBanners()) as TBanner[]
  
  const categoryList: TCategory[] = use(fetchCategoryList({
    limit: 6,
    main: true
  })) as TCategory[];

  const blogList: TBlogList = use(fetchBlogList({
    limit: 10,
  })) as TBlogList;

  return <Home banners={banners} categoryList={categoryList} blogList={blogList.results} />;
};

export default Page;
