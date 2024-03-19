interface TailwindPropsType {
  textSize?: string;
  fontWeight?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;

  hoverTextColor?: string;
  hoverBgColor?: string;
  hoverBorderColor?: string;

  width?: string;
  height?: string;
  rounded?: string;
  label?: string;
  placeholder?: string;
  textValue?: string;
  setTextValue?: React.Dispatch<React.SetStateAction<string>>;
  isdisabled?: boolean;

  bgimg?: string;
}

interface WideCardPropsType {
  bgimg?: string;
  subtext: string;
  maintext: string;
  minitext?: string;
  buttonlabel: string;
}

interface ShadcnDropdownPropsType {
  items: { value: number; label: string }[];
  width?: string;
  position: string;
  setPosition?: React.Dispatch<React.SetStateAction<string>>;
  setNumberValue?: React.Dispatch<React.SetStateAction<number>>;
}

interface DropdownPropsType extends ShadcnDropdownPropsType {
  typographyLabel: string;
}

interface HeaderPropsType {
  label: string;
  display?: string;
}

interface InputGroupPropsType {
  typographyLabel: string;
  placeholder?: string;
  checking: boolean;
  textValue?: string;
  setTextValue?: React.Dispatch<React.SetStateAction<string>>;
}

interface GlobalCardProps {
  mainTitle: string;
  subTitle: string;
  bgimg?: string;
}

interface HighlightCardProps {
  mainTitle: string;
  bgimg?: string;
}
