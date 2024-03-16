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
}

interface ShadcnDropdownPropsType {
  items: { value: number; label: string }[];
  width?: string;
}

interface DropdownPropsType extends ShadcnDropdownPropsType {
  typographyLabel: string;
}

interface HeaderPropsType {
  label: string;
}

interface InputGroupPropsType {
  typographyLabel: string;
  placeholder?: string;
  checking: boolean;
}
