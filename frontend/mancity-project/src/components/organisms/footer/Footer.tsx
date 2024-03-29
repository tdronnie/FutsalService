import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import MyTypography from "@/components/atoms/my_typography/MyTypography";

const Footer = (props: FooterPropsType) => {
  const { label, buttonLabel, onButtonClick } = props;
  return (
    <div id="glassnav" className="rounded-t-xl fixed bottom-0 z-10 bg-white w-full max-w-[36rem]">
      <div className="flex items-center justify-around h-16 border-t-2 rounded-t-xl">
        <div className="w-1/2 text-center">
          <MyTypography
            label={label}
            textSize="text-md"
            textColor="text-sofcity"
          />
        </div>
        <div className="w-1/2 mr-2" onClick={onButtonClick}>
          <GlobalButton label={buttonLabel} isdisabled={true} width="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
