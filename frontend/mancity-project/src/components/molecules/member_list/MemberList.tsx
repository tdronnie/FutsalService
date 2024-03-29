import ContentBox from "@/components/atoms/content_box/ContentBox";
import IconButton from "@/components/atoms/icon_button/IconButton";
import TypographyLine from "@/components/atoms/typography_line/TypographyLine";

const MemberList = (props: MemberListPropsType) => {
  const file = "/src/assets/imgs/go_to_analysis.jpg";
  const { label } = props;
  return (
    <div id="glassui" className="m-3 p-4">
      <div>
        <TypographyLine lineWidth="w-32" label={label} />
      </div>
      <div className="flex  m-2">
        <div className="mr-2">
          <ContentBox
            width="w-14"
            height="h-14"
            rounded="rounded-full"
            file={file}
          />
        </div>
        <div className="mr-2">
          <ContentBox
            width="w-14"
            height="h-14"
            rounded="rounded-full"
            file={file}
          />
        </div>
        <div className="mr-2">
          <ContentBox
            width="w-14"
            height="h-14"
            rounded="rounded-full"
            file={file}
          />
        </div>
        <div className="mr-2">
          <IconButton icon="plus" />
        </div>
      </div>
    </div>
  );
};

export default MemberList;
