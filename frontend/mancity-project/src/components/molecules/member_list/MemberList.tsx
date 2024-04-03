import ContentBox from "@/components/atoms/content_box/ContentBox";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import { useNavigate } from "react-router-dom";

const MemberList = (props: MemberListPropsType) => {
  const file = "/src/assets/imgs/mancity_logo.jpg";
  const navigate = useNavigate();
  const { participants } = props;
  console.log(participants);
  return (
    <div id="glassui" className="p-4 m-3">
      <div className="mx-2">
        <div>
          <MyTypography label="멤버 라인업" textSize="text-lg" />
        </div>
        <hr className="border-sofcity border-[0.05rem] my-1 mb-3" />
      </div>
      <div className="flex m-2">
        <div className="mr-2">
          {participants.map((participant) => (
            <div
              key={participant.userId}
              onClick={() => navigate(`/profile/${participant.userId}`)}
              className="border rounded-full border-sofcity"
            >
              <ContentBox
                width="w-14"
                height="h-14"
                rounded="rounded-full"
                file={participant.image ? participant.image : file}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberList;
