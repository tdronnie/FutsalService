import "./slick.css";
import GlobalCard from "@/components/molecules/global_card/GlobalCard";
import Typography from "@/components/atoms/typography/Typography";
import ClubList from "@/components/molecules/club_list/ClubList";
import { useNavigate } from "react-router-dom";

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
      {/* 용병 둘러보기 버튼 */}

      <div id="glassui" className="m-4">
        <div className="flex items-end justify-between p-3">
          <Typography
            fontWeight="font-medium"
            label="지난 경기 다시보기"
            textColor="text-black"
            textSize="text-2xl"
          />
          <span onClick={() => handleNavigate({ path: "/replay" })}>더보기</span>
        </div>
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
          <Typography
            fontWeight="font-medium"
            label="용병 랭킹 TOP5"
            textColor="text-black"
            textSize="text-2xl"
          />
        </div>

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
      </div>
    </>
  );
};

export default MainBody;
