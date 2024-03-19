import Typography from "@/components/atoms/typography/Typography";
import HighlightCard from "@/components/molecules/highlight_card/HighlightCard";

const GroupHighlightCard = () => {
  return (
    <div className="justify-center">
      <div className="m-4">
        <Typography
          label="MY 하이라이트"
          textColor="text-sofcity"
          textSize="text-2xl"
          fontWeight="font-semibold"
        />
      </div>
      <div className="flex mx-2 overflow-x-scroll ">
        <div className="m-2">
          <HighlightCard
            mainTitle="광주 신화 풋살장"
            bgimg="bg-[url('/favicon.ico')]"
          />
        </div>
        <div className="m-2">
          <HighlightCard
            mainTitle="광주 신화 풋살장"
            bgimg="bg-[url('/favicon.ico')]"
          />
        </div>
        <div className="m-2">
          <HighlightCard
            mainTitle="광주 신화 풋살장"
            bgimg="bg-[url('/favicon.ico')]"
          />
        </div>
        <div className="m-2">
          <HighlightCard
            mainTitle="광주 신화 풋살장"
            bgimg="bg-[url('/favicon.ico')]"
          />
        </div>
        <div className="m-2">
          <HighlightCard
            mainTitle="광주 신화 풋살장"
            bgimg="bg-[url('/favicon.ico')]"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupHighlightCard;
