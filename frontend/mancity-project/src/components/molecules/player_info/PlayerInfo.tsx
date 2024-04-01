import { useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "@/components/molecules/search_bar/SearchBar";
import MyTypography from "@/components/atoms/my_typography/MyTypography";
import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

const PlayerInfo = (props: PlayerInfoPropsType) => {
  const navigate = useNavigate();
  const handleNavigate = ({ path }: NavigateType) => {
    navigate(path);
  };

  // 서치바 최초 값 0 초기화
  const [placeValue, setPlaceValue] = useState(0);

  const { player, color } = props;
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div id="glassui" className="flex items-center justify-between p-2 my-2">
      <div className="p-1 px-3 bg-black rounded-full bg-opacity-5">
        <MyTypography
          fontWeight="font-medium"
          label={player}
          textColor={color}
          textSize="text-xl"
        />
      </div>
      <span className="text-lg underline cursor-pointer text-mancity"
        onClick={() => handleNavigate({ path: "/personalfeedback/1" })}
        >
        개인 기록
      </span>
      <button
        onClick={() => setOpen(true)}
        className="p-2 bg-white border-2 rounded-full text-md text-mancity border-mancity hover:bg-mancity hover:text-white"
      >
        {/* 매치장이면 확정, 그 외에는 ? 표시 */}
        확정
      </button>

      {/* 선수 선택하는 모달 */}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            minWidth: 400,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            선수 검색
          </Typography>
          {/* 선수 검색창 */}
          <SearchBar contents={[]} setPlaceValue={setPlaceValue} />
        </Sheet>
      </Modal>
    </div>
  );
};

export default PlayerInfo;
