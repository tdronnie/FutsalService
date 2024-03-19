import ClubButton from "@/components/atoms/club_button/ClubButton";
import ContentBox from "@/components/atoms/content_box/ContentBox";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import Typography from "@/components/atoms/typography/Typography";

const ProfileUserInfo = () => {
  return (
    <div className="justify-center">
      <div className="flex ">
        <div className=" m-3 ">
          <ContentBox width="w-32" height="h-32" rounded="rounded-full" />
        </div>
        <div className=" my-2 w-full mx-4 ">
          <ClubButton
            textColor="text-[#D4A11E]"
            bgColor="bg-white"
            borderColor="border-[#D4A11E]"
            hoverTextColor="hover:text-white"
            hoverBgColor="hover:bg-[#D4A11E]"
            label="클럽명"
          />
          <div className="m-1">
            <Typography
              label="김싸피"
              textSize="text-3xl"
              textColor="text-black"
              fontWeight="font-medium"
            />
          </div>
          <div className="-ml-4">
            {/* 1. 본인 프로필이면 프로필 수정 
                2. 상대 프로필 && 팔로우 상태이면 언팔로우 버튼
                3. 상대 프로필 && 팔로우 상태 아니면 팔로우 버튼 활성화*/}
            {<GlobalButton label="팔로잉" width="w-full" isdisabled={true} />}
          </div>
          <div className="flex">
            <FontawsomeIcon icon="user-group" size="1x" color="#5D7A93" />
            <div className="text-sm mt-1 ml-1">10 팔로워 | 10 팔로잉</div>
          </div>
        </div>
      </div>
      <hr className="border-[#d9d9d9] border-[1.5px] mt-5" />
    </div>
  );
};

export default ProfileUserInfo;
