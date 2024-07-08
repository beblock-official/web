"use client";

import Image from "next/image";
import { Transition } from "@headlessui/react";
import {
  type SetStateAction,
  createContext,
  useContext,
  useState,
  type Dispatch,
} from "react";
import { Chip } from "@/components/@common/chip";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <SearchContext.Provider value={{ open, setOpen }}>
      <header className="sticky top-0 z-20 bg-white px-12 py-4 w-full grid grid-cols-12">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="w-min-[max-content] search-bar col-start-5 col-end-9 bg-neutral-100 rounded-3xl py-2 px-4 flex gap-sm"
        >
          <Image
            src="/search.svg"
            alt={"Search"}
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
          <input
            className="bg-transparent flex-[2_2_0%]"
            placeholder="Quick Search..."
            readOnly
          />
        </div>
        <div className="action-section flex justify-end items-center gap-md col-start-9 col-end-13">
          <button className="btn btn-primary">Add Project</button>
          <button className="btn bg-text-001 text-white hover:bg-text-002">
            Login
          </button>
        </div>
      </header>
      <Header.SearchBox />
    </SearchContext.Provider>
  );
};

const SearchBox = () => {
  const { open, setOpen } = useSearchContext();
  return (
    <div className="overflow-hidden">
      <Transition show={open}>
        <div className="bg-white px-12 py-4 fixed w-[-webkit-fill-available] h-full z-20">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-text-001 mb-6">
              최근 검색어
            </h3>
            <div className="flex flex-wrap gap-sm font-thin">
              {[
                "BitCoin",
                "Blockchain",
                "Ethereum",
                "DeFi",
                "AltCoin",
                "Regulation",
                "NFT",
                "Metaverse",
              ].map((keyword) => (
                <Chip key={keyword}>{keyword}</Chip>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-text-001 mb-6">
              추천 아이디어
            </h3>
            <div className="grid grid-cols-4 w-full gap-lg">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};
Header.SearchBox = SearchBox;

const SearchContext = createContext<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>(undefined!);

const useSearchContext = () => {
  const ctx = useContext(SearchContext);
  return ctx;
};

const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-md lg:col-span-2 col-span-1">
      <div className="rounded-lg h-[250px]">
        <Image
          className="w-full h-full object-fit"
          src="https://picsum.photos/200/300"
          alt="Card Post Image"
        />
      </div>
      <div className="flex flex-col gap-sm">
        <div className="title text-2xl font-bold flex justify-between w-full">
          <h5>title</h5>
          <div className="flex -space-x-4 rtl:space-x-reverse">
            <Image
              className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
              src="https://picsum.photos/100/100"
              alt=""
            />
            <Image
              className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
              src="https://picsum.photos/100/100"
              alt=""
            />
            <Image
              className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
              src="https://picsum.photos/100/100"
              alt=""
            />
            <a
              className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +3
            </a>
          </div>
        </div>

        <p className="sub-title font-thin text-text-002">
          The one-stop product design tool amplified by AI The one-stop product
        </p>

        <span className="date font-thin text-text-003 text-sm">03.21 2024</span>
      </div>
    </div>
  );
};
