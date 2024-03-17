import { Switch } from "@/components/ui/switch";

interface propsType {
  checked: boolean;
  onCheckedChange: () => void;
}

// 상위에서 아래 코드를 사용해서 관리할 수 있습니다.
// import React, { useState } from "react";
// const [isSwitchOn, setIsSwitchOn] = useState(false);
// const toggleSwitch = () => setIsSwitchOn(!isSwitchOn);

const ShadcnSwitch = ({ checked, onCheckedChange }: propsType) => {
  return <Switch checked={checked} onCheckedChange={onCheckedChange} />;
};

export default ShadcnSwitch;
