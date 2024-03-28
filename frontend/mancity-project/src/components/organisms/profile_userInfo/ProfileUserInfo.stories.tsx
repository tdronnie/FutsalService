import ProfileUserInfo from "./ProfileUserInfo";

export default {
  title: "components/organisms/ProfileUserInfo",
  component: ProfileUserInfo,
};

const profileData = {
  id: 1,
  image: "",
  nickName: "qwerqwer",
  clubId: 0,
  club: {
    id: 2,
    name: "club",
    emblem: "string",
    memberCnt: 23,
    score: 53,
    region: "광주",
  },
  follower: 0,
  following: 0,
  mainStat: {
    goalDecision: 57.0,
    pass: 68.0,
    speed: 76.0,
    distanceCovered: 47.0,
    defense: 65.0,
  },
  lastStat: {
    goalDecision: 58.0,
    pass: 46.0,
    speed: 25.0,
    distanceCovered: 67.0,
    defense: 46.0,
  },
  player: false,
};

const Template = () => <ProfileUserInfo profileData={profileData} />;

export const Default = Template.bind({});
