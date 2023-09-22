import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex flex-col gap-4 bg-[#2a2a2a] px-[4.5rem] py-4">
        <div className="flex justify-between">
          <div className="flex flex-row gap-4 px-[15px] text-sm text-white">
            <Link
              href={"/"}
              className="text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-[#007aff]"
            >
              CYG
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
