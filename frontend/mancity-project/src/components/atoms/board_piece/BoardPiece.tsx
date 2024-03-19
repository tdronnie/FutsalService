
const BoardPiece = (props: TailwindPropsType) => {
  const { bgColor, label } = props;
  return (
    <button
      type="button"
      className={` w-6 h-6 font-medium text-xs text-white ${bgColor} rounded-full `}
    >
      {label}
    </button>
  );
};

export default BoardPiece;
