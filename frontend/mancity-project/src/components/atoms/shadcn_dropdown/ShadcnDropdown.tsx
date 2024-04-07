import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ShadcnDropdown = ({
  items,
  width = "w-full",
  position,
  setPosition,
  setNumberValue,
}: ShadcnDropdownPropsType) => {
  // 선택된 label을 기반으로 items 배열에서 해당 value 찾기
  const handleValueChange = (selectedLabel: string) => {
    const selectedItem = items.find((item) => item.label === selectedLabel);
    if (selectedItem) {
      setPosition?.(selectedLabel);
      setNumberValue?.(selectedItem.value);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`${width} h-7 border-b-[0.08rem] text-sofcity border-sofcity flex overscroll-y-auto`}
        >
          <p className="flex-grow ml-2 text-center">{position}</p>
          <p className="mt-2 mr-1 text-xs text-sofcity">▼</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`${width} max-h-[30vh] overflow-y-auto`}>
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
