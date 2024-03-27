import MuiModal from "@/components/atoms/mui_modal/MuiModal";
import Typography from "@/components/atoms/typography/Typography";
import RadarChart from "@/components/molecules/radar_chart/RadarChart";

const ProfileUserStats = () => {
  return (
    <div id="glassui" className="justify-center m-4">
      <div className=" p-4">
        <div className="-mr-4 ">
          <Typography
            label="개인 스텟"
            textColor="text-sofcity"
            textSize="text-2xl"
            fontWeight="font-semibold"
          />
          <hr className="border-[#d9d9d9] border-[1.5px] mt-3 w-[97%]" />
          <div className="m-4">
            <RadarChart />
          </div>
        </div>
        <div className="flex justify-end -my-2 underline mr-3 pb-2 cursor-pointer">
          <Typography
            label="누적기록"
            textColor="text-mancity"
            textSize="text-sm"
            fontWeight="font-medium"
          />
          <MuiModal />
        </div>
      </div>
    </div>
  );
};

export default ProfileUserStats;
