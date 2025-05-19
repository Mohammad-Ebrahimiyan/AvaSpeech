import React from "react";
import ArchiveTitle from "../../components/Archive/ArchiveTitle";
import FileTable from "../../components/Archive/FileTable";
import { Stack } from "@mui/material";

const Archives: React.FC = () => {
  return (
    <Stack>
      <ArchiveTitle />
      <FileTable />
    </Stack>
  );
};

export default Archives;
