import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DigitalClock } from "@mui/x-date-pickers/DigitalClock";
import { useState } from "react";
import InputGroup from "@/components/molecules/input_group/InputGroup";

interface TimePickerPropsType {
  timeValue: dayjs.Dayjs | null;
  setTimeValue: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>;
}

const TimePicker = (props: TimePickerPropsType) => {
  const { timeValue, setTimeValue } = props;
  const [open, setOpen] = useState(false);
  const hour = timeValue ? Number(timeValue.hour()) : 0;

  return (
    <div className="relative">
      <div onClick={() => setOpen(!open)}>
        <InputGroup
          typographyLabel="시간"
          textValue={`${hour}시`}
          checking={false}
        />
        {open && (
          <div className="absolute bg-white border-stone-300 border-2 w-auto top-full left-4 mt-1 ml-[32%] z-10">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DigitalClock", "MultiSectionDigitalClock"]}
              >
                <DemoItem>
                  <DigitalClock
                    timeStep={60}
                    value={timeValue}
                    onChange={setTimeValue}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
        )}
      </div>
    </div>
  );
};
export default TimePicker;
