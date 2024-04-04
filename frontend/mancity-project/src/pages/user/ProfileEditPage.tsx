import { fetchUserApi } from "@/apis/userApis";
import ProfileEditTemplate from "@/components/templates/user/ProfileEditTemplate";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const ProfileEditPage = () => {
  const { user_id } = useParams<{ user_id: string }>();
  const { isLoading, data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => fetchUserApi(Number(user_id)),
  });

  return (
    !isLoading &&
    data && (
      <div>
        <ProfileEditTemplate userInfoData={data} isLoading={isLoading}/>
      </div>
    )
  );
};
export default ProfileEditPage;
