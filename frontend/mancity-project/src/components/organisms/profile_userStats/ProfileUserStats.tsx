import MuiModal from "@/components/atoms/mui_modal/MuiModal";
import Typography from "@/components/atoms/typography/Typography";
import RadarChart from "@/components/molecules/radar_chart/RadarChart";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const ProfileUserStats = ({ profileData }: ProfilePropsType) => {
  const { data } = useQuery({ queryKey: ["loginUserData"] });

  console.log(data);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  return (
    <div id="glassui" className="justify-center m-4">
      <div className=" p-4">
        <div className="-mr-4 ">
          <Typography
            label="개인 스텟"
            textColor="black"
            textSize="text-2xl"
            fontWeight="font-medium"
          />
          <hr className="border-[#d9d9d9] border mt-3 w-[96%]" />
          <div className="m-4">
            <RadarChart profileData={profileData} />
          </div>
        </div>
        <div className="flex justify-end -my-2 underline decoration-white	 mr-3 pb-2 cursor-pointer">
          <MuiModal userId={profileData.id} />
        </div>
      </div>
    </div>
  );
};

export default ProfileUserStats;
