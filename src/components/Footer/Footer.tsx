import Link from "next/link";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  const currentYear = new Date();
  return (
    <footer className="w-full">
      <div className="flex flex-col gap-4 bg-[#2a2a2a] px-[4.5rem] pb-10 pt-5 font-sans">
        <div className="flex justify-between">
          <div className="px-[15px]">
            <div className="mt-[1em] flex flex-row gap-4 text-white">
              <Link
                target="_blank"
                href={"https://www.facebook.com/"}
                className="transition-colors duration-300 ease-in-out hover:text-[#007aff]"
              >
                IFacebook
              </Link>
              <Link target="_blank" href={"https://www.twitter.com/"}>
                ITwitter
              </Link>
              <Link target="_blank" href={"https://www.reddit.com/"}>
                IReddit
              </Link>
              <Link target="_blank" href={"https://www.github.com/"}>
                IGitHub
              </Link>
            </div>
          </div>
          <div>
            <ScrollToTop />
          </div>
        </div>
        <div className="p-[1em] text-white">
          <div className="w-1/2 text-[0.71em] leading-[2em]">
            {`© ${currentYear.getFullYear()}, Check Your Game. All rights reserved.`}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-row gap-4 px-[15px] text-sm text-white">
            <Link
              href={"#"}
              className="transition-colors duration-200 ease-in-out hover:text-[#007aff]"
            >
              Terms of Service
            </Link>
            <Link
              href={"#"}
              className="transition-colors duration-200 ease-in-out hover:text-[#007aff]"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="text-white">
            <Link
              href={"/"}
              className="transition-colors duration-300 ease-in-out hover:text-[#007aff]"
            >
              CYG
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
