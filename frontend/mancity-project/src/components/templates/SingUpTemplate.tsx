import React from "react";
import ShadcnDropdown from "../atoms/ShadcnDropdown";
import Typography from "../atoms/Typography";
import GlobalInput from "../atoms/GlobalInput";

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
      />
      <GlobalInput width="w-60" placeholder="place holder" />
      <ShadcnDropdown items={dropdownDummyData} />
    </div>
  );
};

export default SingUpTemplate;
