import { fetchUserApi, loginApi, sendFcmTokenApi } from "@/apis/userApis";
import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import InputGroup from "@/components/molecules/input_group/InputGroup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useUserStore from "@/stores/userStore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsC1isB9lqMknXRIaw4A7C31l2M5SjGDQ",
  authDomain: "mancity-app-127e1.firebaseapp.com",
  projectId: "mancity-app-127e1",
  storageBucket: "mancity-app-127e1.appspot.com",
  messagingSenderId: "282522754528",
  appId: "1:282522754528:web:2a51c272ce8f97372c9f85",
  measurementId: "G-L6WWDH5746",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getToken } from "firebase/messaging";
// `messaging` 인스턴스 생성 코드 추가
import { getMessaging } from "firebase/messaging";

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then(registration => {
          // 테스트콘솔
          console.log(registration);
        })
        .catch(err => {
          console.log('Service Worker 등록 실패:', err);
        });
    });
  }
};


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
  const [fcmToken, setFcmToken] = useState("");
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

  useEffect(() => {
    registerServiceWorker();
  },[])

  // FCM 토큰 요청 함수
  const requestFCMToken = async () => {
    if (Notification.permission === "granted") {
      const messaging = getMessaging(app);
      try {
        const token = await getToken(messaging, {
          vapidKey:
            "BLuopbozIqH5NnVASrPlVZXTae_NcsaY9bju7WrChj77PpcHfg79r7t3YehYTf3riIFbDfvuz79xhRTshmnxmnE",
        });
        // 토큰 세팅
        setFcmToken(token);
      } catch (error) {
        console.error("FCM 토큰 요청 실패:", error);
      }
    } else {
      console.log("알림 권한이 없어 토큰을 받아올 수 없습니다.");
    }
  };

  // FCM 토큰을 서버로 보내는 Mutation
  const { mutate: sendFcmTokenMutation } = useMutation({
    mutationFn: sendFcmTokenApi,
    // onSuccess: () => {
    //   console.log("FCM 토큰이 성공적으로 서버로 전송됨.");
    // },
    onError: (error) => {
      console.error("FCM 토큰 전송 에러:", error);
    },
  });

  // 로그인 후 사용자 정보 전역 상태 저장
  const { mutate: loginMutate } = useMutation({
    mutationFn: loginApi,
    onSuccess: async (userId) => {
      try {
        // 사용자 정보를 패치하고 전역 상태에 저장
        const userData = await fetchUserApi(userId);
        if (userData) {
          setUser(userData);
          // 로그인 성공 후 FCM 토큰 요청
          requestFCMToken();
        }
      } catch (error) {
        console.error("사용자 정보를 가져오는 데 실패했습니다.", error);
        setLoginError("사용자 정보를 가져올 수 없습니다. 다시 시도해 주세요.");
      }
    },
    onError: () => {
      console.log("로그인 에러");
      setLoginError(
        "이메일 또는 비밀번호가 맞지 않습니다. 다시 확인해 주세요."
      );
    },
  });

  // useUserStore에서 id만 선택해서 가져오기
  const userId = useUserStore((state) => state.id);
  
  useEffect(() => {
    if (fcmToken) {
      // 토큰을 서버로 전송
      sendFcmTokenMutation({ id: userId, fcmToken });
      // 테스트콘솔
      console.log(fcmToken);
      navigate("/");
    }
  }, [fcmToken]);

  const onSubmitLogin = () => {
    loginMutate(loginData);
    // 테스트콘솔
    // console.log(loginData);
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
        <GlobalButton label="로그인" width="w-[90%]" isdisabled={true} />
      </div>

      <div
        className="flex justify-end mt-4 mr-4 text-sm hover:underline hover:cursor-pointer"
        onClick={goSignup}
      >
        <div className="mr-2">아직 회원이 아니신가요?</div>
        <div className="underline">
          <MyTypography
            label="회원가입"
            fontWeight="font-medium"
            textColor=""
          />
        </div>
      </div>
    </div>
  );
};

export default LoginBody;
