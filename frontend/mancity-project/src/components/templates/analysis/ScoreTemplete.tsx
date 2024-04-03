import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/organisms/header/Header";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import GroupHighlightCard from "@/components/organisms/group_highlight_card/GroupHighlightCard";
import HalfCard from "@/components/molecules/half_card/HalfCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAllMatchDataApi } from "@/apis/matchApis";

const ScoreTemplete = () => {
  // 해당 경기의 id 값
  const { match_id } = useParams<{ match_id: string }>();

  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };

  // 팀 데이터, 하이라이트 api 호출
  const { data, isLoading } = useQuery({
    queryKey: ["fetchAllMatchData"],
    queryFn: async () => {
      const response = fetchAllMatchDataApi(Number(match_id));
      return response;
    },
  });
  // 테스트 콘솔
  // console.log(data);

  return (
    <div>
      {!isLoading && data && (
        <div>
          <Header label="경기 통계" backArrow={true} headerButton={false} />

          <div className="m-4">
            <div id="glassui" className="p-1">
              {/* 영상 나오는 자리 */}
              <div className="flex justify-center mx-5 mt-5">
                <video id="myVideo" controls>
                  <source src={data.replayUrl} type="video/mp4" />
                </video>
              </div>

              {/* 팀 구분 하는 자리 */}
              <div className="flex justify-around my-1 text-xl font-bold">
                <span className="text-red-500">HOME팀</span>
                <span>|</span>
                <span className="text-blue-600">AWAY팀</span>
              </div>
            </div>
          </div>

          {/* 경기통계 */}
          <div id="glassui" className="py-1 m-4">
            <div className="mx-4 my-2">
              <MyTypography
                label="경기 통계"
                textColor="black"
                textSize="text-2xl"
                fontWeight="font-medium"
              />
            </div>
            <hr className="border border-sofcity" />

            <div className="px-2 m-3 bg-white bg-opacity-30 opacity-90 rounded-xl">
              {/* 팀 */}
              <div className="flex justify-around p-2">
                <span className="font-bold text-red-500">HOME</span>
                <span>팀</span>
                <span className="font-bold text-blue-600">AWAY</span>
              </div>
              <hr className="border border-sofcity" />

              {/* 점수  */}
              <div className="flex justify-around p-2">
                <span>{data.teamA.goal}</span>
                <span>점수</span>
                <span>{data.teamB.goal}</span>
              </div>
              <hr className="border border-sofcity" />

              {/* 점유율 */}

              <div className="flex justify-around p-2">
                <span>
                  {data.teamA.pass / (data.teamA.pass + data.teamB.pass)}
                </span>
                <span>점유율</span>
                <span>
                  {data.teamB.pass / (data.teamA.pass + data.teamB.pass)}
                </span>
              </div>
              <hr className="border border-sofcity" />

              {/* 슈팅수 */}
              <div className="flex justify-around p-2">
                <span>{data.teamA.shot}</span>
                <span>슈팅수</span>
                <span>{data.teamB.shot}</span>
              </div>
              <hr className="border border-sofcity" />

              {/* 유효슈팅수 */}
              <div className="flex justify-around p-2">
                <span>{data.teamA.shotOnTarget}</span>
                <span className="-mx-4">유효슈팅수</span>
                <span>{data.teamB.shotOnTarget}</span>
              </div>
            </div>
          </div>

          {/* 피드백 경로 버튼 */}
          <div className="flex justify-around mb-2">
            <div
              className="w-full ml-3 mr-1 cursor-pointer"
              onClick={() => handleNavigate({ path: `/feedback/${match_id}` })}
            >
              <HalfCard maintext="경기 피드백" />
            </div>
            <div
              className="w-full ml-1 mr-3 cursor-pointer"
              onClick={() => handleNavigate({ path: `/playerfix/${match_id}` })}
            >
              <HalfCard maintext="개인 기록" />
            </div>
          </div>

          {/* 하이라이트 */}
          <GroupHighlightCard />
        </div>
      )}
    </div>
  );
};

export default ScoreTemplete;
