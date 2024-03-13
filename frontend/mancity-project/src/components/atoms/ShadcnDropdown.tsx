import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface PropsType {
  items: { value: string; label: string }[];
  width?: string;
}

const ShadcnDropdown = ({ items, width = "w-40" }: PropsType) => {
  const [position, setPosition] = useState("click");

  useEffect(() => {
    console.log(position);
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`${width} h-7 border-b-2 border-[#2C4A60] flex justify-between`}
        >
          <p className=" ml-2 ">{position}</p>
          <p className=" mr-1 ">⋎</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={width}>
        {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
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
