import classNames from "classnames";
import Image from "next/image";
import { ComponentProps } from "react";
export const Avatar = ({ className, ...props }: ComponentProps<"img">) => {
  return (
    <Image
      className={classNames(
        "w-8 h-8 border-2 border-white rounded-full dark:border-gray-800",
        className
      )}
      src="https://picsum.photos/100/100"
      alt="Avatar Image"
      {...props}
      width={100}
      height={100}
    />
  );
};
