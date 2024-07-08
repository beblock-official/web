import classNames from "classnames";
export const RepostIcon: IconComponent = ({
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
        d="M20.75 6L21.4571 6.70711L22.1642 6L21.4571 5.29289L20.75 6ZM4.75 11C4.75 11.5523 5.19771 12 5.75 12C6.30229 12 6.75 11.5523 6.75 11H4.75ZM17.4571 10.7071L21.4571 6.70711L20.0429 5.29289L16.0429 9.29289L17.4571 10.7071ZM21.4571 5.29289L17.4571 1.29289L16.0429 2.70711L20.0429 6.70711L21.4571 5.29289ZM20.75 5L9.75 5V7L20.75 7V5ZM4.75 10V11H6.75V10H4.75ZM9.75 5C6.98858 5 4.75 7.23858 4.75 10H6.75C6.75 8.34315 8.09315 7 9.75 7V5Z"
        fill="currentColor"
      />
      <path
        d="M4.75 17.2495L4.04289 16.5424L3.33579 17.2495L4.04289 17.9566L4.75 17.2495ZM20.75 12.2495C20.75 11.6972 20.3023 11.2495 19.75 11.2495C19.1977 11.2495 18.75 11.6972 18.75 12.2495H20.75ZM8.04289 12.5424L4.04289 16.5424L5.45711 17.9566L9.45711 13.9566L8.04289 12.5424ZM4.04289 17.9566L8.04289 21.9566L9.45711 20.5424L5.45711 16.5424L4.04289 17.9566ZM4.75 18.2495H15.75V16.2495H4.75V18.2495ZM20.75 13.2495V12.2495H18.75V13.2495H20.75ZM15.75 18.2495C18.5114 18.2495 20.75 16.0109 20.75 13.2495H18.75C18.75 14.9064 17.4069 16.2495 15.75 16.2495V18.2495Z"
        fill="currentColor"
      />
    </svg>
  );
};
