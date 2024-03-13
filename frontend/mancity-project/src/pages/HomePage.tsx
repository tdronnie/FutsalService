import React from "react";
import { Button } from "@/components/ui/button";
import UserIcon from "@/components/atoms/UserIcon";

const HomePage = () => {
  return (
    <div>
      <Button className="m-3">Click me</Button>
      <p>안녕하세요 이것은 테스트 문구입니다. 잘 되나요?</p>
      <UserIcon size="1x"></UserIcon>
    </div>
  );
};

export default HomePage;
