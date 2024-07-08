"use client";
import { Avatar } from "@/components/@common/avatar";
import { Contents } from "@/components/@common/contents";
import { PostStatistic } from "@/components/@common/post-statistic";
import { CommentIcon } from "@/components/@icon/comment";
import { HeartIcon } from "@/components/@icon/heart";
import { RepostIcon } from "@/components/@icon/repost";
import { ShareIcon } from "@/components/@icon/share";
import classNames from "classnames";
import Image from "next/image";
import type { ReactNode } from "react";
export const RightContentBox = ({
  title,
  contents,
}: {
  title: string;
  contents?: ReactNode;
}) => {
  return (
    <div className="bg-neutral-100 rounded-xl px-4 py-6 flex flex-col gap-2">
      <h5 className="font-bold mb-1">{title}</h5>
      {contents}
    </div>
  );
};

export const FeedProfile = ({
  avatarSize = "sm",
}: {
  avatarSize?: "sm" | "md" | "lg";
}) => {
  const sizeClasses = {
    sm: undefined,
    md: "!w-10 !h-10",
    lg: "!w-12 !h-12",
  };
  return (
    <div className="flex gap-3 items-center">
      <Avatar className={classNames("flex-none", sizeClasses[avatarSize])} />
      <div>
        <h6 className="font-medium">The one-stop</h6>
        <p className="text-sm text-text-003 overflow-v-ellipsis line-1">
          Machine Learning Engineer
        </p>
      </div>
    </div>
  );
};

export const FeedProject = () => {
  return (
    <div className="bg-white rounded-lg p-3 flex gap-2 items-center">
      <Image
        width={80}
        height={80}
        className="rounded-md w-10 h-10 flex-none"
        src="https://picsum.photos/80/80"
        alt="news card image"
      />
      <div className="h-full">
        <h4 className="text-[18px] font-bold">Impler</h4>
        <PostStatistic />
      </div>
    </div>
  );
};

export const FeedNews = () => {
  return (
    <div>
      <Image
        width={200}
        height={200}
        className="rounded-xl w-full max-h-[156px]"
        src="https://picsum.photos/200/200"
        alt="news card image"
      />
      <Contents
        className="pb-0"
        titleClasses="text-md font-bold"
        descClasses="line-2 text-sm"
        dateClasses="text-xs"
      />
    </div>
  );
};

export const FeedPost = () => {
  return (
    <div className="overflow-hidden">
      <FeedProfile avatarSize="lg" />
      <Contents titleClasses="text-md font-bold mb-2" descClasses="mb-4" />
      <Image
        width={400}
        height={300}
        className="w-full min-h-72 max-h-72"
        src="https://picsum.photos/400/300"
        alt="news card image"
      />
      <div className="grid grid-cols-4 my-3.5 text-sm text-center first:border-none [&_p:not(:first-of-type)]:border-l [&_p:not(:first-of-type)]:border-l-1 [&_p:not(:first-of-type)]:border-neutral-300">
        <p className="flex justify-center items-center gap-0.5 cursor-pointer xl:flex-col xl:text-xs">
          <HeartIcon className="lg:w-5" /> <span>like</span>
        </p>
        <p className="flex justify-center items-center gap-0.5 cursor-pointer xl:flex-col xl:text-xs">
          <CommentIcon className="lg:w-5" /> <span>comment</span>
        </p>
        <p className="flex justify-center items-center gap-0.5 cursor-pointer xl:flex-col xl:text-xs">
          <RepostIcon className="lg:w-5" /> <span>repost</span>
        </p>
        <p className="flex justify-center items-center gap-0.5 cursor-pointer xl:flex-col xl:text-xs">
          <ShareIcon className="lg:w-5" /> <span>share</span>
        </p>
      </div>
    </div>
  );
};
