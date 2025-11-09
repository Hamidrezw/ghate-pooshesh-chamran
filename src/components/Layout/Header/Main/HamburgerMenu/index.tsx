"use client";
import Logo from "@/components/utils/Logo";
import { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SearchBox from "../../../../../ui/Inputs/SerachBox";
import Link from "next/link";
import Arrow from "@/components/Svgs/Arrow";
import { TCategory } from "@/models/Category";
import { fetchCategoryList } from "@/lib/data";

interface TNavLinks {
  title: string;
  path: string;
}

const navLinks: TNavLinks[] = [
  { title: "خانه", path: "/" },
  { title: "خدمات", path: "/services" },
  { title: "وبلاگ", path: "/blog" },
  { title: "درباره ما", path: "/about_us" },
  { title: "تماس با ما", path: "/contact_us" },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [categories, setCategories] = useState<TCategory[]>([]);
  const pathName = usePathname();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = (await fetchCategoryList({
          child: true,
          main: true,
        })) as TCategory[];
        setCategories(data);
      } catch (error) {
        console.log("error fetching header categories", error);
      }
    };
    fetchCategories();
  }, []);

  const baseClass =
    "h-[55px] border-b-[2px] border-b-border flex items-center justify-center text-button";
  const selectClass = "bg-border text-primary-dark";

  return (
    <>
      <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7H19"
            stroke="#212529"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 12H19"
            stroke="#212529"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 17H19"
            stroke="#212529"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        className={`fixed inset-0 bg-[#00000066] bg-opacity-90 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 w-[310px] h-full z-50 transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full">
          <div className="bg-background w-[290px] h-full flex flex-col">
            <div className="h-[70px] border-b-[2px] border-b-border flex items-center justify-around flex-shrink-0">
              <Logo place="header" />
              <svg
                onClick={() => setIsOpen(false)}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  d="M20 2L2 20M2 2L20 20"
                  stroke="#212529"
                  strokeWidth="3"
                />
              </svg>
            </div>

            <div className="flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="w-full p-4 mb-2 sticky top-0 bg-background z-10">
                <Suspense>
                  <SearchBox
                    placeHolder="جست‌وجو"
                    onSearch={() => setIsOpen(false)}
                  />
                </Suspense>
              </div>

              {navLinks.map((data, i) => (
                <div key={i} className="flex flex-col w-full">
                  {data.title === "خدمات" ? (
                    <>
                      <div
                        className={`${baseClass} ${
                          pathName.startsWith("/service") && selectClass
                        } relative cursor-pointer`}
                        onClick={() => setOpenCategory(!openCategory)}
                      >
                        <Link
                          href={"/service"}
                          onClick={() => setIsOpen(false)}
                          className="absolute left-1/2 -translate-x-1/2"
                        >
                          {data.title}
                        </Link>
                        <span className="absolute left-7 top-1/2 -translate-y-1/2">
                          {openCategory ? (
                            <Arrow
                              size="small"
                              color="text-primary"
                              position="up"
                            />
                          ) : (
                            <Arrow
                              size="small"
                              color="text-primary"
                              position="down"
                            />
                          )}
                        </span>
                      </div>

                      {openCategory &&
                        categories?.map((cat, j) => (
                          <div key={j}>
                            <input
                              type="checkbox"
                              id={cat.slug}
                              className="hidden peer"
                            />
                            <label
                              htmlFor={cat.slug}
                              className={`bg-background-subtle peer relative w-full ${baseClass} ${
                                pathName === `/service/${cat.slug}`
                                  ? selectClass
                                  : ""
                              }`}
                            >
                              <Link
                                href={`/${cat.slug}`}
                                onClick={() => setIsOpen(false)}
                                className="w-fit h-fit absolute left-1/2 -translate-x-1/2"
                              >
                                {cat.title}
                              </Link>
                              {cat.children && cat.children.length > 0 && (
                                <div className="absolute left-7 top-1/2 -translate-y-1/2">
                                  <Arrow
                                    size="small"
                                    color="text-primary"
                                    position="down"
                                  />
                                </div>
                              )}
                            </label>

                            {cat.children?.length > 0 && (
                              <div className="peer-checked:block hidden">
                                {cat.children.map((child, k) => (
                                  <Link
                                    key={k}
                                    href={`/${child.slug}`}
                                    onClick={() => setIsOpen(false)}
                                    className={`bg-background-subtle !text-small ${baseClass} ${
                                      pathName === child.slug && selectClass
                                    }`}
                                  >
                                    {child.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                    </>
                  ) : (
                    <Link
                      href={data.path}
                      onClick={() => setIsOpen(false)}
                      className={`${baseClass} ${
                        pathName === data.path && selectClass
                      }`}
                    >
                      {data.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            className="w-5 h-full bg-primary flex items-center justify-center cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L7 7.5L2 13"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
