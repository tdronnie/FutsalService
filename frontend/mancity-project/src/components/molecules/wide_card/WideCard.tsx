import ContentBox from "@/components/atoms/content_box/ContentBox";
import SubButton from "@/components/atoms/sub_button/SubButton";
import Typography from "@/components/atoms/typography/Typography";
import React from "react";

const WideCard = () => {
  return (
    <>
      <div className="flex p-2 m-3 rounded-md shadow-nav">
        <div className="my-1 mr-3">
          <ContentBox height="h-20" width="w-20" rounded="rounded-lg" />
        </div>
        <div className="flex flex-col justify-around">
          <div>
            <Typography
              fontWeight="font-medium"
              label="오전 10시"
              textColor="text-black"
              textSize="text-lg"
            />
            <Typography
              fontWeight="font-medium"
              label="광주 신화 풋살장"
              textColor="text-black"
              textSize="text-xl"
            />
          </div>
          <div>
            <Typography
              fontWeight="font-medium"
              label="Typography"
              textSize="text-sm"
              textColor="text-sofcity"
            />
          </div>
        </div>
        <div className="mt-auto ml-auto">
        <SubButton label="인원 6/10" />
        </div>
      </div>
    </>
  );
};

export default WideCard;
