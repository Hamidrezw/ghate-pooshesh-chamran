"use client";
import ReadMoreButton from "@/ui/Buttons/ReadMore";
import TitleLine from "@/components/Layout/TitleLine";
import InfoLogo from "./logo";
import { SettingsContext } from "@/context/SettingProvider";
import { use } from "react";

const Info = () => {
  const { settings } = use(SettingsContext);
  return (
    <>
      <TitleLine
        data={{
          title: "درباره ما",
          size: "small",
        }}
      />
      <div className="grid grid-cols-6 gap-y-6 lg:gap-8 mt-3" dir="ltr">
        <div className="col-span-6 lg:col-span-2">
          <InfoLogo />
        </div>
        <div className="col-span-6 lg:col-span-4 flex flex-col" dir="rtl">
          <h1 className="text-h2 select-none">درباره شرکت قطعه پوشش چمران</h1>
          <div
            className="text-body my-4 lg:my-5 line-clamp-6"
            dangerouslySetInnerHTML={{ __html: settings.home_about_us }}
          />
          <ReadMoreButton link="about_us" color="primary" />
        </div>
      </div>
    </>
  );
};

export default Info;
