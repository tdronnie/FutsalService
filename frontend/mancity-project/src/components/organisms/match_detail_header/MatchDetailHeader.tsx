import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import Typography from "@/components/atoms/typography/Typography";

const MatchDetailHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <div>
          <Typography
            label="3월 12일 (화) 오전 10시"
            fontWeight="font-medium"
            textSize="text-base"
          />
        </div>
        <div>
          <Typography
            label="광주 신화 풋살장"
            fontWeight="font-semibold"
            textSize="text-2xl"
          />
        </div>
        <div>
          <Typography
            label="조회수 13"
            fontWeight="font-medium"
            textSize="text-base"
            textColor="text-gray-500"
          />
        </div>
      </div>
      <div className="mr-3 ">
        <div className="flex ">
          <div className="mt-1 mr-1">
            <Typography
              label="용병부르러가기"
              fontWeight="font-medium"
              textSize="text-base"
              textColor="text-sofcity"
            />
          </div>
          <div className="text-xl">
            <FontawsomeIcon icon="tower-cell" />
          </div>
        </div>
        <div className="text-end">
          <Typography
            label="매치장"
            fontWeight="font-medium"
            textSize="text-base"
            textColor="text-gray-500"
          />
        </div>
        <div className="text-end">
          <Typography
            label="하남최성호"
            fontWeight="font-medium"
            textSize="text-base"
            textColor="text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default MatchDetailHeader;
