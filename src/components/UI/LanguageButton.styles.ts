import { Button, Box, styled } from "@mui/material";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

export const StyledButton = styled(Button)<{ selected: "fa" | "en" }>(() => ({
  width: 105,
  height: 37,
  padding: "6px 15px",
  border: "1.5px solid",
  borderColor: cssMainColors.primary,
  borderRadius: 20,
  fontSize: "14px",
  color: cssMainColors.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: cssMainColors.primary,
    color: cssMainColors.white,
    "& img": {
      filter: "brightness(0) invert(1)",
    },
  },
}));

export const DropIcon = styled("img")<{ open: boolean }>(({ open }) => ({
  width: 10,
  height: 6,
  marginLeft: 8,
  transform: open ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.3s",
}));

export const DropdownBox = styled(Box)(() => ({
  width: 105,
  backgroundColor: cssMainColors.white,
  border: `1.5px solid ${cssMainColors.primary}`,
  borderRadius: 20,
  overflow: "hidden",
  marginTop:'4px'

}));

export const LangOption = styled(Box)<{ active: boolean }>(({ active }) => ({
  padding: "6px 10px",
  cursor: "pointer",
  fontSize: 14,
  color: active ? cssMainColors.white : cssMainColors.primary,
  backgroundColor: active ? cssMainColors.primary : "transparent",
  textAlign: "center",
  transition: "all 0.2s",
  "&:hover": {
    backgroundColor: cssMainColors.primary,
    color: cssMainColors.white,
  },
}));