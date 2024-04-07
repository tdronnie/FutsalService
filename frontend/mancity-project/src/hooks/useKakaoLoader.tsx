import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "2540701c00ee0caba7ce0600b160a928",
    libraries: ["clusterer", "drawing", "services"],
  });
}
