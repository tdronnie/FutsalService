import { callPlayerApi, fetchClubsApi, fetchplayersApi } from "@/apis/clubApis";
import ShadcnTabs from "@/components/atoms/shadcn_tabs/ShadcnTabs";
import SortButton from "@/components/atoms/sort_button/SortButton";
import WideCard from "@/components/molecules/wide_card/WideCard";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { MyMatchApi } from "@/apis/matchApis";
import useUserStore from "@/stores/userStore";
import futsalCourtData from "@/data/futsalCourts.json";
import Swal from "sweetalert2";

const ClubBody = () => {
  // 클럽 및 용병 데이터 관리
  const [clubs, setClubs] = useState<ClubData[]>([]);
  const [players, setPlayers] = useState<PlayerData[]>([]);

  // 탭 관련 상태
  const [selectedTab, setSelectedTab] = useState(false);
  const tabSwitch = () => setSelectedTab(!selectedTab);

  // 서치바 검색을 위한 쿼리 설정
  const [searchQuery, setSearchQuery] = useState("");

  // 내가 등록한 매치 상태 관리
  const [myMatches, setMyMatches] = useState<MyMatchesData[]>([]);

  // 모달 관련
  const [open, setOpen] = React.useState<boolean>(false);

  // 내 아이디 불러오기
  const userId = useUserStore((state) => state.id);

  // 클릭한 용병의 아이디 관리
  const [receiverId, setReceiverId] = useState<number>(0);

  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };

  useEffect(() => {
    fetchClubsApi().then((res) => {
      setClubs(res);
    });
    fetchplayersApi().then((res) => {
      setPlayers(res);
    });
    // 테스트콘솔
    // console.log(clubs);
    // console.log(players);
    MyMatchApi(userId).then((res) => {
      setMyMatches(res);
    });
  }, []);

  // 검색 필터 적용
  const filteredPlayers = players.filter((player) =>
    player.nickName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 용병 호출하기
  const callThisMan = (gameId: number) => {
    callPlayerApi(userId, receiverId, gameId).then((club) => {
      Swal.fire({
        title: "호출 완료",
        text: "용병의 수락을 기다려주세요!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "확인",
      });
    })
    .then((result) =>{
    setOpen(false);
    }).catch((error) => {
      Swal.fire({
        title: "신청 에러",
        html: "이미 신청하셨습니다. 조금만 기다려주시기 바랍니다.",
        icon: "error",
        confirmButtonColor: "#d42c348b",
        confirmButtonText: "확인",
      });
    })
    // 음 이거 용병 신청은 또 해도 또 되네...? 중복 신청이 가능하군
  };
  // 용병 호출하기 위해 눌렀을때 이벤트
  const handleClick = (id: number) => {
    setOpen(true);
    setReceiverId(id);
  };

  return (
    <>
      <div className="flex justify-center m-2">
        <ShadcnTabs
          Tab1="용병"
          Tab2="클럽"
          onChange={tabSwitch}
          defaultTab="tab1"
        />
      </div>
      <div className="p-2">
        {!selectedTab && (
          <div>
            <div className="flex items-center">
              <div className="mx-2">
                <SortButton label="검색" width="w-16" hover={false} />
              </div>

              {/* 써치바 들어가는 자리 */}
              <input
                type="text"
                placeholder="용병 닉네임을 검색해보세요"
                className="w-full p-1 border-b border-sofcity"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="mx-5">
                <FontawsomeIcon icon="magnifying-glass" />
              </div>
            </div>

            {players &&
              filteredPlayers.length > 0 &&
              filteredPlayers.map((player) => (
                <div
                  key={player.id}
                  className="cursor-pointer"
                  onClick={() => handleClick(player.id)}
                >
                  <WideCard
                    file={player.image}
                    subtext={"총 능력치: "+String(Math.round(player.overall))}
                    maintext={player.nickName}
                    minitext={"피지컬: "+ String(Math.round((player.height + player.weight) / 350 * 100))+"점"}
                    buttonlabel="호출하기"
                  />
                </div>
              ))}
          </div>
        )}

        {/* 용병 호출을 위한 모달 코드 */}
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 500,
              borderRadius: "md",
              p: 3,
              boxShadow: "lg",
              overflowY: "auto", // 스크롤 가능하게 만듭니다
              maxHeight: "80vh", // 모달의 최대 높이를 화면 높이의 80%로 설정
              minWidth: "50vh",
            }}
          >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
            >
              내가 등록한 매치
            </Typography>

            {/* 여기에서 MyMatches map 돌려서 리스트를 만들 자리 */}
            {myMatches.map((match, index) => {
              // 매치의 courtId를 사용해 해당 경기장 정보 찾기
              const courtInfo = futsalCourtData.find(
                (court) => court.id === match.courtId
              );

              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 m-1 bg-gray-200 rounded-md cursor-pointer"
                  onClick={() => callThisMan(match.gameId)}
                >
                  <div>
                  <Typography textColor="primary" fontWeight="md">
                    {/* 매치 정보 표시 */}
                    <span>
                      일시: {match.startDate}, {match.time}시
                    </span>
                  </Typography>
                  <Typography textColor="text.secondary">
                    {/* 찾은 경기장의 이름 표시 */}
                    {courtInfo ? courtInfo.title : "경기장 정보 없음"}
                  </Typography>
                  </div>
                  <div className="text-blue-500">
                    선택
                  </div>
                </div>
              );
            })}
          </Sheet>
        </Modal>

        {selectedTab && (
          <div>
            <div className="flex items-center">
              <div className="mx-2">
                <SortButton label="검색" width="w-16" hover={false} />
              </div>
              {/* 써치바 들어가는 자리 */}
              <input
                type="text"
                placeholder="클럽 이름을 검색해보세요"
                className="w-full p-1 border-b border-sofcity"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="mx-5">
                <FontawsomeIcon icon="magnifying-glass" />
              </div>
            </div>
            {clubs &&
              filteredClubs.length > 0 &&
              filteredClubs.map((club) => (
                <div
                  key={club.id}
                  className="cursor-pointer"
                  onClick={() => navigate(`/club/${club.id}`)}
                >
                  <WideCard
                    file={club.emblem}
                    subtext={`${club.region}지역`}
                    maintext={club.name}
                    minitext={`클럽원 수: ${club.memberCnt}`}
                    buttonlabel="자세히보기"
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ClubBody;
