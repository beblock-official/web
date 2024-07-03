export const SearchIcon: IconComponent = ({ color = "default", ...props }) => {
  const colorClasses = {
    default: "text-text-003",
    primary: "bg-primary text-white",
  };

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={colorClasses?.[color as keyof typeof colorClasses]}
      {...props}
    >
      <rect width="32" height="32" rx="16" fill="none" />
      <circle
        cx="15.1107"
        cy="15.1111"
        r="5.33333"
        stroke="currentColor"
        strokeWidth="1.33333"
      />
      <path
        d="M23.1112 21.3333L19.5557 18.6667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
      />
    </svg>
  );
};
