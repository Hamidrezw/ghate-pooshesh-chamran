import FooterDeveloperText from "./DeveloperText";
import MainFooter from "./Main";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <footer>
      <div className="mt-8 lg:mt-[70px]">
        <div className="bg-primary h-[160px] lg:h-[130px]">
          <div className="bg-[url(/images/newsbackground.png)] bg-center h-full">
            <div className="container mx-auto h-full">
              <NewsLetter />
            </div>
          </div>
        </div>
        <div className="bg-text-primary">
          <div className="container mx-auto h-full pb-8 lg:pb-10 px-6 lg:px-0">
            <MainFooter />
          </div>
        <FooterDeveloperText />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
