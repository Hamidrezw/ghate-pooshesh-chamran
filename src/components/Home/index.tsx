import Address from "./Address";
import Banner from "./Banner";
import Info from "./Info";
import ContactUsForm from "../ContacUsForm";
import ServiceList from "./ServiceList";
import BannerSlider from "./BannerSlider";
import LastBlogsSlider from "./LastBlogsSlider";
import { TBlog } from "@/models/Blog";
import { TBanner } from "@/models/Banner";
import { TCategory } from "@/models/Category";

type THomeData = {
  categoryList: TCategory[];
  blogList: TBlog[];
  banners: TBanner[];
};

const Home = ({ banners, categoryList, blogList }: THomeData) => {
  return (
    <>
      <div className="mt-8 lg:mt-16.5">
        <BannerSlider data={banners}/>
      </div>
      <div className="mt-10 lg:mt-15">
        <ServiceList data={categoryList} />
      </div>
      <div className="mt-12.5 lg:mt-16.5">
        <LastBlogsSlider data={blogList} />
      </div>
      <div className="mt-12.5 lg:mt-16.5">
        <Info />
      </div>
      <div className="mt-12.5 lg:my-16.5">
        <ContactUsForm />
      </div>
      <div className="mt-23 lg:mt-25">
        <Banner />
      </div>
      <div className="mt-9 lg:mt-16.5">
        <Address />
      </div>
    </>
  );
};

export default Home;
