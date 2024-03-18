import React from "react";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };
  return (
    <>
      <div className="flex justify-between p-3">
        <p className="p-0 text-3xl font-black text-mancity">맨시티</p>
        <div className="flex">
          <div
            className="mr-4"
            onClick={() => handleNavigate({ path: "/profile/1" })}
          >
            <FontawsomeIcon icon="user" size="2x"></FontawsomeIcon>
          </div>
          <div
            className="mr-1"
            onClick={() => handleNavigate({ path: "/alert" })}
          >
            <FontawsomeIcon icon="bell" size="2x"></FontawsomeIcon>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
