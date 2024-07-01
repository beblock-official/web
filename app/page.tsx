export default function Home() {
  return (
    <main className="w-full h-full bg-white px-16 py-10 overflow-auto">
      <div className="flex flex-col gap-[4rem]">
        <div className="w-full rounded-lg relative bg-[url(https://picsum.photos/1000/350)] bg-no-repeat bg-cover">
          <div className="flex justify-between w-full p-20 lg:p-10">
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-4">project of the day</h2>
              <p>이 메인 배너가 어떤 용도인지 설명할 수 있는 텍스트 문구</p>
            </div>

            <div className="bg-[#FFFFFF1F] rounded-xl p-10 text-white flex flex-col gap-lg items-center">
              <img
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
    </main>
  );
}

const ProjectGroup = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-lg w-full">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex flex-col gap-sm w-full">
        <ProjectGroup.ProjectList />
        <ProjectGroup.ProjectList />
        <ProjectGroup.ProjectList />
        <ProjectGroup.ProjectList />
      </div>
      <button className="bg-neutral-50 rounded-md p-2 font-bold border-neutral-300 border">
        전체보기
      </button>
    </div>
  );
};

ProjectGroup.ProjectList = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-xl w-full">
        <img
          className="w-12 h-12 rounded-md"
          src="https://picsum.photos/200/200"
        />
        <div className="flex flex-col justify-center">
          <p className="text-text-002">
            <b className="mr-2">Creatie</b>The one-stop product design tool
            amplified by AI
          </p>
          <div className="flex gap-2 text-text-003 text-sm">
            <span>
              <svg
                className="inline-block align-text-bottom h-full mr-1"
                width="14px"
                height="14px"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 12.1667L2.50833 9.89168C1.85293 8.92234 1.61583 7.77442 1.84113 6.66136C2.06643 5.54829 2.73879 4.54582 3.7332 3.84034C4.72761 3.13486 5.9764 2.77437 7.24739 2.8259C8.51837 2.87744 9.72506 3.33748 10.6431 4.12051C11.5611 4.90353 12.128 5.95625 12.2384 7.08292C12.3487 8.2096 11.9951 9.33356 11.2431 10.2458C10.4911 11.1581 9.39205 11.7966 8.15021 12.0426C6.90838 12.2887 5.60828 12.1254 4.49167 11.5833L1.75 12.1667Z"
                  stroke="#888888"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              247
            </span>

            <span>
              <svg
                className="inline-block align-text-bottom h-full mr-1"
                width="14px"
                height="14px"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5959 8.61312L6.65159 12.423L6.6516 12.423C6.7913 12.5542 6.86115 12.6199 6.94351 12.636C6.9806 12.6433 7.01875 12.6433 7.05584 12.636C7.1382 12.6199 7.20805 12.5542 7.34776 12.423L11.4034 8.61312C12.5445 7.54117 12.6831 5.77718 11.7234 4.5402L11.5429 4.30761C10.3948 2.82783 8.09029 3.076 7.28356 4.76629C7.16961 5.00505 6.82974 5.00505 6.71579 4.76629C5.90906 3.076 3.60451 2.82783 2.45641 4.30761L2.27595 4.5402C1.31623 5.77718 1.4548 7.54117 2.5959 8.61312Z"
                  stroke="#888888"
                  stroke-width="1.16667"
                />
              </svg>
              13,247
            </span>

            <span>
              <svg
                className="inline-block align-text-bottom h-full mr-1"
                width="14px"
                height="14px"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.958 3.85416L12.3705 4.26664L12.783 3.85416L12.3705 3.44168L11.958 3.85416ZM2.62467 6.77083C2.62467 7.09299 2.88584 7.35416 3.20801 7.35416C3.53017 7.35416 3.79134 7.09299 3.79134 6.77083H2.62467ZM10.0372 6.59997L12.3705 4.26664L11.5455 3.44168L9.2122 5.77502L10.0372 6.59997ZM12.3705 3.44168L10.0372 1.10835L9.2122 1.93331L11.5455 4.26664L12.3705 3.44168ZM11.958 3.27083L5.54134 3.27083L5.54134 4.43749L11.958 4.43749V3.27083ZM2.62467 6.18749V6.77083H3.79134V6.18749L2.62467 6.18749ZM5.54134 3.27083C3.93051 3.27083 2.62467 4.57666 2.62467 6.18749L3.79134 6.18749C3.79134 5.221 4.57484 4.43749 5.54134 4.43749L5.54134 3.27083Z"
                  fill="#888888"
                />
                <path
                  d="M2.625 10.4164L2.21252 10.0039L1.80004 10.4164L2.21252 10.8289L2.625 10.4164ZM11.9583 7.49971C11.9583 7.17754 11.6972 6.91638 11.375 6.91638C11.0528 6.91638 10.7917 7.17754 10.7917 7.49971H11.9583ZM4.54585 7.67056L2.21252 10.0039L3.03748 10.8289L5.37081 8.49552L4.54585 7.67056ZM2.21252 10.8289L4.54585 13.1622L5.37081 12.3372L3.03748 10.0039L2.21252 10.8289ZM2.625 10.9997H9.04167V9.83304H2.625V10.9997ZM11.9583 8.08304V7.49971H10.7917V8.08304H11.9583ZM9.04167 10.9997C10.6525 10.9997 11.9583 9.69387 11.9583 8.08304H10.7917C10.7917 9.04954 10.0082 9.83304 9.04167 9.83304V10.9997Z"
                  fill="#888888"
                />
              </svg>
              2,407
            </span>

            <span>
              <svg
                className="inline-block align-text-bottom h-full mr-1"
                width="14px"
                height="14px"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83301 8.66667L12.2497 2.25M5.83301 8.66667L7.87468 12.75C7.90027 12.8058 7.94136 12.8532 7.99306 12.8864C8.04477 12.9195 8.10491 12.9372 8.16634 12.9372C8.22778 12.9372 8.28792 12.9195 8.33962 12.8864C8.39133 12.8532 8.43242 12.8058 8.45801 12.75L12.2497 2.25M5.83301 8.66667L1.74967 6.625C1.69383 6.59941 1.6465 6.55832 1.61332 6.50661C1.58014 6.45491 1.5625 6.39477 1.5625 6.33333C1.5625 6.2719 1.58014 6.21176 1.61332 6.16005C1.6465 6.10835 1.69383 6.06726 1.74967 6.04167L12.2497 2.25"
                  stroke="#888888"
                  stroke-width="1.16667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              247
            </span>
          </div>
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
