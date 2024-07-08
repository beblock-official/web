"use client";
import { Avatar } from "@/components/@common/avatar";
import { ArrowBoxIcon } from "@/components/@icon/arrowbox";
import {
  FeedNews,
  FeedPost,
  FeedProfile,
  FeedProject,
  RightContentBox,
} from "@/components/app-based/feed";
export default function Feed() {
  return (
    <div className="flex relative px-16 py-10 gap-md">
      <div className="h-full overflow-auto flex-1 max-h-[1440px]">
        <div
          className="flex justify-between items-center bg-neutral-100 w-full p-2 rounded-lg sticky top-0"
          onClick={() => {
            alert("게시글 작성하기");
          }}
        >
          <div className="flex gap-sm items-center text-sm">
            <Avatar />
            게시글 작성하기
          </div>
          <ArrowBoxIcon color="primary" />
        </div>

        {/** feed contents */}
        <div className="flex flex-col gap-2 mt-3">
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </div>
      </div>
      <div className="sticky self-start w-[20rem] flex-none flex flex-col gap-4 lg:hidden">
        <RightContentBox
          title="추천 친구"
          contents={
            <>
              <FeedProfile />
              <FeedProfile />
              <FeedProfile />
            </>
          }
        />

        <RightContentBox
          title="많은 친구가 본 프로젝트"
          contents={
            <>
              <FeedProject />
              <FeedProject />
              <FeedProject />
            </>
          }
        />
        <RightContentBox title="지금 떠오르는 뉴스들" contents={<FeedNews />} />
      </div>
    </div>
  );
}
