import { CommentIcon } from "@/components/@icon/comment";
import { HeartIcon } from "@/components/@icon/heart";
import { RepostIcon } from "@/components/@icon/repost";
import { ShareIcon } from "@/components/@icon/share";

// TODO props 적용
export const PostStatistic = () => {
  return (
    <div className="flex gap-2 text-text-003 text-sm">
      <span className="flex items-center">
        <CommentIcon
          width={14}
          height={14}
          className="inline-block align-text-bottom h-full mr-1"
        />
        247
      </span>

      <span className="flex items-center">
        <HeartIcon
          width={14}
          height={14}
          className="inline-block align-text-bottom h-full mr-1"
        />
        13K
      </span>

      <span className="flex items-center">
        <RepostIcon
          width={14}
          height={14}
          className="inline-block align-text-bottom h-full mr-1"
        />
        2K
      </span>

      <span className="flex items-center">
        <ShareIcon
          width={14}
          height={14}
          className="inline-block align-text-bottom h-full mr-1"
        />
        247
      </span>
    </div>
  );
};
