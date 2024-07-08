import classNames from "classnames";
import { ComponentProps } from "react";

export const Contents = ({
  title,
  desc,
  date,
  titleClasses,
  descClasses,
  dateClasses,
  className,
}: {
  title?: string;
  desc?: string;
  date?: string;
  titleClasses?: string;
  descClasses?: string;
  dateClasses?: string;
} & ComponentProps<"div">) => {
  return (
    <div className={classNames("py-4 h-auto max-h-inherit", className)}>
      <h3 className={classNames("mb-1", titleClasses)}>{title ?? "title"}</h3>
      <p className={classNames("font-light overflow-v-ellipsis", descClasses)}>
        {desc ??
          `The one-stop product design tool amplified by AI The one-stop product
        design tool ampliy AIThe one-stop product design tool amplified by AIThe
        one-stop product design tool amplified by AI The one-stop product design
        tool`}
        {/** TODO Read More 만들기 */}
      </p>
      <span className={classNames("date font-thin text-sm", dateClasses)}>
        {date ?? "03.21 2024"}
      </span>
    </div>
  );
};
