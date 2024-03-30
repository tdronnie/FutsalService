import Header from "@/components/organisms/header/Header";
import useKakaoLoader from "@/hooks/useKakaoLoader";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import marker from "@/assets/imgs/marker.png";
import FontawsomeIcon from "../../atoms/fontawsome_icon/FontawsomeIcon";

const MapTemplate = (props: MapPropsType) => {
  useKakaoLoader();
  const { lat, lng } = props;
  const imageSize = { width: 46, height: 60 };

  return (
    <>
      <Header label="지도 보기" backArrow={true} headerButton={false} />
      <Map
        center={{
          lat: lat,
          lng: lng,
        }}
        style={{
          width: "100%",
          height: "calc(100vh - 59px)",
        }}
        level={3}
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
    </>
  );
};

export default MapTemplate;
