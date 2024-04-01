import Lottie from "lottie-react";
import loadingLottie from "@/assets/lotties/loadingLottie.json";

const LoadingMolecule = () => {
  return (
    <div>
      <Lottie animationData={loadingLottie} />
      <div
        id="glassui"
        className="flex items-center justify-center mx-4 min-h-32"
      >
        <p className="text-2xl">
          로딩중입니다...
          <br />
          잠시만 기다려주세요...
        </p>
      </div>
    </div>
  );
};

export default LoadingMolecule;