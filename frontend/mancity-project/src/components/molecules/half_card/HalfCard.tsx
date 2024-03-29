import ContentBox from "@/components/atoms/content_box/ContentBox";
import Typography from "@/components/atoms/typography/Typography";

const HalfCard = (props: HalfCardPropsType) => {
  const {
    file = "/src/assets/imgs/mancity_logo.png",
    maintext,
    rounded = "rounded-full",
  } = props;
  return (
    <div
      id="glassui"
      className="flex items-center w-full h-16 p-2 rounded-md cursor-pointer shadow-nav"
    >
      <div>
        <ContentBox
          height="h-10"
          width="w-10"
          rounded={rounded}
          file={file}
          id="responsive-img"
        />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <Typography
          id="responsive-p"
          fontWeight="font-medium"
          label={maintext}
          textColor="text-darkcity"
          textSize="text-xl"
        />
      </div>
    </div>
  );
};

export default HalfCard;
