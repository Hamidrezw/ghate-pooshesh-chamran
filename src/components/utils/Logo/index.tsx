import Image from "next/image";
import Link from "next/link";

const Logo = ({ place }: { place: "header" | "footer" }) => {
  const pos = place === "header";

  return (
    <Link href={"/"}>
      <div className="flex items-center select-none">
        <div className="relative h-10 w-10 lg:h-22 lg:w-22">
          <Image src={"/images/logo.png"} alt="logo" fill />
        </div>
        <div
          className={`mr-2 text-${
            pos ? "text-primary" : "background"
          } flex flex-col`}
        >
          <span className="text-h4">قطعه پوشش چمران</span>
          <span className={`mt-1 lg:mt-2 text-logo-des ${pos ? "lg:text-button" : "lg:text-small"}`}>
            {pos
              ? "Chamran Silver Plating"
              : "مـشتـری مـداری را در عمـل به اثـبات رسانده ایم"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
