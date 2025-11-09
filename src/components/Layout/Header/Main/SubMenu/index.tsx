"use client";
import Arrow from "@/components/Svgs/Arrow";
import { fetchCategoryList } from "@/lib/data";
import { TCategory } from "@/models/Category";
import Link from "next/link";
import { useEffect, useState } from "react";

const SubMenu = () => {
  const [showSubCategories, setShowSubCategories] = useState<boolean>(false);
  const [subCategories, setSubCategories] = useState<TCategory[]>([] as TCategory[]);
  const [categories, setCategories] = useState<TCategory[]>([] as TCategory[]);
  
  const handleOpen = (subcategories: TCategory[]) => {
    if (subcategories?.length > 0) {
      setShowSubCategories(true);
      setSubCategories(subcategories);
    } else {
      setShowSubCategories(false);
      setSubCategories([]);
    }
  };

  const handleClose = () => {
    setShowSubCategories(false);
    setSubCategories([]);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data: TCategory[] = (await fetchCategoryList({
          main: true,
          child: true,
        })) as TCategory[];
        setCategories(data);
      } catch (error) {
        console.log("error fetching header submenu categories", error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div 
    className="bg-background border-[1px] border-primary-light text-button flex rounded-[10px] shadow-[1px_1px_3px_rgba(0,0,0,0.15)] h-fit w-fit p-2"
      onMouseLeave={handleClose}
    >

      <div className="flex flex-col gap-2 w-30">
        {categories?.map((data, i) => (
          <Link href={`/${data.slug}`} key={i} className="flex items-center justify-around hover:text-primary" onMouseOver={()=>handleOpen(data?.children)}>
            {data.title}
            {data?.children?.length > 0 && (
              <Arrow size="small" color="currentColor" position="left" />
            )}
          </Link>
        ))}
      </div>
      {showSubCategories &&
      <div className="flex flex-col gap-2 mr-2 w-30 overflow-y-hidden">
        {subCategories?.map((data, i)=>(
          <Link href={`/${data?.slug}`} key={i} className="hover:text-primary">
            {data?.title}
          </Link>
        ))}
      </div>
      }
    </div>
  );
};

export default SubMenu;
