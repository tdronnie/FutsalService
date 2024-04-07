import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

const IconButton = (props: FontAwesomeIconProps) => {
  const { icon } = props;
  return (
    <button
      type="button"
      className={` w-14 h-14 font-medium text-sm text-sofcity bg-white border-2 border-sofcity rounded-full 
      hover:text-white hover:bg-sofcity`}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
    </button>
  );
};

export default IconButton;
