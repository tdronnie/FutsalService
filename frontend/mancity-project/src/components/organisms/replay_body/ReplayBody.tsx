import { fetchMatchDetail } from "@/apis/matchApis";
import HalfCard from "@/components/molecules/half_card/HalfCard";
import Navbar from "@/components/molecules/navbar/Navbar";
import TacticalBoardBody from "@/components/organisms/tactical_board_body/TacticalBoardBody";
import { Modal, ModalClose, ModalDialog, ModalDialogProps } from "@mui/joy";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ReplayBody = () => {
  const { match_id } = useParams<{ match_id: string }>();
  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };

  const { data } = useQuery({
    queryKey: ["matchData", match_id],
    queryFn: () => fetchMatchDetail(Number(match_id)),
  });

  // 비디오 멈추면 멈춘 시간 저장
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stopTime, setStopTime] = useState<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePause = () => {
        // console.log(`Paused at: ${video.currentTime}`);
        setStopTime(video.currentTime);
      };
      video.addEventListener("pause", handlePause);

      // 컴포넌트가 언마운트되거나 업데이트되기 전에 이벤트 리스너 제거
      return () => {
        video.removeEventListener("pause", handlePause);
      };
    }
  }, []);

  // 모달 생성
  const [layout, setLayout] = useState<ModalDialogProps["layout"] | undefined>(
    undefined
  );

  const modalStyle = {
    maxWidth: "576px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  };

  return (
    <div>
      {/* 다시보기 영상 */}
      <div id="glassui" className="p-4 m-4">
        <video
          id="myVideo"
          controls
          muted
          loop
          playsInline
          ref={videoRef}
          className="w-full h-full rounded-xl"
        >
          <source src={data?.replayUrl} type="video/mp4" />
        </video>
      </div>
      {/* 전술보드보기, 경기분석보기 */}
      <div className="flex justify-around mb-2">
        <div
          className="w-full ml-4 mr-1 cursor-pointer"
          // 풀버전 모달이 열리도록 수정할겁니다
          onClick={() => {
            setLayout("fullscreen");
          }}
        >
          <HalfCard
            maintext="전술보드보기"
            file="/src/assets/imgs/tactical_board.png"
          />
        </div>
        <div
          className="w-full ml-1 mr-4 cursor-pointer"
          onClick={() => handleNavigate({ path: `/score/${match_id}` })}
        >
          <HalfCard maintext="경기분석보기" file="/src/assets/imgs/goal.png" />
        </div>
      </div>
      <div id="glassui" className="m-4">
        <div className="py-4 text-sm ">
          <div>
            영상을 <b>일시정지</b> 하고 전술보드를 <b>클릭</b>하면
            <br />
            선수들의 <b>위치</b>를 전술보드로 <b>확인</b>하실 수 있습니다.
          </div>
        </div>
      </div>
      <div> {stopTime}초에 멈췄습니다 (확인용)</div>
      {/* 모달 로직 */}
      <div>
        <Modal
          open={!!layout}
          onClose={() => setLayout(undefined)}
          sx={modalStyle}
        >
          <ModalDialog
            layout={layout}
            sx={{ padding: "0px", backgroundColor: "#45930B" }}
          >
            {/* 모달 닫기 버튼 */}

            <ModalClose
              size="lg"
              color="primary"
              sx={{
                border: "3px solid white",
                color: "white",
                ":hover": {
                  color: "#45930B",
                },
                padding: "1px",
              }}
            />
            <div className=" bg-[#45930B]">
              <div className="flex justify-center">
                <div className="border-[3px] rounded-md text-white px-2 py-1 m-2">
                  전술보드
                </div>
              </div>

              <TacticalBoardBody />
            </div>
            <Navbar />
          </ModalDialog>
        </Modal>
      </div>
    </div>
  );
};

export default ReplayBody;
