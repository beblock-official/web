import classNames from "classnames";

export const CommentIcon: IconComponent = ({
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
        d="M4.75137 18.9083L5.49868 16.6663C5.59699 16.3714 5.55254 16.0475 5.37841 15.79C4.40001 14.3429 4.05513 12.6471 4.38634 11.0108C4.71818 9.37138 5.71441 7.86603 7.22839 6.79195C8.74448 5.71636 10.6655 5.1567 12.6336 5.2365C14.6017 5.3163 16.4526 6.02873 17.8463 7.21747C19.2375 8.40402 20.0726 9.97681 20.2348 11.6326C20.3969 13.2867 19.8806 14.9522 18.7522 16.3212C17.6208 17.6938 15.9471 18.6762 14.0275 19.0565C12.1076 19.4368 10.1009 19.1827 8.38673 18.3505C8.18651 18.2533 7.95959 18.2257 7.74189 18.272L4.75137 18.9083Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
