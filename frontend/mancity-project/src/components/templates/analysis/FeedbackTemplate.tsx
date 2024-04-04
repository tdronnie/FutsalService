import Header from "@/components/organisms/header/Header";
import ShadcnTabs from "@/components/atoms/shadcn_tabs/ShadcnTabs";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import { useEffect, useState } from "react";
import { fetchTeamFeedbacksApi } from "@/apis/feedbackApis";
import { useParams } from "react-router-dom";

const teamFeedbacks = [
  {
    id: 1,
    kind: "possession",
    feedback1:
      "높은 점유율은 경기에서 우위를 점하고 있음을 의미합니다. 하지만 높은 점유율에도 불구하고 득점 기회를 만들지 못한다면, 공격 전술이나 최종 패스의 정확성에 대해 재검토할 필요가 있습니다. ",
    feedback2:
      "낮은 점유율은 상대 팀이 경기를 지배하고 있음을 나타냅니다. 이 경우, 수비 조직력을 강화하고 역습의 기회를 찾는 전략이 필요할 수 있습니다. ",
  },
  {
    id: 2,
    kind: "shot",
    feedback1:
      "많은 슈팅수로 공격 기회를 많이 만들고 있지만, 이 중 소수만이 골로 연결된다면, 슈팅의 질과 선택을 개선해야 할 필요가 있습니다. 더 유리한 위치에서 슈팅을 시도하거나, 정확도를 높이는 연습이 필요합니다. ",
    feedback2:
      "적은 슈팅수는 공격 기회를 충분히 만들지 못하고 있다는 신호입니다. 공격 라인의 활동성을 높이고, 창의적인 패스로 상대 수비를 뚫는 전략이 요구됩니다. ",
  },
  {
    id: 3,
    kind: "pass",
    feedback1:
      "많은 패스수는 팀이 공을 잘 돌리고 있음을 나타냅니다. 하지만 효과적인 공격 전환을 위해서는 패스의 질과 전략적인 패스 선택이 중요합니다. ",
    feedback2:
      "적은 패스수는 패스 게임에서 어려움을 겪고 있거나, 공격 전개가 원활하지 않음을 의미합니다. 패스의 정확도를 높이고, 팀 간의 소통을 강화하는 연습이 필요합니다. ",
  },
  {
    id: 4,
    kind: "goal",
    feedback1:
      "득점이 많을 경우, 공격 전략과 실행이 잘 맞아떨어지고 있음을 의미합니다. 하지만 실점도 많다면, 수비 전술과 개인의 수비 능력에 대한 점검이 필요합니다. ",
    feedback2:
      "득점이 적을 경우, 공격 전술의 효과성과 슈팅 기회의 질, 공격 선수들의 활동량과 위치 선정 등을 재고해야 합니다. ",
  },
  {
    id: 5,
    kind: "activityLevel",
    feedback1:
      "높은 활동량은 경기에 대한 헌신을 나타냅니다. 하지만 지나치게 높은 활동량은 선수들이 효율적으로 움직이지 못하고 있다는 신호일 수 있습니다. 경기 중 휴식과 회복, 그리고 에너지 관리에 대해 생각해 볼 필요가 있습니다. ",
    feedback2:
      "낮은 활동량은 팀이 경기에 충분히 집중하지 못하고 있거나, 체력적으로 문제가 있음을 의미할 수 있습니다. 훈련 프로그램에 다양성을 더하고, 체력 관리에 주의를 기울여야 합니다. ",
  },
];

