import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { ModalDialog, ModalDialogProps } from "@mui/joy";
import Header from "@/components/organisms/header/Header";
import { useParams } from "react-router-dom";
import { allocateApi, fetchPersonalFeedbacksApi } from "@/apis/feedbackApis";
import useUserStore from "@/stores/userStore";
import { useQuery } from "@tanstack/react-query";
import { fetchAllPlayersApi } from "@/apis/userApis";
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const PlayerInfo = (props: PlayerInfoPropsType) => {
  // 자동완성을 위한 상태 설정
  const [value, setValue] = React.useState<AllUsers | null>(null);

  const { player, color, playerData } = props;
  const myId = playerData?.id

  // console.log(playerData)

  const { match_id } = useParams<{ match_id: string }>();
  const userId = useUserStore((state) => state.id);

  // 누적 기록 api 요청
  const { isLoading, data } = useQuery({
    queryKey: ["AllPlayers"],
    queryFn: () => fetchAllPlayersApi(),
  });

  // 개인 피드백 설정
  const [feedbackResult, setFeedbackResult] = useState<PersonalFeedbackResult>({
    distanceCovered: 2,
    speed: 2,
    goal: 2,
    assist: 2,
    shot: 2,
    shotOnTarget: 1,
    pass: 1,
    turnOverInOffense: 1,
    turnOverInDefense: 1,
  });

  useEffect(() => {
    if (match_id) {
      fetchPersonalFeedbacksApi(Number(match_id), userId)
        .then((feedback) => {
          setFeedbackResult(feedback);
        })
        .then(() => {
          // // 테스트콘솔
          // console.log(feedbackResult);
        });
    }
  }, [match_id]);

  // 각 항목의 피드백을 설정하기 위한 함수
  const getFeedbackText = (kind: keyof PersonalFeedbackResult) => {
    const feedbackValue = feedbackResult[kind];
    const feedbackItem = presonalFeedbacks.find((item) => item.kind === kind);
    return feedbackValue === 1
      ? feedbackItem?.feedback1
      : feedbackItem?.feedback2;
  };

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
          className="px-2 bg-white border-2 rounded-full py- text-md text-mancity border-mancity hover:bg-mancity hover:text-white"
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
            <ModalDialog
              layout={layout}
              sx={{ padding: "0px", overflow: "scroll" }}
            >
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
                  backgroundColor: "white",
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
                  <hr className="mx-2 mb-2 border border-sofcity" />

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
                </div>
                <div id="glassui" className="py-1 mx-4 my-4">
                  <div className="mx-1 my-2">
                    <MyTypography
                      fontWeight="font-medium"
                      label={`활동량: ${getFeedbackText("distanceCovered")}`}
                      textColor="text-darkcity"
                      textSize="text-xl"
                    />
                  </div>
                </div>
                <div id="glassui" className="py-1 mx-4 my-4">
                  <div className="mx-1 my-2">
                    <MyTypography
                      fontWeight="font-medium"
                      label={`최고 속도: ${getFeedbackText("speed")}`}
                      textColor="text-darkcity"
                      textSize="text-xl"
                    />
                  </div>
                </div>
                <div id="glassui" className="py-1 mx-4 my-4">
                  <div className="mx-1 my-2">
                    <MyTypography
                      fontWeight="font-medium"
                      label={`득점: ${getFeedbackText("goal")}`}
                      textColor="text-darkcity"
                      textSize="text-xl"
                    />
                  </div>
                </div>
                <div id="glassui" className="py-1 mx-4 my-4">
                  <div className="mx-1 my-2">
                    <MyTypography
                      fontWeight="font-medium"
                      label={`도움: ${getFeedbackText("assist")}`}
                      textColor="text-darkcity"
                      textSize="text-xl"
                    />
                  </div>
                </div>
                <div id="glassui" className="py-1 mx-4 my-4">
                  <div className="mx-1 my-2">
                    <MyTypography
                      fontWeight="font-medium"
                      label={`총 슈팅: ${getFeedbackText("shot")}`}
                      textColor="text-darkcity"
                      textSize="text-xl"
                    />
                  </div>
                </div>
                <div id="glassui" className="py-1 mx-4 my-4">
                  <div className="mx-1 my-2">
                    <MyTypography
                      fontWeight="font-medium"
                      label={`유효슈팅: ${getFeedbackText("shotOnTarget")}`}
                      textColor="text-darkcity"
                      textSize="text-xl"
                    />
                  </div>
                </div>
                <div id="glassui" className="py-1 mx-4 my-4">
                  <div className="mx-1 my-2">
                    <MyTypography
                      fontWeight="font-medium"
                      label={`총 패스: ${getFeedbackText("pass")}`}
                      textColor="text-darkcity"
                      textSize="text-xl"
                    />
                  </div>
                </div>
                <div id="glassui" className="py-1 mx-4 my-4">
                  <div className="mx-1 my-2">
                    <MyTypography
                      fontWeight="font-medium"
                      label={`공격 실패: ${getFeedbackText("turnOverInOffense")}`}
                      textColor="text-darkcity"
                      textSize="text-xl"
                    />
                  </div>
                </div>
                <div id="glassui" className="py-1 mx-4 my-4">
                  <div className="mx-1 my-2">
                    <MyTypography
                      fontWeight="font-medium"
                      label={`수비 성공: ${getFeedbackText("turnOverInDefense")}`}
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

              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  if (newValue) {
                    // newValue가 null이 아닐 때만 실행
                    setValue(newValue);
                    console.log(newValue); // 여기서 선택된 항목의 id를 사용할 수 있습니다.
                    allocateApi(Number(myId), newValue.id);
                  } else {
                    setValue(null); // newValue가 null일 때는 value 상태도 null로 설정
                  }
                }}
                id="search-player"
                options={data || []} // data가 없을 경우 빈 배열을 대신 사용하여 에러 방지
                getOptionLabel={(option) => option.nickName || ""} // option이 정의되지 않은 경우를 대비하여 빈 문자열 반환
                renderInput={(params) => (
                  <TextField {...params} label="선수 검색" />
                )}
                style={{ width: 300 }}
              />
            </Sheet>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;

