import Typography from "@/components/atoms/typography/Typography";

const GlobalSwitch = (props: TailwindPropsType) => {
  const { label } = props;
  return (
    <div className="flex m-4">
      <div className="w-full">
        <Typography
          label={label}
          textSize="text-sm"
          fontWeight="font-medium"
          textColor="text-sofcity"
        />
      </div>
    </div>
  );
};

export default GlobalSwitch;
