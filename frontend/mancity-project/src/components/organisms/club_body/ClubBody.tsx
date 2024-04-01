import { fetchClubsApi, fetchplayersApi } from "@/apis/clubApis";
import ShadcnTabs from "@/components/atoms/shadcn_tabs/ShadcnTabs";
import SortButton from "@/components/atoms/sort_button/SortButton";
import WideCard from "@/components/molecules/wide_card/WideCard";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ClubBody = () => {
  // 클럽 및 용병 데이터 관리
  const [clubs, setClubs] = useState<ClubData[]>([]);
  const [players, setPlayers] = useState<PlayerData[]>([]);

  // 탭 관련 상태
  const [selectedTab, setSelectedTab] = useState(false);
  const tabSwitch = () => setSelectedTab(!selectedTab);

  // 서치바 검색을 위한 쿼리 설정
  const [searchQuery, setSearchQuery] = useState("");

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
  }, []);

  // 검색 필터 적용
  const filteredPlayers = players.filter((player) =>
    player.nickName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <WideCard
                  key={player.id}
                  file={player.image}
                  subtext="골결정력 특화"
                  maintext={player.nickName}
                  minitext="총능력치 58"
                  buttonlabel="호출하기"
                />
              ))}
          </div>
        )}

        {selectedTab && (
          <div>
            <div className="flex">
              <div
                className="mx-2"
              >
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
                <WideCard
                  key={club.id}
                  file={club.emblem}
                  subtext={club.region}
                  maintext={club.region}
                  minitext={`총 인원 수: ${club.memberCnt}`}
                  buttonlabel="가입신청"
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ClubBody;
