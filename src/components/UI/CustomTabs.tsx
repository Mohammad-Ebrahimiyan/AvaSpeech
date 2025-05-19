import { Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

const CustomTabs = styled(Tabs)(() => ({
  minHeight: "auto",
  ".MuiTabs-indicator": {
    backgroundColor: cssMainColors.primary,
    height: 2,
  },
}));

export default CustomTabs;

