import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import useKakaoLoader from "@/hooks/useKakaoLoader";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import marker from "@/assets/imgs/marker.png";

const MiniMap = (props: MiniMapPropsType) => {
  useKakaoLoader();
  const { lat, lng, address, tel, onClick } = props;
  const imageSize = { width: 46, height: 60 };
  
  return (
    <div className="mx-2 my-4">
      <div className="">
        <Map
          center={{
            lat: lat,
            lng: lng,
          }}
          style={{
            width: "100%",
            height: "150px",
            borderRadius: "10px",
            border: "0.1rem solid rgba(217, 217, 217, 1)",
          }}
          level={5}
        >
          <MapMarker
            position={{
              lat: lat,
              lng: lng,
            }}
            image={{
              src: marker,
              size: imageSize,
            }}
          />
        </Map>
      </div>
      <div>
        <div className="flex mt-1 cursor-pointer" onClick={onClick}>
          <MyTypography
            label={address}
            fontWeight="font-medium"
            textSize="text-xs"
            textColor="text-gray-500"
          />
          <div className="ml-3 -mt-[0.2rem] mr-[0.1rem] text-[0.8rem]">
            <FontawsomeIcon
              icon={["far", "copy"]}
              color="rgba(107, 114, 128,1)"
            />
          </div>

          <MyTypography
            label="주소복사"
            fontWeight="font-medium"
            textSize="text-xs"
            textColor="text-gray-500"
          />
        </div>
        <div>
          <MyTypography
            label={tel}
            fontWeight="font-medium"
            textSize="text-xs"
            textColor="text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default MiniMap;
