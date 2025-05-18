import React, { useState } from "react";
import {
  Container,
  GuestButton,
  DropIcon,
  IconWithLabelBox,
  UserIcon,
  GuestLabel,
  StyledDivider,
  LogoutButton,
  LogoutIcon,
} from "./GuestIcon.styles";
import { Typography } from "@mui/material";
import { dropIcon, userIcon, logout } from "../../assets/images/index";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

const GuestIcon: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container open={open}>
      <GuestButton open={open} onClick={() => setOpen(!open)}>
        <DropIcon src={dropIcon} alt="dropdown" open={open} />
        <IconWithLabelBox>
          <UserIcon src={userIcon} alt="user" />
          <GuestLabel variant="h6">مهمان</GuestLabel>
        </IconWithLabelBox>
      </GuestButton>

      {open && (
        <>
          <StyledDivider />
          <LogoutButton>
            <IconWithLabelBox>
              <LogoutIcon src={logout} alt="logout" />
              <Typography
                variant="h6"
                sx={{ fontSize: 14, color: cssMainColors.primary }}
              >
                خروج
              </Typography>
            </IconWithLabelBox>
          </LogoutButton>
        </>
      )}
    </Container>
  );
};

export default GuestIcon;
