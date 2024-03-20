import ContentBox from "@/components/atoms/content_box/ContentBox";
import Typography from "@/components/atoms/typography/Typography";

const ClubList = (props: ClubListPropsType) => {
  const { file, clubTitile, clubInfo } = props;
  return (
    <div>
      <div className="flex items-center justify-between mx-3">
        <div className="flex items-center justify-between">
          <div className="mr-2">
            <ContentBox
              file={file}
              height="h-10"
              rounded="rounded-full"
              width="w-10"
            />
          </div>
          <Typography
            fontWeight="font-medium"
            label={clubTitile}
            textColor="text-black"
            textSize="text-lg"
          />
        </div>
        <div>
          <Typography
            fontWeight="font-medium"
            label={clubInfo}
            textColor="text-darkcity"
            textSize="text-md"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-11/12 px-2 my-2" />
      </div>
    </div>
  );
};

export default ClubList;
