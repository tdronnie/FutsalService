import EditContentBox from "@/components/molecules/edit_content_box/EditContentBox";
import InputGroup from "@/components/molecules/input_group/InputGroup";
import Dropdown from "@/components/molecules/dropdown/Dropdown";
import ReverseButton from "@/components/atoms/reverse_button/ReverseButton";
import SearchBar from "@/components/molecules/search_bar/SearchBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyTypography from "@/components/atoms/my_typography/MyTypography";

const ClubEditBody = () => {
    // 서치바 최초 값 0 초기화
    const [placeValue, setPlaceValue] = useState(0);
    
  // 지역
  const LocationInfo = [
    { value: 1, label: "서울" },
    { value: 2, label: "경기" },
    { value: 3, label: "광주" },
    { value: 4, label: "대구" },
    { value: 5, label: "대전" },
    { value: 6, label: "인천" },
    { value: 7, label: "강원" },
    { value: 8, label: "경상" },
    { value: 9, label: "부산" },
    { value: 10, label: "세종" },
    { value: 11, label: "울산" },
    { value: 12, label: "전라" },
    { value: 13, label: "제주" },
    { value: 14, label: "충청" },
  ];
  const [locationLabel, setLocationLabel] = useState("지역");
  const [locationValue, setLocationValue] = useState(0);

  //   클럽명
  const [clubTitleValue, setClubTitleValue] = useState("");

  // 인원
  const PlayerNumberInfo = [
    { value: 1, label: "30명" },
    { value: 2, label: "40명" },
    { value: 3, label: "50명" },
  ];
  const [playerNumberLabel, setPlayerNumberLabel] = useState("인원");
  const [playerNumberValue, setPlayerNumberValue] = useState(0);

  const [isFormValid, setIsFormValid] = useState(false);

  const isNotEmpty = (value: string) => {
    return value.trim() !== "";
  };

  useEffect(() => {
    // 모든 입력값의 유효성 검사
    const isValid = isNotEmpty(clubTitleValue) && 
    playerNumberValue !== 0 &&
    locationValue !== 0;

    setIsFormValid(isValid);
  }, [clubTitleValue, playerNumberValue]);

  // 라우팅 관련
  const navigate = useNavigate();
  const onEditProfile = () => {
    console.log("수정된 회원정보 제출");
    navigate("/");
  };

  return (
    <div className="">
      <div className="flex justify-center m-3 ">
        <EditContentBox width="w-36" height="h-36" rounded="rounded-full" />
      </div>
      <div className="m-3">
        <Dropdown
          MyTypographyLabel="지역"
          items={LocationInfo}
          position={locationLabel}
          setPosition={setLocationLabel}
          setNumberValue={setLocationValue}
        />
      </div>
      <div className="m-3">
        <InputGroup
          MyTypographyLabel="클럽명"
          checking={true}
          textValue={clubTitleValue}
          setTextValue={setClubTitleValue}
        />
      </div>
      <div className="m-3">
        <Dropdown
          MyTypographyLabel="인원"
          items={PlayerNumberInfo}
          position={playerNumberLabel}
          setPosition={setPlayerNumberLabel}
          setNumberValue={setPlayerNumberValue}
        />
      </div>
      <div className="m-3 ml-7">
        <MyTypography
          label="홈그라운드 구장"
          textColor="text-sofcity"
          fontWeight="font-medium  "
          textSize="text-sm"
        />
        <SearchBar contents={[]} setPlaceValue={setPlaceValue} />
      </div>

      <div onClick={onEditProfile} className="flex justify-end m-7 ">
        <ReverseButton
          width="w-full"
          label="클럽 수정"
          isdisabled={isFormValid}
        />
      </div>
    </div>
  );
};

export default ClubEditBody