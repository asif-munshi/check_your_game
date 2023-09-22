import Link from "next/link";
import Search from "./Search";

export default function Main() {
  return (
    <main className="sticky z-[999] flex h-[100px] w-full justify-center">
      <div className="w-9/12">
        <div className="flex h-full w-full flex-row items-center justify-start gap-8 text-[14px] text-[#f5f5f5]">
          <Search />
          <Link
            href={"/"}
            className="opacity-80 transition-colors duration-150 ease-in-out hover:opacity-100"
          >
            Discover
          </Link>
          <Link
            href={"#"}
            className="opacity-80 transition-colors duration-150 ease-in-out hover:opacity-100"
          >
            Browse
          </Link>
          <Link
            href={"#"}
            className="opacity-80 transition-colors duration-150 ease-in-out hover:opacity-100"
          >
            News
          </Link>
        </div>
      </div>
    </main>
  );
}
