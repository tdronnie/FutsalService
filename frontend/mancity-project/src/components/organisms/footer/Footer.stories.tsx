import Footer from "@/components/organisms/footer/Footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  title: "Components/organisms/Footer",
  tags: ["autodocs"],
  component: Footer,
  decorators: [
    (Story) => (
      <div style={{ height: "40px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const SignUp: Story = {
  args: {
    label: "남자 ∙ 5vs5 ∙ 중 수준",
    buttonLabel: "매치 참여 신청",
  },
};
