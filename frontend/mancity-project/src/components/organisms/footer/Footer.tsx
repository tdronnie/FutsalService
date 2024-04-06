import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import { useNavigate } from "react-router";

const Footer = (props: FooterPropsType) => {
  const { label, buttonLabel, onButtonClick } = props;
  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };
  return (
    <div
      id="glassnav"
      className="rounded-t-xl fixed bottom-0 z-10 bg-white w-full max-w-[36rem]"
    >
      <div className="flex items-center justify-around h-16 border-t-2 rounded-t-xl">
        <div
          className="ml-4 cursor-pointer"
          onClick={() => handleNavigate({ path: "/" })}
        >
          <FontawsomeIcon icon="home" size="1x" color="#4b6a84" />
        </div>
        <div className="w-1/2 mr-1 text-center">
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
