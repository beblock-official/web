"use client";
import { useState, type ComponentProps } from "react";
import classNames from "classnames";
import { ShapeIcon } from "@/components/@icon/shape";
import { Contents } from "@/components/@common/contents";
import Image from "next/image";
export const SaveIconButton = ({
  className,
  ...props
}: ComponentProps<"span">) => {
  const [filled, setFilled] = useState(false);
  return (
    <span
      className={classNames("bg-[#00000080] p-[6px] rounded-lg", className)}
      onClick={() => setFilled(!filled)}
      {...props}
    >
      <ShapeIcon width={20} height={20} filled={filled} color="white" />
    </span>
  );
};

export const HotNews = () => {
  return (
    <div className="bg-[url(https://picsum.photos/480/304)] bg-no-repeat bg-cover w-[480px] h-[304px] rounded-xl flex flex-col justify-end text-white px-6 py-7 relative">
      <SaveIconButton className="absolute top-6 right-6" />
      <h3 className="mb-1">title</h3>
      <p className="font-light overflow-v-ellipsis">
        The one-stop product design tool amplified by AI The one-stop product
        design tool ampliy AIThe one-stop product design tool amplified by AIThe
        one-stop product design tool amplified by AI The one-stop product design
        tool
      </p>
      <span className="date font-thin text-sm">03.21 2024</span>
    </div>
  );
};

export const NewsCard = () => {
  return (
    <div className="flex-none flex w-full gap-lg max-h-[186px]">
      <div className="w-[186px] h-[186px] relative flex-none">
        <Image
          width={186}
          height={186}
          className="rounded-xl"
          src="https://picsum.photos/186/186"
          alt="news card image"
        />
        <SaveIconButton className="absolute bottom-4 right-4" />
      </div>
      <Contents />
    </div>
  );
};
