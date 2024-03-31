import Header from "@/components/organisms/header/Header";
import ClubBody from "../../organisms/club_body/ClubBody";

const ClubListTemplate = () => {
  return (
    <>
      <Header
        label="용병/클럽"
        backArrow={false}
        headerButton={true}
        buttonLabel="클럽등록"
        toWhere="/club/register"
      />
      <ClubBody />
    </>
  );
};

export default ClubListTemplate;
