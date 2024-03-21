import ClubRegisterBody from "../organisms/club_register_body/ClubRegisterBody";
import Header from "../organisms/header/Header";

const ClubRegisterTemplete = () => {
  return (
    <>
      <Header label="클럽 등록" backArrow={true} headerButton={false} />
      <ClubRegisterBody />
    </>
  )
}

export default ClubRegisterTemplete