import { PostStatistic } from "@/components/@common/post-statistic";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-16 py-10 flex flex-col gap-[4rem]">
      <div className="w-full rounded-lg relative bg-[url(https://picsum.photos/1000/350)] bg-no-repeat bg-cover">
        <div className="flex justify-between w-full p-20 lg:p-10">
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-4">project of the day</h2>
            <p>이 메인 배너가 어떤 용도인지 설명할 수 있는 텍스트 문구</p>
          </div>

          <div className="bg-[#FFFFFF1F] rounded-xl p-10 text-white flex flex-col gap-lg items-center">
            <Image
              width={200}
              height={200}
              className="w-12 h-12 rounded-full"
              src="https://picsum.photos/200/200"
              alt="Rounded avatar"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold">Creatie</h3>
              <p>The one-stop product design tool amplified by AI</p>
              <span className="font-thin">This Week’s Top products</span>
            </div>
            <button className="btn bg-white text-text-001 w-full">
              View More
            </button>
          </div>
        </div>
      </div>

      <ProjectGroup title="This Week’s Top products" />
      <ProjectGroup title="Last Week’s Top products" />
      <ProjectGroup title="Last Month’s Top products" />
    </div>
  );
}

const ProjectGroup = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-lg w-full">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex flex-col gap-sm w-full">
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
      </div>
      <button className="bg-neutral-50 rounded-md p-2 font-bold border-neutral-300 border">
        전체보기
      </button>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-xl w-full">
        <Image
          width={200}
          height={200}
          className="w-12 h-12 rounded-md"
          src="https://picsum.photos/200/200"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="text-text-002">
            <b className="mr-2">Creatie</b>The one-stop product design tool
            amplified by AI
          </p>
          <PostStatistic />
        </div>
      </div>

      <div className="bg-white border border-neutral-200 rounded flex flex-col w-12 h-12 text-xs items-center justify-center">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.26795 0.999997C6.03775 -0.333336 7.96225 -0.333333 8.73205 1L13.0622 8.5C13.832 9.83334 12.8697 11.5 11.3301 11.5H2.66987C1.13027 11.5 0.168022 9.83333 0.937822 8.5L5.26795 0.999997Z"
            fill="#6C4BEE"
          />
        </svg>
        <span>122</span>
      </div>
    </div>
  );
};

ProjectGroup.ProjectList = ProjectList;
