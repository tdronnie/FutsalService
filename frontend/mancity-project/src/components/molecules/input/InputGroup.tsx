import GlobalInput from "@/components/atoms/global_input/GlobalInput";
import SubButton from "@/components/atoms/sub_button/SubButton";
import Typography from "@/components/atoms/typography/Typography";

const InputGroup = (props: InputGroupPropsType) => {
  const { typographyLabel, placeholder, checking, textValue, setTextValue } =
    props;
  return (
    <div className="flex m-4">
      <div className="w-full">
        <Typography
          textSize="text-sm"
          fontWeight="font-medium"
          textColor="text-sofcity"
          label={typographyLabel}
        />
        <GlobalInput
          width="w-full"
          placeholder={placeholder}
          textValue={textValue}
          setTextValue={setTextValue}
        />
      </div>
      {checking && (
        <div className="mt-5">
          <SubButton label="중복 확인" />
        </div>
      )}
    </div>
  );
};

export default InputGroup;
