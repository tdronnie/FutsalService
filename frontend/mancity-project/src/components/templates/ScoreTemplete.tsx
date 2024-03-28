import Header from "@/components/organisms/header/Header";

const ScoreTemplete = () => {
  return (
    <div>
      <Header label="경기 통계" backArrow={true} headerButton={false} />

      {/* 영상 나오는 자리 */}
      <div className="flex justify-center mx-5 mt-5">
        <video id="myVideo" controls>
          <source
            src="https://iandwe.s3.ap-northeast-2.amazonaws.com/match/yKa0ly3L"
            type="video/mp4"
          />
        </video>
      </div>

      {/* 팀 구분 하는 자리 */}
      <div className="flex justify-around text-xl font-bold">
        <span>HOME팀</span>
        <span>AWAY팀</span>
      </div>


    </div>
  );
};

export default ScoreTemplete;
