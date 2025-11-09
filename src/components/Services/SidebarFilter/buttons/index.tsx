"use client";

import Arrow from "@/components/Svgs/Arrow";
import CategorySvg from "@/components/Svgs/Category";
import { TCategory } from "@/models/Category";
import SearchBox from "@/ui/Inputs/SerachBox";
import Link from "next/link";
import { Suspense, useState, useEffect } from "react";

interface SidebarButtonsProps {
  categories: TCategory[];
  pathname: string;
}

const SidebarButtons = ({ categories, pathname }: SidebarButtonsProps) => {
  const currentSlug = pathname.split("/").pop();

  const [showBg, setShowBg] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  useEffect(() => {
    const initialOpenCategory =
      categories.find(
        (cat) =>
          cat.slug === currentSlug ||
          cat.children?.some((child) => child.slug === currentSlug)
      )?.title || null;

    setOpenCategory(initialOpenCategory);
  }, [categories, currentSlug]);

  const handleBack = () => {
    setShowBg(false);
    setShowSearch(false);
    setShowCategory(false);
  };

  const handleShow = (value: string) => {
    setShowBg(true);
    if (value === "category") setShowCategory(true);
    else setShowSearch(true);
  };

  const toggleCategory = (child: string | null) => {
    setOpenCategory(openCategory === child ? null : child);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-[#000000BD] z-[430] transition-opacity duration-450 ${
          showBg ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleBack}
      />

      <div
        className={`${
          showSearch ? "opacity-100 visible" : "opacity-0 invisible"
        } w-full fixed z-[435] pl-8 top-[50%]`}
      >
        <Suspense>
          <SearchBox placeHolder="جست‌وجو" />
        </Suspense>
      </div>

      <div
        className={`${
          showCategory ? "opacity-100 visible" : "opacity-0 invisible"
        } w-full pl-8 fixed z-[435] top-[35%]`}
      >
        <div className="w-full rounded-[10px] flex-col bg-background">
          <div className="flex items-center justify-between p-4 border-b-[2px] border-b-border">
            <div className="flex gap-4 text-h3">
              <CategorySvg />
              دسته بندی ها
            </div>
            <svg
              onClick={handleBack}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="flex flex-col gap-3 px-4 py-6">
            {categories?.map((data) => (
              <div key={data.title}>
                <button
                  className={`w-full rounded-[15px] flex items-center justify-center gap-4 py-1.5 border-[1px] text-h4 ${
                    openCategory === data?.title
                      ? "border-primary text-primary"
                      : "border-text-primary"
                  }`}
                  onClick={() => toggleCategory(data.title)}
                >
                  <Arrow color="currentColor" position="left" size="big" />
                  {data.title}
                </button>

                {openCategory === data.title && data.children?.length > 0 && (
                  <div className="flex flex-col gap-3 overflow-y-auto text-button mt-2">
                    {data.children.map((child) => (
                      <Link
                        href={`/${child?.slug}`}
                        key={child?.slug}
                        className={`border-b-[2px] border-b-border pb-2 last:border-none flex items-center justify-center ${
                          currentSlug === child?.slug ? "text-primary" : ""
                        }`}
                      >
                        {child?.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 text-h3">
        <div
          className="rounded-[10px] border-border border-[2px] py-3 px-4 cursor-pointer flex items-center justify-between"
          onClick={() => handleShow("search")}
        >
          جست‌وجو
          <svg
            className="mr-5"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.8066 20.8184L15.7266 14.7383C16.3854 13.9648 16.9082 13.084 17.2949 12.0957C17.6816 11.1074 17.875 10.0547 17.875 8.9375C17.875 7.70573 17.6387 6.54557 17.166 5.45703C16.7077 4.36849 16.0739 3.4196 15.2646 2.61035C14.4554 1.80111 13.5065 1.16732 12.418 0.708984C11.3294 0.236328 10.1693 0 8.9375 0C7.70573 0 6.54557 0.236328 5.45703 0.708984C4.36849 1.16732 3.4196 1.80111 2.61035 2.61035C1.80111 3.4196 1.16732 4.36849 0.708984 5.45703C0.236328 6.54557 0 7.70573 0 8.9375C0 10.1693 0.236328 11.3294 0.708984 12.418C1.16732 13.5065 1.80111 14.4554 2.61035 15.2646C3.4196 16.0739 4.36849 16.7077 5.45703 17.166C6.54557 17.6387 7.70573 17.875 8.9375 17.875C10.0547 17.875 11.1074 17.6816 12.0957 17.2949C13.084 16.9082 13.9648 16.3854 14.7383 15.7266L20.8184 21.8066C20.89 21.8639 20.9688 21.9105 21.0547 21.9463C21.1406 21.9821 21.2266 22 21.3125 22C21.3984 22 21.4844 21.9821 21.5703 21.9463C21.6562 21.9105 21.735 21.8639 21.8066 21.8066C21.9355 21.6634 22 21.4987 22 21.3125C22 21.1263 21.9355 20.9616 21.8066 20.8184ZM8.9375 16.5C7.89193 16.5 6.91081 16.2995 5.99414 15.8984C5.07747 15.5117 4.27539 14.9746 3.58789 14.2871C2.90039 13.5996 2.36328 12.7975 1.97656 11.8809C1.57552 10.9642 1.375 9.98307 1.375 8.9375C1.375 7.89193 1.57552 6.91081 1.97656 5.99414C2.36328 5.07747 2.90039 4.27539 3.58789 3.58789C4.27539 2.90039 5.07747 2.36328 5.99414 1.97656C6.91081 1.57552 7.89193 1.375 8.9375 1.375C9.98307 1.375 10.9642 1.57552 11.8809 1.97656C12.7975 2.36328 13.5996 2.90039 14.2871 3.58789C14.9746 4.27539 15.5117 5.07747 15.8984 5.99414C16.2995 6.91081 16.5 7.89193 16.5 8.9375C16.5 9.98307 16.2995 10.9642 15.8984 11.8809C15.5117 12.7975 14.9746 13.5996 14.2871 14.2871C13.5996 14.9746 12.7975 15.5117 11.8809 15.8984C10.9642 16.2995 9.98307 16.5 8.9375 16.5Z"
              fill="#141D26"
            />
          </svg>
        </div>

        <div
          className="rounded-[10px] border-border border-[2px] py-3 px-4 cursor-pointer flex items-center justify-between"
          onClick={() => handleShow("category")}
        >
          دسته‌بندی‌ها
          <CategorySvg />
        </div>
      </div>
    </>
  );
};

export default SidebarButtons;
