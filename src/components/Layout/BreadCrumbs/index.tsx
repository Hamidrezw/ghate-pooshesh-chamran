import Arrow from "@/components/Svgs/Arrow";
import Link from "next/link";

const BreadCrumbs = ({
  breadcrumbs,
}: {
  breadcrumbs: Array<{ title: string; link?: string; isCurrent?: boolean }>;
}) => {
    
  return (
    <nav
      role="navigation"
      aria-label="Breadcrumbs"
      className="mt-8 lg:mb-11 mb-5"
    >
      <div className="bf-breadcrumb-container p-0">
        <ul
          className="flex [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-nowrap gap-4 lg:gap-6 items-center list-none overflow-x-auto p-0 m-0"
          itemScope
          itemType="http://schema.org/BreadcrumbList"
        >
          <meta name="numberOfItems" content={`${breadcrumbs.length + 1}`} />
          <meta name="itemListOrder" content="Ascending" />

          <li
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/ListItem"
            className="flex gap-4 lg:gap-6 items-center whitespace-nowrap"
          >
            <Link href="/" passHref itemProp="item">
              <p className="text-link text-text-secondary" itemProp="name">
                قطعه پوشش چمران
              </p>
            </Link>
            <meta itemProp="position" content="1" />
            <Arrow color="text-secondary" position="left" size="big" />
          </li>

          {breadcrumbs.map((breadcrumb, index) => (
            <li
              style={{ listStyle: "none" }}
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
              className="flex lg:gap-6 gap-4 items-center whitespace-nowrap"
            >
              {breadcrumb.isCurrent ? (
                <span
                  className="text-link text-text-secondary"
                  itemProp="name"
                  aria-current="page"
                >
                  {breadcrumb.title}
                </span>
              ) : (
                <>
                  <Link href={breadcrumb.link || "#"} passHref itemProp="item">
                    <p className="text-link text-text-secondary mt-0.5" itemProp="name">
                      {breadcrumb.title}
                    </p>
                  </Link>
                  {index !== breadcrumbs.length - 1 && <Arrow color="text-secondary" position="left" size="big" />}
                </>
              )}
              <meta itemProp="position" content={`${index + 2}`} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default BreadCrumbs;
