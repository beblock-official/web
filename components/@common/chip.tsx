import type { PropsWithChildren } from "react";
export const Chip = ({ children }: PropsWithChildren) => {
  return (
    <span className="inline-block min-w-[fit-content] text-text-003 bg-neutral-100 border-solid border border-text-004 rounded-3xl px-3 py-1 cursor-pointer">
      {children}
    </span>
  );
};
