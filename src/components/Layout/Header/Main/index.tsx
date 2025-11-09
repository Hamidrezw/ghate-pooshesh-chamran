import Logo from "../../../utils/Logo";
import NavbarLinks from "./NavbarLinks";
import SearchBox from "../../../../ui/Inputs/SerachBox";
import HamburgerMenu from "./HamburgerMenu";
import { Suspense } from "react";

const MainHeader = () => {
  return (
    <div className="h-full">
      <div className="block lg:hidden h-full">
        <div className="flex items-center justify-between h-full">
          <HamburgerMenu />
          <Logo place="header" />
        </div>
      </div>
      <div className="hidden lg:block h-full">
        <div className="grid grid-cols-12 lg:gap-2 xl:gap-0 h-full items-center">
          <div className="col-span-3 xl:col-span-3">
            <Logo place="header" />
          </div>
          <div className="col-span-6 xl:col-span-6">
            <NavbarLinks />
          </div>
          <div className="col-span-3 xl:col-span-3">
            <div className="h-[54px] bg-background-subtle rounded-[10px] animate-pulse">
              <Suspense>
                <SearchBox placeHolder="جست‌وجو" />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
