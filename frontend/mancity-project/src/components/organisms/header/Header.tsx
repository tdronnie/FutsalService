import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import SubmitButton from "@/components/atoms/submit_button/SubmitButton";
import Typography from "@/components/atoms/typography/Typography";
import { useNavigate } from "react-router-dom";

const Header = (props: HeaderPropsType) => {
  const { label, backArrow, headerButton } = props;
  const navigate = useNavigate();
  const onClickBackArrow = () => {
    navigate(-1);
  };
  return (
    <div className="flex p-2 mb-2 mx-1 sticky top-0 bg-white min-w-full ">
      <div
        className={`p-1 ${backArrow ? "visible" : "invisible"} min-w-16 text-[1.4rem]`}
        onClick={onClickBackArrow}
      >
        <FontawsomeIcon icon="arrow-left" color="#5D7A93" />
      </div>
      <div className="flex-grow text-center">
        <Typography
          textSize="text-3xl"
          fontWeight="font-medium"
          textColor="text-sofcity"
          label={label}
        />
      </div>
      <div
        className={`mt-1
      ${headerButton ? "visible" : "invisible"} `}
      >
        <SubmitButton label="작성하기" />
      </div>
    </div>
  );
};

export default Header;
