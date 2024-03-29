import { fetchUserApi, loginApi } from "@/apis/userApis";
import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import InputGroup from "@/components/molecules/input_group/InputGroup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useUserStore from "@/stores/userStore";

const LoginBody = () => {
  // useUserStore의 setUser 함수 사용
  const setUser = useUserStore((state) => state.setUser);
  
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [LoginError, setLoginError] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const goSignup = () => {
    navigate("/signup");
  };
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    const re = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return re.test(password);
  };

  useEffect(() => {
    const isValid =
      validateEmail(emailValue) && validatePassword(passwordValue);
    setIsFormValid(isValid);

    setLoginData({
      email: emailValue,
      password: passwordValue,
    });
  }, [emailValue, passwordValue]);

  // 로그인 후 사용자 정보 전역 상태 저장
  const { mutate: loginMutate } = useMutation({
    mutationFn: loginApi,
    onSuccess: async (userId) => {
      try {
        // 사용자 정보를 패치하고 전역 상태에 저장
        const userData = await fetchUserApi(userId);
        if (userData) {
          setUser(userData);
          navigate("/");
        }
      } catch (error) {
        console.error("사용자 정보를 가져오는 데 실패했습니다.", error);
        setLoginError("사용자 정보를 가져올 수 없습니다. 다시 시도해 주세요.");
      }
    },
    onError: () => {
      console.log("로그인 에러");
      setLoginError("이메일 또는 비밀번호가 맞지 않습니다. 다시 확인해 주세요.");
    },
  });

  const onSubmitLogin = () => {
    console.log("로그인 정보 제출");
    loginMutate(loginData);
    console.log(loginData);
    setLoginError("이메일 또는 비밀번호가 맞지 않습니다. 다시 확인해 주세요.");
  };

  return (
    <div>
      <div className="mt-6">
        <InputGroup
          MyTypographyLabel="이메일"
          placeholder="ssafy@email.com"
          checking={false}
          textValue={emailValue}
          setTextValue={setEmailValue}
        />
      </div>
      <div className="">
        <InputGroup
          type="password"
          MyTypographyLabel="비밀번호"
          placeholder="영문, 숫자, 특수문자 포함 8자리 이상"
          checking={false}
          textValue={passwordValue}
          setTextValue={setPasswordValue}
        />
      </div>
      <div className="mx-4 mb-2 -mt-2 text-mancity ">
        {LoginError !== "" && (
          <MyTypography textSize="text-sm" label={LoginError} />
        )}
      </div>
      <div className="flex justify-center mt-8" onClick={onSubmitLogin}>
        <GlobalButton label="로그인" width="w-[90%]" isdisabled={isFormValid} />
      </div>

      <div
        className="flex justify-end mt-4 mr-4 text-sm hover:underline hover:cursor-pointer"
        onClick={goSignup}
      >
        <div className="mr-2">아직 회원이 아니신가요?</div>
        <div className="underline">
          <MyTypography label="회원가입" fontWeight="font-medium" textColor="" />
        </div>
      </div>
    </div>
  );
};

export default LoginBody;