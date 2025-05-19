import React from "react";
import { TableRow, TableCell, IconButton, Box, styled } from "@mui/material";
import { linkBtn } from "../../assets/images/index";
import IconButtonsGroup from "./IconButtonsGroup";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";


interface FileRowProps {
    file: {
        name: string;
        duration: string;
        date: string;
        type: string;
        size: string;
    link: string;
  };
}

const FileRow: React.FC<FileRowProps> = ({ file }) => {
    return (
        <StyledTableRow>
      <CustomTableCell>
        <Box display="flex" alignItems="center">
          <IconButton>
            <img src={linkBtn} alt="Link" />
          </IconButton>
          {file.name}
        </Box>
      </CustomTableCell>
      <CustomTableCell>{file.date}</CustomTableCell>
      <CustomTableCell>{file.type}</CustomTableCell>
      <CustomTableCell>{file.duration}</CustomTableCell>
      <CustomTableCell>
        <IconButtonsGroup sizeTooltip={file.size} />
      </CustomTableCell>
    </StyledTableRow>
  );
};

export default FileRow;

const CustomTableCell = styled(TableCell)({
  borderBottom: "none",
  textAlign: "center",
});

const StyledTableRow = styled(TableRow)({
  transition: "box-shadow 0.3s ease, background-color 0.3s ease",
  "&:hover": {
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    backgroundColor: cssMainColors.white,
  },
});
