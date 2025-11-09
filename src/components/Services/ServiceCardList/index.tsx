"use client";

import { useEffect, useState } from "react";
import CategoryCard from "@/components/Home/ServiceList/CategoryCard";
import Pagination from "./Pagination";
import { TService, TServiceList } from "@/models/Service";
import { fetchServiceList } from "@/lib/data";
import { useSearchParams, useRouter } from "next/navigation";
import { useScrollToTop } from "@/hooks/useScrollTop";

const ServiceCardList = ({ categorySlug }: { categorySlug?: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scrollToTop = useScrollToTop();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<TServiceList | null>(null);

  const search = searchParams.get("search") || "";
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const result = (await fetchServiceList({
          page: currentPage,
          search,
          category: categorySlug,
        })) as TServiceList;
        setData(result);
      } catch (error) {
        console.error("Error fetching service list:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [search, currentPage, categorySlug]);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
    scrollToTop();
  };

  const servicesList: TService[] = data?.results || [];
  const totalPages = data?.page_count || 0;

  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="w-full mt-4 h-20 lg:h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      ) : data && servicesList.length > 0 ? (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {servicesList.map((item, i) => (
              <CategoryCard data={item} key={i} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </>
      ) : (
        <div className="w-full h-full mt-3 flex items-center justify-center text-h1-display text-primary">
          خدماتی یافت نشد...
        </div>
      )}
    </div>
  );
};

export default ServiceCardList;
