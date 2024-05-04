"use client";

import rouets from "@/constants/routes";
import { useRouter } from "next/router";
import React from "react";
interface SearchBarProps {}
const SearchBar: React.FC<SearchBarProps> = () => {
  const router = useRouter();
  return (
    <input
      onChange={(e) => {
        console.log("value", typeof e?.target?.value);
        if (e?.target?.value?.length >= 3) {
          router.replace(
            {
              pathname: rouets.home,
              query: {
                search: e?.target?.value, // override the color property
              },
            },
            undefined,
            {
              shallow: true,
            }
          );
        } else if (e?.target?.value === "") {
          router.replace(rouets.home, undefined, { shallow: true });
        }
      }}
      className="p-2 pl-2 pr-0 md:visible invisible   outline-none border border-gray-500 rounded-xl  active:outline-none focus:outline-none"
      placeholder="search"
    />
  );
};
export default SearchBar;
