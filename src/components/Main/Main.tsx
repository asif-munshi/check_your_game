"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Search from "./Search";

export default function Main() {
  const pathname = usePathname();
  return (
    <main className="sticky z-[999] flex h-[100px] w-full justify-center py-4">
      <div className="w-9/12">
        <div className="flex h-full w-full flex-row items-center justify-start gap-8 text-[14px] text-[#f5f5f5]">
          <Search />
          <Link
            href={"/discover"}
            className={`${
              pathname.includes("/discover")
                ? "opacity-100"
                : "opacity-50 transition-colors duration-150 ease-in-out hover:opacity-100"
            }`}
          >
            Discover
          </Link>
          <Link
            href={"/browse"}
            className={`${
              pathname.includes("/browse")
                ? "opacity-100"
                : "opacity-50 transition-colors duration-150 ease-in-out hover:opacity-100"
            }`}
          >
            Browse
          </Link>
          <Link
            href={"/news"}
            className={`${
              pathname.includes("/news")
                ? "opacity-100"
                : "opacity-50 transition-colors duration-150 ease-in-out hover:opacity-100"
            }`}
          >
            News
          </Link>
        </div>
      </div>
    </main>
  );
}
