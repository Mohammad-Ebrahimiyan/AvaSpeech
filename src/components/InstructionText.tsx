import React, { type ReactNode } from "react";
import { Typography } from "@mui/material";
import { cssMainColors } from "../styles/cssVariables/cssVariables";

interface InstructionTextProps {
    children: ReactNode;
}

const InstructionText: React.FC<InstructionTextProps> = ({ children }) => {
  return (
    <Typography
      variant="body2"
      color={cssMainColors.secondary}
      sx={{ fontSize: 14 }}
    >
      {children}
    </Typography>
  );
};

export default InstructionText;
