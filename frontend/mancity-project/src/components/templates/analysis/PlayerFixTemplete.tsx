import Header from "@/components/organisms/header/Header";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import PlayerInfo from "../../molecules/player_info/PlayerInfo";
import { useQuery } from "@tanstack/react-query";
import { fetchPlayersDataApi } from "@/apis/matchApis";
import { useParams } from "react-router-dom";

const PlayerFixTemplete = () => {
  const { match_id } = useParams<{ match_id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ["fetchPlayer", match_id],
    queryFn: async () => {
      const response = await fetchPlayersDataApi(Number(match_id));
      return response;
    },
  });

  return (
    <div className="pb-4">
      <Header label="선수 지정" backArrow={true} headerButton={false} />

      <div className="m-4">
        <div id="glassui" className="p-1">
          {/* 선수 지정을 위한 사진 나오는 자리 */}
          {/* AI단에서 받아오는 사진으로 대체할 예정 */}
          <div className="flex flex-col justify-center m-3">
            <img src="/src/assets/imgs/temp.png" alt="temp" />
          </div>
        </div>
      </div>

      <div id="glassui" className="py-1 mx-4 mt-4">
        <div className="mx-4 my-2">
          <MyTypography
            label="선수 정보"
            textColor="black"
            textSize="text-2xl"
            fontWeight="font-medium"
          />
        </div>
        <hr className="border border-sofcity" />

        {!isLoading &&
          data &&
          (data.playersA.length ? (
            <div>
              <PlayerInfo
                player="선수 #1 (HOME)"
                color="text-red-500"
                playerData={data.playerA[0]}
              />
              <PlayerInfo
                player="선수 #2 (HOME)"
                color="text-red-500"
                playerData={data.playerA[1]}
              />
              <PlayerInfo
                player="선수 #3 (HOME)"
                color="text-red-500"
                playerData={data.playerA[2]}
              />
              <PlayerInfo
                player="선수 #4 (HOME)"
                color="text-red-500"
                playerData={data.playerA[3]}
              />
              <PlayerInfo
                player="선수 #5 (HOME)"
                color="text-red-500"
                playerData={data.playerA[4]}
              />
              <PlayerInfo
                player="선수 #6 (HOME)"
                color="text-red-500"
                playerData={data.playerA[5]}
              />
              <PlayerInfo
                player="선수 #1 (AWAY)"
                color="text-blue-600"
                playerData={data.playerB[0]}
              />
              <PlayerInfo
                player="선수 #2 (AWAY)"
                color="text-blue-600"
                playerData={data.playerB[1]}
              />
              <PlayerInfo
                player="선수 #3 (AWAY)"
                color="text-blue-600"
                playerData={data.playerB[2]}
              />
              <PlayerInfo
                player="선수 #4 (AWAY)"
                color="text-blue-600"
                playerData={data.playerB[3]}
              />
              <PlayerInfo
                player="선수 #5 (AWAY)"
                color="text-blue-600"
                playerData={data.playerB[4]}
              />
              <PlayerInfo
                player="선수 #6 (AWAY)"
                color="text-blue-600"
                playerData={data.playerB[5]}
              />
            </div>
          ) : (
            //  data.playersA에 값이 존재하지 않을 때 뜨는 더미 데이터
            <div>
              <PlayerInfo player="선수 #1 (HOME)" color="text-red-500" />
              <PlayerInfo player="선수 #2 (HOME)" color="text-red-500" />
              <PlayerInfo player="선수 #3 (HOME)" color="text-red-500" />
              <PlayerInfo player="선수 #4 (HOME)" color="text-red-500" />
              <PlayerInfo player="선수 #5 (HOME)" color="text-red-500" />
              <PlayerInfo player="선수 #6 (HOME)" color="text-red-500" />
              <PlayerInfo player="선수 #1 (AWAY)" color="text-blue-600" />
              <PlayerInfo player="선수 #2 (AWAY)" color="text-blue-600" />
              <PlayerInfo player="선수 #3 (AWAY)" color="text-blue-600" />
              <PlayerInfo player="선수 #4 (AWAY)" color="text-blue-600" />
              <PlayerInfo player="선수 #5 (AWAY)" color="text-blue-600" />
              <PlayerInfo player="선수 #6 (AWAY)" color="text-blue-600" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlayerFixTemplete;
