import ContentBox from "@/components/atoms/content_box/ContentBox";
import Typography from "@/components/atoms/typography/Typography";

const HomeCard = (props: HomeCardPropsType) => {
  const {
    file = "/src/assets/imgs/mancity_logo.png",
    maintext,
    subtext,
  } = props;
  return (
    <div
      id="glassui"
      className="flex items-center w-full p-2 rounded-md shadow-nav"
    >
      <div>
        <ContentBox
          height="h-16"
          width="w-16"
          rounded="rounded-lg"
          file={file}
        />
      </div>
      <div className="flex flex-col justify-center flex-grow ml-3">
        <Typography
          fontWeight="font-medium"
          label={maintext}
          textColor="text-black"
          textSize="text-lg"
        />
        <Typography
          fontWeight="font-medium"
          label={subtext}
          textColor="text-darkcity"
          textSize="text-sm"
        />
      </div>
    </div>
  );
};

export default HomeCard;
