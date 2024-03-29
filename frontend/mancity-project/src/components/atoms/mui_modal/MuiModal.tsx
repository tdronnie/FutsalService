import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { totalStatApi } from "@/apis/userApis";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "rgba(255, 255, 255, 1)",
  border: "2px solid transparent",
  borderRadius: "20px",
  // boxShadow: "none",
  outline: "none",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: 4,
};

const MuiModal = (props: userStatModalPropsType) => {
  const { userId } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 누적 기록 api 요청
  const { isLoading, data } = useQuery({
    queryKey: ["totalStat", userId],
    queryFn: () => totalStatApi(userId),
  });

  return (
    <div>
      {!isLoading && data && (
        <div>
          {/*  이 div 누르면 모달 열리는 로직 */}
          <div className="text-white text-sm font-medium" onClick={handleOpen}>
            누적기록
          </div>
          {/* 모달 시작 */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/* 제목 */}
              <Typography id="modal-modal-title" variant="h6" component="h2">
                누적기록
              </Typography>
              {/* 내용 */}
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, width: "100%" }}
              >
                <div className="flex justify-center items-center">
                  <div className="w-24 flex justify-center">속도</div>
                  <div>{data.speed}</div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-24 ">유효슈팅</div>
                  <div>{data.distanceCovered}</div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-24">패스</div>
                  <div>{data.pass}</div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-24">샷츠온타겟</div>
                  <div>{data.shotsOnTarget}</div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-24">골</div>
                  <div>{data.goal}</div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-24">도움</div>
                  <div>{data.assist}</div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-24">턴오버</div>
                  <div>{data.turnOverInOffense}</div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-24">턴오버 방어</div>
                  <div>{data.turnOverInDefense}</div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-24">경기 시간</div>
                  <div>{data.playedTimes}</div>
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default MuiModal;
