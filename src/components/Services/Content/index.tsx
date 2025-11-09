import Arrow from "@/components/Svgs/Arrow";

const ServicesContent = ({ data }: { data: string }) => {
  return (
    <div className="flex flex-col px-2 py-2 lg:px-6 lg:py-4 rounded-[15px] lg:rounded-[25px] border border-border">
      <input type="checkbox" id="expandcontent" className="peer hidden" />
      <div
        className="custom-list-square line-clamp-4 peer-checked:line-clamp-none
        [&_h1]:text-primary [&_h1]:text-h1 [&_h1]:mt-4 
        [&_h2]:mt-4 [&_h2]:lg:mt-6
        [&_h2]:text-h2 [&_h2]:text-primary
        [&_p]:mt-2 [&_p]:lg:mt-4 [&_p]:text-h4 lg:mb-4 
        [&_h2_span]:!text-primary [&_h2_span]:text-h2"
        dangerouslySetInnerHTML={{ __html: data }}
      />
      {data?.length > 535 && (
        <>
          <label htmlFor="expandcontent" className="block peer-checked:hidden mt-4 text-primary select-none text-button">
            <span className="cursor-pointer flex items-center gap-4">
              مطالعه بیشتر
              <Arrow size="small" color="currentColor" position="left" />
            </span>
          </label>
          <label htmlFor="expandcontent" className="hidden peer-checked:block mt-4 text-primary select-none text-button">
            <span className="cursor-pointer flex items-center gap-4">
              مطالعه کمتر
              <Arrow size="small" color="currentColor" position="left" />
            </span>
          </label>
        </>
      )}
    </div>
  );
};

export default ServicesContent;
