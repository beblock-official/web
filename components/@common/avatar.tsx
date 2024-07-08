import classNames from "classnames";
import { ComponentProps } from "react";
export const Avatar = ({ className, ...props }: ComponentProps<"img">) => {
  return (
    <img
      className={classNames(
        "w-8 h-8 border-2 border-white rounded-full dark:border-gray-800",
        className
      )}
      src="https://picsum.photos/100/100"
      alt="Avatar Image"
      {...props}
    />
  );
};
