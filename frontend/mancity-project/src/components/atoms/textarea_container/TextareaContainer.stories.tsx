import TextareaContainer from "@/components/atoms/textarea_container/TextareaContainer";
import { Source } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextareaContainer> = {
  title: "Components/atoms/TextareaContainer",
  tags: ["autodocs"],
  component: TextareaContainer,
  parameters: {
    docs: {
      page: () => (
        <>
          <h2>TextareaContainer 사용 예시</h2>
          <Source
            language="tsx"
            code={`  // 아직 사용을 하지 않아 설정중에 있습니다. 사용할 때 설정 후 수정하겠습니다.
            `}
          />
        </>
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextareaContainer>;

export const Default: Story = {
  args: {},
};
