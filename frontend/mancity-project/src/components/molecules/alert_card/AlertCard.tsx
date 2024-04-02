import ContentBox from "@/components/atoms/content_box/ContentBox";
import SubButton from "@/components/atoms/sub_button/SubButton";
import MyTypography from "@/components/atoms/my_typography/MyTypography";

const AlertCard = (props: WideCardPropsType) => {
  const { maintext, subtext, minitext, buttonlabel } = props;
  return (
      <div id="glassui" className="p-2 mx-3 mt-3 rounded-md shadow-nav">
        <div className="flex flex-col justify-around">
          <div className="p-1">
            <MyTypography
              fontWeight="font-medium"
              label={maintext}
              textColor="text-black"
              textSize="text-xl"
            />
            <div className="mt-1">
              <MyTypography
                fontWeight="font-medium"
                label={subtext}
                textColor="text-sofcity"
                textSize="text-md"
              />
            </div>
          </div>
          <div className="flex">
          <div className="mt-3">
            <MyTypography
              fontWeight="font-medium"
              label={minitext}
              textSize="text-sm"
              textColor="text-sofcity"
            />
          </div>
        <div className="mt-auto ml-auto">
          <SubButton label={buttonlabel} hover={true} />
        </div>
          </div>
        </div>
      </div>
  );
};

export default AlertCard;
