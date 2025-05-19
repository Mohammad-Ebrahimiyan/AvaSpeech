import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { centerLink } from "../../assets/images/index";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

const LinkInputField: React.FC = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="example.com/sample.mp3"
      sx={{
        width: 328,
        height: 46,
        borderRadius: "25px",
        mb: 3,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: cssMainColors.lightRed,
            borderRadius: "25px",
          },
          "&:hover fieldset": {
            borderColor: cssMainColors.lightRed,
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <img src={centerLink} alt="link-icon" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default LinkInputField;
