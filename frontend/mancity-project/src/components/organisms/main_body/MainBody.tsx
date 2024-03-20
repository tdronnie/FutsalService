import Slider from "react-slick";
import "./slick.css";
import WideCard from "@/components/molecules/wide_card/WideCard";
import GlobalCard from "@/components/molecules/global_card/GlobalCard";
import Typography from "@/components/atoms/typography/Typography";
import SubButton from "@/components/atoms/sub_button/SubButton";
import ClubList from "@/components/molecules/club_list/ClubList";

const MainBody = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="px-3 pt-1">
        <Typography
          fontWeight="font-medium"
          label="다가오는 매치"
          textColor="text-[#5D7A93]"
          textSize="text-xl"
        />
      </div>
      <Slider {...settings}>
        <div>
          <WideCard
            bgimg="bg-[url('@/assets/imgs/match_image1.jpg')]"
            buttonlabel="인원 6/10"
            maintext="광주 신화 풋살장"
            minitext="남자·5vs5·중 수준"
            subtext="오전 10시"
          />
        </div>
        <div>
          <WideCard
            bgimg="bg-[url('@/assets/imgs/match_image2.jpg')]"
            buttonlabel="인원 7/10"
            maintext="광주 신화 풋살장"
            minitext="남자·5vs5·중 수준"
            subtext="오전 10시"
          />
        </div>
        <div>
          <WideCard
            bgimg="bg-[url('@/assets/imgs/match_image3.jpg')]"
            buttonlabel="인원 3/10"
            maintext="광주 신화 풋살장"
            minitext="남자·5vs5·중 수준"
            subtext="오전 11시"
          />
        </div>
        <div>
          <WideCard
            bgimg="bg-[url('@/assets/imgs/match_image4.jpg')]"
            buttonlabel="인원 9/10"
            maintext="광주 신화 풋살장"
            minitext="남자·5vs5·중 수준"
            subtext="오전 11시"
          />
        </div>
        <div>
          <WideCard
            bgimg="bg-[url('@/assets/imgs/match_image5.jpg')]"
            buttonlabel="인원 7/10"
            maintext="광주 신화 풋살장"
            minitext="남자·5vs5·중 수준"
            subtext="오후 1시"
          />
        </div>
        <div>
          <WideCard
            bgimg="bg-[url('@/assets/imgs/match_image6.jpg')]"
            buttonlabel="인원 6/10"
            maintext="광주 신화 풋살장"
            minitext="남자·5vs5·중 수준"
            subtext="오전 10시"
          />
        </div>
      </Slider>

      <div className="px-3 pt-4 pb-2">
        <Typography
          fontWeight="font-medium"
          label="주목받는 용병"
          textColor="text-[#5D7A93]"
          textSize="text-xl"
        />
      </div>
      <div className="flex w-full px-2 overflow-y-hidden">
        <GlobalCard
          bgimg="bg-[url('/favicon.ico')]"
          mainTitle="안양김지용"
          subTitle="스피드 특화"
        />
        <GlobalCard
          bgimg="bg-[url('/favicon.ico')]"
          mainTitle="안양김지용"
          subTitle="스피드 특화"
        />
        <GlobalCard
          bgimg="bg-[url('/favicon.ico')]"
          mainTitle="안양김지용"
          subTitle="스피드 특화"
        />
        <GlobalCard
          bgimg="bg-[url('/favicon.ico')]"
          mainTitle="안양김지용"
          subTitle="스피드 특화"
        />
      </div>

      <div className="px-3 pt-4 pb-3">
        <Typography
          fontWeight="font-medium"
          label="클럽 TOP5"
          textColor="text-[#5D7A93]"
          textSize="text-xl"
        />
      </div>
      <ClubList clubTitile="FC맨시티파워" clubInfo="1230점/2024.02.18" />
      <ClubList clubTitile="FC맨시티파워" clubInfo="1230점/2024.02.18" />
      <ClubList clubTitile="FC맨시티파워" clubInfo="1230점/2024.02.18" />
      <div className="flex justify-center">
        <SubButton label="더보기" hover={true} />
      </div>
    </>
  );
};

export default MainBody;
