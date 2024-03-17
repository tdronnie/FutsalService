import React from "react";
import { Button } from "@/components/ui/button";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";

const MainTemplete = () => {
  return (
    <>
      <div className="flex justify-between p-3">
        <p className="p-0 text-3xl font-black text-mancity">맨시티</p>
        <div className="flex">
          <div className="mr-4">
            <FontawsomeIcon icon="user" size="2x"></FontawsomeIcon>
          </div>
          <div className="mr-1">
            <FontawsomeIcon icon="bell" size="2x"></FontawsomeIcon>
          </div>
        </div>
      </div>
      <Button className="m-3">Click me</Button>
      <p>안녕하세요 이것은 테스트 문구입니다. 잘 되나요?</p>
      <FontawsomeIcon
        icon={["fas", "heart"]}
        size="2x"
        color="#FF204E"
      ></FontawsomeIcon>
    </>
  );
};

export default MainTemplete;
