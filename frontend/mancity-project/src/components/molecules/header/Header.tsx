import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import Typography from "@/components/atoms/typography/Typography";
import { useNavigate } from "react-router-dom";

const Header = (props: HeaderPropsType) => {
  const { label } = props;
  const navigate = useNavigate();
  const onClickBackArrow = () => {
    navigate(-1);
  };
  return (
    <div className="flex p-1 ">
      <div className="p-1" onClick={onClickBackArrow}>
        <FontawsomeIcon icon="arrow-left" size="1x" color="#5D7A93" />
      </div>
      <div className="flex-grow mr-8 text-center">
        <Typography
          textSize="text-xl"
          fontWeight="font-medium"
          textColor="text-sofcity"
          label={label}
        />
      </div>
    </div>
  );
};

export default Header;
