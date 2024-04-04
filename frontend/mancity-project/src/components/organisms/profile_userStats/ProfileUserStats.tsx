import MuiModal from "@/components/atoms/totalstat_modal/TotalStatModal";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import RadarChart from "@/components/molecules/radar_chart/RadarChart";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const ProfileUserStats = ({ profileData }: ProfilePropsType) => {
  const { data } = useQuery({ queryKey: ["loginUserData"] });
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  return (
    <div>
      {profileData && (
        <div id="glassui" className="justify-center m-4">
          <div className="p-4">
            <div>
              <MyTypography
                label="개인 스텟"
                textColor="black"
                textSize="text-2xl"
                fontWeight="font-medium"
              />
              <hr className="border-[#d9d9d9] border mt-3 w-[96%]" />
              <div className="my-2">
                <RadarChart profileData={profileData} />
              </div>
            </div>
            <div className="flex justify-end pb-2 mr-3 -my-2 underline cursor-pointer decoration-white">
              <MuiModal userId={profileData.id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileUserStats;
