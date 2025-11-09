"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TitleLine from "@/components/Layout/TitleLine";
import Image from "next/image";
import Pagination from "@/components/Services/ServiceCardList/Pagination";
import GallerySvg from "@/components/Svgs/Gallery";
import GallerySlider from "./Slider";
import { TGallery, TGalleryList } from "@/models/Gallery";
import { fetchGalleryList } from "@/lib/data";

const Gallery = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const [galleryList, setGalleryList] = useState<TGallery[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const getGallery = async () => {
      try {
        const data = (await fetchGalleryList({
          page: currentPage,
        })) as TGalleryList;
        setGalleryList(data.result || []);
        setTotalPages(data.page_count || 0);
      } catch (error) {
        console.error("error fetching gallery:", error);
      }
    };
    getGallery();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  if (galleryList && galleryList.length > 0) {
    return (
      <div className="w-full mt-10 lg:mt-16">
        <TitleLine data={{ title: "گالری کارخانه", size: "big" }} />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-12 mt-1.5 mb-6 lg:mb-12">
          {galleryList.map((item, i) => (
            <div
              key={item.id}
              className="relative h-[120px] lg:h-[220px] rounded-[10px] lg:rounded-[15px] overflow-hidden cursor-pointer"
              onClick={() => {
                setSelectedIndex(i);
                setIsOpen(true);
              }}
            >
              {item.media_type === "picture" ? (
                <Image
                  src={process.env.NEXT_PUBLIC_SERVER_URL + item.file}
                  alt={item.title || ""}
                  fill
                  className="object-cover"
                />
              ) : (
                <video controls className="w-full h-full object-cover">
                  <source
                    src={process.env.NEXT_PUBLIC_SERVER_URL + item.file}
                    type="video/mp4"
                  />
                </video>
              )}

              <div className="absolute inset-0 bg-text-secondary/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <GallerySvg />
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}

        {isOpen && (
          <GallerySlider
            setIsOpen={setIsOpen}
            selectedIndex={selectedIndex}
            data={galleryList}
          />
        )}
      </div>
    );
  }
};

export default Gallery;
