import { fetchMatchDetail } from "@/apis/matchApis";
import MatchDetailTemplate from "@/components/templates/match/MatchDetailTemplate";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const MatchDetailPage = () => {
  const { match_id } = useParams<{ match_id: string }>();
  // MatchDatail get api 호출
  const { data, isLoading } = useQuery({
    queryKey: ["matchDetail", match_id],
    queryFn: async () => {
      const response = await fetchMatchDetail(Number(match_id));
      return response;
    },
    // refetchInterval: 5000,
  });
  return (
    <div>
      {!isLoading && data && (
        <MatchDetailTemplate matchDetailPropsData={data} />
      )}
    </div>
  );
};

export default MatchDetailPage;
