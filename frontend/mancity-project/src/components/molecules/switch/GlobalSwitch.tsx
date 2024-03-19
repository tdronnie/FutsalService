import ShadcnSwitch from "@/components/atoms/shadcn_switch/ShadcnSwitch";
import Typography from "@/components/atoms/typography/Typography";
import { useEffect } from "react";

const GlobalSwitch = (props: GlobalSwitchPropsType) => {
  const { label, isSwitchOn, setIsSwitchOn, switchMarginTop } = props;

  const toggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  useEffect(() => {
    console.log(isSwitchOn);
  }, [isSwitchOn]);

  return (
    <div className="flex m-3 ">
      <div className="w-full">
        <Typography
          label={label}
          textSize="text-sm"
          fontWeight="font-medium"
          textColor="text-sofcity"
        />
      </div>
      <div className={`justify-items-end mr-3 ${switchMarginTop}`}>
        <ShadcnSwitch checked={isSwitchOn} onCheckedChange={toggleSwitch} />
      </div>
    </div>
  );
};

export default GlobalSwitch;
