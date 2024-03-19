import Header from "@/components/organisms/header/Header";
import WideCard from "../molecules/wide_card/WideCard";
import IconButton from "../atoms/icon_button/IconButton";

const MatchListTemplete = () => {
  return (
    <div className="relative">
      <Header label="매치 목록" backArrow={false} headerButton={false} />
      <WideCard
        bgimg="bg-[url('/favicon.ico')]"
        subtext="오전 10시"
        maintext="광주 신화 풋살장"
        minitext="남자·5vs5·중 수준"
        buttonlabel="인원 6/10"
      />
      <div className="absolute bottom-0">
        <IconButton icon="pen" />
      </div>
    </div>
  );
};

export default MatchListTemplete;
