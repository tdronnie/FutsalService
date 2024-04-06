import PlayerInfo from "./PlayerInfo";

export default {
  title: "components/molecules/PlayerInfo",
  component: PlayerInfo,
};

const Template = () => <PlayerInfo player="선수#1(HOME)" color="text-red-500"/>
;

export const Default = Template.bind({});
