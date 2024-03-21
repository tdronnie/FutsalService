import ReverseButton from "@/components/atoms/reverse_button/ReverseButton";
import ShadcnTabs from "@/components/atoms/shadcn_tabs/ShadcnTabs";
import TextareaContainer from "@/components/atoms/textarea_container/TextareaContainer";
import Typography from "@/components/atoms/typography/Typography";
import InputGroup from "@/components/molecules/input_group/InputGroup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CommunityRegisterBody = () => {
  // 영상, 잡담 토글
  // 영상 -> false, 잡담 -> true
  const [selectedTab, setSelectedTab] = useState(false);
  const tabSwitch = () => setSelectedTab(!selectedTab);

  // 제목 value
  const [titleValue, setTitleValue] = useState("");
  // 내용 value
  const [textareaValue, setTextareaValue] = useState("");
  // 업로드 할 영상 value
  const [videoValue, setVideoValue] = useState("");

  const navigate = useNavigate();
  const isValid =
    titleValue !== "" && textareaValue !== "" && videoValue !== "";

  return (
    <div>
      <div className="flex justify-center m-2">
        <ShadcnTabs
          Tab1="영상"
          Tab2="잡담"
          onChange={tabSwitch}
          defaultTab="tab1"
        />
      </div>
      <div>
        <InputGroup
          typographyLabel="제목"
          checking={false}
          placeholder="제목을 입력해주세요"
          textValue={titleValue}
          setTextValue={setTitleValue}
        />
      </div>
      <div className="m-4">
        <div className="my-2">
          <Typography
            label="내용"
            textColor="text-sofcity"
            textSize="text-sm"
            fontWeight="font-medium"
          />
        </div>
        <div className="">
          <TextareaContainer
            textareaValue={textareaValue}
            setTextareaValue={setTextareaValue}
          />
        </div>
      </div>
      <div className="m-4">
        <Typography
          label="영상 업로드"
          textColor="text-sofcity"
          textSize="text-sm"
          fontWeight="font-medium"
        />
        <div>이미지 추가하는 로직 추가할 계획입니다.</div>
      </div>

      <div className="flex justify-end m-4">
        <ReverseButton label="게시글 작성" width="w-1/2" isdisabled={isValid} />
      </div>
    </div>
  );
};

export default CommunityRegisterBody;
