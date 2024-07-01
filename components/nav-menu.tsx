"use client";

import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";
export const NavMenu = ({
  title,
  imgSrc,
  href,
}: ComponentProps<"li"> & {
  title: string;
  imgSrc: string;
  href: string;
}) => {
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
