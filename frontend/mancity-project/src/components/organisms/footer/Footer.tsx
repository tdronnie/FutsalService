import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import Typography from "@/components/atoms/typography/Typography";

const Footer = (props: FooterPropsType) => {
  const { label, buttonLabel, onButtonClick } = props;
  return (
    <div className="fixed bottom-0 z-10 bg-white w-full max-w-[36rem]">
      <div className="flex justify-around items-center border-t-2 rounded-t-xl h-16">
        <div className="w-1/2 text-center">
          <Typography
            label={label}
            textSize="text-md"
            textColor="text-sofcity"
          />
        </div>
        <div className="w-1/2" onClick={onButtonClick}>
          <GlobalButton label={buttonLabel} isdisabled={true} width="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
