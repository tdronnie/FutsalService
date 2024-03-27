import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const MuiAutocomplete = ({ contents }: { contents: matchPlace[] }) => {
  return (
    <Stack spacing={2} sx={{ width: "80%" }}>
      <Autocomplete
        id="free-solo-demo"
        options={contents.map((option) => option.label)}
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
                marginTop: "-5px",
                textAlign: "center",
                width: "128%",
                borderRadius: "0",
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
