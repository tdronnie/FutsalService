import ContentBox from "@/components/atoms/content_box/ContentBox";
import Typography from "@/components/atoms/typography/Typography";

const HalfCard = (props: HalfCardPropsType) => {
  const { file = "/src/assets/imgs/mancity_logo.png", maintext } = props;
  return (
    <div id="glassui" className="flex items-center w-full p-2 rounded-md shadow-nav">
      <div>
        <ContentBox
          height="h-16"
          width="w-16"
          rounded="rounded-lg"
          file={file}
        />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <Typography
          fontWeight="font-medium"
          label={maintext}
          textColor="text-black"
          textSize="text-xl"
        />
      </div>
    </div>
  );
};

export default HalfCard;
