import Header from "@/components/organisms/header/Header";
import AlertCard from "../../molecules/alert_card/AlertCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAlertApi } from "@/apis/userApis";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingMolecule from "@/components/molecules/loading_molecule/LoadingMolecule";

interface AlertItem {
  title: string;
  content: string;
  domain: string;
}

const AlertTemplate = () => {
  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };

  const [userId, setUserId] = useState(1); // 초기 상태 설정
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

  useEffect(() => {
    // localStorage에서 userStore 문자열을 읽어오기
    const userData = localStorage.getItem("userStore");
    if (userData) {
      const userStoreObject = JSON.parse(userData);
      setUserId(userStoreObject.state.id); // 여기서 상태를 업데이트
    }
  }, []); // 의존성 배열을 빈 배열로 설정하여 컴포넌트 마운트 시 1회만 실행

  const { isLoading, data } = useQuery({
    queryKey: ["alerts"],
    queryFn: () => fetchAlertApi(Number(userId)),
    enabled: !!userId, // userId가 유효한 경우에만 API 호출을 활성화
  });

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
        {data.map((item: AlertItem, index: number) => (
          <div>
            <AlertCard
              key={index} // 고유한 key 제공
              maintext={item.title}
              subtext={item.content}
              minitext="2024년 03월 11일"
              buttonlabel="바로가기"
            />
          </div>
        ))}
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
