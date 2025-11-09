"use client";
import AddressIcon from "@/components/Svgs/Address";
import Calling from "@/components/Svgs/Calling";
import Global from "@/components/Svgs/Global";
import { use } from "react";
import { SettingsContext } from "@/context/SettingProvider";
import Link from "next/link";
import SocialMedia from "@/components/Layout/Header/TopHeader/SocialMedia";

const Communication = () => {
  const { settings } = use(SettingsContext);
  return (
    <div className="flex flex-col *:flex *:flex-col w-full text-background gap-4">
      <h3 className="text-h3">راه های ارتباطی</h3>
      <div>
        <div className="flex items-center mb-2 lg:mb-4">
          <Calling />
          <span className="mr-2.5 text-link">شماره تماس:</span>
        </div>
        {settings?.footer_number?.split(/\r?\n/).map((num, i) => (
          <Link key={i} href={`tel:${num}`} className="text-link mb-1.5">
            {num}
          </Link>
        ))}
      </div>
      <div>
        <div className="flex items-center mb-2 lg:mb-4">
          <AddressIcon size="small" />
          <span className="mr-2.5 text-link">آدرس:</span>
        </div>
        <p className="text-link">
          ساوه - شهرک صنعتی احمد آباد شهید چمران - میدان دوم - خیابان توسعه پنجم
          - پلاک F159
        </p>
      </div>
      <div>
        <div className="flex items-center mb-4">
          <Global size="small" />
          <span className="text-link mr-2.5">شبکه های اجتماعی:</span>
        </div>
        <SocialMedia place="footer" />
      </div>
    </div>
  );
};

export default Communication;
