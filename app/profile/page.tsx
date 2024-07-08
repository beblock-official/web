import { Avatar } from "@/components/@common/avatar";
import { Chip } from "@/components/@common/chip";
import { EditIcon } from "@/components/@icon/edit";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
export default function Profile() {
  return (
    <div className="flex relative gap-md h-screen overflow-auto lg:flex-col lg:h-auto">
      <div className="bg-neutral-100 w-[356px] flex-none sticky top-0 left-0 px-6 py-7 flex flex-col h-full lg:w-full">
        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-bold">My Account</h3>
            <button className="btn btn-white btn-flex !gap-1 !font-normal !p-1.5">
              <EditIcon />
              edit
            </button>
          </div>

          <div className="flex flex-col items-center py-8 gap-xl">
            <Avatar className="!w-36 !h-36" />

            <div className="text-center">
              <h4>
                hong gildong
                <Image
                  className="inline-block ml-1"
                  width={24}
                  height={24}
                  src="/mark.svg"
                  alt=""
                />
              </h4>
              <p>university of science and tech</p>
            </div>

            <div className="bg-white rounded-md flex justify-center w-full py-2 text-center">
              <div className="flex-1">
                <p className="font-thin text-sm">팔로워</p>
                <h4>13</h4>
              </div>
              <div className="flex-1">
                <p className="font-thin text-sm">팔로잉</p>
                <h4>13</h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div>
              <p className="text-sm mb-2">Category</p>
              <div className="*:mr-1">
                {[
                  "Bitcoin",
                  "Blockchain",
                  "Ethereum",
                  "Defi",
                  "Blockchain",
                  "Ethereum",
                ].map((v, i) => (
                  <Chip className="!text-text-002 !px-1.5 !py-0.5" key={i}>
                    {v}
                  </Chip>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm mb-2">소셜 미디어</p>
              <div className="*:mb-1 *:cursor-pointer">
                <div className="bg-white rounded-lg p-2 flex gap-sm">
                  <Image src="/x.svg" width={24} height={24} alt="" />x
                </div>
                <div className="bg-white rounded-lg p-2 flex gap-sm">
                  <Image src="/telegram.svg" width={24} height={24} alt="" />
                  telegram
                </div>
                <div className="bg-white rounded-lg p-2 flex gap-sm">
                  <Image src="/discord.svg" width={24} height={24} alt="" />
                  discord
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-white flex-none bg-white text-text-003 !rounded-md !font-medium text-start w-full py-2 px-4">
          Logout
        </button>
      </div>

      <div className="flex-1">
        <AccountTab />
      </div>
    </div>
  );
}

const categories = [
  {
    name: "About",
    posts: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: "Projects",
    posts: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: "Collections",
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
  {
    name: "Posts",
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
];

const AccountTab = () => {
  return (
    <div className="flex h-screen w-full justify-center pt-24 px-4">
      <div className="w-full max-w-md">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="flex-none uppercase rounded-full py-1 px-3 text-sm/6 bg-neutral-100 focus:outline-none data-[selected]:bg-primary data-[selected]:text-white data-[hover]:bg-primary/10 data-[selected]:data-[hover]:bg-primary data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="p-3 w-full min-w-[max-content]">
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                    >
                      <a href="#" className="font-semibold">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                      <ul className="flex gap-2" aria-hidden="true">
                        <li>{post.date}</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};
