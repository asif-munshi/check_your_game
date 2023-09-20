"use client";

import { ChevronUpIcon } from "@heroicons/react/24/outline";

export default function ScrollToTop() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      <ChevronUpIcon
        className="h-8 w-8 cursor-pointer rounded border-2 border-[#ccc] bg-transparent text-white transition-colors duration-300 ease-in-out hover:border-[#007aff] hover:text-[#007aff]"
        onClick={goToTop}
        strokeWidth={2}
      />
    </div>
  );
}
