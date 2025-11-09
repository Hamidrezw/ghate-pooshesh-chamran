import Image from "next/image";

const InfoLogo = () => {
  return (
    <div className="w-full border-[2.5px] border-border rounded-[25px]">
      <div className="w-full h-full py-5 border-primary bg-text-primary rounded-[25px] border-[16px] flex items-center justify-center">
        <Image src="/images/logo-big.png" alt="logo" width={185} height={185} />
      </div>
    </div>
  );
};

export default InfoLogo;