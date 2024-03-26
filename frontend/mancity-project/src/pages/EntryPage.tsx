import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import ReverseButton from "@/components/atoms/reverse_button/ReverseButton";
import { useNavigate } from "react-router-dom";

const EntryPage = () => {
    const navigate = useNavigate();
    const handleNavigate = ({ path }: NavigateType) => {
      navigate(path);
    };
  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <div className="flex flex-col items-center">
        <img
          src="/src/assets/imgs/entry.png"
          alt="logo"
          className="w-[12.5rem] h-[20rem] mb-5"
        />
        <div className="m-1"
                onClick={() => handleNavigate({ path: "/login" })}
                >
        <GlobalButton isdisabled label="로그인" width="w-80" />
        </div>
        <div className="m-1"
                onClick={() => handleNavigate({ path: "/signup" })}
                >
        <ReverseButton isdisabled label="회원가입" width="w-80" />
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
