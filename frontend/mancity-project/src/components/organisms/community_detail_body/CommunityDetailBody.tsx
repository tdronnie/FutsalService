import ContentBox from "@/components/atoms/content_box/ContentBox";
import InputGroup from "@/components/molecules/input_group/InputGroup";

const CommunityDetailBody = () => {
  const textareaValue =
    "게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 ";
  return (
    <div>
      {/* 하이라이트 및 이미지 */}
      <div className="mx-2 my-6">
        <ContentBox width="w-full" height="h-40" rounded="rounded-sm" />
      </div>
      <div className="mx-2 w-auto min-h-40 h-auto px-4 pb-4  text-[#5D7A93] border-gray-300 rounded-xl first:resize-none">
        {textareaValue}
      </div>
      <div>
        <InputGroup
          typographyLabel="댓글"
          placeholder="댓글은 매너있게 달아주세요 :)"
          checking={true}
          checkingLabel="입력"
        />
      </div>
    </div>
  );
};

export default CommunityDetailBody;
