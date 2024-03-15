import React from "react";
import { Button } from "@/components/ui/button";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import Navbar from "../molecules/Navbar";

const MainTemplete = () => {
  return (
    <div>
      <Button className="m-3">Click me</Button>
      <p>안녕하세요 이것은 테스트 문구입니다. 잘 되나요?</p>
      <FontawsomeIcon
        icon={["fas", "heart"]}
        size="2x"
        color="#FF204E"
      ></FontawsomeIcon>
      <Navbar />
    </div>
  );
};

export default MainTemplete;
