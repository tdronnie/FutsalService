import Header from "@/components/organisms/header/Header";
import AlertCard from "../../molecules/alert_card/AlertCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAlertApi } from "@/apis/userApis";
import { useNavigate } from "react-router-dom";
import LoadingMolecule from "@/components/molecules/loading_molecule/LoadingMolecule";
import useUserStore from "@/stores/userStore";
import {
  clubResponseApi,
  gameResponseApi,
  gameSuggestResponseApi,
} from "@/apis/alertApis";
import Swal from "sweetalert2";

interface AlertItem {
  id: number;
  senderId: number;
  receiverId: number;
  domainId: number;
  domain: string;
  title: string;
  content: string;
  createDate: string;
}

const AlertTemplate = () => {
  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };

  const userId = useUserStore((state) => state.id);
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(today)
    .replace(". ", "년 ")
    .replace(". ", "월 ")
    .replace(".", "일");

  const { isLoading, data } = useQuery({
    queryKey: ["alerts"],
    queryFn: () => fetchAlertApi(Number(userId)),
  });

  const handleClick = (item: AlertItem) => {
    if (item.domain === "FOLLOW") {
      handleNavigate({ path: `/profile/${item.senderId}` });
    } else if (item.domain === "GAME_REQUEST_REPLY") {
      handleNavigate({ path: `/match` });
    } else if (item.domain === "GAME_SUGGEST_REPLY") {
      handleNavigate({ path: `/match` });
    } else if (item.domain === "CALC_COMPLETE") {
      handleNavigate({ path: `/match` });
    } else if (item.domain === "CLUB_REQUEST_REPLY") {
      handleNavigate({ path: `/club` });
    } else if (item.domain === "GAME_REQUEST") {
      gameResponseApi(item.domainId).then((response) => {
        Swal.fire({
          title: "수락하기",
          text: "매치 참여를 수락하시겠습니까?",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "네",
          cancelButtonText: "아니요",
        }).then((result) => {
          if (result.isConfirmed) {
            handleNavigate({ path: `/match/${item.domainId}` });
          }
        });
      });
    } else if (item.domain === "GAME_SUGGEST") {
      gameSuggestResponseApi(item.domainId).then((response) => {
        Swal.fire({
          title: "수락하기",
          text: "용병 호출을 수락하시겠습니까?",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "네",
          cancelButtonText: "아니요",
        }).then((result) => {
          if (result.isConfirmed) {
            handleNavigate({ path: `/match/${item.domainId}` });
          }
        });
      });
    } else if (item.domain === "CLUB_REQUEST") {
      clubResponseApi(item.domainId).then((response) => {
        Swal.fire({
          title: "수락하기",
          text: "클럽 가입을 수락하시겠습니까?",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "네",
          cancelButtonText: "아니요",
        }).then((result) => {
          if (result.isConfirmed) {
            handleNavigate({ path: `/club/${item.domainId}` });
          }
        });
      });
    }
  };

  if (isLoading)
    return (
      <>
        <Header label="주요 알림" backArrow={true} headerButton={false} />
        <LoadingMolecule />
      </>
    );

  if (Array.isArray(data) && data.length > 0) {
    return (
      <>
        <Header label="주요 알림" backArrow={true} headerButton={false} />
        {/* {data.map((item: AlertItem, index: number) => (
          <div key={index} onClick={() => handleClick(item)}>
            <AlertCard
              maintext={item.title}
              subtext={item.content}
              minitext={item.createDate}
              buttonlabel="자세히보기"
            />
          </div>
        ))} */}
        {data.map((item: AlertItem, index: number) => {
          let buttonLabel = ""; // 버튼 레이블 초기화

          // 도메인에 따른 버튼 레이블 설정
          switch (item.domain) {
            case "FOLLOW":
              buttonLabel = "프로필 보기";
              break;
            case "GAME_REQUEST_REPLY":
            case "GAME_SUGGEST_REPLY":
            case "CALC_COMPLETE":
              buttonLabel = "매치 보기";
              break;
            case "CLUB_REQUEST_REPLY":
              buttonLabel = "클럽 보기";
              break;
            case "GAME_REQUEST":
            case "GAME_SUGGEST":
            case "CLUB_REQUEST":
              buttonLabel = "수락 하기";
              break;
            default:
              buttonLabel = "자세히보기"; // 기본값
          }

          return (
            <div key={index} onClick={() => handleClick(item)}>
              <AlertCard
                maintext={item.title}
                subtext={item.content}
                minitext={item.createDate}
                buttonlabel={buttonLabel} // 동적으로 설정된 버튼 레이블 사용
              />
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        <Header label="주요 알림" backArrow={true} headerButton={false} />
        <div
          onClick={() => handleNavigate({ path: `/profile/edit/${userId}` })}
        >
          <AlertCard
            maintext="👶 아직 받은 알림이 없습니다"
            subtext="용병을 등록하고 매치에 초대받아보세요!"
            minitext={formattedDate}
            buttonlabel="용병등록"
          />
        </div>
      </>
    );
  }
};

export default AlertTemplate;
