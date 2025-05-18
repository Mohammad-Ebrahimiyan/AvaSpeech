import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import GuestIcon from "../components/Layout/GuestIcon";
import { styled } from "@mui/material/styles";

const SIDEBAR_WIDTH = 166;


const MainLayout: React.FC = () => {
  return (
    <Root>
      <GuestIcon />
      <Content>
        <Outlet />
      </Content>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
    </Root>
  );
  
  export default MainLayout;
  
  const Root = styled("div")({
    display: "flex",
    width: "100vw",
  });
  
  const Content = styled("div")({
    flexGrow: 1,
    paddingRight: `${SIDEBAR_WIDTH}px`, 
  });
  
  const SidebarWrapper = styled("div")({
    width: `${SIDEBAR_WIDTH}px`,
    position: "fixed",
    right: 0,  
  });
};