import "./slick.css";
import GlobalCard from "@/components/molecules/global_card/GlobalCard";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import ClubList from "@/components/molecules/club_list/ClubList";
import { useNavigate } from "react-router-dom";
import HalfCard from "@/components/molecules/half_card/HalfCard";
import HomeCard from "@/components/molecules/home_card/HomeCard";
import { useState } from "react";
import ReplayModal from "@/components/organisms/replay_modal/ReplayModal";
import { useQuery } from "@tanstack/react-query";
import { MainPageApi } from "@/apis/matchApis";
import futsalCourtData from "@/data/futsalCourts.json";
import useUserStore from "@/stores/userStore";

const MainBody = () => {
  const userId = useUserStore((state) => state.id);
  // 다시보기, 용병 랭킹 데이터 api
  const { data, isLoading } = useQuery({
    queryKey: ["mainPage", userId],
    queryFn: async () => {
      const response = await MainPageApi(userId);
      return response;
    },
  });

  // 모달 열고 닫고
  const [openModal, setOpenModal] = useState<boolean>(false);

  // 지난 경기 다시보기 생성되면 (경기에 본인 추가 기능 넣으면 수정)
  const dummyData = {
    games: [
      {
        id: 1,
        courtId: 1,
        startDate: "2024-04-01",
        time: 30,
        replayUrl: "qwer",
      },
      {
        id: 2,
        courtId: 1,
        startDate: "2024-04-01",
        time: 30,
        replayUrl: "qwer",
      },
      {
        id: 3,
        courtId: 1,
        startDate: "2024-04-01",
        time: 30,
        replayUrl: "qwer",
      },
    ],
  };

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

  // 테스트 콘솔
  // if (data) {
  //   console.log(data.players[0]);
  // }

  return (
    <div>
      {/* 매치등록하기랑 매치둘러보기 버튼 */}
      <div className="flex justify-around mb-2">
        <div
          className="w-full ml-4 mr-1 cursor-pointer"
          onClick={() => handleNavigate({ path: "/match/register" })}
        >
          <HalfCard
            maintext="매치등록하기"
            file="/src/assets/imgs/match_register.png"
          />
        </div>
        <div
          className="w-full ml-1 mr-4 cursor-pointer"
          onClick={() => handleNavigate({ path: "/match" })}
        >
          <HalfCard
            maintext="매치둘러보기"
            file="/src/assets/imgs/match_lookaround.png"
          />
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
          file="/src/assets/imgs/finding_players.png"
        />
      </div>

      <div className="relative flex justify-center h-[50vh]">
        <img src="/src/assets/imgs/comeon.png" alt="man" />
      </div>

      {!isLoading && data && (
        <div>
          <div id="glassui" className="mx-4 mb-4">
            <div className="flex items-end justify-between p-3">
              <MyTypography
                fontWeight="font-medium"
                label="지난 경기 다시보기"
                textColor="text-black"
                textSize="text-2xl"
              />
              {/* 경기에서 사용하는 지난 경기 모달 띄울 예정 */}
              <span
                onClick={() => {
                  setOpenModal(true);
                }}
                className="cursor-pointer"
              >
                더보기
              </span>
            </div>
            <hr className="border border-sofcity" />
            <div className="flex items-center w-full p-2 overflow-y-hidden">
              {data.games.map((game: ReplayGame) => {
                // id값으로 받은 경기장 값을 경기장 json에서 찾기
                const courtData = futsalCourtData.find(
                  (court) => court.id === game.courtId
                );
                return (
                  <div key={game.id}>
                    <GlobalCard
                      file={game.replayUrl}
                      mainTitle={game.startDate}
                      subTitle={
                        courtData ? courtData.title : "광주 신화 풋살장"
                      }
                    />
                  </div>
                );
              })}
            </div>
            {/* 다시보기 modal  */}
            <div>
              <ReplayModal
                games={dummyData.games}
                openModal={openModal}
                setOpenModal={setOpenModal}
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
            {data.players.map((player: MainPlayer) => (
              <div
                key={player.id}
                onClick={() => navigate(`/profile/${player.id}`)}
                className="cursor-pointer "
              >
                <ClubList
                  clubTitile={player.nickName}
                  clubInfo={`${player.playedTimes}경기 ${player.goal}골 ${player.pass}도움`}
                  file={player.image}
                />
              </div>
            ))}

            <div className="flex justify-center p-3">
              <span
                className="cursor-pointer"
                onClick={() => handleNavigate({ path: "/club" })}
              >
                더보기
              </span>
            </div>
          </div>
        </div>
      )}
      {isLoading && (
        <div id="glassui" className="h-16 p-4 m-4 text-lg">
          정보를 불러오는 중입니다⚽
        </div>
      )}
    </div>
  );
};

export default MainBody;
