import { Chip } from "@/components/@common/chip";
import { SearchIcon } from "@/components/@icon/search";
import { ShapeIcon } from "@/components/@icon/shape";
import { HotNews, NewsCard } from "@/components/app-based/news";
export default function News() {
  return (
    <div className="overflow-y-auto flex justify-end pl-[20rem] lg:pl-0">
      {/** search bar */}
      <div className="fixed left-[18rem] z-10 w-80 min-w-72 h-full bg-neutral-100 p-6 flex flex-col gap-8 lg:w-auto lg:h-[fit-content] ">
        <div className="flex justify-between">
          <h3>Search</h3>
          <button className="btn bg-white hover:bg-neutral-50 flex gap-sm !font-normal">
            <ShapeIcon />
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
