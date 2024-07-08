export const ArrowBoxIcon: IconComponent = ({
  color = "default",
  filled = false,
  ...props
}) => {
  const colorClasses = {
    default: "stroke-text-004",
    primary: "stroke-white",
  };

  const bgColorClasses = {
    default: "fill-[#eeeeee]",
    primary: "fill-primary",
  };

  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 12.5C21 19.7 19.2 21.5 12 21.5C4.8 21.5 3 19.7 3 12.5C3 5.3 4.8 3.5 12 3.5C19.2 3.5 21 5.3 21 12.5Z"
        className={bgColorClasses?.[color as keyof typeof bgColorClasses]}
      />
      <path
        d="M12 16.5L16 12.5M16 12.5L12 8.5M16 12.5H8"
        className={colorClasses?.[color as keyof typeof colorClasses]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
