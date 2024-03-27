import ClubButton from "@/components/atoms/club_button/ClubButton";
import ContentBox from "@/components/atoms/content_box/ContentBox";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import Typography from "@/components/atoms/typography/Typography";
import { dividerClasses } from "@mui/material";
import { useEffect, useState } from "react";

const ProfileUserInfo = ({ profileData }: ProfilePropsType) => {
  console.log(profileData);
  // 유저 본인인지 확인해야 한다.
  // 본인이면 프로필 수정버튼, 본인이 아니면 팔로우 혹은 팔로잉 버튼 보이도록 조건 작성해야 한다.
  const userNo = 1;

  const [followData, setFollowData] = useState({
    senderId: 0,
    receiverId: 0,
  });

  useEffect(() => {
    setFollowData((prevData) => ({
      ...prevData,
      senderId: userNo,
      receiverId: profileData.id,
    }));
  }, []);

  console.log(followData);

  return (
    <div id="glassui" className="flex mt-4 mx-4 py-4">
      {/* 프로필 사진 */}
      <div className="w-full">
        <div className="flex justify-end mr-4 mb-2">
          <ContentBox
            file={
              profileData.image
                ? profileData.image
                : "/src/assets/imgs/mancity_logo.png"
            }
            width="w-[8.4rem]"
            height="h-[8.4rem]"
            rounded="rounded-full"
          />
        </div>
      </div>
      {/* 오른쪽 클럽명, 이름, 버튼, 팔로우 */}
      <div className="flex-grow-1 w-full -ml-1 mb-1">
        <div className="ml-1 ">
          {profileData.club ? (
            <ClubButton
              textColor="text-[#D4A11E]"
              bgColor="bg-white"
              borderColor="border-[#D4A11E]"
              hoverTextColor="hover:text-white"
              hoverBgColor="hover:bg-[#D4A11E]"
              label={profileData.club}
            />
          ) : (
            <></>
          )}
        </div>
        <div
          className={`my-2  w-36  ml-1 ${profileData.club ? "-mt-[0.1rem]" : "mb-3"}`}
        >
          <Typography
            label={profileData.nickName}
            textSize="text-3xl"
            textColor="text-black"
            fontWeight="font-medium"
          />
        </div>
        <div className="ml-1">
          {/* 1. 본인 프로필이면 프로필 수정 
                2. 상대 프로필 && 팔로우 상태이면 언팔로우 버튼
                3. 상대 프로필 && 팔로우 상태 아니면 팔로우 버튼 활성화*/}

          {/* 로그인 한 유저 id와 프로필의 유저 id가 같다면 */}

          {/* {userNo ===profileData.id ? (onclick()) : (onClick()) */}

          <GlobalButton label="팔로잉" width="w-36" isdisabled={true} />
        </div>
        <div className="flex text-[0.9rem] pl-1 pt-2">
          <FontawsomeIcon icon="user-group" color="#5D7A93" />
          <div className="text-xs mt-1 ml-1">
            {profileData.follower} 팔로워 | {profileData.following} 팔로잉
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserInfo;
