import classNames from "classnames";
export const EditIcon: IconComponent = ({
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
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(
        className,
        colorClasses?.[color as keyof typeof colorClasses]
      )}
      {...props}
    >
      <path
        d="M12.3081 2.19167C11.9793 1.85857 11.5307 1.67107 11.0627 1.67107C10.5946 1.67107 10.1461 1.85857 9.81727 2.19167L8.69727 3.32917L11.1706 5.8025L12.2906 4.6825C12.626 4.35603 12.8167 3.9088 12.82 3.44074C12.8232 2.97268 12.6389 2.52282 12.3081 2.19167Z"
        fill="currentColor"
      />
      <path
        d="M7.86896 4.1575L2.9748 9.05167C2.93092 9.09678 2.89361 9.14783 2.86396 9.20333L1.2423 12.4758C1.14662 12.6555 1.1515 12.872 1.25516 13.0472C1.35882 13.2223 1.54628 13.3308 1.7498 13.3333C1.83868 13.3337 1.92647 13.3137 2.00646 13.275L5.27896 11.6533C5.33447 11.6237 5.38552 11.5864 5.43063 11.5425L10.3248 6.64833L7.86896 4.1575Z"
        fill="currentColor"
      />
      <path
        d="M12.2493 13.3333H6.99935C6.67718 13.3333 6.41602 13.0722 6.41602 12.75C6.41602 12.4278 6.67718 12.1667 6.99935 12.1667H12.2493C12.5715 12.1667 12.8327 12.4278 12.8327 12.75C12.8327 13.0722 12.5715 13.3333 12.2493 13.3333Z"
        fill="currentColor"
      />
    </svg>
  );
};
