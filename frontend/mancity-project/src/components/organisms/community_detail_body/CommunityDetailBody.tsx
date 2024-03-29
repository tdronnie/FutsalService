import ContentBox from "@/components/atoms/content_box/ContentBox";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import CommentCard from "@/components/molecules/comment_card/CommentCard";
import InputGroup from "@/components/molecules/input_group/InputGroup";

const CommunityDetailBody = () => {
  const textareaValue =
    "게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 게시글 내용입니다 ";
  return (
    <div>
      {/* 하이라이트 및 이미지 */}
      <div className="m-6">
        <ContentBox width="w-full" height="h-40" rounded="rounded-sm" />
      </div>
      <div className="mx-4 w-auto min-h-40 h-auto px-4 pb-4  text-[#5D7A93] border-gray-300 rounded-xl first:resize-none">
        {textareaValue}
      </div>

      {/* 댓글 입력창 */}
      <div className="m-2">
        <InputGroup
          MyTypographyLabel="댓글"
          placeholder="댓글은 매너있게 달아주세요 :)"
          checking={true}
          checkingLabel="입력"
        />
      </div>
      <CommentCard />
      <CommentCard />
      <CommentCard />
      {/* 게시글 푸터 */}
      <div className="fixed bottom-0 z-10 bg-white w-full max-w-[36rem]">
        <div className="flex justify-around items-center border-t-2 rounded-t-xl h-16">
          <div className="w-1/2 border-r-2">
            <div className="flex justify-center ">
              <div className="mr-1">
                <FontawsomeIcon icon="heart" />
              </div>
              <MyTypography
                label="좋아요"
                textSize="text-md"
                textColor="text-sofcity"
                fontWeight="font-medium"
              />
            </div>
          </div>
          <div className="w-1/2 text-center">
            <div className="flex justify-center ">
              <div className="mr-1">
                <FontawsomeIcon icon="share-from-square" />
              </div>
              <MyTypography
                label="공유하기"
                textSize="text-md"
                textColor="text-sofcity"
                fontWeight="font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetailBody;
