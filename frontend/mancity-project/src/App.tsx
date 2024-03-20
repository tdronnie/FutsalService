import {
  BrowserRouter as Router,
  matchPath,
  useLocation,
} from "react-router-dom";
import AppRoutes from "./routes";
import tooSmallImage from "./assets/imgs/toosmall.png";
import Navbar from "./components/molecules/navbar/Navbar";

const App = () => {
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
          {/* 끝까지 스크롤 내릴 수 있게 하는 설정 */}
          <div className="h-20"></div>
          <ConditionalBottomNav />
        </Router>
      </div>
    </>
  );
};

export default App;

function ConditionalBottomNav() {
  const location = useLocation();
  const currentPathname = location.pathname;

  // Navbar 사용하지 않는 페이지 예외 처리 코드
  if (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/alert" ||
    location.pathname === "/map" ||
    location.pathname === "/match/register" ||
    location.pathname === "/community/register" ||
    location.pathname === "/community/edit" ||
    location.pathname === "/club/register" ||
    matchPath("/match/:match_id", currentPathname) ||
    matchPath("/replay/:match_id", currentPathname) ||
    matchPath("/community/video/:community_id", currentPathname) ||
    matchPath("/community/talk/:community_id", currentPathname) ||
    matchPath("/club/:club_id", currentPathname) ||
    matchPath("/club/edit/:club_id", currentPathname) ||
    matchPath("/players/:match_id", currentPathname)
  ) {
    return null;
  }

  return <Navbar />;
}
