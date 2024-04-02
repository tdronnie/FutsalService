import { fetchClubDetailApi } from "@/apis/clubApis";
import ContentBox from "@/components/atoms/content_box/ContentBox";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import TypographyLine from "@/components/atoms/typography_line/TypographyLine";
import MemberList from "@/components/molecules/member_list/MemberList";
import MiniMap from "@/components/molecules/mini_map/MiniMap";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ClubDetailBody = () => {
  const { club_id } = useParams<{ club_id: string }>();
  const address = "광주시 광산구 장덕동 82-3"

  useEffect(() => {
    if (club_id !== undefined) {
      fetchClubDetailApi(club_id)
    }
  },[club_id])

  const onClickCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="flex justify-between m-2">
        <div>
          <div>
            <MyTypography
              label="경기도 지역"
              fontWeight="font-medium"
              textSize="text-base"
            />
          </div>
          <div>
            <MyTypography
              label="아르마딜로FC"
              fontWeight="font-semibold"
              textSize="text-[1.6rem]"
            />
          </div>
          <div>
            <MyTypography
              label="클럽 인원 36명/40명"
              fontWeight="font-medium"
              textSize="text-base"
              textColor="text-gray-500"
            />
          </div>
        </div>
        <div className="mt-auto">
          <div className="mt-4 text-end">
            <MyTypography
              label="클럽장"
              fontWeight="font-medium"
              textSize="text-sm"
              textColor="text-gray-500"
            />
          </div>
          <div className="text-end">
            <MyTypography
              label="축구짱준성"
              fontWeight="font-medium"
              textSize="text-sm"
              textColor="text-gray-500"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-7">
        <ContentBox
          file="/src/assets/imgs/mancity_logo.png"
          height="h-44"
          rounded="rounded-full"
          width="w-44"
        />
      </div>
      <div className="mt-7">
        {/* 클럽 내 참여자 입력 */}
      {/* <MemberList participants={matchDetailPropsData.participants} /> */}
      </div>
      <div className="mt-7">
      <TypographyLine label="홈그라운드 풋살장" lineWidth="w-56" />
      </div>
      <div>
        <MiniMap
          lat={35.2037466}
          lng={126.8143846}
          address={address}
          tel="062-951-9876"
          onClick={() => onClickCopy(address)}
        />
      </div>
    </>
  );
};

export default ClubDetailBody;
