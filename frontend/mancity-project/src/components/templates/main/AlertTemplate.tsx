import Header from "@/components/organisms/header/Header";
import AlertCard from "../../molecules/alert_card/AlertCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAlertApi } from "@/apis/userApis";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingMolecule from "@/components/molecules/loading_molecule/LoadingMolecule";
import useUserStore from "@/stores/userStore";

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
        {data.map((item: AlertItem, index: number) => (
          <div key={index} onClick={() => handleClick(item)}>
            <AlertCard
              maintext={item.title}
              subtext={item.content}
              minitext={item.createDate}
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
