import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const ShadcnDropdown = ({
  items,
  width = "w-full",
}: ShadcnDropdownPropsType) => {
  const [position, setPosition] = useState("click");
  const [numberValue, setNumberValue] = useState(0);

  // useEffect(() => {
  //   console.log(position);
  //   console.log(numberValue);
  //   console.log(typeof numberValue);
  // });

  // 선택된 label을 기반으로 items 배열에서 해당 value 찾기
  const handleValueChange = (selectedLabel: string) => {
    const selectedItem = items.find((item) => item.label === selectedLabel);
    if (selectedItem) {
      setPosition(selectedLabel);
      setNumberValue(selectedItem.value);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`${width} h-7 border-b-[1.5px] text-sofcity border-sofcity flex justify-between`}
        >
          <p className=" ml-2 ">{position}</p>
          <p className=" mt-2 mr-1 text-sofcity text-xs">▼</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={width}>
        {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={handleValueChange}
        >
          {items.map((item) => (
            <DropdownMenuRadioItem key={item.value} value={item.label}>
              {item.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShadcnDropdown;
