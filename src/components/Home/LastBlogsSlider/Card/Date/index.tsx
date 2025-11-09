import MessageSvg from "@/components/Svgs/Message";

const BlogCardDate = ({ color }: { color: string }) => {
  return (
    <div className="flex items-center justify-between my-2.5 mx-1">
      <div className="flex items-center">
        <MessageSvg color={color} />
        <span className="mr-1">10</span>
      </div>
      <span className="text-small">یکشنبه 12 شهریور 1404</span>
    </div>
  );
};

export default BlogCardDate;
