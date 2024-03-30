import { followPageApi } from "@/apis/userApis";
import FollowTemplate from "@/components/templates/user/FollowTemplate";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const FollowPage = () => {
  const { user_id } = useParams<{ user_id: string }>();

  const { isLoading, data } = useQuery({
    queryKey: ["followList"],
    queryFn: () => followPageApi(Number(user_id)),
  });

  return (
    <div>{!isLoading && data && <FollowTemplate followListData={data} />}</div>
  );
};

export default FollowPage;
