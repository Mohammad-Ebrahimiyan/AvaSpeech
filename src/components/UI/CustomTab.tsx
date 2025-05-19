import { Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
import type { TabProps } from "@mui/material/Tab";

const CustomTab = styled((props: TabProps) => <Tab disableRipple {...props} />)(
  () => ({
    fontSize: 14,
    fontWeight: 300,
    color: cssMainColors.primary,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    "& .MuiTab-iconWrapper": {
      marginBottom: "4px",
      marginLeft: 12,
    },
    "&:hover": {
      backgroundColor: cssMainColors.primary,
      color: cssMainColors.white,
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      opacity: 0.8,
      "& svg": { color: cssMainColors.white },
      "& img": { filter: "brightness(0) invert(1)" },
    },
    "&.Mui-selected": {
      fontWeight: 500,
      backgroundColor: cssMainColors.primary,
      color: cssMainColors.white,
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      padding:'0 20px 0 32px',
      
    },
  })
);

export default CustomTab;
