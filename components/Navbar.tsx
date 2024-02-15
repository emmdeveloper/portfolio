"use client";
import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from "next-themes";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [dropDown, setDropDown] = useState<Boolean>(false);
  const pathName = usePathname();
  const { theme } = useTheme();
  const links = [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  return (
    <header className="fixed top-0 left-0 -0 w-full z-40 bg-transparent backdrop-blur-lg">
      <nav className="wrapper flex justify-between items-center px-6 py-3">
        <div>
          {theme === "light" ? (
            <Link href={"/"}>
              <img src="/project_img/dark.png" alt="v" className="w-[37px]" />
            </Link>
          ) : (
            <Link href={"/"}>
              <img src="/project_img/light.png" alt="v" className="w-[37px]" />
            </Link>
          )}
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {links.map((link, i) => (
              <li
                key={i}
                className={
                  link.href === pathName
                    ? `bg-tertiary px-4 py-2 rounded-md`
                    : ``
                }
              >
                <Link href={link.href} className="text-sm text-secondary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="block lg:hidden relative ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            onClick={() => setDropDown((prev) => !prev)}
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="block z-50 relative my-auto lg:hidden">
          {dropDown && (
            <div className="navMenu bg-tertiary drop-shadow-lg">
              <ul className="flex flex-col items-center p-10 gap-8">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className=""
                      onClick={() => setDropDown((prev) => !prev)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <XMarkIcon
                className="w-[24px] absolute top-5 right-5"
                onClick={() => setDropDown((prev) => !prev)}
              />
            </div>
          )}
        </div>
        <div className="relative">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
