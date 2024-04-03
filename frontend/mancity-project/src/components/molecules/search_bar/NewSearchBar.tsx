import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import NewMuiAutocomplete from "@/components/atoms/mui_autocomplete/NewMuiAutocomplete";

const NewSearchBar = ({
  contents,
  setPlaceValue,
}: NewSearchBarPropsType) => {
  return (
    <div className="flex items-center mr-3">
      <div className="flex-grow w-full">
        <NewMuiAutocomplete
          contents={contents}
          setPlaceValue={setPlaceValue}
        />
      </div>
      <div className="flex-grow-0 cursor-pointer">
        <FontawsomeIcon icon="magnifying-glass" />
      </div>
    </div>
  );
};

export default NewSearchBar;
