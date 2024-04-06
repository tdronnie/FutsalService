import tooSmallImage from "@/assets/imgs/toosmall.png";

const NotFoundPage = () => {
  return (
    <div className="text-center">
    <img src={tooSmallImage} alt="toosmall" />
    <p className="text-2xl">페이지를 찾을 수 없습니다🚿3🚿</p>
  </div>
  )
}

export default NotFoundPage