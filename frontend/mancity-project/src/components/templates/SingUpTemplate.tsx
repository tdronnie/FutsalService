import React from "react";
import ShadcnDropdown from "../atoms/shadcn_dropdown/ShadcnDropdown";
import Typography from "../atoms/typography/Typography";
import GlobalInput from "../atoms/global_input/GlobalInput";
import NumberingBox from "../atoms/numbering_box/NumberingBox";
import GlobalButton from "../atoms/global_button/GlobalButton";
import ReverseButton from "../atoms/reverse_button/ReverseButton";
import SubButton from "../atoms/sub_button/SubButton";

const dropdownDummyData = [
  { value: 1, label: "성호" },
  { value: 2, label: "지현" },
  { value: 3, label: "지용" },
];

const SingUpTemplate = () => {
  return (
    <div>
      <h1>SingUpTemplate</h1>
      <Typography
        textSize="text-lg"
        fontWeight="font-medium"
        textColor="text-[#5D7A93]"
        label="Typography"
      />
      <GlobalInput width="w-40" placeholder="place holder" />
      <ShadcnDropdown items={dropdownDummyData} />
      <NumberingBox number={3} />
      <GlobalButton width="w-80" label="Global Button" />
      <ReverseButton width="w-80" label="Reverse Button" />
      <SubButton label="Sub Button" />
    </div>
  );
};

export default SingUpTemplate;
