"use client";
import { usePathname } from "next/navigation";
import Arrow from "@/components/Svgs/Arrow";
import Link from "next/link";
import SubMenu from "@/components/Layout/Header/Main/SubMenu";

export const navLinks = [
  { slug: "/", title: "خانه" },
  { title: "خدمات", hasDropdown: true, match: "/service" },
  { slug: "/blog", title: "وبلاگ" },
  { slug: "/about_us", title: "درباره ما" },
  { slug: "/contact_us", title: "تماس با ما" },
];

const NavbarLinks = () => {
  const pathName = usePathname();
  const baseClass =
    "rounded-[20px] px-5 py-2 flex items-center justify-center transition-all duration-300 cursor-pointer outline-none border border-transparent";
  const activeClass =
    "!border-primary-light border-[1px] bg-background-subtle text-primary-dark";

  return (
    <div className="flex items-center justify-center text-button relative select-none h-full">
      {navLinks.map((link) => {
        const isActive = link.match
          ? pathName.startsWith("/service")
          : pathName === link.slug;
        return (
          <div key={link.slug ?? link.title} className="relative group">
            {link.hasDropdown ? (
              <Link href="/service">
                <div
                  className={`${baseClass} ${
                    isActive && activeClass
                  } flex items-center`}
                >
                  <span>{link.title}</span>
                  <div className="mr-2 mb-1">
                    <Arrow color="currentColor" position="down" size="small" />
                  </div>
                </div>
              </Link>
            ) : (
              <Link
                href={link.slug!}
                className={`${baseClass} ${isActive && activeClass}`}
              >
                <span>{link.title}</span>
              </Link>
            )}

            {link.hasDropdown && (
              <div className="absolute right-0 top-[100%] mt-1 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <SubMenu />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NavbarLinks;
