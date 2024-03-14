interface TailwindPropsType {
  textSize?: string;
  fontWeight?: string;
  textColor?: string;
  bgColor?: string;

  hoverTextColoer?: string;
  hoverBgColor?: string;
  hoverBorderColor?: string;

  width?: string;
  label?: string;
  placeholder?: string;
}

interface ShadcnDropdownPropsType {
  items: { value: number; label: string }[];
  width?: string;
}
