import ContentBox from "@/components/atoms/content_box/ContentBox";
import SubButton from "@/components/atoms/sub_button/SubButton";
import Typography from "@/components/atoms/typography/Typography";

const WideCard = (props: TailwindPropsType) => {
  const { bgimg, matchtime, matchplace, matchinfo, peoplenumber } = props;
  return (
    <>
      <div className="flex p-2 m-3 rounded-md shadow-nav">
        <div className="my-1 mr-3">
          <ContentBox height="h-20" width="w-20" rounded="rounded-lg" bgimg={bgimg} />
        </div>
        <div className="flex flex-col justify-around">
          <div>
            <Typography
              fontWeight="font-medium"
              label={matchtime}
              textColor="text-black"
              textSize="text-lg"
            />
            <Typography
              fontWeight="font-medium"
              label={matchplace}
              textColor="text-black"
              textSize="text-xl"
            />
          </div>
          <div>
            <Typography
              fontWeight="font-medium"
              label={matchinfo}
              textSize="text-sm"
              textColor="text-sofcity"
            />
          </div>
        </div>
        <div className="mt-auto ml-auto">
        <SubButton label={peoplenumber} />
        </div>
      </div>
    </>
  );
};

export default WideCard;
