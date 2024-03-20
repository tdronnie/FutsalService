import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import Typography from "@/components/atoms/typography/Typography";

const MatchDetailHeader = () => {
  return (
    <div className="flex justify-between m-2">
      <div className="">
        <div>
          <Typography
            label="3월 12일 (화) 오전 10시"
            fontWeight="font-medium"
            textSize="text-base"
          />
        </div>
        <div className="">
          <Typography
            label="광주 신화 풋살장"
            fontWeight="font-semibold"
            textSize="text-[1.6rem]"
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
      <div className=" ">
        <div className="flex">
          <div className=" mr-1 ">
            <Typography
              label="용병부르러가기"
              fontWeight="font-medium"
              textSize="text-sm"
              textColor="text-sofcity"
            />
          </div>
          <div className="text-xl -mt-1 ">
            <FontawsomeIcon icon="tower-cell" />
          </div>
        </div>
        <div className="text-end mt-4">
          <Typography
            label="매치장"
            fontWeight="font-medium"
            textSize="text-sm"
            textColor="text-gray-500"
          />
        </div>
        <div className="text-end">
          <Typography
            label="하남최성호"
            fontWeight="font-medium"
            textSize="text-sm"
            textColor="text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default MatchDetailHeader;
