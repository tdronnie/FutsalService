import React from "react";
import ShadcnDropdown from "../atoms/ShadcnDropdown";

const dropdownDummyData = [
  { value: "1", label: "성호" },
  { value: "2", label: "지현" },
  { value: "3", label: "지용" },
];

const SingUpTemplate = () => {
  return (
    <div>
      <h1>SingUpTemplate</h1>
      <ShadcnDropdown items={dropdownDummyData} />
    </div>
  );
};

export default SingUpTemplate;
