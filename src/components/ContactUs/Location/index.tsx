"use client";

import { SettingsContext } from "@/context/SettingProvider";
import dynamic from "next/dynamic";
import { use } from "react";

const Map = dynamic(() => import("../../Home/Address/map"), {
  ssr: false,
});

const Location = () => {
  const { settings } = use(SettingsContext);
  return (
    <div className="relative rounded-[10px] lg:rounded-[20px] h-[200px] lg:h-[300px] w-full overflow-hidden">
      <Map location={settings.location}/>
      <div className="h-full w-[60px] lg:w-[150px] absolute top-0 left-0 backdrop-blur-[5px] bg-[linear-gradient(270deg,rgba(255,255,255,0.17)_0%,rgba(255,255,255,0.03)_79.5%,rgba(255,255,255,0)_87.72%)] z-[401]" />
      <div className="h-full w-[60px] lg:w-[150px] absolute top-0 right-0 backdrop-blur-[5px] bg-[linear-gradient(270deg, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.03) 79.5%, rgba(255, 255, 255, 0) 87.72%)] z-[401]" />
    </div>
  );
};

export default Location;
