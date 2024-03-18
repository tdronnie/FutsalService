import Typography from "@/components/atoms/typography/Typography";
import RadarChart from "@/components/molecules/radar_chart/RadarChart";

const ProfileUserStats = () => {
  return (
    <div className="justify-center">
      <div className="m-4">
        <Typography
          label="개인 스텟"
          textColor="text-sofcity"
          textSize="text-2xl"
          fontWeight="font-semibold"
        />
        <div className="-mx-2">
          <RadarChart />
        </div>
      </div>
      <div className="flex justify-end -my-2 underline mr-3">
        <Typography
          label="누적기록"
          textColor="text-mancity"
          textSize="text-sm"
          fontWeight="font-medium"
        />
      </div>
      <hr className="border-[#d9d9d9] border-[1.5px] mt-5" />
    </div>
  );
};

export default ProfileUserStats;
