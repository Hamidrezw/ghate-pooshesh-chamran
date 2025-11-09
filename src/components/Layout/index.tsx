import Header from "./Header";
import Footer from "./Footer";
import StickyActions from "./StickyActions";
import { Toaster } from "react-hot-toast";
import  SettingProvider  from "@/context/SettingProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SettingProvider>
      <Header />
      <main className="pt-25 lg:pt-[150px] px-4 lg:px-0 lg:container mx-auto">{children}</main>
      <StickyActions />
      <Footer />
      <Toaster position="top-center" />
    </SettingProvider>
  );
};

export default Layout;
