import Header from "@/components/organisms/header/Header";
import MyTypography from "@/components/atoms/my_typography/MyTypography";

const PersonalFeedbackTemplete = () => {
  return (
    <div>
      <Header label="개인 기록" backArrow={true} headerButton={false} />

      <div id="glassui" className="py-1 mx-4 my-4">
        <div className="mx-4 my-2">
          <MyTypography
            label="개인 기록(선수#1 HOME)"
            textColor="black"
            textSize="text-2xl"
            fontWeight="font-medium"
          />
        </div>
        <hr className="mb-2 border border-sofcity" />

        {/* 개인 통계 */}
        {/* 이동 거리 */}
        <div className="flex">
          <div className="w-24 mx-1 my-2 text-end">
            <MyTypography
              fontWeight="font-medium"
              label="이동 거리:"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
          <div className="mx-1 my-2">
            <MyTypography
              fontWeight="font-medium"
              label="285km"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
        </div>

        {/* 최고속도 */}
        <div className="flex">
          <div className="w-24 mx-1 my-2 text-end">
            <MyTypography
              fontWeight="font-medium"
              label="최고 속도:"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
          <div className="mx-1 my-2">
            <MyTypography
              fontWeight="font-medium"
              label="24km/h"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
        </div>

        {/* 득점 */}
        <div className="flex">
          <div className="w-24 mx-1 my-2 text-end">
            <MyTypography
              fontWeight="font-medium"
              label="득점:"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
          <div className="mx-1 my-2">
            <MyTypography
              fontWeight="font-medium"
              label="11"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
        </div>

        {/* 어시스트 */}
        <div className="flex">
          <div className="w-24 mx-1 my-2 text-end">
            <MyTypography
              fontWeight="font-medium"
              label="도움:"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
          <div className="mx-1 my-2">
            <MyTypography
              fontWeight="font-medium"
              label="2"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
        </div>

        {/* 총슈팅 */}
        <div className="flex">
          <div className="w-24 mx-1 my-2 text-end">
            <MyTypography
              fontWeight="font-medium"
              label="총 슈팅:"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
          <div className="mx-1 my-2">
            <MyTypography
              fontWeight="font-medium"
              label="21"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
        </div>

        {/* 유효 슈팅 */}
        <div className="flex">
          <div className="w-24 mx-1 my-2 text-end">
            <MyTypography
              fontWeight="font-medium"
              label="유효 슈팅:"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
          <div className="mx-1 my-2">
            <MyTypography
              fontWeight="font-medium"
              label="13"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
        </div>

        {/* 총 패스 */}
        <div className="flex">
          <div className="w-24 mx-1 my-2 text-end">
            <MyTypography
              fontWeight="font-medium"
              label="총 패스:"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
          <div className="mx-1 my-2">
            <MyTypography
              fontWeight="font-medium"
              label="34"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
        </div>

        {/* 공격 턴오버 */}
        <div className="flex">
          <div className="w-24 mx-1 my-2 text-end">
            <MyTypography
              fontWeight="font-medium"
              label="공격 실패:"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
          <div className="mx-1 my-2">
            <MyTypography
              fontWeight="font-medium"
              label="8"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
        </div>

        {/* 수비 성공 */}
        <div className="flex">
          <div className="w-24 mx-1 my-2 text-end">
            <MyTypography
              fontWeight="font-medium"
              label="수비 성공:"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
          <div className="mx-1 my-2">
            <MyTypography
              fontWeight="font-medium"
              label="12"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
        </div>
      </div>

      {/* 개인 피드백 */}
      <div id="glassui" className="py-1 mx-4 my-4">
        <div className="mx-4 my-2">
          <MyTypography
            label="개인 피드백"
            textColor="black"
            textSize="text-2xl"
            fontWeight="font-medium"
          />
        </div>
        <hr className="mb-2 border border-sofcity" />
        <div className="mx-1 my-2">
            <MyTypography
              fontWeight="font-medium"
              label="내용:"
              textColor="text-darkcity"
              textSize="text-xl"
            />
          </div>
      </div>
    </div>
  );
};

export default PersonalFeedbackTemplete;
