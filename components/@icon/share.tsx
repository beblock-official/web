import classNames from "classnames";
export const ShareIcon: IconComponent = ({
  color = "default",
  filled = false,
  className,
  ...props
}) => {
  const colorClasses = {
    default: "text-text-003",
    primary: "text-text-primary",
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
        d="M10.7501 14.25L21.7501 3.25M10.7501 14.25L14.2501 21.25C14.2939 21.3457 14.3644 21.4269 14.453 21.4838C14.5417 21.5406 14.6448 21.5709 14.7501 21.5709C14.8554 21.5709 14.9585 21.5406 15.0471 21.4838C15.1358 21.4269 15.2062 21.3457 15.2501 21.25L21.7501 3.25M10.7501 14.25L3.75007 10.75C3.65433 10.7061 3.5732 10.6357 3.51632 10.5471C3.45944 10.4584 3.4292 10.3553 3.4292 10.25C3.4292 10.1447 3.45944 10.0416 3.51632 9.95295C3.5732 9.86431 3.65433 9.79387 3.75007 9.75L21.7501 3.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
