"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search() {
  return (
    <div className="flex h-[40px] w-[230px] items-center justify-start gap-4 rounded-full bg-[#2a2a2a] px-4">
      <MagnifyingGlassIcon className="h-[12.75px] w-[12.75px]" />
      <input
        className="w-full border-none bg-transparent text-white outline-none focus:border-none focus-visible:border-none"
        type="search"
        placeholder="Search"
      />
    </div>
  );
}
