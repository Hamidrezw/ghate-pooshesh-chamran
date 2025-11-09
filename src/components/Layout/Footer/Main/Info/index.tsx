"use client";
import Logo from "@/components/utils/Logo";
import { SettingsContext } from "@/context/SettingProvider";
import ReadMoreButton from "@/ui/Buttons/ReadMore";
import { use } from "react";

const FooterInfo = () => {
  const { settings } = use(SettingsContext);

  return (
    <div className="flex flex-col text-background w-full">
      <Logo place="footer" />
      <p className="text-body my-4 line-clamp-7">{settings.footer_about_us}</p>
      <ReadMoreButton link="about_us" color="currentColor" />
    </div>
  );
};

export default FooterInfo;
