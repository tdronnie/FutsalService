import ContentBox from "@/components/atoms/content_box/ContentBox";
import TacticalBoardStore from "@/stores/tacticalBoardStore";
import Draggable from "react-draggable";
const TacticalBoardBody = () => {
  const { players, setPosition } = TacticalBoardStore();
  return (
    <div className={`w-[100%] h-[100%] bg-[#45930B]`}>
      <div></div>
      <div>
        {players.map((player, index) => (
          <Draggable
            key={index}
            position={{ x: player.x, y: player.y }}
            onStop={(e, data) => {
              setPosition(index, data.x, data.y);
            }}
          >
            <div
              className={`absolute flex justify-center items-center cursor-move text-xs 
                       ${index < 6 ? "bg-[#34D399]" : "bg-[#3B82F6]"}
                        text-black w-6 h-6 rounded-full text-center select-none `}
            >
              <div> {index + 1}</div>
              {/* <div>
                x: {player.x.toFixed(0)}, y: {player.y.toFixed(0)}
              </div> */}
            </div>
          </Draggable>
        ))}
        <ContentBox
          file="/src/assets/imgs/futsal_court_vertical.jpg"
          width="w-full"
          height="h-full"
        />
      </div>
    </div>
  );
};

export default TacticalBoardBody;
