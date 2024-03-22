import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import Typography from "@/components/atoms/typography/Typography";
import { useNavigate } from "react-router-dom";

const CommunityDetailHeader = () => {
  const navigate = useNavigate();
  const onClickBackArrow = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>
        <div
          className={`mx-3 pt-2 min-w-16 text-[1.4rem] cursor-pointer`}
          onClick={onClickBackArrow}
        >
          <FontawsomeIcon icon="arrow-left" color="#5D7A93" />
        </div>
      </div>

      <div className="flex justify-between mx-6 mt-2">
        <div>
          {/* 제목 */}
          <div>
            <Typography
              label="게시글 제목"
              fontWeight="font-semibold"
              textSize="text-[1.6rem]"
            />
          </div>
          {/* 날짜 */}
          <div>
            <Typography
              label="2024년 03월 12일"
              fontWeight="font-medium"
              textSize="text-base"
              textColor="text-gray-500"
            />
          </div>
        </div>
        <div>
          {/* 커뮤니티 카테고리들어가는 곳 */}
          <div className="text-end mt-6">
            <Typography
              label="영상"
              fontWeight="font-medium"
              textSize="text-sm"
              textColor="text-gray-500"
            />
          </div>
          {/* 유저 프로필사진, 이름 들어가는 곳 */}
          <div className="text-end">
            <Typography
              label="하남최성호"
              fontWeight="font-medium"
              textSize="text-sm"
              textColor="text-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetailHeader;
