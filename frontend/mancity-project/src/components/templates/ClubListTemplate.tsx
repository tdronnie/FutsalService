import Header from "@/components/organisms/header/Header";

const ClubListTemplate = () => {
  return (
    <>
      <Header label="용병/클럽" backArrow={false} headerButton={true} buttonLabel="클럽등록" toWhere="/club/register"/>
    </>
  );
};

export default ClubListTemplate;
