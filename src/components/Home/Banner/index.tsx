import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-primary rounded-[25px] px-4 py-8 lg:px-10 lg:pt-12 w-full relative flex flex-col items-center lg:grid lg:grid-cols-4">
      <div className="absolute flex flex-col items-center top-[-60px] lg:left-10 lg:top-[-45px]">
        <div className="relative w-35 h-35 lg:w-60 lg:h-60">
          <Image src="/images/metalball.png" alt="metalball" fill />
        </div>
        <div className="hidden lg:block w-[267px] h-[24px] mt-[-10px] opacity-[0.69] mix-blend-multiply [background:radial-gradient(50%_50%_at_50%_50%,#212529_18.27%,rgba(115,129,143,0)_100%)]" />
      </div>
      <div
        className="lg:col-span-3 text-background flex flex-col items-center lg:items-start mt-18 lg:m-0 lg:pl-3"
      >
        <h3 className="text-h3">خدمات تخصصی در تعمیر، بازسازی و کنترل کیفیت</h3>
        <p className="text-body pr-2 mt-4 tracking-wide">
          شرکت قطعه پوشش چمران با بهره‌گیری از دانش فنی و تجهیزات به‌روز،
          توانمندی خود را در تعمیر، بازسازی و ارتقای تابلوهای برق صنعتی به
          بالاترین سطح رسانده است. همچنین با استفاده از تجهیزات آزمایشگاهی دقیق
          و استانداردهای کنترل کیفی، کیفیت تمامی محصولات و خدمات ارائه‌شده
          به‌صورت مستمر مورد ارزیابی و پایش قرار می‌گیرد تا رضایت حداکثری
          مشتریان تضمین شود.
        </p>
      </div>
    </div>
  );
};

export default Banner;