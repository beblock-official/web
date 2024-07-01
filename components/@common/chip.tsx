import type { PropsWithChildren } from "react";
export const Chip = ({ children }: PropsWithChildren) => {
  return (
    <span className="bg-neutral-100 border-solid border border-text-004 rounded-3xl px-3 py-1 cursor-pointer">
      {children}
    </span>
  );
};
