import MyTypography from "@/components/atoms/my_typography/MyTypography";

const MatchDetailHeader = () => {
  return (
    <div id="glassui" className="flex flex-col justify-between p-3 m-3 ">
      <div className="flex justify-between px-2">
        <div>
          <div>
            <MyTypography
              label="광주 신화 풋살장"
              fontWeight="font-semibold"
              textSize="text-[1.6rem]"
            />
          </div>
          <MyTypography
            label="3월 12일 (화) 오전 10시"
            fontWeight="font-medium"
            textSize="text-base"
          />
        </div>
      </div>

      <div className="text-right px-2">
        <div>
          <MyTypography
            label="매치장"
            fontWeight="font-medium"
            textSize="text-sm"
            textColor="text-gray-500"
          />
        </div>
        <div>
          <MyTypography
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
