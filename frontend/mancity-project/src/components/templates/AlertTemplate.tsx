import Header from "@/components/organisms/header/Header";
import AlertCard from "../molecules/alert_card/AlertCard";

const AlertTemplate = () => {
  return (
    <>
      <Header label="주요 알림" backArrow={true} headerButton={false} />
      <AlertCard
        maintext="📫 용병 요청이 도착했어요"
        subtext="요청을 수락하고 경기를 뛰어보세요!"
        minitext="알림 날짜: 2024년 03월 11일"
        buttonlabel="바로가기"
      />
    </>
  );
};

export default AlertTemplate;
