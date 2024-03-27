import Typography from "@/components/atoms/typography/Typography";
import HighlightCard from "@/components/molecules/highlight_card/HighlightCard";

const GroupHighlightCard = () => {
  return (
    <div id="glassui" className="justify-center m-4 py-2 ">
      <div className="mx-4 my-2">
        <Typography
          label="저장된 하이라이트"
          textColor="black"
          textSize="text-2xl"
          fontWeight="font-medium"
        />
      </div>
      <div className="flex mx-2 overflow-x-scroll ">
        <div className="m-2">
          <HighlightCard
            mainTitle="광주 신화 풋살장"
            file="/src/assets/imgs/mancity_logo.png"
          />
        </div>
        <div className="m-2">
          <HighlightCard
            mainTitle="광주 신화 풋살장"
            file="/src/assets/imgs/mancity_logo.png"
          />
        </div>
        <div className="m-2">
          <HighlightCard
            mainTitle="광주 신화 풋살장"
            file="/src/assets/imgs/mancity_logo.png"
          />
        </div>
        <div className="m-2">
          <HighlightCard
            mainTitle="광주 신화 풋살장"
            file="/src/assets/imgs/mancity_logo.png"
          />
        </div>
        <div className="m-2">
          <HighlightCard
            mainTitle="광주 신화 풋살장"
            file="/src/assets/imgs/mancity_logo.png"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupHighlightCard;
