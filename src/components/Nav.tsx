"use client";
import { FolderKanban, Home, Send, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const navData = [
    {
      name: "home",
      path: "/",
      icon: <Home />,
    },
    {
      name: "about",
      path: "/about",
      icon: <User />,
    },
    {
      name: "work",
      path: "/work",
      icon: <FolderKanban />,
    },
    {
      name: "contact",
      path: "/contact",
      icon: <Send />,
    },
  ];

  const pathName = usePathname();
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-between gap-y-10 px-8 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-primary/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`${link.path === pathName && "text-indigo-500"} relative flex items-center group hover:text-indigo-500 transition-all duration-300`}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-primary relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize text-accent">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-primary border-l-8 border-y-transparent border-y-0 border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
