import React from "react";
import { Grid } from "@mui/material";
import CustomTabs from "../../UI/CustomTabs";
import CustomTab from "../../UI/CustomTab";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { chainIcon, uploadIcon } from "../../../assets/images";
import { cssMainColors } from "../../../styles/cssVariables/cssVariables";

interface Props {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const VoiceOptionsTabs: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Grid container  sx={{ ml:35 }}>
      <CustomTabs value={value} onChange={onChange}>
        <CustomTab
        
          icon={
            <img
              src={chainIcon}
              alt="link"
              style={{
                width: 20.42,
                height: 16.67,
                filter: value === 0 ? "brightness(0) invert(1)" : undefined,
              }}
            />
          }
          label="لینک"
          value={0}
          sx={{
            backgroundColor:
              value === 0 ? cssMainColors.lightRed : "transparent",
            color: value === 0 ? cssMainColors.white : cssMainColors.primary,
            "&:hover": {
              backgroundColor: cssMainColors.lightRed,
              color: cssMainColors.white,
            },
            "&.Mui-selected": {
              backgroundColor: cssMainColors.lightRed,
              color: cssMainColors.white,
            },
          }}
        />
        <CustomTab
          icon={
            <img
              src={uploadIcon}
              alt="upload"
              style={{
                width: 18.34,
                height: 15,
                filter: value === 1 ? "brightness(0) invert(1)" : undefined,
              }}
            />
          }
          label="بارگذاری فایل"
          value={1}
          sx={{
            backgroundColor:
              value === 1 ? cssMainColors.lightPurple : "transparent",
            color: value === 1 ? cssMainColors.white : cssMainColors.primary,
            "&:hover": {
              backgroundColor: cssMainColors.lightPurple,
              color: cssMainColors.white,
            },
            "&.Mui-selected": {
              backgroundColor: cssMainColors.lightPurple,
              color: cssMainColors.white,
            },
          }}
        />
        <CustomTab
          icon={
            <MicNoneIcon
              sx={{
                backgroundColor:
                  value === 2 ? cssMainColors.primary : "transparent",
                color:
                  value === 2 ? cssMainColors.white : cssMainColors.primary,
                "&:hover": {
                  backgroundColor: cssMainColors.primary,
                  color: cssMainColors.white,
                },
                "&.Mui-selected": {
                  backgroundColor: cssMainColors.primary,
                  color: cssMainColors.white,
                },
              }}
            />
          }
          label="ضبط صدا"
          value={2}
        />
      </CustomTabs>
    </Grid>
  );
};

export default VoiceOptionsTabs;
