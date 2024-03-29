import {
  BrowserRouter as Router,
  matchPath,
  useLocation,
} from "react-router-dom";
import AppRoutes from "./routes";
import tooSmallImage from "./assets/imgs/toosmall.png";
import Navbar from "./components/molecules/navbar/Navbar";

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
import { useEffect } from "react";

const App = () => {
  // FCM 알람 파이어베이스 설정
  useEffect(() => {
    const fetchFCMToken = async () => {
      // 권한 요청 전에 먼저 알림 권한이 있는지 확인
      if (Notification.permission === "default") {
        requestPermission();
      }

      if (Notification.permission === "granted") {
        const messaging = getMessaging(app);
        const token = await getToken(messaging, {
          vapidKey:
            "BLuopbozIqH5NnVASrPlVZXTae_NcsaY9bju7WrChj77PpcHfg79r7t3YehYTf3riIFbDfvuz79xhRTshmnxmnE",
        });
        console.log(token); // 성공적으로 토큰을 받아온 경우, 로직 처리
      } else {
        console.log("알림 권한이 없어 토큰을 받아올 수 없습니다.");
      }
    };

    fetchFCMToken();
  }, []);

  // 하단바 조건부 렌더링 설정
  const ConditionalBottomNav = () => {
    const location = useLocation();
    const currentPathname = location.pathname;

    // Navbar 사용하지 않는 페이지 예외 처리 코드
    if (
      location.pathname === "/entry" ||
      location.pathname === "/login" ||
      // 소문자로 하면 네비바 안지워짐.. 왜지?
      location.pathname === "/signUp" ||
      location.pathname === "/alert" ||
      location.pathname === "/map" ||
      location.pathname === "/match/register" ||
      location.pathname === "/community/register" ||
      location.pathname === "/community/edit" ||
      location.pathname === "/club/register" ||
      matchPath("/match/:match_id", currentPathname) ||
      matchPath("/replay/:match_id", currentPathname) ||
      matchPath("/community/:community_id", currentPathname) ||
      matchPath("/club/:club_id", currentPathname) ||
      matchPath("/club/edit/:club_id", currentPathname) ||
      matchPath("/playerfix/:match_id", currentPathname)
    ) {
      return null;
    }

    return (
      <>
        <Navbar />
        <div className="h-20"></div>
      </>
    );
  };

  return (
    <>
      {/* 화면 크기 너무 작으면 서비스 이용 제한 */}
      <div id="appWarning" className="TooSmall">
        <img src={tooSmallImage} alt="toosmall" />
        <p>맨시티를 즐기기엔 화면이 너무 작아요..</p>
      </div>
      <div className="AppSize">
        <Router>
          <div className="h-2"></div>
          <AppRoutes />
          <ConditionalBottomNav />
        </Router>
      </div>
    </>
  );
};

export default App;

function requestPermission() {
  console.log("권한 요청 중...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("알림 권한이 허용됨");

      // FCM 메세지 처리
    } else {
      console.log("알림 권한 허용 안됨");
    }
  });
}
