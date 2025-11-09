import Link from "next/link";
import CallSvg from "@/components/Svgs/Call";
import { use } from "react";
import { SettingsContext } from "@/context/SettingProvider";
import SocialMedia from "./SocialMedia";


const TopHeader = () => {
  const {settings} = use(SettingsContext)
  return (
    <div className="flex items-center justify-between h-full">
      <SocialMedia place="header" />
      <Link href={`tel:${settings?.header_number}`}>
        <div className="flex items-center">
          <span className="text-small text-background">{settings?.header_number}</span>
          <div className="bg-primary w-[18px] h-[18px] flex items-center justify-center rounded-[5px] mr-2">
            <CallSvg size="small" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TopHeader;
