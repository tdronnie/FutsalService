import {
  BrowserRouter as Router,
  matchPath,
  useLocation,
} from "react-router-dom";
import AppRoutes from "./routes";
import tooSmallImage from "./assets/imgs/toosmall.png";
import Navbar from "./components/molecules/navbar/Navbar";
import { useEffect } from "react";

const App = () => {
  // 알림 권한 요청 함수
  const requestPermission = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("알림 권한이 허용됨");
        // FCM 메세지 처리 등의 추가 로직을 여기에 작성합니다.
      } else {
        console.log("알림 권한 허용 안됨");
      }
    });
  };

  // FCM 알람 파이어베이스 설정
  useEffect(() => {
    requestPermission();
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
      // matchPath("/replay/:match_id", currentPathname) ||
      matchPath("/community/:community_id", currentPathname) ||
      matchPath("/club/:club_id", currentPathname) ||
      matchPath("/club/edit/:club_id", currentPathname) ||
      matchPath("/playerfix/:match_id", currentPathname) ||
      matchPath("/profile/edit/:user_id", currentPathname)
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
          <AppRoutes />
          <ConditionalBottomNav />
        </Router>
      </div>
    </>
  );
};

export default App;
