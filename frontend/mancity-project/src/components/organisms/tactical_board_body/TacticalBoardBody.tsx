import ContentBox from "@/components/atoms/content_box/ContentBox";
import TacticalBoardStore from "@/stores/tacticalBoardStore";
import { useRef } from "react";
import Draggable from "react-draggable";
const TacticalBoardBody = () => {
  // findDOMNode 에러가 발생해 추가한 nodeRef, 공식문서에서 추천하는 방법
  const nodeRef = useRef(null);
  const { players, setPosition } = TacticalBoardStore();
  return (
    <div className={`h-full bg-[#45930B] -mb-20`}>
      <div className="flex justify-end mr-2 pt-1 ">
        <div className="border-[0.6vw] border-white text-white font-extralight rounded-lg p-[0.1rem]">
          하이라이트 선택하기
        </div>
      </div>
      <div>
        {players.map((player, index) => (
          <Draggable
            nodeRef={nodeRef}
            key={index}
            position={{ x: player.x, y: player.y }}
            onStop={(e, data) => {
              setPosition(index, data.x, data.y);
            }}
          >
            <div
              ref={nodeRef}
              className={`absolute flex justify-center items-center cursor-move text-xs w-6 h-6
               rounded-full text-center text-black select-none
                       ${
                         index < 6
                           ? "bg-[#34D399]"
                           : index !== 12
                             ? "bg-[#3B82F6]"
                             : 'bg-[url("/src/assets/imgs/orange_ball_2.png")] bg-cover'
                       }`}
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
