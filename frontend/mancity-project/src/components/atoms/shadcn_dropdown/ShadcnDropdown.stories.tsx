import ShadcnDropdown from "@/components/atoms/shadcn_dropdown/ShadcnDropdown";
import { Source } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ShadcnDropdown> = {
  title: "Components/atoms/ShadcnDropdown",
  tags: ["autodocs"],
  component: ShadcnDropdown,
  argTypes: {
    items: {
      description:
        'value, label로 구성된 배열을 작성합니다. [{ value: 1, label: "성호" },]',
      control: "text",
      table: {
        type: { summary: "string" },
      },
    },
    width: {
      description: "너비를 지정합니다. ex) w-40",
      control: "text",
      table: {
        type: { summary: "string" },
        default: { summary: "w-full" },
      },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <div>
          <h2>ShadcnSwitch 사용 예시</h2>
          <Source
            language="tsx"
            code={`  
            //label에 해당하는 value를 적은 배열을 items에 할당합니다.
const GenderInfo = [
  { value: 1, label: "남성" },
  { value: 2, label: "여성" },
  { value: 3, label: "혼성" },
  ];
const [genderLabel, setGenderLabel] = useState("성별");
const [genderValue, setGenderValue] = useState(0);

// 결과적으로, 위 코드에서는 genderValue를 값으로 가지게 됩니다.

// return 내부 값
<Dropdown
  typographyLabel="성별"
  items={GenderInfo}
  position={genderLabel}
  setPosition={setGenderLabel}
  setNumberValue={setGenderValue}
/>
            `}
          />
        </div>
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ShadcnDropdown>;

export const Default: Story = {
  args: {
    items: [
      { value: 1, label: "성호" },
      { value: 2, label: "지현" },
      { value: 3, label: "지용" },
    ],
    width: "w-40",
  },
};

export const Long: Story = {
  args: {
    items: [
      { value: 1, label: "성호" },
      { value: 2, label: "지현" },
      { value: 3, label: "지용" },
    ],
    width: "w-80",
  },
};
