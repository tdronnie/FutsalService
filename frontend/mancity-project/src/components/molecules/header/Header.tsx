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
    <div className="flex m-1 ">
      <div className="m-1" onClick={onClickBackArrow}>
        <FontawsomeIcon icon="arrow-left" size="1x" color="#5D7A93" />
      </div>
      <div className="flex-grow text-center mr-8">
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
