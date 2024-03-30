import ContentBox from "@/components/atoms/content_box/ContentBox";
import IconButton from "@/components/atoms/icon_button/IconButton";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import { useNavigate } from "react-router-dom";

const MemberList = (props: MemberListPropsType) => {
  const file = "/src/assets/imgs/mancity_logo.jpg";
  const navigate = useNavigate();
  const { participants } = props;
  return (
    <div id="glassui" className="m-3 p-4">
      <div className="mx-2">
        <div className="mb">
          <MyTypography label="멤버 라인업" textSize="text-lg" />
        </div>
        <hr className="border-sofcity border-[0.05rem] my-1 mb-3" />
      </div>
      <div className="flex  m-2">
        <div className="mr-2">
          {participants.map((participant) => (
            <div
              key={participant.id}
              onClick={() => navigate(`/profile/${participant.id}`)}
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
      <div className="mr-2">
        <IconButton icon="plus" />
      </div>
    </div>
  );
};

export default MemberList;
