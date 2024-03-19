
interface propsType {
  number: number;
}

const NumberingBox = (props: propsType) => {
  const { number } = props;
  return (
    <div className="w-10 h-5 text-xs font-medium text-center bg-white border-2 border-mancity">
      # {number}
    </div>
  );
};

export default NumberingBox;
