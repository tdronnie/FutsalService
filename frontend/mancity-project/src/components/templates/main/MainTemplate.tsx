import MainHeader from "../../organisms/main_header/MainHeader";
import MainBody from "../../organisms/main_body/MainBody";

const MainTemplate = () => {
  return (
    <>
      <div className="sticky top-0 bg-[#E9F5FF] z-50">
        <MainHeader />
        <hr className="mb-1 border border-[#00A9FF]" />
        <hr className="mb-1 border border-[#FFC758]" />
        <hr className="mb-4 border border-[#EE3124]" />
        {/* 
      <hr className="mb-1 border-2 border-[#6CADDF]"/>
      <hr className="mb-1 border-2 border-[#00285E]"/>
      <hr className="mb-4 border-2 border-[#FFC758]"/> */}
      </div>
      <MainBody />
    </>
  );
};

export default MainTemplate;
