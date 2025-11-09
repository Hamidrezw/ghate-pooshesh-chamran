import Image from "next/image";
import BlogCardDate from "./Date";
import Link from "next/link";
import { TBlog } from "@/models/Blog";

const BlogCard = ({ data }: { data: TBlog }) => {
  return (
    <Link href={`/blog/${data.slug}`}>
      <div className="border-primary-light lg:border-border border-[1px] lg:border-[2.5px] bg-background hover:bg-primary hover:text-background transition-all duration-300 w-full rounded-[15px] lg:rounded-[25px] p-2 h-full">
        <div className="relative w-full h-[110px] lg:h-[145px]">
          <Image
            src={
              data?.image && data?.image != "None"
                ? process.env.NEXT_PUBLIC_SERVER_URL + data?.image
                : "/images/no-image.png"
            }
            className="rounded-[10px] lg:rounded-[20px]"
            alt=""
            fill
          />
        </div>
        <h4 className="text-h4 mt-4 mx-2 line-clamp-1">{data?.title}</h4>
        <p className="text-body mx-2 line-clamp-3">{data?.introduction}</p>
        <BlogCardDate color="currentColor" />
      </div>
    </Link>
  );
};

export default BlogCard;
