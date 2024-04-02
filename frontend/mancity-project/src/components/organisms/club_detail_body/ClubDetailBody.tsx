import { fetchClubDetailApi } from "@/apis/clubApis";
import ContentBox from "@/components/atoms/content_box/ContentBox";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import TypographyLine from "@/components/atoms/typography_line/TypographyLine";
import MemberList from "@/components/molecules/member_list/MemberList";
import MiniMap from "@/components/molecules/mini_map/MiniMap";
import futsalCourtData from "@/data/futsalCourts.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ClubDetailBody = () => {
  const { club_id } = useParams<{ club_id: string }>();

  // 호출 값 관리 상태
  const [clubDetails, setClubDetails] = useState({
    name: "",
    masterId: 0,
    masterNickname: "",
    clubCourtId: 0,
    emblem: "",
    memberCnt: 0,
    region: "",
    participant: [],
  });

  // id값으로 받은 경기장 값을 경기장 json에서 찾기
  const courtData = futsalCourtData.find((court) => court.id === clubDetails.clubCourtId);
  const address = courtData?.address || "주소 정보가 없습니다";

  useEffect(() => {
    if (club_id !== undefined) {
      fetchClubDetailApi(club_id)
        .then((data) => {
          setClubDetails(data);
        })
        .catch((error) => console.error(error));
    }
  }, [club_id]);

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
      <div id="glassui" className="flex justify-between p-3 m-2">
        <div>
          <div>
            <MyTypography
              label={`${clubDetails.region}지역`}
              fontWeight="font-medium"
              textSize="text-base"
            />
          </div>
          <div>
            <MyTypography
              label={clubDetails.name}
              fontWeight="font-semibold"
              textSize="text-[1.6rem]"
            />
          </div>
          <div>
            <MyTypography
              label={`총 클럽원 인원: ${clubDetails.memberCnt}명`}
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
              label={clubDetails.masterNickname}
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
        <MemberList participants={clubDetails.participant} />
      </div>

      <div id="glassui" className="pt-4 pb-1 m-3 ">
      <div>
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
      </div>
    </>
  );
};

export default ClubDetailBody;