const FeedbackTemplet = () => {
  const [selectedTab, setSelectedTab] = useState(false);
  const tabSwitch = () => setSelectedTab(!selectedTab);
  const { match_id } = useParams<{ match_id: string }>();

  const [feedbackResult, setFeedbackResult] = useState<FeedbackResult>({
    possession: 2,
    shot: 2,
    pass: 2,
    goal: 1,
    activityLevel: 1,
  });

  useEffect(() => {
    if (match_id) {
      fetchTeamFeedbacksApi(Number(match_id)).then((feedback) => {
        setFeedbackResult(feedback);
      });
    }
  }, [match_id]);

  // 각 항목의 피드백을 설정하기 위한 함수
  const getFeedbackTextHome = (kind: keyof FeedbackResult) => {
    const feedbackValue = feedbackResult[kind];
    const feedbackItem = teamFeedbacks.find((item) => item.kind === kind);
    if (!feedbackItem) return "";

    return feedbackValue === 1
      ? feedbackItem.feedback1
      : feedbackItem.feedback2;
  };

  const getFeedbackTextAway = (kind: keyof FeedbackResult) => {
    const feedbackValue = feedbackResult[kind];
    const feedbackItem = teamFeedbacks.find((item) => item.kind === kind);
    if (!feedbackItem) return "";

    return feedbackValue === 2
      ? feedbackItem.feedback1
      : feedbackItem.feedback2;
  };

  return (
    <div>
      <Header label="경기 피드백" backArrow={true} headerButton={false} />
      <div className="flex justify-center m-2">
        <ShadcnTabs
          Tab1="HOME"
          Tab2="AWAY"
          onChange={tabSwitch}
          defaultTab="tab1"
        />
      </div>

      {/* 팀 피드백 */}
      {selectedTab ? (
        <div>
          <div id="glassui" className="py-1 mx-4 my-4">
            <div className="mx-4 my-2">
              <MyTypography
                label="경기 피드백(AWAY)"
                textColor="black"
                textSize="text-2xl"
                fontWeight="font-medium"
              />
            </div>
          </div>

          <div id="glassui" className="py-1 mx-4 my-4">
            <div className="mx-1 my-2">
              <MyTypography
                fontWeight="font-medium"
                label={`점유율: ${getFeedbackTextAway("possession")}`}
                textColor="text-darkcity"
                textSize="text-xl"
              />
            </div>
          </div>
          <div id="glassui" className="py-1 mx-4 my-4">
            <div className="mx-1 my-2">
              <MyTypography
                fontWeight="font-medium"
                label={`슈팅수: ${getFeedbackTextAway("shot")}`}
                textColor="text-darkcity"
                textSize="text-xl"
              />
            </div>
          </div>
          <div id="glassui" className="py-1 mx-4 my-4">
            <div className="mx-1 my-2">
              <MyTypography
                fontWeight="font-medium"
                label={`패스수: ${getFeedbackTextAway("pass")}`}
                textColor="text-darkcity"
                textSize="text-xl"
              />
            </div>
          </div>
          <div id="glassui" className="py-1 mx-4 my-4">
            <div className="mx-1 my-2">
              <MyTypography
                fontWeight="font-medium"
                label={`득점수: ${getFeedbackTextAway("goal")}`}
                textColor="text-darkcity"
                textSize="text-xl"
              />
            </div>
          </div>
          <div id="glassui" className="py-1 mx-4 my-4">
            <div className="mx-1 my-2">
              <MyTypography
                fontWeight="font-medium"
                label={`활동량: ${getFeedbackTextAway("activityLevel")}`}
                textColor="text-darkcity"
                textSize="text-xl"
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div id="glassui" className="py-1 mx-4 my-4">
            <div className="mx-4 my-2">
              <MyTypography
                label="경기 피드백(HOME)"
                textColor="black"
                textSize="text-2xl"
                fontWeight="font-medium"
              />
            </div>
          </div>

          <div id="glassui" className="py-1 mx-4 my-4">
            <div className="mx-1 my-2">
              <MyTypography
                fontWeight="font-medium"
                label={`점유율: ${getFeedbackTextHome("possession")}`}
                textColor="text-darkcity"
                textSize="text-xl"
              />
            </div>
          </div>
          <div id="glassui" className="py-1 mx-4 my-4">
            <div className="mx-1 my-2">
              <MyTypography
                fontWeight="font-medium"
                label={`슈팅수: ${getFeedbackTextHome("shot")}`}
                textColor="text-darkcity"
                textSize="text-xl"
              />
            </div>
          </div>
          <div id="glassui" className="py-1 mx-4 my-4">
            <div className="mx-1 my-2">
              <MyTypography
                fontWeight="font-medium"
                label={`패스수: ${getFeedbackTextHome("pass")}`}
                textColor="text-darkcity"
                textSize="text-xl"
              />
            </div>
          </div>
          <div id="glassui" className="py-1 mx-4 my-4">
            <div className="mx-1 my-2">
              <MyTypography
                fontWeight="font-medium"
                label={`득점수: ${getFeedbackTextHome("goal")}`}
                textColor="text-darkcity"
                textSize="text-xl"
              />
            </div>
          </div>
          <div id="glassui" className="py-1 mx-4 my-4">
            <div className="mx-1 my-2">
              <MyTypography
                fontWeight="font-medium"
                label={`활동량: ${getFeedbackTextHome("activityLevel")}`}
                textColor="text-darkcity"
                textSize="text-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackTemplet;
