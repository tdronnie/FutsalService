import ShadcnDropdown from "@/components/atoms/shadcn_dropdown/ShadcnDropdown";
import MyTypography from "@/components/atoms/my_typography/MyTypography";

const Dropdown = (props: DropdownPropsType) => {
  const {
    MyTypographyLabel,
    items,
    width,
    position,
    setPosition,
    setNumberValue,
  } = props;

  return (
    <div className="m-4">
      <MyTypography
        textSize="text-sm"
        fontWeight="font-medium"
        textColor="text-sofcity"
        label={MyTypographyLabel}
      />
      <div className="mt-3">
        <ShadcnDropdown
          width={width}
          items={items}
          position={position}
          setPosition={setPosition}
          setNumberValue={setNumberValue}
        />
      </div>
    </div>
  );
};

export default Dropdown;
