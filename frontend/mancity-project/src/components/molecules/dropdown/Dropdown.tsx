import ShadcnDropdown from "@/components/atoms/shadcn_dropdown/ShadcnDropdown";
import Typography from "@/components/atoms/typography/Typography";

const Dropdown = (props: DropdownPropsType) => {
  const {
    typographyLabel,
    items,
    width,
    position,
    setPosition,
    setNumberValue,
  } = props;

  return (
    <div className="flex-row m-4">
      <Typography
        textSize="text-sm"
        fontWeight="font-medium"
        textColor="text-sofcity"
        label={typographyLabel}
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
