import TacticalBoardVertical from "@/components/organisms/tactical_board_vertical/TacticalBoardVertical";
import { useEffect, useRef, useState } from "react";

const ReplayBody = () => {
  // 가로화면인지 여부 설정
  const [garo, setGaro] = useState<boolean>(false);

  // 가로모드 버튼 클릭 시 가로모드로 변경
  const changeGaro = () => {
    setGaro(!garo);
  };

  // 비디오 멈추면 멈춘 시간 저장
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stopTime, setStopTime] = useState<number>(0);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePause = () => {
        // console.log(`Paused at: ${video.currentTime}`);
        setStopTime(video.currentTime);
      };
      video.addEventListener("pause", handlePause);

      // 컴포넌트가 언마운트되거나 업데이트되기 전에 이벤트 리스너 제거
      return () => {
        video.removeEventListener("pause", handlePause);
      };
    }
  }, []);

  const garoStyle = garo ? "rotate-90 translate-y-14 mt-[0.1rem] " : "";
  return (
    <div>
      {/* 세로모드일 때 */}
      <div className={`${garoStyle} w-full h-full`}>
        <div className="flex ">
          <button
            onClick={changeGaro}
            className="border-2  border-darkcity rounded-xl px-1"
          >
            가로모드
          </button>
          <div>{garo ? `on` : `off`} </div>
          <div> / {stopTime}초에 멈췄습니다</div>
        </div>
        <div>
          모바일이 아닐 때 화면을 생각해야해서, 우선 가로 세로를 따로
          진행중입니다. <br />
          가로일 때는 아래에 전술판을 같이 띄우기로, 세로모드는 따로 만들자..
        </div>
        <div className="w-full h-full">
          <video id="myVideo" controls muted loop playsInline ref={videoRef}>
            <source
              src="https://iandwe.s3.ap-northeast-2.amazonaws.com/match/g3iO5Rrb"
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <TacticalBoardVertical />
        </div>
      </div>
      {/* 가로모드일 때 */}
    </div>
  );
};

export default ReplayBody;
