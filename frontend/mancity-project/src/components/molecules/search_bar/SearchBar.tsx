import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import MuiAutocomplete from "@/components/atoms/mui_autocomplete/MuiAutocomplete";

const SearchBar = ({ contents }: { contents: matchPlace[] }) => {
  return (
    <div className="flex items-center mr-3">
      <div className="flex-grow w-full">
        <MuiAutocomplete contents={contents} />
      </div>
      <div className="flex-grow-0 cursor-pointer">
        <FontawsomeIcon icon="magnifying-glass" />
      </div>
    </div>
  );
};

export default SearchBar;
