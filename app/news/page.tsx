"use client";

import { Chip } from "@/components/@common/chip";
import { SearchIcon } from "@/components/@icon/search";
import { ShapeIcon } from "@/components/@icon/shape";
import { ComponentProps, useState } from "react";
import classNames from "classnames";
export default function News() {
  return (
    <div className="overflow-y-auto flex justify-end pl-[20rem] lg:pl-0">
      {/** search bar */}
      <div className="fixed left-[18rem] z-10 w-80 min-w-72 h-full bg-neutral-100 p-6 flex flex-col gap-8 lg:w-auto lg:h-[fit-content] ">
        <div className="flex justify-between">
          <h3>Search</h3>
          <button className="btn bg-white hover:bg-neutral-50 flex gap-sm !font-normal">
            <ShapeIcon color="text-003" />
            내가 저장한 뉴스
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex bg-white rounded-full px-3 py-1.5">
            <SearchIcon />
            <input placeholder="태그나 키워드로 검색" />
          </div>
          <div className="flex flex-wrap gap-1.5 lg:hidden">
            {[
              "BitCoin",
              "BlockChain",
              "Ethereum",
              "Defi",
              "AltCoin",
              "Regulation",
              "NFT",
              "Metaverse",
            ].map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4>popular searches</h4>
          <div className="flex flex-wrap gap-1.5">
            {[
              "xrp",
              "bitcoin",
              "halving",
              "dogecoin",
              "neo",
              "Regulation",
              "NFT",
              "Metaverse",
            ].map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </div>
      </div>

      {/** news section */}
      <div className="flex flex-col gap-10 flex-auto px-16 py-10 h-full lg:w-auto lg:p-8 lg:pt-[calc(310px+2rem)]">
        <h2 className="flex-none">지금 떠오르는 뉴스들</h2>
        <div className="w-[100%] max-w-100% flex-none">
          <div className="flex gap-1 overflow-x-auto">
            <div className="flex-none">
              <HotNews />
            </div>
            <div className="flex-none">
              <HotNews />
            </div>
            <div className="flex-none">
              <HotNews />
            </div>
            <div className="flex-none">
              <HotNews />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
}

const SaveIconButton = ({ className, ...props }: ComponentProps<"span">) => {
  const [filled, setFilled] = useState(false);
  return (
    <span
      className={classNames("bg-[#00000080] p-[6px] rounded-lg", className)}
      onClick={() => setFilled(!filled)}
      {...props}
    >
      <ShapeIcon width={20} height={20} filled={filled} />
    </span>
  );
};

const HotNews = () => {
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

const NewsCard = () => {
  return (
    <div className="flex-none flex w-full gap-lg max-h-[186px]">
      <div className="relative flex-none min-w-[186px] min-h-[186px]">
        <img
          className="rounded-xl"
          src="https://picsum.photos/186/186"
          alt="news card image"
        />
        <SaveIconButton className="absolute bottom-4 right-4" />
      </div>

      <div className="py-6 h-auto max-h-inherit">
        <h3 className="mb-1">title</h3>
        <p className="font-light overflow-v-ellipsis">
          The one-stop product design tool amplified by AI The one-stop product
          design tool ampliy AIThe one-stop product design tool amplified by
          AIThe one-stop product design tool amplified by AI The one-stop
          product design tool
        </p>
        <span className="date font-thin text-sm">03.21 2024</span>
      </div>
    </div>
  );
};
