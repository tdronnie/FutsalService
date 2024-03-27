import { Link } from "react-router-dom";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";

const Navbar = () => {
  return (
    <>
      <div id="glassnav" className="fixed bottom-0 grid w-full max-w-xl grid-cols-5 gap-4 px-2 pt-2 rounded-t-xl place-items-center">
        <Link to="/">
          <div className="flex flex-col items-center justify-center w-20 cursor-pointer">
            <FontawsomeIcon
              icon="home"
              size="2x"
              color="#1E3050"
            ></FontawsomeIcon>
            <p className="p-0 font-sans text-sm text-darkcity">홈</p>
          </div>
        </Link>
        <Link to="/#">
          <div className="flex flex-col items-center justify-center w-20 cursor-pointer">
            <FontawsomeIcon
              icon="chess-board"
              size="2x"
              color="#1E3050"
            ></FontawsomeIcon>
            <p className="p-0 font-sans text-sm text-darkcity">전술보드</p>
          </div>
        </Link>
        {/* 앱솔로 가운데 위에 뜨도록 설정 */}
        <div className="absolute flex flex-col items-center justify-center mb-5 cursor-pointer">
          <Link to="/match">
            <FontawsomeIcon
              icon={["fab", "brave"]}
              size="4x"
              color="#1E3050"
            ></FontawsomeIcon>
          </Link>
        </div>
        {/* 배치를 위한 비어 있는 div */}
        <div></div>
        <Link to="/club">
          <div className="flex flex-col items-center justify-center w-20 cursor-pointer">
            <FontawsomeIcon
              icon={["fab", "vuejs"]}
              size="2x"
              color="#1E3050"
            ></FontawsomeIcon>
            <p className="p-0 font-sans text-sm text-darkcity">용병/클럽</p>
          </div>
        </Link>
        {/* 임시로 1번 유저로 연결 */}
        <Link to="/profile/1">
          <div className="flex flex-col items-center justify-center w-20 cursor-pointer">
            <FontawsomeIcon
              icon="user"
              size="2x"
              color="#1E3050"
            ></FontawsomeIcon>
            <p className="p-0 font-sans text-sm text-darkcity">내정보</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
