import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon"
import GlobalInput from "@/components/atoms/global_input/GlobalInput"

const SearchBar = () => {
  return (
    <div className="flex items-center flex-grow mr-3">
        <GlobalInput placeholder="검색어를 입력하세요" width="w-full"/>
        <FontawsomeIcon icon="magnifying-glass" />
    </div>
  )
}

export default SearchBar