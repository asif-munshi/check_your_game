"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollToTop from "./ScrollToTop";

const socials = [
  {
    id: 1,
    link: "https://www.facebook.com/",
    icon: "/social/facebook-icon.png",
    alt: "Facebook Icon",
    sr: "Facebook",
  },
  {
    id: 2,
    link: "https://www.twitter.com/",
    icon: "/social/twitter-icon.png",
    alt: "Twitter Icon",
    sr: "Twitter",
  },
  {
    id: 3,
    link: "https://www.reddit.com/",
    icon: "/social/reddit-icon.svg",
    alt: "Reddit Icon",
    sr: "Reddit",
  },
  {
    id: 4,
    link: "https://www.github.com/",
    icon: "/social/github-mark-white.svg",
    alt: "Github Icon",
    sr: "Github",
  },
];

export default function Footer() {
  const currentYear = new Date();
  return (
    <footer className="w-full">
      <div className="flex flex-col gap-4 bg-[#2a2a2a] px-[4.5rem] pb-10 pt-5 font-sans">
        <div className="flex justify-between">
          <div className="px-[15px]">
            <div className="mt-[1em] flex flex-row gap-4 text-white">
              {socials.map((social) => (
                <Link key={social.id} target="_blank" href={social.link}>
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={28}
                    height={28}
                    priority
                    className="bg-transparent transition duration-300 ease-in-out hover:opacity-80"
                    style={{ width: 28, height: 28 }}
                  />
                  <span className="sr-only">{social.sr}</span>
                </Link>
              ))}
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
              className="text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-[#007aff]"
            >
              CYG
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
