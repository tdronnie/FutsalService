import Typography from "@/components/atoms/typography/Typography";

const MatchDetailHeader = () => {
  return (
    <div id="glassui" className="flex flex-col justify-between p-3 m-3 ">
      <div className="flex justify-between px-2">
        <div>
          <div>
            <Typography
              label="광주 신화 풋살장"
              fontWeight="font-semibold"
              textSize="text-[1.6rem]"
            />
          </div>
          <Typography
            label="3월 12일 (화) 오전 10시"
            fontWeight="font-medium"
            textSize="text-base"
          />
        </div>
      </div>

      <div className="text-right px-2">
        <div>
          <Typography
            label="매치장"
            fontWeight="font-medium"
            textSize="text-sm"
            textColor="text-gray-500"
          />
        </div>
        <div>
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
