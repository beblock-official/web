"use client";

import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  return (
    <nav className="w-72 min-w-72 h-full bg-primary p-4 flex flex-col justify-between">
      <div>
        <div className="text-white p-4 text-xl mb-11">LOGO</div>
        <ul className="font-bold flex flex-col gap-3">
          <NavMenu title="Project" imgSrc="/nav_project.svg" href="/" />
          <NavMenu title="Feed" imgSrc="/nav_feed.svg" href="/feed" />
          <NavMenu title="News" imgSrc="/nav_news.svg" href="/news" />
          <NavMenu title="Profile" imgSrc="/nav_profile.svg" href="/profile" />
        </ul>
      </div>
      <ul className="row-span-2 text-white text-sm flex flex-col gap-3">
        <li className="p-4 font-thin">About</li>
        <li className="p-4 font-thin">Contacts</li>
        <li className="p-4 font-thin">Terms & Privacy</li>
      </ul>
    </nav>
  );
};

export const NavMenu = ({ title, imgSrc, href }: NavMenuProps) => {
  const pathname = usePathname();
  const colorClasses = {
    default: "text-white",
    selected: "bg-white text-primary",
  };

  return (
    <Link href={href}>
      <li
        className={`p-2 flex gap-3 items-center rounded-2xl cursor-pointer hover:bg-white hover:text-primary ${
          pathname === href ? colorClasses.selected : colorClasses.default
        }`}
      >
        <Image
          src={imgSrc}
          alt={title + " Logo"}
          className="dark:invert"
          width={32}
          height={32}
          priority
        />
        {title}
      </li>
    </Link>
  );
};

type NavMenuProps = ComponentProps<"li"> & {
  title: string;
  imgSrc: string;
  href: string;
};
