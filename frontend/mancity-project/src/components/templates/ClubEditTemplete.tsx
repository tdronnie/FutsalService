import ClubDetailBody from "../organisms/club_detail_body/ClubDetailBody";
import ClubEditBody from "../organisms/club_edit_body/ClubEditBody";
import Header from "../organisms/header/Header";

const ClubEditTemplete = () => {
  return (
    <>
      <Header label="클럽 수정" backArrow={true} headerButton={false} />
      <ClubEditBody />
    </>
  )
}

export default ClubEditTemplete