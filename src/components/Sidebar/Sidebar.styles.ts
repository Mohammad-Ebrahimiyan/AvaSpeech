import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Alefba, back } from "../../assets/images/index";

export const SidebarWrapper = styled(Box)(() => ({
  width: "166px",
  minHeight: "100vh",
  backgroundImage: `
    url(${Alefba}),
    url(${back})
  `,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 24,
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
}));

export const TopSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 20,
  marginBottom: 10,
}));

export const Logo = styled("img")(() => ({
  width: 19,
  height: 38,
}));

export const CenteredButtons = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 130,
  gap: 20,
}));
