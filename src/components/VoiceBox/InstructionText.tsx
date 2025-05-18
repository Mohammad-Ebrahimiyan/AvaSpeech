import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

const InstructionText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 400,
  color: cssMainColors.secondary,
  marginBottom: theme.spacing(2),
  textAlign: "center",

  "& span": {
    display: "block", 
    marginBottom: theme.spacing(1), 
  },

}));

export default InstructionText;
