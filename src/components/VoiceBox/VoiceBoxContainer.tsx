import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

interface VoiceBoxContainerProps {
  tabIndex: number;
}

const VoiceBoxContainer = styled(Box)<VoiceBoxContainerProps>(
  ({ tabIndex }) => {
    const borderRadiusValues = [
      {
        borderRadius: "25px",
      },
      {
        borderRadius: "25px",
      },
      {
        borderTopLeftRadius: "25px",
        borderBottomLeftRadius: "25px",
        borderBottomRightRadius: "25px",
      },
    ];

    const borderStyle = borderRadiusValues[tabIndex];

    return {
      width: 653,
      height: 429,
      position: "relative",
      borderTopLeftRadius: borderStyle.borderTopLeftRadius,
      borderBottomLeftRadius: borderStyle.borderBottomLeftRadius,
      borderBottomRightRadius: borderStyle.borderBottomRightRadius,
      borderRadius: borderStyle.borderRadius,
      border: "1px solid",
      borderColor:
        tabIndex === 1
          ? cssMainColors.lightPurple
          : tabIndex === 0
          ? cssMainColors.lightRed
          : cssMainColors.primary,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      transition: "all 0.3s ease", 

    };
  }
);

export default VoiceBoxContainer;
