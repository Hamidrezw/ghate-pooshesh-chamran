import CallSvg from "@/components/Svgs/Call";
import { SettingsContext } from "@/context/SettingProvider";
import Link from "next/link";
import { use } from "react";

const TelephoneButton = () => {
  const {settings} = use(SettingsContext)
  return (
    <Link href={`tel:${settings?.sticky_number}`} rel="nofollow" target="_blank">
      <div className="w-12.5 h-12.5 lg:w-[60px] lg:h-[60px] bg-primary hover:bg-primary-dark rounded-[120px] border-[0.2px] flex items-center justify-center border-text-secondary shadow-[0.82px_0.82px_2.45px_rgba(0,0,0,0.15)] transition-all duration-300 ">
      <CallSvg size="big" />
      </div>
    </Link>
  );
};

export default TelephoneButton;