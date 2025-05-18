import React from "react";
import { Typography, Stack } from "@mui/material";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

const ArchiveTitle: React.FC = () => {
  return (
    <Stack >
      <Typography
        variant="h4"
        sx={{
          color: cssMainColors.primary,
          fontWeight: 600,
          fontSize: "24px",
          textAlign: "right",
          mt: 12,
          mr:19 
        }}
      >
        آرشیو من
      </Typography>
    </Stack>
  );
};

export default ArchiveTitle;
