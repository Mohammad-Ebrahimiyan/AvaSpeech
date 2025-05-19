import { Box, Button, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

export const Container = styled(Box)<{ open: boolean }>(({ open }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 121,
  height:100,
  marginLeft: 37,
  marginTop: 30,
  gap: 6,
  border: open ? `1.5px solid ${cssMainColors.primary}` : "none",
  borderRadius: open ? 20 : 0,
  padding: open ? 8 : 0,
  boxSizing: "border-box",
  backgroundColor: "transparent",
  transition: "all 0.3s ease",
}));

export const GuestButton = styled(Button)<{ open: boolean }>(({ open }) => ({
  width: "100%",
  height: 37,
  border: open ? "none" : `1.5px solid ${cssMainColors.primary}`, // حذف border وقتی open است
  borderRadius: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 11,
  backgroundColor: "transparent",
  padding: 8,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: cssMainColors.primary,
    color: cssMainColors.white,
    "& img": {
      filter: "brightness(0) invert(1)",
    },
    "& h6": {
      color: cssMainColors.white,
    },
  },
}));


export const LogoutButton = styled(Button)({
  width: "100%",
  height: 37,
  border: "none",
  borderRadius: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 11,
  backgroundColor: "transparent",
  padding: 8,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: cssMainColors.primary,
    color: cssMainColors.white,
    "& img": {
      filter: "brightness(0) invert(1)",
    },
    "& h6": {
      color: cssMainColors.white,
    },
  },
});

export const StyledDivider = styled(Divider)({
  width: "100%",
  borderColor: cssMainColors.primary,
  margin: 0,
});

export const UserIcon = styled("img")({
  width: 18.5,
  height: 18.5,
});

export  const DropIcon = styled("img")<{ open: boolean }>(({ open }) => ({
  width: 9.79,
  height: 6.53,
  transform: open ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.3s",
}));

export const GuestLabel = styled(Typography)({
  color: cssMainColors.primary,
  fontSize: 15,
  fontWeight: 400,
});

export const LogoutIcon = styled("img")({
  width: 11.61,
  height: 13,
  paddingLeft: 2,
});

export const IconWithLabelBox = styled(Box)({
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
});