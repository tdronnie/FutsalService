import ShadcnTabs from "@/components/atoms/shadcn_tabs/ShadcnTabs";
import FollowCard from "@/components/molecules/follow_card/FollowCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FollowBody = ({ followListData }: followListDataType) => {
  const [selectedTab, setSelectedTab] = useState(false);
  const tabSwitch = () => setSelectedTab(!selectedTab);

  const navigate = useNavigate();

  const followers = followListData.followers;
  const followings = followListData.followings;

  return (
    <div>
      <div className="flex justify-center m-2">
        <ShadcnTabs
          Tab1="팔로잉"
          Tab2="팔로워"
          onChange={tabSwitch}
          defaultTab="tab1"
        />
      </div>
      <div className="p-2">
        {selectedTab && (
          <div>
            <div>
              {followers.map((follower) => (
                <div
                  key={follower.userId}
                  onClick={() => {
                    navigate(`/profile/${follower.userId}`);
                  }}
                >
                  <FollowCard
                    file={follower.profileImage}
                    nickName={follower.nickname}
                    overall={follower.overall}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {!selectedTab && (
          <div>
            <div>
              {followings.map((following) => (
                <div
                  key={following.userId}
                  onClick={() => {
                    navigate(`/profile/${following.userId}`);
                  }}
                >
                  <FollowCard
                    file={following.profileImage}
                    nickName={following.nickname}
                    overall={following.overall}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FollowBody;
