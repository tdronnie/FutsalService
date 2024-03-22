import ContentBox from "@/components/atoms/content_box/ContentBox";
import Typography from "@/components/atoms/typography/Typography";
const CommentCard = () => {
  return (
    <div className="flex mx-4 mt-4">
      <div className="mx-2">
        <ContentBox width="w-14" height="h-14" rounded="rounded-full" />
      </div>
      {/* 2번 줄 */}
      <div className=" mx-1">
        {/* 1번 줄 */}
        <div className="flex mb-[0.3rem]">
          {/* 회원이름 */}
          <div className="">
            <Typography
              label="회원이름"
              textSize="text-base"
              fontWeight="font-medium"
              textColor="text-black"
            />
          </div>
          {/* 날짜 */}
          <div className="mt-1 mx-2">
            <Typography
              label="2024-03-12 16:40"
              textSize="text-sm"
              fontWeight="font-normal"
              textColor="text-gray-400"
            />
          </div>
        </div>
        {/* 댓글 내용 */}
        <div className="">
          <Typography
            label="좋은 글 잘 읽었습니다."
            textSize="text-sm"
            fontWeight="font-medium"
            textColor="text-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
