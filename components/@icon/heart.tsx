import classNames from "classnames";
export const HeartIcon: IconComponent = ({
  filled,
  color = "default",
  className,
  ...props
}) => {
  const colorClasses = {
    default: "text-text-003",
    primary: "text-primary",
  };
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(
        className,
        colorClasses?.[color as keyof typeof colorClasses]
      )}
      {...props}
    >
      <path
        d="M4.70067 14.1582L11.6533 20.6895C11.8928 20.9144 12.0125 21.0269 12.1537 21.0546C12.2173 21.0671 12.2827 21.0671 12.3463 21.0546C12.4875 21.0269 12.6072 20.9144 12.8467 20.6895L19.7993 14.1582C21.7555 12.3206 21.993 9.2966 20.3478 7.17607L20.0385 6.77734C18.0703 4.24058 14.1196 4.66601 12.7367 7.56365C12.5413 7.97296 11.9587 7.97296 11.7633 7.56365C10.3804 4.66601 6.42972 4.24058 4.46154 6.77735L4.15219 7.17607C2.50695 9.2966 2.7445 12.3206 4.70067 14.1582Z"
        stroke="currentColor"
        fill={filled ? "currentColor" : "none"}
        strokeWidth="2"
      />
    </svg>
  );
};
