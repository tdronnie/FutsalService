import MemberList from "@/components/molecules/member_list/MemberList";
import MiniMap from "@/components/molecules/mini_map/MiniMap";
import HalfCard from "@/components/molecules/half_card/HalfCard";
import { useNavigate, useParams } from "react-router-dom";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import { useEffect, useRef, useState } from "react";
import {
  DialogTitle,
  Modal,
  ModalClose,
  ModalDialog,
  ModalDialogProps,
} from "@mui/joy";
// 한국 날짜 설정
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { useMutation } from "@tanstack/react-query";
import { calcRequestApi, videoUploadApi } from "@/apis/matchApis";
import EditContentBox from "@/components/molecules/edit_content_box/EditContentBox";
import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import useIsUploadStore from "@/stores/matchStore";
dayjs.locale("ko");

const MatchDetailBody = ({
  matchDetailPropsData,
  courtData,
}: MatchDetailPropsType) => {
  const navigate = useNavigate();
  const { match_id } = useParams<{ match_id: string }>();

  // 경기 분석 제출했는지 코드 받기
  const {
    isUpload,
    changeIsUpload,
    isStartUpload,
    changeIsStartUpload,
    isCalc,
    changeIsCalc,
  } = useIsUploadStore();

  //// modal 관련 로직/////
  const [openModal, setOpenModal] = useState<boolean>(false);
  useEffect(() => {
    if (openModal) {
      setLayout("center");
    }
  }, [openModal]);

  const [layout, setLayout] = useState<ModalDialogProps["layout"] | undefined>(
    undefined
  );

  const modalStyle = {
    width: "300px",
  };
  ///////////////////////

  // 클립보드 저장
  const onClickCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };
  // 오늘 날짜 저장
  const today = dayjs().format("YYYY-MM-DD");

  // 경기가 현재 날짜와 비교해서 지났는지 여부
  const isOver = dayjs(today).isBefore(matchDetailPropsData.startDate);

  // 프로필 이미지 저장
  const [imageFilesValue, setImageFiles] = useState<File[]>([]);
  const [imageViewValue, setImageView] = useState<string[]>([]);

  const inputFileRef = useRef<HTMLInputElement>(null);

  const triggerFileInput = () => {
    // inputFileRef.current가 존재하면 해당 요소의 클릭 이벤트를 실행
    inputFileRef.current?.click();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const imageUrlLists: string[] = [];
    if (files) {
      const fileArray = Array.from(files, (f) => f as File);
      setImageFiles(fileArray);
      const currentImageUrl = URL.createObjectURL(files[0]);
      imageUrlLists.push(currentImageUrl);
    }
    setImageView(imageUrlLists);
  };

  // put api 로직
  const { mutate: videoUploadMutate } = useMutation({
    mutationFn: videoUploadApi,
    onSuccess(result) {
      console.log(result);
      changeIsUpload();
      setIsReplay(true);
    },
    onError(error) {
      console.log(error);
    },
  });

  // put api 로직
  const { mutate: calcRequestMutate } = useMutation({
    mutationFn: calcRequestApi,
    onSuccess(result) {
      console.log(result);
      changeIsCalc();
    },
    onError(error) {
      console.log(error);
    },
  });

  // 파일 formData로 인코딩 후 제출
  const uploadFile = () => {
    const formData: FormData = new FormData();
    if (imageFilesValue.length > 0) {
      formData.append("files", imageFilesValue[0]);
    }
    formData.append(
      "dto",
      new Blob([JSON.stringify({ id: match_id })], {
        type: "application/json",
      })
    );
    videoUploadMutate(formData);
    changeIsStartUpload();
    setLayout(undefined);
    setOpenModal(false);
  };

  // 업로드 된 영상이 있으면 다시보기 navigate 입력
  const [isReplay, setIsReplay] = useState(false);

  useEffect(() => {
    setIsReplay(!!matchDetailPropsData.replayUrl);
  }, [matchDetailPropsData]);

  const handleReplayClick = () => {
    if (isReplay) {
      navigate(`/replay/${match_id}`);
    }
  };

  //테스트 콘솔로그
  // console.log("isStartUpload:", isStartUpload);
  // console.log("isUpload:", isUpload);
  // console.log("isCalc:", isCalc);
  // console.log(matchDetailPropsData.replayUrl);
  // console.log(isReplay);
  return (
    <div>
      {!isOver && (
        <div className="flex justify-around mb-2">
          {matchDetailPropsData.calcOver ? (
            <div
              className="w-full ml-3 mr-1 cursor-pointer"
              onClick={() => {
                navigate(`/feedback/${match_id}`);
              }}
            >
              <HalfCard
                maintext="경기결과보기"
                file="/src/assets/imgs/game_result.svg"
                rounded="rounded-none"
              />
            </div>
          ) : (
            // 모달을 띄워 이미지 업로드!
            <div className="w-full ml-3 mr-1">
              {isStartUpload || matchDetailPropsData.replayUrl ? (
                isUpload || matchDetailPropsData.replayUrl ? (
                  isCalc ? (
                    <div className="cursor-none">
                      <HalfCard
                        maintext="영상 분석중..."
                        file="/src/assets/imgs/stick_chart.svg"
                      />
                    </div>
                  ) : (
                    // 업로드 완료, 분석 미완료
                    <div
                      onClick={() => {
                        calcRequestMutate(Number(match_id));
                      }}
                    >
                      <HalfCard
                        maintext="경기분석하기"
                        file="/src/assets/imgs/stick_chart.svg"
                      />
                    </div>
                  )
                ) : (
                  // 업로드 진행중, 분석 미완료
                  <div className="cursor-none">
                    <HalfCard
                      maintext="영상 업로드중..."
                      file="/src/assets/imgs/stick_chart.svg"
                    />
                  </div>
                )
              ) : (
                // 업로드 미완료, 분석 미완료
                <div
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <HalfCard
                    maintext="영상 업로드"
                    file="/src/assets/imgs/stick_chart.svg"
                    rounded="rounded-none"
                  />
                </div>
              )}
            </div>
          )}

          {/* 모달 내용 */}
          <div>
            <Modal
              open={!!layout}
              onClose={() => {
                setLayout(undefined);
                setOpenModal(false);
              }}
            >
              <ModalDialog layout={layout} sx={modalStyle}>
                <ModalClose />
                <DialogTitle>경기 영상 업로드</DialogTitle>
                <div>
                  <div
                    className=" flex m-4 justify-center  "
                    onClick={triggerFileInput}
                  >
                    <EditContentBox
                      width="w-36"
                      height="h-36"
                      rounded="rounded-md"
                    />
                    <div className="absolute opacity-0  w-36 h-36 text-[1px]">
                      <input
                        id="video"
                        type="file"
                        accept="video/*"
                        onChange={handleFileUpload}
                        ref={inputFileRef}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center  w-full">
                      <div
                        className="w-7/12 p-1 cursor-pointer"
                        onClick={uploadFile}
                      >
                        <GlobalButton
                          width="w-full"
                          label="영상 업로드"
                          isdisabled={imageFilesValue[0] ? true : false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ModalDialog>
            </Modal>
          </div>

          {/* replayUrl 의 유무에 따른 다시보기 버튼 활성화 */}
          <div
            onClick={handleReplayClick}
            className={`w-full ml-1 mr-3 ${isReplay ? "" : "opacity-50"}`}
          >
            <HalfCard
              maintext="경기다시보기"
              file="/src/assets/imgs/replay.svg"
              rounded="rounded-none"
            />
          </div>
        </div>
      )}

      {/* 멤버 라인업 */}
      <div>
        <MemberList participants={matchDetailPropsData.participants} />
      </div>

      {/* 지도 */}
      <div id="glassui" className="py-1 m-3">
        <div className="m-2">
          <MyTypography label="경기장" textSize="text-lg" />
        </div>
        <hr className="border-sofcity border-[0.05rem] m-2" />
        <MiniMap
          lat={courtData.lat}
          lng={courtData.lng}
          address={courtData.address}
          tel={courtData.tel}
          onClick={() => onClickCopy(courtData.address)}
        />
      </div>
    </div>
  );
};

export default MatchDetailBody;
