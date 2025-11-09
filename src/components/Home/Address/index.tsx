"use client";
import dynamic from "next/dynamic";
import TitleLine from "../../Layout/TitleLine";
import AddressIcon from "../../Svgs/Address";
import { use } from "react";
import { SettingsContext } from "@/context/SettingProvider";

const Map = dynamic(() => import("./map"), {
  ssr: false,
});

const Address = () => {
  const { settings } = use(SettingsContext);
  return (
    <>
      <TitleLine
        data={{
          title: "آدرس ما",
          size: "small",
        }}
      />
      <div className="mt-4 lg:mt-5 h-[250px] lg:h-[420px] w-full relative rounded-[15px] lg:rounded-[25px] overflow-hidden">
        <Map location={settings?.location} />
        <div className="h-full w-[60px] lg:w-[230px] absolute top-0 left-0 backdrop-blur-[5px] bg-[linear-gradient(270deg,rgba(255,255,255,0.17)_0%,rgba(255,255,255,0.03)_79.5%,rgba(255,255,255,0)_87.72%)] z-[401]" />
        <div className="h-full w-[60px] lg:w-[230px] absolute top-0 right-0 backdrop-blur-[5px] bg-[linear-gradient(270deg, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.03) 79.5%, rgba(255, 255, 255, 0) 87.72%)] z-[401]" />
      </div>
      <div className="rounded-[15px] lg:rounded-[25px] border-border border-[2.5px] p-4 lg:p-8 mt-9 lg:mt-4 flex flex-col lg:flex-row items-center gap-4 lg:gap-0 overflow-hidden">
        <AddressIcon size="big" />
        <p className="lg:mr-6 text-h3">{settings?.address}</p>
      </div>
    </>
  );
};

export default Address;
