import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };
  return (
    <div className="flex justify-between py-3">
      <div className="flex items-end pr-4">
        <img
          src="/src/assets/imgs/mancity_logo_no_background.png"
          alt="logo"
          className="w-[4.2rem] h-[4.2rem] mx-2"
        />
        <div className="flex flex-col">
          <p className="p-0 text-3xl font-bold text-mancity">맨시티</p>
          <p className="p-0 font-light text-black text-md">
            맨발로 시작하는 티키타카
          </p>
        </div>
      </div>
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => handleNavigate({ path: "/alert" })}
      >
        {/* <div id="glassui"
            className="p-2 my-5 mr-5 cursor-pointer"
            onClick={() => handleNavigate({ path: "/alert" })}
          >
            <FontawsomeIcon
              icon="bell"
              size="2x"
              color="#00A9FF"
            ></FontawsomeIcon>
          </div> */}
        <img
          src="/src/assets/imgs/bell.svg"
          alt="bell"
          className="w-[2.5rem] h-[2.5rem] mr-4"
        />
      </div>
    </div>
  );
};

export default MainHeader;
