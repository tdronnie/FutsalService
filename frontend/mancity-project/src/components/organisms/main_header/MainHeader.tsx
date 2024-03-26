import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };
  return (
    <>
      <div className="flex justify-between py-3">
        <div className="flex items-center">
          <img
            src="/src/assets/imgs/mancity_logo_no_background.png"
            alt="logo"
            className="w-[5rem] h-[5rem]"
          />
          <div className="flex flex-col">
            <p className="p-0 text-3xl font-bold text-mancity">맨시티</p>
            <p className="p-0 font-light text-black text-md">
              맨발로 시작하는 티키타카
            </p>
          </div>
        </div>
        <div className="flex">
          <div
            className="m-5 cursor-pointer"
            onClick={() => handleNavigate({ path: "/alert" })}
          >
            <FontawsomeIcon
              icon="bell"
              size="2x"
              color="#00A9FF"
            ></FontawsomeIcon>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
