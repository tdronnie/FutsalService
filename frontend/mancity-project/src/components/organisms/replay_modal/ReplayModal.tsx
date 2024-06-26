import List from "@mui/joy/List";
import Modal from "@mui/joy/Modal";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import DialogTitle from "@mui/joy/DialogTitle";
import { useEffect, useState } from "react";
import FontawsomeIcon from "@/components/atoms/fontawsome_icon/FontawsomeIcon";
import futsalCourtData from "@/data/futsalCourts.json";
import { useNavigate } from "react-router-dom";

const ReplayModal = ({
  games,
  openModal,
  setOpenModal,
}: ReplayModalPropsType) => {
  useEffect(() => {
    if (openModal) {
      setLayout("center");
    }
  }, [openModal]);

  const navigate = useNavigate();

  const [layout, setLayout] = useState<ModalDialogProps["layout"] | undefined>(
    undefined
  );

  const modalStyle = {
    width: "350px",
  };

  return (
    <div>
      {/* 모달 내용 */}
      <Modal
        open={!!layout}
        onClose={() => {
          setLayout(undefined);
          setOpenModal(false);
        }}
      >
        <ModalDialog layout={layout} sx={modalStyle}>
          <ModalClose />
          <DialogTitle>지난 경기</DialogTitle>
          <List
            sx={{
              overflow: "scroll",
            }}
          >
            {games?.map((game) => {
              const courtData = futsalCourtData.find(
                (court) => court.id === game.courtId
              );
              return (
                <div
                  key={game.id}
                  onClick={() => {
                    navigate(`/replay/${game.id}`);
                  }}
                  className="flex justify-between px-3 py-2 m-1 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
                >
                  <div>
                    {courtData?.title} <br /> {game.startDate}
                  </div>
                  <div className="pt-3">
                    <FontawsomeIcon icon="chevron-right" />
                  </div>
                </div>
              );
            })}
          </List>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default ReplayModal;
