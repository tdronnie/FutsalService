import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const RadarChart = ({ profileData }: ProfilePropsType) => {
  const data = {
    labels: ["골 결정력", "최고속도", "활동량", "패스 성공률", "수비력"],
    datasets: [
      {
        label: "- 최근 한 경기",
        data: [
          profileData?.lastStat?.goalDecision * 20 ?? 0,
          profileData?.lastStat?.speed ?? 0,
          profileData?.lastStat?.distanceCovered / 10 ?? 0,
          profileData?.lastStat?.pass / 4 ?? 0,
          profileData?.lastStat?.defense ?? 0,
        ],
        backgroundColor: "rgba(137, 234, 255, 0.25)",
        borderColor: "rgba(137, 234, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "- 전체 평균",
        data: [
          profileData?.mainStat?.goalDecision * 20 ?? 0,
          profileData?.mainStat?.speed ?? 0,
          profileData?.mainStat?.distanceCovered / 10 ?? 0,
          profileData?.mainStat?.pass / 4 ?? 0,
          profileData?.mainStat?.defense ?? 0,
        ],
        backgroundColor: "rgba(164, 164, 164, 0.25)",
        borderColor: "rgba(164, 164, 164, 1)",
        borderWidth: 1,
      },
    ],
  };

  // 차트 옵션
  const chartOptions = {
    scales: {
      r: {
        ticks: {
          stepSize: 25,
          display: true,
          backdropColor: "rgba(0, 0, 0, 0)",
        },
        grid: {
          // 원형
          circular: true,
          color: "#aaaaaa",
        },
        //라벨 속성 지정.
        pointLabels: {
          font: {
            size: "12vw",
            weight: "500",
            family: "SCDream",
          },
          // color: "#D9D9D9",
        },
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          // labels 에 대한 스타일링
          padding: 6,
          boxWidth: 12,
          boxheight: 12,
          color: "#000",
          font: {
            family: "SCDream",
            lineHeight: 2,
          },
        },
      },
    },
    //기본 값은 가운데에서 펴져나가는 애니메이션 형태입니다.
    animation: {
      duration: 1200,
    },
  };
  return (
    <div
      style={{
        maxWidth: "425px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      {/* @ts-ignore */}
      {profileData && <Radar data={data} options={chartOptions} />}
    </div>
  );
};

export default RadarChart;
