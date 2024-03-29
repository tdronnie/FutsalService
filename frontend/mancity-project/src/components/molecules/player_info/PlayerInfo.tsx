import Typography from "@/components/atoms/typography/Typography";
import ContentBox from "@/components/atoms/content_box/ContentBox";

const PlayerInfo = (props: PlayerInfoPropsType) => {
  const { player, color } = props;
  return (
    <div id="glassui" className="flex items-center justify-between p-2 my-2">
        <div className="p-1 px-3 bg-black rounded-full bg-opacity-5">
      <Typography
        fontWeight="font-medium"
        label={player}
        textColor={color}
        textSize="text-xl"
      />
        </div>
      <span className="text-lg underline cursor-pointer text-mancity">개인 기록</span>
      <button className="p-2 bg-white border-2 rounded-full text-md text-mancity border-mancity hover:bg-mancity hover:text-white">
        {/* 매치장이면 확정, 그 외에는 ? 표시 */}
        확정
      </button>
    </div>
  );
};

export default PlayerInfo;
