import Typography from "@/components/atoms/typography/Typography";
import GlobalCard from "@/components/molecules/global_card/GlobalCard";

const GroupGlobalCard = () => {
  return (
    <div className="justify-center">
      <div className="m-4">
        <Typography
          label="지난 경기"
          textColor="text-sofcity"
          textSize="text-2xl"
          fontWeight="font-semibold"
        />
      </div>
      <div className="flex mx-2 overflow-x-scroll ">
        <div className="m-2">
          <GlobalCard
            mainTitle="광주 신화 풋살장"
            subTitle="2024/03/19"
            file="/favicon.ico"
          />
        </div>
        <div className="m-2">
          <GlobalCard
            mainTitle="광주 신화 풋살장"
            subTitle="2024/03/19"
            file="/favicon.ico"
          />
        </div>
        <div className="m-2">
          <GlobalCard
            mainTitle="광주 신화 풋살장"
            subTitle="2024/03/19"
            file="/favicon.ico"
          />
        </div>
        <div className="m-2">
          <GlobalCard
            mainTitle="광주 신화 풋살장"
            subTitle="2024/03/19"
            file="/favicon.ico"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupGlobalCard;
