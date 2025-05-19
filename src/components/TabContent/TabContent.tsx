import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { tabsData } from "../../constants/tabsData"; 
import VoiceBoxContainer from "../VoiceBox/VoiceBoxContainer";
import InstructionText from "../VoiceBox/InstructionText";
import LinkInputField from "./LinkInputField"; 

const TabContent: React.FC<{ value: number }> = ({ value }) => {
  const tab = tabsData[value]; 

  if (!tab) {
    return <Typography>داده‌ای برای نمایش موجود نیست</Typography>; 
  }

  return (
    <VoiceBoxContainer tabIndex={value}>
      {tab.type === "link" ? (
        <LinkInputField />
      ) : (
        <Box mb={2}>
          <IconButton color="primary" aria-label={`start-${tab.type}`}>
            <img src={tab.imageSrc} alt={`${tab.type}-icon`} />
          </IconButton>
        </Box>
      )}

      <InstructionText>{tab.instructionText}</InstructionText>
    </VoiceBoxContainer>
  );
};

export default TabContent;
