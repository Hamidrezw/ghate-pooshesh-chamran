import Link from "next/link";

export const navLinks : navLinksMod[] = [
    { slug: "", title: "خانه" },
    { slug: "service", title: "خدمات" },
    { slug: "blog", title: "وبلاگ" },
    { slug: "about_us", title: "درباره ما" },
    { slug: "contact_us", title: "تماس با ما" },
  ];
  

interface navLinksMod {
    title: string,
    slug: string,
}

const FooterLinks = () => {

    return(
        <div className="text-background flex flex-col gap-2 lg:gap-6 w-full">
            <h3 className="text-h3 select-none">لینک های مفید</h3>
            {navLinks?.map((data)=>(
                <Link href={`/${data.slug}`} key={data.slug} className="text-link">{data.title}</Link>
            ))}
        </div>
    ) 
}

export default FooterLinks;