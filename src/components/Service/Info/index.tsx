const ServiceInfo = ({ content }: { content: string }) => {
  return (
    <div className="flex flex-col p-2 pt-6 lg:px-6 lg:py-4 rounded-[15px] lg:rounded-[25px] border-[1px] border-border direction-rtl">
      <div
        className="custom-list-square [&_h1]:text-primary [&_h1]:text-h1 [&_h1]:mt-4 [&_h2]:mt-3 [&_h3]:text-h3 [&_h3_span]:!text-primary [&_h3]:mt-4 [&_h2]:lg:mt-6 [&_h2]:text-h2 [&_h2]:text-primary [&_h2_span]:!text-primary [&_p]:mt-2 [&_p]:lg:mt-4 [&_p]:text-h4 lg:mb-4"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default ServiceInfo;
