import Header from "@/components/organisms/header/Header";
import ReplayBody from "@/components/organisms/replay_body/ReplayBody";

const ReplayTemplate = () => {
  return (
    <div>
      <Header backArrow={true} label="경기 다시보기" headerButton={false} />
      <ReplayBody />
    </div>
  );
};

export default ReplayTemplate;
