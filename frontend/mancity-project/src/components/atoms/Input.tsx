interface InputProps {
  primary?: boolean;

  backgroundColor?: string;

  size?: "small" | "medium" | "large";

  label: string;

  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: InputProps) => {
  const mode = primary
    ? "storybook-input--primary"
    : "storybook-input--secondary";
  return (
    <input
      type="input"
      className={["storybook-input", `storybook-input--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </input>
  );
};
