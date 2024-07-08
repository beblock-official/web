import type { ComponentProps, PropsWithChildren } from "react";
import classNames from "classnames";
export const Chip = ({
  children,
  className,
}: PropsWithChildren & ComponentProps<"span">) => {
  return (
    <span
      className={classNames(
        "inline-block min-w-[fit-content] text-text-003 bg-neutral-100 border-solid border border-text-004 rounded-3xl px-3 py-1 cursor-pointer",
        className
      )}
    >
      {children}
    </span>
  );
};