const presonalFeedbacks = [
  {
    id: 1,
    kind: "distanceCovered",
    feedback1:
      "높은 이동거리는 활동량이 높음을 나타냅니다. 이는 긍정적인 측면에서 팀의 열정과 에너지를 반영하지만, 에너지 관리와 효율적인 위치 선정의 필요성을 강조합니다. ",
    feedback2:
      "낮은 이동거리로 보아 경기 중 충분히 활동하지 못하고 있을 가능성이 있습니다. 위치 선정의 개선이나 경기 중 활동량을 높이기 위한 전략이 필요할 수 있습니다. ",
  },
  {
    id: 2,
    kind: "speed",
    feedback1:
      "최고속도는 선수의 체력과 스프린트 능력을 보여줍니다. 높은 최고속도는 역습과 빠른 공격 전환에서 유리하며, 팀에 역동성을 더해줍니다. 이를 유지하기 위해 지속적인 체력 관리와 폭발력 향상 훈련이 필요합니다. ",
    feedback2:
      "최고속도의 향상은 선수의 공격적인 기여도를 높이고, 역습의 효과를 증대시킬 수 있습니다. 체력과 스프린트 능력을 개선하기 위한 맞춤형 훈련 프로그램을 개발하고, 지속적인 노력이 필요합니다. ",
  },
  {
    id: 3,
    kind: "goal",
    feedback1:
      "높은 득점수는 우수한 공격 능력과 결정적인 순간에 골을 성공시킬 수 있는 능력을 나타냅니다. 이는 공격진의 효율성과 정확도가 높음을 의미합니다. 득점 기회를 최대한 활용하기 위해 계속해서 공격 전략을 다듬고, 개인의 기술을 향상시키는 것이 중요합니다. ",
    feedback2:
      "낮은 득점수는 공격진의 결정적인 순간의 효율성이나 정확도가 부족할 수 있음을 나타냅니다. 득점 기회를 놓치지 않기 위해서는 공격 전략의 개선과 개인 기술의 향상에 집중할 필요가 있습니다. ",
  },
  {
    id: 4,
    kind: "assist",
    feedback1:
      "높은 어시스트수는 팀워크와 상호 작용의 우수성을 나타내며, 팀 내에서 효과적인 커뮤니케이션과 이해도가 높음을 의미합니다. 선수들 사이의 좋은 화합과 전략적 이해를 바탕으로 계속해서 공격 기회를 만들어내는 것이 중요합니다. ",
    feedback2:
      "낮은 어시스트수는 팀 내 커뮤니케이션이나 전략적 이해도가 향상될 필요가 있음을 나타냅니다. 팀워크와 상호 작용을 강화하고, 공격 기회를 만들기 위한 전략적인 플레이에 더 집중할 필요가 있습니다. ",
  },
  {
    id: 5,
    kind: "shot",
    feedback1:
      "높은 슈팅수는 공격적인 경기 운영과 적극적인 골 시도를 나타냅니다. 골문을 향한 다양한 시도는 득점 기회를 높이며, 상대 팀에게 지속적인 압박을 가할 수 있습니다. 공격적인 자세를 유지하면서도 슈팅의 질을 높이는 방향으로 노력해야 합니다. ",
    feedback2:
      "낮은 슈팅수는 공격 기회의 활용도가 낮거나 공격 전략이 소극적일 수 있음을 나타냅니다. 공격 기회를 더 많이 창출하고, 골문을 향한 시도를 늘리기 위해 공격 전략과 선수들의 자신감을 키울 필요가 있습니다. ",
  },
  {
    id: 6,
    kind: "shotOnTarget",
    feedback1:
      "슈팅성공율은 팀의 공격 효율성을 나타내는 중요한 지표입니다. 높은 슈팅성공율은 정확한 슈팅 능력과 우수한 선택을 반영합니다. 이를 기반으로 더 많은 득점 기회를 창출하고, 상대방에 대한 압박을 지속적으로 유지할 수 있습니다. ",
    feedback2:
      "슈팅성공율을 개선하기 위해서는 슈팅 기술의 정확도와 선택의 질을 높이는 것이 중요합니다. 더 유리한 위치에서의 슈팅 연습을 통해 골문을 향한 시도의 효율을 증가시키고, 실전 같은 연습을 통해 의사결정 능력을 향상시켜야 합니다. ",
  },
  {
    id: 7,
    kind: "pass",
    feedback1:
      "높은 패스 수는 팀의 소유권 유지 능력을 나타내며, 패스의 질과 팀워크의 중요성을 강조합니다. 패스의 정확도와 전략적인 패스 선택이 중요합니다. ",
    feedback2:
      "낮은 패스 수는 공격 활로가 원활하게 연결되지 않는다는 것을 나타닙니다. 패스의 정확도와 전략적인 패스 선택이 중요합니다. ",
  },
  {
    id: 8,
    kind: "turnOverInOffense",
    feedback1:
      "턴오버의 감소는 팀의 소유권 관리 능력이 향상되고 있음을 의미합니다. 안정적인 패스와 전략적인 공격 운영을 통해 상대방에게 기회를 줄이고, 게임의 흐름을 자신들의 편으로 유도할 수 있습니다. ",
    feedback2:
      "턴오버를 줄이기 위해, 패스와 볼 핸들링의 정확도를 개선할 필요가 있습니다. 팀원들과의 커뮤니케이션 강화와 함께, 고압 상황에서의 의사결정 능력 향상이 필요합니다. ",
  },
  {
    id: 9,
    kind: "turnOverInDefense",
    feedback1:
      "높은 수비성공율은 팀의 수비 능력이 효과적임을 의미합니다. 수비 조직력을 유지하고, 개인의 수비 기술을 계속 개선하는 것이 중요합니다. ",
    feedback2:
      "낮은 수비성공율은 개선이 필요한 수비 전략이나 기술적인 문제를 지적합니다. 위치 선정, 대인 방어, 공간 커버 등 수비 훈련에 더 많은 시간을 할애하고, 경기 분석을 통해 반복되는 수비 실수를 파악해야 합니다. ",
  },
];
