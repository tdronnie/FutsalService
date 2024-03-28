import ReverseButton from "@/components/atoms/reverse_button/ReverseButton";
import Dropdown from "@/components/molecules/dropdown/Dropdown";
import EditContentBox from "@/components/molecules/edit_content_box/EditContentBox";
import InputGroup from "@/components/molecules/input_group/InputGroup";
import GlobalSwitch from "@/components/molecules/global_switch/GlobalSwitch";
import { useEffect, useState, useRef } from "react";
import Typography from "@/components/atoms/typography/Typography";
import { useMutation } from "@tanstack/react-query";
import { profileEditApi } from "@/apis/userApis";
import { useNavigate, useParams } from "react-router-dom";

const ProfileEditBody = ({ userInfoData }: UserInfoPropsType) => {
  const { user_id } = useParams<{ user_id: string }>();
  const navigate = useNavigate();
  const MainFootInfo = [
    { value: 1, label: "왼발" },
    { value: 2, label: "오른발" },
  ];

  const inputFileRef = useRef<HTMLInputElement>(null);

  const triggerFileInput = () => {
    // inputFileRef.current가 존재하면 해당 요소의 클릭 이벤트를 실행
    inputFileRef.current?.click();
  };

  // 프로필 이미지 저장
  const [imageFilesValue, setImageFiles] = useState<File[]>([]);
  const [imageViewValue, setImageView] = useState<string[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const imageUrlLists: string[] = [];
    if (files) {
      const fileArray = Array.from(files, (f) => f as File);
      setImageFiles(fileArray);
      const currentImageUrl = URL.createObjectURL(files[0]);
      imageUrlLists.push(currentImageUrl);
    }
    setImageView(imageUrlLists);
  };

  const [mainFootPosition, setMainFootPosition] = useState(
    userInfoData.foot === 0 ? "왼발" : "오른발"
  );
  const [mainFootValue, setMainFootValue] = useState<number>(userInfoData.foot);
  const [nickNameValue, setNickNameValue] = useState<string>(
    userInfoData.nickName
  );
  const [heightValue, setHeightValue] = useState<string>(
    String(userInfoData.height)
  );
  const [weightValue, setWeightValue] = useState(String(userInfoData.weight));
  const [playerValue, setPlayerValue] = useState<boolean>(userInfoData.player);
  const [isNicknameCheck, setIsNicknameCheck] = useState<boolean | null>(null);

  // get 받아 온 이전 데이터 data에 입력
  const [profileEditData, setProfileEditData] = useState({
    image: imageFilesValue,
    dto: {
      id: userInfoData.id,
      nickName: nickNameValue,
      height: Number(heightValue),
      weight: Number(weightValue),
      foot: mainFootValue,
      isPlayer: playerValue,
    },
  });

  // 데이터 하나에 묶기
  useEffect(() => {
    setProfileEditData((prevState) => ({
      ...prevState,
      image: imageFilesValue,
      dto: {
        ...prevState.dto,
        nickName: nickNameValue,
        height: Number(heightValue),
        weight: Number(weightValue),
        foot: mainFootValue,
        isPlayer: playerValue,
      },
    }));
  }, [
    imageFilesValue,
    nickNameValue,
    heightValue,
    weightValue,
    mainFootValue,
    playerValue,
  ]);

  // 유효성 검사
  const isNotEmpty = (value: string) => {
    return value.trim() !== "";
  };

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      isNotEmpty(nickNameValue) && heightValue !== "" && weightValue !== "";

    setIsFormValid(isValid);
  }, [nickNameValue, mainFootValue, heightValue, weightValue]);

  // put api 로직
  const { mutate } = useMutation({
    mutationFn: profileEditApi,
    onSuccess(result: boolean) {
      console.log(result);
    },
    onError(error) {
      console.log(error);
    },
  });

  // 파일 formData로 인코딩 후 제출
  const onEditProfile = () => {
    const formData: FormData = new FormData();
    if (imageFilesValue.length > 0) {
      formData.append("image", imageFilesValue[0]);
    }
    formData.append(
      "dto",
      new Blob([JSON.stringify(profileEditData.dto)], {
        type: "application/json",
      })
    );

    mutate(formData);
    navigate("/");
  };

  const goProfile = () => {
    navigate(`/profile/${user_id}`);
  };

  return (
    <div className="">
      {/* 프로필 이미지 */}
      <div className=" flex m-3 justify-center " onClick={triggerFileInput}>
        <EditContentBox
          width="w-36"
          height="h-36"
          rounded="rounded-full"
          file={imageViewValue[0]}
        />
        <div className="absolute opacity-0  w-36 h-36 text-sm">
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

      <div className="my-6">
        <InputGroup
          typographyLabel="닉네임"
          checking={true}
          textValue={nickNameValue}
          setTextValue={setNickNameValue}
          setIsCheck={setIsNicknameCheck}
        />
        <div className="text-mancity mx-4 -my-3 ">
          {nickNameValue && (
            <>
              {isNicknameCheck !== null && (
                <Typography
                  textSize="text-sm"
                  label={
                    isNicknameCheck
                      ? "중복된 닉네임입니다."
                      : "사용 가능한 닉네임입니다."
                  }
                />
              )}
            </>
          )}
        </div>
      </div>
      <div className="mb-6">
        <div className="flex flex-row ">
          <div className="w-2/4">
            <InputGroup
              typographyLabel="키 (cm)"
              placeholder="175"
              checking={false}
              textValue={String(heightValue)}
              setTextValue={setHeightValue}
            />
          </div>
          <div className="w-2/4">
            <InputGroup
              typographyLabel="몸무게 (kg)"
              placeholder="70"
              checking={false}
              textValue={String(weightValue)}
              setTextValue={setWeightValue}
            />
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="w-1/2">
            <Dropdown
              typographyLabel="주 발"
              items={MainFootInfo}
              position={mainFootPosition}
              setPosition={setMainFootPosition}
              setNumberValue={setMainFootValue}
            />
          </div>
          <div className="w-1/2 flex -mt-10">
            {/* checked에는 해당 회원이 등록허용 해 뒀는지 값을 넣기 */}
            <GlobalSwitch
              label="용병등록"
              isSwitchOn={playerValue}
              setIsSwitchOn={setPlayerValue}
              switchMarginTop="ml-8 mt-16 "
            />
          </div>
        </div>
        {/* <div className=" flex justify-end">
          <div className="text-red-500 text-right mr-4 cursor-pointer">
            회원탈퇴
          </div>
        </div> */}
      </div>

      <div className="flex  w-full">
        <div onClick={goProfile} className="w-full px-2">
          <ReverseButton
            width="w-full"
            label="뒤로 가기"
            isdisabled={isFormValid}
          />
        </div>

        <div onClick={onEditProfile} className=" w-full px-2">
          <ReverseButton
            width="w-full"
            label="수정 완료"
            isdisabled={isFormValid}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileEditBody;
