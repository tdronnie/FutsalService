import MainTemplate from "@/components/templates/MainTemplate";
import { useEffect, useState } from "react";

const HomePage = () => {
  // const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  // // 마운트 시 앱 설치 이벤트 생성 및 언마운트 시 해제
  // useEffect(() => {
  //   window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

  //   return () => {
  //     window.removeEventListener(
  //       "beforeinstallprompt",
  //       handleBeforeInstallPrompt
  //     );
  //   };
  // }, []);

  // const handleBeforeInstallPrompt = (event: Event) => {
  //   event.preventDefault();
  //   setDeferredPrompt(event);
  // };

  // 앱설치 유도 버튼 관련 코드
  // const handleInstallClick = () => {
  //   if (deferredPrompt) {
  //     deferredPrompt.prompt();

  //     deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
  //       if (choiceResult.outcome === "accepted") {
  //         console.log("사용자 앱 설치 허용");
  //       } else {
  //         console.log("사용자 앱 설치 거절");
  //       }

  //       setDeferredPrompt(null);
  //     });
  //   }
  // };

  return (
    <>
      <MainTemplate />
      {/* 앱 설치가 안되어 있을 경우 앱 유도하는 버튼(고려중) */}
      {/* {deferredPrompt && <button onClick={handleInstallClick}>Install</button>} */}
    </>
  );
};

export default HomePage;
