import { TContactUs } from "@/models/ContactUs";
import CallSvg from "../Svgs/Call";
import Location from "./Location";
import Global from "../Svgs/Global";
import LocationTick from "../Svgs/LocationTick";
import ContactUsForm from "../ContacUsForm";
import SocialMedia from "../Layout/Header/TopHeader/SocialMedia";

const ContactUs = ({ contactUs }: { contactUs: TContactUs }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 lg:col-span-1 order-2 lg:order-1 border-[1px] border-border rounded-[10px] lg:rounded-[25px] px-2 lg:px-6 py-4 lg:py-8">
          <h2 className="text-h2 text-primary">{contactUs?.title}</h2>
          <p className="text-h4 mt-2 lg:mt-6">{contactUs?.introduction}</p>
        </div>
        <div className="col-span-2 lg:col-span-1 order-1 lg:order-2">
          <Location />
        </div>
      </div>
      <div className="flex flex-col gap-4.5 lg:gap-6 mt-6 lg:mt-8 px-4 lg:px-6 py-6 rounded-[15px] lg:rounded-[25px] border-[1px] border-border">
        <div className="flex items-center">
          <div className="w-[62px] h-[70px] bg-primary rounded-[5px] flex items-center justify-center flex-shrink-0">
            <Global size="big" />
          </div>
          <div className="flex flex-col mr-4.5 lg:mr-8 mb-1 lg:mb-2">
            <p className="text-h4">شبکه های اجتماعی:</p>
            <div className="flex gap-4 items-center ga text-link mt-1 lg:mt-2">
            <SocialMedia place="contact" />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-[62px] h-[70px] bg-primary rounded-[5px] flex items-center justify-center flex-shrink-0">
            <LocationTick />
          </div>
          <div className="flex flex-col mr-4.5 lg:mr-8">
            <p className="text-h4">آدرس:</p>
            <div className="flex gap-4 items-center ga text-link mt-1 lg:mt-2">
              {contactUs?.address}
            </div>
          </div>
        </div>
        {contactUs?.numbers?.map((data, i) => (
          <div className="flex items-center" key={i}>
            <div className="w-[62px] h-[70px] bg-primary rounded-[5px] flex items-center justify-center flex-shrink-0">
              <CallSvg size="big" />
            </div>
            <div className="flex flex-col mr-4.5 lg:mr-8">
              <p className="text-h4">{data?.title}</p>
              <div className="flex gap-4 items-center ga text-link mt-1 lg:mt-2">
                {data?.number}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 lg:mt-13">
        <ContactUsForm />
      </div>
    </>
  );
};

export default ContactUs;
