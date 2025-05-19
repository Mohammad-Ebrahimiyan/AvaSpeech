import React from "react";
import { Link,useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import SidebarButton from "./SidebarButton";
import { speechIcon, archiveIcon, icon } from "../../assets/images/index";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
import { SidebarWrapper, Logo, TopSection, CenteredButtons } from "./Sidebar.styles";

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <SidebarWrapper>
      <TopSection>
        <Typography fontSize={20} color={cssMainColors.white} pr={1}>
          آوا
        </Typography>
        <Logo src={icon} alt="logo" />
      </TopSection>

        <CenteredButtons>
        <Link to="/">
          <SidebarButton
            icon={speechIcon}
            label="تبدیل گفتار"
            selected={pathname === "/"}
    
          />
        </Link>

        <Link to="/archive">
          <SidebarButton
            icon={archiveIcon}
            label="آرشیو"
            selected={pathname === "/archive"}

          />
        </Link>
      </CenteredButtons>
    </SidebarWrapper>
  );
};

export default Sidebar;
