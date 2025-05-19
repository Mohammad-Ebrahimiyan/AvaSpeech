import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

interface SidebarButtonProps {
  icon: string;
  label: string;
  selected?: boolean;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  label,
  selected,
}) => {
  return (
    <SidebarBtn selected={selected}>
      <IconImg src={icon} alt={label} />
      <Typography fontSize={16}>{label}</Typography>
    </SidebarBtn>
  );
};

export default SidebarButton;

const SidebarBtn = styled(Button)<{ selected?: boolean }>(({ selected }) => ({
  width: "150px",
  height: "48px",
  justifyContent: "space-around",
  borderRadius: "10px",
  color: selected ? cssMainColors.white : cssMainColors.white,
  backgroundColor: selected ? cssMainColors.darkGreen : "transparent",
  fontWeight: selected ? 500 : 300,
  flexDirection: "row-reverse",
  "&:hover": {
    backgroundColor: cssMainColors.darkGreen,
  },
}));

const IconImg = styled("img")({
  width: 20,
  height: 20,
});
