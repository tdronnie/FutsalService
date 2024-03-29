import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
const MuiAutocomplete = ({ contents, setPlaceValue }: SearchBarPropsType) => {
  return (
    <Stack spacing={2} sx={{ width: "80%" }}>
      <Autocomplete
        id="free-solo-demo"
        options={contents}
        getOptionLabel={(option) => option.label}
        // options를 객체 배열로 사용하고, label을 표시하기 위한 함수
        onChange={(event, newValue) => {
          // 사용자가 항목을 선택하면 해당 항목의 value로 placeValue 상태를 업데이트
          setPlaceValue(newValue ? newValue.value : 0);
        }}
        // 선택된 값과 옵션의 id 프로퍼티가 같은 지 비교하도록 사용해야 한다.
        isOptionEqualToValue={(option, value) => option.value === value.value}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderWidth: "0px",
                  borderBottomWidth: "0.08rem",
                  borderColor: "#5D7A93",
                },
                "&:hover fieldset": {
                  borderWidth: "0px",
                  borderBottomWidth: "1px",
                  borderColor: "#5D7A93",
                },
                "&.Mui-focused fieldset": {
                  borderWidth: "0px",
                  borderBottomWidth: "1px",
                  borderColor: "#5D7A93",
                },
                marginTop: "-12px",
                textAlign: "center",
                width: "128%",
                borderRadius: "0",
                marginLeft: "0.3rem",
                fontWeight: "bolder",
              },
              "& .MuiInputBase-input": {
                textAlign: "center",
                color: "#5D7A93",
                marginLeft: "3rem",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#5D7A93",
              },
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: null,
            }}
          />
        )}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
