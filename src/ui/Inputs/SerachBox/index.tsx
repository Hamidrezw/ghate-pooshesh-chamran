"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBox = ({ placeHolder, onSearch }: { placeHolder: string; onSearch?: () => void }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState<string>(
    searchParams.get("search") || ""
  );

  const handleSearch = () => {
    if (!search.trim()) return;
    router.push(`/service?search=${search}`);
    if (onSearch) onSearch();
  };


  return (
    <div className="flex items-center w-full h-full">
      <div className="border-[1.5px] w-full h-[54px] border-border rounded-[10px] flex items-center bg-background-subtle px-4 py-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key == "Enter" && handleSearch()}
          className="focus:outline-none text-link placeholder:text-text-secondary w-full ml-2 pt-1"
          placeholder={placeHolder}
        />
        <svg
          className="cursor-pointer"
          onClick={handleSearch}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.58341 17.5C13.9557 17.5 17.5001 13.9556 17.5001 9.58335C17.5001 5.2111 13.9557 1.66669 9.58341 1.66669C5.21116 1.66669 1.66675 5.2111 1.66675 9.58335C1.66675 13.9556 5.21116 17.5 9.58341 17.5Z"
            stroke="#6C757D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3334 18.3334L16.6667 16.6667"
            stroke="#6C757D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBox;
