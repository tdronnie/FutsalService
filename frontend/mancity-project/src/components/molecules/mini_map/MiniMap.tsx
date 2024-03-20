import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import Typography from "@/components/atoms/typography/Typography";
import useKakaoLoader from "@/hooks/useKakaoLoader";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const MiniMap = (props: MiniMapPropsType) => {
  useKakaoLoader();
  const { lat, lng, address, tel, onClickCopy } = props;
  const imageSize = { width: 46, height: 60 };
  return (
    <div className="my-4 mx-2">
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
          }}
          level={5}
        >
          <MapMarker
            position={{
              lat: lat,
              lng: lng,
            }}
            image={{
              src: "/src/assets/imgs/marker.png",
              size: imageSize,
            }}
          />
        </Map>
      </div>
      <div>
        <div className="flex mt-1 cursor-pointer" onClick={onClickCopy}>
          <Typography
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

          <Typography
            label="주소복사"
            fontWeight="font-medium"
            textSize="text-xs"
            textColor="text-gray-500"
          />
        </div>
        <div>
          <Typography
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
