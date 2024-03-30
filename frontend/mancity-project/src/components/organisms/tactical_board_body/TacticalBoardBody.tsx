import ContentBox from "@/components/atoms/content_box/ContentBox";
import TacticalBoardStore from "@/stores/tacticalBoardStore";
import { createRef, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

const TacticalBoardBody = () => {
  const { horizonPlayers, setHorizonPosition } = TacticalBoardStore();

  // findDOMNode 에러가 발생해 추가한 nodeRef, 공식문서에서 추천하는 방법
  // 각 플레이어에 대한 ref 배열을 생성
  const nodeRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);

  if (nodeRefs.current.length !== horizonPlayers.length) {
    // players 배열의 길이만큼 ref를 초기화
    nodeRefs.current = horizonPlayers.map(
      (_, i) => nodeRefs.current[i] || createRef()
    );
  }

  // 화면 밖으로 나가지 않도록 범위 제한
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    right: 1000,
    bottom: 500,
  });

  useEffect(() => {
    const updateBounds = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      setBounds({
        left: 0,
        top: 0,
        right: screenWidth > 575 ? 550 : screenWidth - 30,
        bottom: screenHeight - 140,
      });
    };

    updateBounds();
    // 화면 크기가 변경될 때마다 bounds를 업데이트
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  return (
    <div className={`h-full bg-[#45930B] -mb-20`}>
      <div className="flex justify-end mr-2 pt-1">
        <div className="border-[0.6vw] border-white text-white font-extralight rounded-lg p-[0.1rem]">
          하이라이트 선택하기
        </div>
      </div>
      <div>
        {horizonPlayers.map((player, index) => (
          <Draggable
            nodeRef={nodeRefs.current[index]} // 고유한 ref 사용
            key={index}
            position={{ x: player.x, y: player.y }}
            onStop={(e, data) => {
              setHorizonPosition(index, data.x, data.y);
            }}
            bounds={bounds}
          >
            <div
              ref={nodeRefs.current[index]} // 고유한 ref 할당
              className={`absolute flex justify-center items-center cursor-move text-xs w-6 h-6
               rounded-full text-center text-black select-none
               ${index < 6 ? "bg-[#34D399]" : index !== 12 ? "bg-[#3B82F6]" : 'bg-[url("/src/assets/imgs/orange_ball_2.png")] bg-cover'}`}
            >
              {/* 공은 숫자 표시 x */}
              <div> {index < 12 ? index + 1 : ""}</div>
              {/* 좌표를 확인할 수 있는 코드 */}
              {/* <div>
              x: {player.x.toFixed(0)}, y: {player.y.toFixed(0)}
            </div> */}
            </div>
          </Draggable>
        ))}
        <div className="h-[91vh]">
          <ContentBox
            file="/src/assets/imgs/futsal_court_vertical.jpg"
            width="w-full"
            height="h-full"
          />
        </div>
      </div>
      {/* 배경을 초록으로 하기 위한 설정 */}
      <div className="h-[5.6vh]"></div>
    </div>
  );
};

export default TacticalBoardBody;
