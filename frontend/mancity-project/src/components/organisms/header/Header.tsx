import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import SubmitButton from "@/components/atoms/submit_button/SubmitButton";
import Typography from "@/components/atoms/typography/Typography";
import { useNavigate } from "react-router-dom";

const Header = (props: HeaderPropsType) => {
  const { label, backArrow, headerButton, onClickButton } = props;
  const navigate = useNavigate();
  const onClickBackArrow = () => {
    navigate(-1);
  };
  return (
    <div className="sticky top-0 z-10 bg-white">
      <div className="flex p-2">
        <div
          className={`p-1 ${backArrow ? "visible" : "invisible"} min-w-16 text-[1.4rem]`}
          onClick={onClickBackArrow}
        >
          <FontawsomeIcon icon="arrow-left" color="#5D7A93" />
        </div>
        <div className="flex-grow text-center">
          <Typography
            textSize="text-[1.6rem]"
            fontWeight="font-medium"
            textColor="text-sofcity"
            label={label}
          />
        </div>
        <div className={`mt-auto ${headerButton ? "visible" : "invisible"} `} onClick={onClickButton}>
          <SubmitButton label="작성하기" />
        </div>
      </div>
      <hr className="border-[#d9d9d9] border-[0.05rem] m-0" />
    </div>
  );
};

export default Header;
