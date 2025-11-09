"use client";

import { Suspense, useEffect, useState } from "react";
import Arrow from "@/components/Svgs/Arrow";
import SearchBox from "@/ui/Inputs/SerachBox";
import SidebarButtons from "./buttons";
import { fetchCategoryList } from "@/lib/data";
import { TCategory } from "@/models/Category";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarFilter = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [displayCategories, setDisplayCategories] = useState<TCategory[]>([]);

  const isServicePage = pathname === "/service";
  const currentSlug = !isServicePage ? pathname.split("/").pop() : null;

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = (await fetchCategoryList({
          child: true,
          main: true,
        })) as TCategory[];
        setCategories(data);
      } catch (error) {
        console.log("error in fetch sidebar category", error);
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    if (categories.length === 0) {
      setDisplayCategories([]);
      return;
    }

    if (isServicePage) {
      setDisplayCategories(categories);
    } else if (currentSlug) {
      const currentCategory = categories.find(
        (cat) =>
          cat.slug === currentSlug ||
          cat.children?.some((child) => child.slug === currentSlug)
      );

      if (currentCategory) {
        if (currentCategory.slug === currentSlug) {
          setDisplayCategories([currentCategory]);
        } else {
          const parentCategory = categories.find((cat) =>
            cat.children?.some((child) => child.slug === currentSlug)
          );
          if (parentCategory) {
            setDisplayCategories([parentCategory]);
          }
        }
      } else {
        setDisplayCategories([]);
      }
    } else {
      setDisplayCategories([]);
    }
  }, [categories, pathname, currentSlug, isServicePage]);

  return (
    <>
      <div className="hidden lg:block rounded-[15px] border-border border-[2px] px-4 pt-6 pb-3">
        <Suspense>
          <SearchBox placeHolder="جست‌وجو" />
        </Suspense>
        <div className="w-full relative mt-8 mb-5 select-none">
          <div className="bg-border w-full h-[2px]" />
          <span className="absolute top-[-15px] bg-background pl-3 text-h4">
            دسته‌بندی
          </span>
        </div>

        <div className="mt-3 select-none">
          {!isServicePage && (
            <Link
              href="/service"
              className="flex items-center cursor-pointer mt-2"
            >
              <Arrow size="big" color="currentColor" position="right" />
              <span className="text-link mr-4 pt-1">بازگشت</span>
            </Link>
          )}

          {displayCategories.map((category) => {
            const showChildren =
              !isServicePage && category.children?.length > 0;
            const isCurrentCategory = currentSlug === category.slug;

            return (
              <div key={category.title} className="mt-3">
                <Link
                  href={`/${category.slug}`}
                  className="flex items-center w-full cursor-pointer"
                >
                  {showChildren && (
                    <Arrow size="big" color="primary" position="left" />
                  )}
                  <h4
                    className={`cursor-pointer mr-4 text-h4 ${
                      isCurrentCategory ? "text-primary" : ""
                    }`}
                  >
                    {category.title}
                  </h4>
                </Link>

                {showChildren && (
                  <div className="flex flex-col gap-2 mt-2 mr-4 text-button">
                    {category.children.map((child) => (
                      <Link
                        href={`/${child.slug}`}
                        key={child.slug}
                        className={`text-button cursor-pointer pb-2 border-b-[2px] border-b-border last:border-none  ${
                          currentSlug === child.slug ? "text-primary" : ""
                        }`}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="block lg:hidden">
        <SidebarButtons categories={displayCategories} pathname={pathname}/>
      </div>
    </>
  );
};

export default SidebarFilter;
