declare type IconComponent = (
  props: {
    color?: string;
    filled?: boolean;
  } & import("react").ComponentProps<"svg">
) => SVGProps<SVGSVGElement>;
