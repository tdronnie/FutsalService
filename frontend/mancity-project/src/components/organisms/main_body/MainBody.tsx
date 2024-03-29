import "./slick.css";
import GlobalCard from "@/components/molecules/global_card/GlobalCard";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import ClubList from "@/components/molecules/club_list/ClubList";
import { useNavigate } from "react-router-dom";
import HalfCard from "@/components/molecules/half_card/HalfCard";
import HomeCard from "@/components/molecules/home_card/HomeCard";

const MainBody = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };
  return (
    <>
      {/* 매치등록하기랑 매치둘러보기 버튼 */}
      <div className="flex justify-around mb-2">
        <div
          className="w-full ml-3 mr-1 cursor-pointer"
          onClick={() => handleNavigate({ path: "/match/register" })}
        >
          <HalfCard maintext="매치등록하기" />
        </div>
        <div
          className="w-full ml-1 mr-3 cursor-pointer"
          onClick={() => handleNavigate({ path: "/match" })}
        >
          <HalfCard maintext="매치둘러보기" />
        </div>
      </div>

      {/* 용병 둘러보기 버튼 */}
      <div
        className="mx-4 mb-4 cursor-pointer"
        onClick={() => handleNavigate({ path: "/club" })}
      >
        <HomeCard
          maintext="다양한 사람들과 뛰어볼까요?"
          subtext="용병으로 등록하거나 호출할 수 있어요"
        />
      </div>

      <div className="relative flex justify-center h-[50vh]">
        <img src="/src/assets/imgs/comeon.png" alt="man" />
      </div>

      <div id="glassui" className="mx-4 mb-4">
        <div className="flex items-end justify-between p-3">
          <MyTypography
            fontWeight="font-medium"
            label="지난 경기 다시보기"
            textColor="text-black"
            textSize="text-2xl"
          />
          {/* 경기에서 사용하는 지난 경기 모달 띄울 예정 */}
          <span onClick={() => handleNavigate({ path: "#" })}>더보기</span>
        </div>
        <hr className="border border-sofcity" />
        <div className="flex items-center w-full p-2 overflow-y-hidden">
          <GlobalCard
            file="/src/assets/imgs/mancity_logo.png"
            mainTitle="2024/03/11"
            subTitle="광주 신화 풋살장"
          />
          <GlobalCard
            file="/src/assets/imgs/mancity_logo.png"
            mainTitle="2024/03/11"
            subTitle="광주 신화 풋살장"
          />
          <GlobalCard
            file="/src/assets/imgs/mancity_logo.png"
            mainTitle="2024/03/11"
            subTitle="광주 신화 풋살장"
          />
          <GlobalCard
            file="/src/assets/imgs/mancity_logo.png"
            mainTitle="2024/03/11"
            subTitle="광주 신화 풋살장"
          />
        </div>
      </div>

      <div id="glassui" className="m-5">
        <div className="p-3">
          <MyTypography
            fontWeight="font-medium"
            label="용병 랭킹 TOP5"
            textColor="text-black"
            textSize="text-2xl"
          />
        </div>
        <hr className="border border-sofcity" />

        <ClubList
          clubTitile="맨시티파워"
          clubInfo="3경기 10골 8도움"
          file="/src/assets/imgs/mancity_logo.png"
        />
        <ClubList
          clubTitile="디오니소스"
          clubInfo="3경기 10골 8도움"
          file="/src/assets/imgs/mancity_logo.png"
        />
        <ClubList
          clubTitile="김치파워"
          clubInfo="3경기 10골 8도움"
          file="/src/assets/imgs/mancity_logo.png"
        />
        <ClubList
          clubTitile="우리가맨시티"
          clubInfo="3경기 10골 8도움"
          file="/src/assets/imgs/mancity_logo.png"
        />
        <ClubList
          clubTitile="즐축생활"
          clubInfo="3경기 10골 8도움"
          file="/src/assets/imgs/mancity_logo.png"
        />
        <div className="flex justify-center p-3">
        <span className="cursor-pointer" onClick={() => handleNavigate({ path: "/club" })}>더보기</span>
        </div>
      </div>
    </>
  );
};

export default MainBody;
