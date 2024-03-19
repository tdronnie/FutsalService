import Slider from "react-slick";
import "./slick.css";
import WideCard from "@/components/molecules/wide_card/WideCard";

const MainBody = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <WideCard
          bgimg="bg-[url('/favicon.ico')]"
          buttonlabel="인원 6/10"
          maintext="광주 신화 풋살장"
          minitext="남자·5vs5·중 수준"
          subtext="오전 10시"
        />
      </div>
      <div>
        <WideCard
          bgimg="bg-[url('/favicon.ico')]"
          buttonlabel="인원 6/10"
          maintext="광주 신화 풋살장"
          minitext="남자·5vs5·중 수준"
          subtext="오전 10시"
        />
      </div>
      <div>
        <WideCard
          bgimg="bg-[url('/favicon.ico')]"
          buttonlabel="인원 6/10"
          maintext="광주 신화 풋살장"
          minitext="남자·5vs5·중 수준"
          subtext="오전 10시"
        />
      </div>
      <div>
        <WideCard
          bgimg="bg-[url('/favicon.ico')]"
          buttonlabel="인원 6/10"
          maintext="광주 신화 풋살장"
          minitext="남자·5vs5·중 수준"
          subtext="오전 10시"
        />
      </div>
      <div>
        <WideCard
          bgimg="bg-[url('/favicon.ico')]"
          buttonlabel="인원 6/10"
          maintext="광주 신화 풋살장"
          minitext="남자·5vs5·중 수준"
          subtext="오전 10시"
        />
      </div>
      <div>
        <WideCard
          bgimg="bg-[url('/favicon.ico')]"
          buttonlabel="인원 6/10"
          maintext="광주 신화 풋살장"
          minitext="남자·5vs5·중 수준"
          subtext="오전 10시"
        />
      </div>
    </Slider>
  );
};

export default MainBody;
