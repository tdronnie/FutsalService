import ShadcnDropdown from "@/components/atoms/shadcn_dropdown/ShadcnDropdown";
import Typography from "@/components/atoms/typography/Typography";

const Dropdown = (props: DropdownPropsType) => {
  const { typographyLabel, width, items } = props;

  return (
    <div className="flex-row m-4">
      <Typography
        textSize="text-sm"
        fontWeight="font-medium"
        textColor="text-sofcity"
        label={typographyLabel}
      />
      <ShadcnDropdown width={width} items={items} />
    </div>
  );
};

export default Dropdown;
