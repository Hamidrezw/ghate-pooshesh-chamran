import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../styles/globals.css";
import Layout from "@/components/Layout";
import LocalFont from "next/font/local";
import { Metadata, Viewport } from "next";

const YekanBakh = LocalFont({
  variable: "--font-yekan-bakh",
  src: [
    {
      path: "../../public/fonts/YekanBakh/Yekan Bakh FaNum 01 Hairline.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh/Yekan Bakh FaNum 02 Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh/Yekan Bakh FaNum 03 Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh/Yekan Bakh FaNum 04 Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh/Yekan Bakh FaNum 05 Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh/Yekan Bakh FaNum 06 Bold.ttf",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh/Yekan Bakh FaNum 07 Heavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh/Yekan Bakh FaNum 08 Fat.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "قطعه پوشش چمران",
  icons: {
    icon: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${YekanBakh?.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
