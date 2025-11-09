"use client";

const data = [
  { title: "قطعه پوشش چمران", id: "company" },
  { title: "همکاری‌باسایرشرکت‌ها", id: "cooperation" },
  { title: "رزومه‌کاری", id: "resume" },
  { title: "اشیازینتی‌وتزئینی", id: "decoration" },
  { title: "درباره‌ما", id: "about_us" },
  { title: "مجوزها", id: "licenses" },
  { title: "گالری‌کارخانه", id: "gallery" },
];

const AboutUsNav = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = window.innerWidth < 1024 ? 100 : 250;
    const duration = window.innerWidth < 1024 ? 1100 : 800;
    const target =
      element.getBoundingClientRect().top + window.scrollY - offset;
    const start = window.scrollY;
    const distance = target - start;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, start + distance * ease);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <>
      <div className="flex flex-nowrap items-center text-h4 text-text-secondary overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {data.map((data, i) => (
          <button
            key={i}
            onClick={() => handleScroll(data.id)}
            className="first:text-primary px-3 lg:px-6 cursor-pointer flex-shrink-0"
          >
            {data.title}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-12 mt-1.5 lg:mt-4">
        <div className="col-span-5 lg:col-span-2 bg-primary h-[2.5px]" />
        <div className="col-span-7 lg:col-span-10 bg-border h-[1.5px]" />
      </div>
    </>
  );
};

export default AboutUsNav;
