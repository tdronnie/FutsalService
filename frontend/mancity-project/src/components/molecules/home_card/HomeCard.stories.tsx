import HomeCard from "./HomeCard";

export default {
  title: "components/molecules/HomeCard",
  component: HomeCard,
};

const Template = () => <HomeCard maintext="다양한 사람들과 뛰어볼까요?" subtext="용병으로 등록하거나 호출할 수 있어요" />;

export const Default = Template.bind({});
