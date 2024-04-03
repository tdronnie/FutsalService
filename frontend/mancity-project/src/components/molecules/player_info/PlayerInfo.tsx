import { useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "@/components/molecules/search_bar/SearchBar";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { ModalDialog, ModalDialogProps } from "@mui/joy";
import Header from "@/components/organisms/header/Header";

const PlayerInfo = (props: PlayerInfoPropsType) => {
  const { player, color, playerData } = props;

  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };

  // 서치바 최초 값 0 초기화
  const [placeValue, setPlaceValue] = useState(0);

  const [open, setOpen] = useState<boolean>(false);

  // 개인기록 모달 생성
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
    <div id="glassui" className="flex items-center justify-between p-2 my-2">
      {/* 선수 이름 */}
      <div className="p-1 px-2 bg-black rounded-lg bg-opacity-5">
        <MyTypography
          fontWeight="font-medium"
          label={player}
          textColor={color}
          textSize="text-base"
        />
      </div>

      <div className="flex">
        {/* 개인기록 , 모달 */}
        <span
          className="mr-[0.6rem] mt-[0.1rem] text-base underline cursor-pointer text-mancity"
          onClick={() => setLayout("fullscreen")}
        >
          개인 기록
        </span>

        <button
          onClick={() => setOpen(true)}
          className="px-2 py- bg-white border-2 rounded-full text-md text-mancity border-mancity hover:bg-mancity hover:text-white"
        >
          {/* 매치장이면 확정, 그 외에는 ? 표시 */}
          확정
        </button>

        {/* 개인기록 모달 로직 */}
        <div>
          <Modal
            open={!!layout}
            onClose={() => setLayout(undefined)}
            sx={modalStyle}
          >
            <ModalDialog layout={layout} sx={{ padding: "0px" }}>
              {/* 모달 닫기 버튼 */}

              <ModalClose
                size="lg"
                color="primary"
                sx={{
                  position: "fixed", // 요소를 고정 위치에 배치합니다.
                  top: 20, // 상단에서부터의 거리
                  right: 30, // 오른쪽에서부터의 거리
                  border: "2px solid #00A9FF",
                  color: "#00A9FF",
                  ":hover": {
                    cursor: "pointer",
                  },
                  padding: "1px",
                  zIndex: 1000,
                }}
              />
              {/* 내용 */}

              <div id="modalbackground">
                <Header
                  label="개인 기록"
                  backArrow={false}
                  headerButton={false}
                />

                <div id="glassui" className="py-3 m-4">
                  <div className="mx-2 my-2">
                    <MyTypography
                      label={`${playerData ? playerData.nickname : player}`}
                      textColor="black"
                      textSize="text-xl"
                      fontWeight="font-medium"
                    />
                  </div>
                  <hr className="mb-2 mx-2 border border-sofcity" />

                  {/* 개인 통계 */}
                  {/* 이동 거리 */}
                  <div className="flex">
                    <div className="w-24 mx-1 my-2 text-center">
                      <MyTypography
                        fontWeight="font-medium"
                        label="활동량"
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                    <div className="mx-1 my-2">
                      <MyTypography
                        fontWeight="font-medium"
                        label={
                          playerData
                            ? `: ${playerData.distanceCovered}km`
                            : ": 1.2km"
                        }
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                  </div>

                  {/* 최고속도 */}
                  <div className="flex">
                    <div className="w-24 mx-1 my-2 text-center">
                      <MyTypography
                        fontWeight="font-medium"
                        label="최고 속도"
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                    <div className="mx-1 my-2">
                      <MyTypography
                        fontWeight="font-medium"
                        label={
                          playerData ? `: ${playerData.speed}km/h` : ": 24km/h"
                        }
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                  </div>

                  {/* 득점 */}
                  <div className="flex">
                    <div className="w-24 mx-1 my-2 text-center">
                      <MyTypography
                        fontWeight="font-medium"
                        label="득점"
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                    <div className="mx-1 my-2">
                      <MyTypography
                        fontWeight="font-medium"
                        label={playerData ? `: ${playerData.goal}회` : ": 3회"}
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                  </div>

                  {/* 어시스트 */}
                  <div className="flex">
                    <div className="w-24 mx-1 my-2 text-center">
                      <MyTypography
                        fontWeight="font-medium"
                        label="도움"
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                    <div className="mx-1 my-2">
                      <MyTypography
                        fontWeight="font-medium"
                        label={playerData ? `: ${playerData.assist}` : ": 2회"}
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                  </div>

                  {/* 총슈팅 */}
                  <div className="flex">
                    <div className="w-24 mx-1 my-2 text-center">
                      <MyTypography
                        fontWeight="font-medium"
                        label="총 슈팅"
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                    <div className="mx-1 my-2">
                      <MyTypography
                        fontWeight="font-medium"
                        label={playerData ? `: ${playerData.shot}회` : ": 21회"}
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                  </div>

                  {/* 유효 슈팅 */}
                  <div className="flex">
                    <div className="w-24 mx-1 my-2 text-center">
                      <MyTypography
                        fontWeight="font-medium"
                        label="유효 슈팅"
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                    <div className="mx-1 my-2">
                      <MyTypography
                        fontWeight="font-medium"
                        label={
                          playerData
                            ? `: ${playerData.shotsOnTarget}회`
                            : ": 13회"
                        }
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                  </div>

                  {/* 총 패스 */}
                  <div className="flex">
                    <div className="w-24 mx-1 my-2 text-center">
                      <MyTypography
                        fontWeight="font-medium"
                        label="총 패스"
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                    <div className="mx-1 my-2">
                      <MyTypography
                        fontWeight="font-medium"
                        label={playerData ? `: ${playerData.pass}회` : ": 34회"}
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                  </div>

                  {/* 공격 턴오버 */}
                  <div className="flex">
                    <div className="w-24 mx-1 my-2 text-center">
                      <MyTypography
                        fontWeight="font-medium"
                        label="공격 실패"
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                    <div className="mx-1 my-2">
                      <MyTypography
                        fontWeight="font-medium"
                        label={
                          playerData
                            ? `: ${playerData.turnOverInOffense}회`
                            : ": 8회"
                        }
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                  </div>

                  {/* 수비 성공 */}
                  <div className="flex">
                    <div className="w-24 mx-1 my-2 text-center">
                      <MyTypography
                        fontWeight="font-medium"
                        label="수비 성공"
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                    <div className="mx-1 my-2">
                      <MyTypography
                        fontWeight="font-medium"
                        label={
                          playerData
                            ? `: ${playerData.turnOverInDefense}회`
                            : ": 12회"
                        }
                        textColor="text-darkcity"
                        textSize="text-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* 개인 피드백 */}
                <div id="glassui" className="py-1 mx-4 my-4">
                  <div className="mx-2 my-2 ">
                    <MyTypography
                      label="개인 피드백"
                      textColor="black"
                      textSize="text-xl"
                      fontWeight="font-bold"
                    />
                  </div>
                  <hr className="mb-2 border border-sofcity" />
                  <div className="mx-1 my-2">
                    <MyTypography
                      fontWeight="font-medium"
                      label={`내용 :`}
                      textColor="text-darkcity"
                      textSize="text-xl"
                    />
                  </div>
                </div>
              </div>
            </ModalDialog>
          </Modal>
        </div>

        {/* 선수 선택하는 모달 */}
        <div>
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Sheet
              variant="outlined"
              sx={{
                maxWidth: 500,
                minWidth: 400,
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
                선수 검색
              </Typography>
              {/* 선수 검색창 */}
              <SearchBar contents={[]} setPlaceValue={setPlaceValue} />
            </Sheet>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
