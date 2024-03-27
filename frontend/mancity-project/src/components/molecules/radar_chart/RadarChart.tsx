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

export const RadarChart = () => {
  // 차트에 들어가는 데이터
  const data = {
    labels: ["골 결정력", "스피드", "활동량", "패스 성공률", "수비력"],
    datasets: [
      {
        label: "- 최근 한 경기",
        data: [32, 44, 53, 66, 74],
        backgroundColor: "rgba(137, 234, 255, 0.25)",
        borderColor: "rgba(137, 234, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "- 전체 평균",
        data: [13, 25, 43, 74, 55],
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
          color: "#D9D9D9",
        },
        //라벨 속성 지정.
        pointLabels: {
          font: {
            size: 16,
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
          padding: 10,
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
  // @ts-ignore
  return <Radar data={data} options={chartOptions} />;
};

export default RadarChart;
