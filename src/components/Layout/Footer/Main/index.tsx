import Communication from "./Communication";
import FooterInfo from "./Info";
import FooterLinks from "./Links";

const MainFooter = () => {
  return (
    <div className="grid grid-cols-12 gap-6 lg:gap-20 pt-[20px] lg:pt-[50px] h-full">
      <div className="col-span-12 lg:col-span-5">
        <FooterInfo />
      </div>
      <div className="col-span-12 lg:col-span-3">
        <FooterLinks />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <Communication />
      </div>
    </div>
  );
};

export default MainFooter;
