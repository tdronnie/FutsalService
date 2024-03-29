import MyTypography from "@/components/atoms/my_typography/MyTypography";
import HighlightCard from "@/components/molecules/highlight_card/HighlightCard";

const GroupHighlightCard = () => {
  return (
    <div id="glassui" className="justify-center py-2 m-4 ">
      <div className="mx-4 my-2">
        <MyTypography
          label="저장된 하이라이트"
          textColor="black"
          textSize="text-2xl"
          fontWeight="font-medium"
        />
      </div>
      <hr className="border border-sofcity" />

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
