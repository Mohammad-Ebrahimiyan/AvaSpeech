import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  styled,
} from "@mui/material";
import PaginationSize from "./PaginationComponent";
import { files } from "../../constants/files";
import FileRow from "./FileRow";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

const StyledTh = styled("th")({
  color: cssMainColors.black,
   fontWeight: 400,
  padding: "16px",
});

const FileTable: React.FC = () => {
  return (
    <>
      <Box sx={{ direction: "rtl", mt: 8, mr: 15 }}>
        <TableContainer>
          <Table>
            <thead>
              <TableRow>
                <StyledTh>نام فایل</StyledTh>
                <StyledTh>تاریخ بارگذاری</StyledTh>
                <StyledTh>نوع فایل</StyledTh>
                <StyledTh>مدت زمان</StyledTh>
                <StyledTh />
              </TableRow>
            </thead>
            <TableBody>
              {files.map((file, index) => (
                <FileRow key={index} file={file} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <PaginationSize />
    </>
  );
};

export default FileTable;
