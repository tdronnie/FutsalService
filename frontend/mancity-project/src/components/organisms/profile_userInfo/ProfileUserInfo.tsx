import { followApi, isFollowDataApi, unFollowApi } from "@/apis/userApis";
import ClubButton from "@/components/atoms/club_button/ClubButton";
import ContentBox from "@/components/atoms/content_box/ContentBox";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import GlobalButton from "@/components/atoms/global_button/GlobalButton";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import useUserStore from "@/stores/userStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileUserInfo = ({ profileData }: ProfilePropsType) => {
  //로그인 된 유저 번호 임시로 입력
  const userId = useUserStore((state) => state.id);

  const navigate = useNavigate();
  const [followData, setFollowData] = useState<followDataType>({
    senderId: 0,
    receiverId: 0,
  });

  const [isFollow, setIsFollow] = useState(false);
  const [startQuery, setStartQuery] = useState(false);

  useEffect(() => {
    setFollowData((prevData) => ({
      ...prevData,
      senderId: userId,
      receiverId: profileData.id,
    }));
    setStartQuery(true);
  }, [userId, profileData]);

  // 로그인 유저와 해당 프로필 유저가 팔로우중인지 여부 체크
  const { data } = useQuery({
    queryKey: ["isFollowData"],
    queryFn: async () => {
      const response = await isFollowDataApi(followData);
      return response;
    },
    enabled: startQuery,
  });

  useEffect(() => {
    setIsFollow(data);
  }, [data]);

  // 팔로우
  const { mutate: followMutate } = useMutation({
    mutationFn: followApi,
  });

  // 언팔로우
  const { mutate: unFollowMutate } = useMutation({
    mutationFn: unFollowApi,
  });

  // 팔로우 및 언팔로우 함수
  const handleFollow = () => {
    if (isFollow) {
      // 언팔로우 로직
      console.log("언팔로우 실행");
      setIsFollow(!isFollow);
      unFollowMutate(followData);
    } else {
      // 팔로우 로직
      console.log("팔로우 실행");
      setIsFollow(!isFollow);
      followMutate(followData);
    }
  };

  // 프로필 리스트로 이동
  const goFollowList = () => {
    navigate(`/follow/${profileData.id}`);
  };

  return (
    <div>
      {profileData && (
        <div id="glassui" className="flex py-4 mx-4 mt-4">
          {/* 프로필 사진 */}
          <div className="w-full">
            <div className="flex justify-end mb-2 mr-4">
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
          <div className="w-full mb-1 -ml-1 flex-grow-1">
            <div className="ml-1 ">
              {profileData.club ? (
                <ClubButton
                  textColor="text-[#D4A11E]"
                  bgColor="bg-white"
                  borderColor="border-[#D4A11E]"
                  hoverTextColor="hover:text-white"
                  hoverBgColor="hover:bg-[#D4A11E]"
                  label={profileData.club.name}
                />
              ) : (
                <></>
              )}
            </div>
            <div
              className={`my-2  w-36  ml-1 ${profileData.club ? "-mt-[0.1rem]" : "mb-3"}`}
            >
              <MyTypography
                label={profileData.nickName}
                textSize="text-3xl"
                textColor="text-black"
                fontWeight="font-medium"
              />
            </div>

            <div className="ml-1">
              {/* 로그인 한 유저 id와 프로필의 유저 id가 같다면 */}
              {userId === profileData.id ? (
                <div
                  onClick={() => {
                    navigate(`/profile/edit/${userId}`);
                  }}
                >
                  <GlobalButton
                    label="정보 수정"
                    width="w-36"
                    isdisabled={true}
                  />
                </div>
              ) : isFollow ? (
                // 팔로우 상태이면 언팔로우 버튼
                <div className="ml-1" onClick={handleFollow}>
                  <GlobalButton
                    label="언팔로우"
                    width="w-36"
                    isdisabled={true}
                  />
                </div>
              ) : (
                // 팔로우 상태가 아니면 팔로우 버튼

                <div className="ml-1" onClick={handleFollow}>
                  <GlobalButton label="팔로우" width="w-36" isdisabled={true} />
                </div>
              )}
            </div>

            <div
              className="flex text-[0.9rem] pl-1 pt-2 cursor-pointer"
              onClick={goFollowList}
            >
              <FontawsomeIcon icon="user-group" color="#5D7A93" />
              <div className="flex mt-1 ml-1 text-xs ">
                <div className="pr-2">{profileData.follower} 팔로워 </div>
                <div>|</div>
                <div className="pl-2"> {profileData.following} 팔로잉</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileUserInfo;
