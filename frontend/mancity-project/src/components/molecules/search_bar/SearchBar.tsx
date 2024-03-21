import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon"
import GlobalInput from "@/components/atoms/global_input/GlobalInput"

const SearchBar = () => {
  return (
    <div className="flex items-center mr-3">
      <div className="flex-grow">
        <GlobalInput placeholder="검색어를 입력하세요" width="w-full"/>
      </div>
      <div className="flex-grow-0 cursor-pointer">
        <FontawsomeIcon icon="magnifying-glass" />
      </div>
    </div>
  )
}

export default SearchBar