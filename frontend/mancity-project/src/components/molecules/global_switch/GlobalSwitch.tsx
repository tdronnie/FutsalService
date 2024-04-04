import ShadcnSwitch from "@/components/atoms/shadcn_switch/ShadcnSwitch";
import MyTypography from "@/components/atoms/my_typography/MyTypography";

const GlobalSwitch = (props: GlobalSwitchPropsType) => {
  const { label, isSwitchOn, setIsSwitchOn, switchMarginTop } = props;

  const toggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <div className="flex items-center justify-end mx-4">
      <div>
        <MyTypography
          label={label}
          textSize="text-sm"
          fontWeight="font-medium"
          textColor="text-sofcity"
        />
      </div>
      <div className={`${switchMarginTop}`}>
        <ShadcnSwitch checked={isSwitchOn} onCheckedChange={toggleSwitch} />
      </div>
    </div>
  );
};

export default GlobalSwitch;
