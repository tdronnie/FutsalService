import { saveHighlightApi } from "@/apis/userApis";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import HighlightCard from "@/components/molecules/highlight_card/HighlightCard";
import futsalCourtData from "@/data/futsalCourts.json";
import useUserStore from "@/stores/userStore";
import { Modal, ModalClose, Sheet, Typography } from "@mui/joy";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const GroupHighlightCard = (props: GroupHighlightProps) => {
  const { highlights, my = false } = props;

  // 로그인한 사용자 id값
  const userId = useUserStore((state) => state.id);

  // modal open
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // 하이라이트 데이터
  const [saveHighlightData, setSaveHighlightData] = useState({
    highlightId: 0,
    userId: userId,
  });

  const handleSaveClick = (highlightId: number) => {
    setSaveHighlightData((prevState) => ({
      ...prevState,
      highlightId: highlightId, // 클릭한 하이라이트의 id로 업데이트
    }));
  };
  console.log(highlights);

  const { mutate } = useMutation({
    mutationFn: saveHighlightApi,
    onSuccess: () => {
      Swal.fire({
        title: "하이라이트 저장 완료",
        text: "하이라이트가 저장 완료되었습니다!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "확인",
      });
    },
    onError: () => {
      Swal.fire({
        title: "하이라이트 저장 에러",
        html: "이미 저장하셨습니다.",
        icon: "error",
        confirmButtonColor: "#d42c348b",
        confirmButtonText: "확인",
      });
    },
  });

  // 하이라이트 저장 클릭 시 api 요청 로직
  useEffect(() => {
    if (saveHighlightData.highlightId) {
      mutate(saveHighlightData);
    }
  }, [saveHighlightData]);

  // 하이라이트 시간으로 video 실행
  const playVideo = (time: string) => {
    const video = document.getElementById("myVideo") as HTMLVideoElement;
    const startTime = Number(time) - 1;
    const endTime = Number(time) + 5;
    if (video) {
      video.currentTime = startTime > 0 ? startTime : 0;
      video.play(); // 동영상 재생

      const onTimeUpdate = () => {
        // time보다 30초 이후 stop
        if (video.currentTime >= endTime) {
          video.pause(); // 동영상 정지
          video.removeEventListener("timeupdate", onTimeUpdate); // 이벤트 리스너 제거
        }
      };

      video.addEventListener("timeupdate", onTimeUpdate, true);
    } else {
      console.error("Video element not found");
    }
  };

  // 하이라이트 카드 클릭 시 모달 open, video 해당 time을 받아 -30초부터 시작
  const onClickCard = (time: string) => {
    setModalOpen(true);
    setTimeout(() => {
      playVideo(time);
    }, 200);
  };

  return (
    <div id="glassui" className="justify-center py-2 m-4 ">
      <div className="mx-4 my-2">
        <MyTypography
          label={my ? "MY 하이라이트" : `하이라이트`}
          textColor="black"
          textSize="text-2xl"
          fontWeight="font-medium"
        />
      </div>
      <hr className="border border-sofcity mx-2" />

      <div className="flex mx-2 overflow-x-scroll ">
        {highlights.length ? (
          highlights.map((highlight) => {
            // id값으로 받은 경기장 값을 경기장 json에서 찾기
            const courtData = futsalCourtData.find(
              (court) => court.id === highlight.courtId
            );

            return (
              <div key={highlight.id}>
                {/* 하이라이트 카드 */}

                <div className="relative m-2">
                  <div onClick={() => onClickCard(highlight.time)}>
                    <HighlightCard
                      mainTitle={
                        courtData ? courtData.title : `광주 신화 풋살장`
                      }
                      file="/src/assets/imgs/mancity_logo.png"
                    />
                  </div>

                  {/* 저장하기 버튼 */}
                  <div
                    className="absolute cursor-pointer px-3 rounded-full right-2 bottom-3"
                    onClick={() => handleSaveClick(highlight.id)}
                  >
                    <br />
                  </div>
                </div>

                {/* 모달달 */}
                <Modal
                  aria-labelledby="modal-title"
                  aria-describedby="modal-desc"
                  open={modalOpen}
                  onClose={() => setModalOpen(false)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                >
                  <Sheet
                    variant="outlined"
                    sx={{
                      maxWidth: 500,
                      borderRadius: "md",
                      p: 3,
                      boxShadow: "lg",
                    }}
                  >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                      component="h2"
                      id="modal-title"
                      level="h4"
                      textColor="inherit"
                      fontWeight="lg"
                      mb={1}
                    >
                      {`${courtData?.title} 하이라이트 `}
                    </Typography>
                    <div>
                      <video
                        className="rounded-xl"
                        id="myVideo"
                        width="100%"
                        muted
                        loop
                        playsInline
                        // autoPlay
                        controls
                      >
                        <source
                          src={
                            highlight.url
                              ? highlight.url
                              : `https://iandwe.s3.ap-northeast-2.amazonaws.com/match/Zhwf0anx`
                          }
                          type="video/mp4"
                        />
                      </video>
                      <div className="flex justify-around mt-2">
                        <div
                          onClick={() => playVideo(highlight.time)}
                          className="border-2 border-sofcity w-32 text-center rounded-xl mt-2 py-1 cursor-pointer"
                        >
                          다시 재생하기
                        </div>
                        <div
                          onClick={() => handleSaveClick(highlight.id)}
                          className="border-2 border-sofcity  w-24 text-center rounded-xl mt-2 py-1 cursor-pointer"
                        >
                          저장하기
                        </div>
                      </div>
                    </div>
                  </Sheet>
                </Modal>
              </div>
            );
          })
        ) : (
          <div>
            <div className="mx-2 my-5 text-l">
              하이라이트가 존재하지 않습니다..!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupHighlightCard;
