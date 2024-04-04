import EditContentBox from "@/components/molecules/edit_content_box/EditContentBox";
import InputGroup from "@/components/molecules/input_group/InputGroup";
import Dropdown from "@/components/molecules/dropdown/Dropdown";
import ReverseButton from "@/components/atoms/reverse_button/ReverseButton";
import SearchBar from "@/components/molecules/search_bar/SearchBar";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import futsalCourtData from "@/data/futsalCourts.json";
import { createClubApi } from "@/apis/clubApis";
import useUserStore from "@/stores/userStore";

const ClubRegisterBody = () => {
  // 서치바 최초 값 0 초기화
  const [placeValue, setPlaceValue] = useState(0);

  // 프로필 이미지 저장
  const [imageFilesValue, setImageFiles] = useState<File[]>([]);
  const [imageViewValue, setImageView] = useState<string>("");

  // 지역
  const LocationInfo = [
    { value: "서울", label: "서울" },
    { value: "경기", label: "경기" },
    { value: "광주", label: "광주" },
    { value: "대구", label: "대구" },
    { value: "대전", label: "대전" },
    { value: "인천", label: "인천" },
    { value: "강원", label: "강원" },
    { value: "경상", label: "경상" },
    { value: "부산", label: "부산" },
    { value: "세종", label: "세종" },
    { value: "울산", label: "울산" },
    { value: "전라", label: "전라" },
    { value: "제주", label: "제주" },
    { value: "충청", label: "충청" },
  ];
  const [locationLabel, setLocationLabel] = useState("지역");
  const [locationValue, setLocationValue] = useState("서울");

  //   클럽명
  const [clubTitleValue, setClubTitleValue] = useState("");

  // 인원
  const PlayerNumberInfo = [
    { value: 1, label: "30명" },
    { value: 2, label: "40명" },
    { value: 3, label: "50명" },
  ];
  // const [playerNumberLabel, setPlayerNumberLabel] = useState("인원");
  const [clubCourtId, setClubCourtId] = useState(0);
  const userId = useUserStore((state) => state.id);

  const [isFormValid, setIsFormValid] = useState(false);

  const isNotEmpty = (value: string) => {
    return value.trim() !== "";
  };

  useEffect(() => {
    // 모든 입력값의 유효성 검사
    const isValid =
      isNotEmpty(clubTitleValue) &&
      isNotEmpty(locationValue);

    setIsFormValid(isValid);
  }, [clubTitleValue, clubCourtId]);

  // 라우팅 관련
  const navigate = useNavigate();

  const createClub = async () => {
    const clubData = new FormData();
    
    // imageViewValue가 URL이 아닌 파일 데이터일 경우에만 FormData에 추가
    if (imageFilesValue[0]) {
      clubData.append("emblem", imageFilesValue[0]);
    }
  
    // DTO를 JSON 문자열로 변환하여 추가
    const dto = JSON.stringify({
      id: userId,
      name: clubTitleValue,
      region: locationValue,
      clubCourtId: placeValue,
    });
    clubData.append(
      "dto",
      new Blob([dto], {
        type: "application/json",
      }));
  
    try {
      const response = await createClubApi(clubData);
      console.log("클럽이 성공적으로 생성되었습니다.", response);
      navigate(`/club/${response.clubId}`);
    } catch (error) {
      console.log("클럽 생성 중 에러 발생", error);
    }
  };
  
  

  // 클럽 등록 버튼 클릭 이벤트 핸들러
  const onSubmitClick = () => {
    if (isFormValid) {
      createClub(); // 폼이 유효하면 클럽 생성 함수 호출
    } else {
      alert("모든 필드를 올바르게 채워주세요.");
    }
  };

  // 파일 넣기 관련 코드
  const inputFileRef = useRef<HTMLInputElement>(null);
  const triggerFileInput = () => {
    // inputFileRef.current가 존재하면 해당 요소의 클릭 이벤트를 실행
    inputFileRef.current?.click();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      setImageFiles([file]); // File 배열에 첫 번째 파일만 저장
      const currentImageUrl = URL.createObjectURL(file);
      setImageView(currentImageUrl); // string으로 URL 저장
    }
  };

  return (
    <div>
      <div className="flex justify-center m-3" onClick={triggerFileInput}>
      {imageViewValue ?
        (<EditContentBox
          width="w-36"
          height="h-36"
          rounded="rounded-full"
          file={imageViewValue}
          hidden="hidden"
        />):(<EditContentBox
          width="w-36"
          height="h-36"
          rounded="rounded-full"
          file={imageViewValue}
        />)}
        <div className="cursor-pointer absolute opacity-0  w-36 h-36 text-[1px]">
          <input
            className=""
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            ref={inputFileRef}
          />
        </div>
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
          checking={false}
          textValue={clubTitleValue}
          setTextValue={setClubTitleValue}
        />
      </div>
      {/* <div className="m-3">
        <Dropdown
          MyTypographyLabel="인원"
          items={PlayerNumberInfo}
          position={playerNumberLabel}
          setPosition={setPlayerNumberLabel}
          setNumberValue={setPlayerNumberValue}
        />
      </div> */}
      <div className="m-3 ml-7">
        <MyTypography
          label="홈그라운드 구장"
          textColor="text-sofcity"
          fontWeight="font-medium  "
          textSize="text-sm"
        />
        <SearchBar contents={futsalCourtData} setPlaceValue={setPlaceValue} />
      </div>

      <div onClick={onSubmitClick} className="flex justify-end m-7 ">
        <ReverseButton
          width="w-full"
          label="클럽 생성"
          isdisabled={isFormValid}
        />
      </div>
    </div>
  );
};

export default ClubRegisterBody;
