import React from "react";
import { IconButton, styled } from "@mui/material";
import {
  downloadIcon,
  copyIcon,
  wordIcon,
  delIcon,
} from "../../assets/images/index";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

import TooltipMui, {
  type TooltipProps,
  tooltipClasses,
} from "@mui/material/Tooltip";

interface IconButtonsGroupProps {
  sizeTooltip: string;
}

const IconButtonsGroup: React.FC<IconButtonsGroupProps> = ({ sizeTooltip }) => {
  return (
    <>
      <HtmlTooltip title={sizeTooltip}>
        <StaticIconButton>
          <img src={downloadIcon} alt="Download" />
        </StaticIconButton>
      </HtmlTooltip>

      <StaticIconButton>
        <img src={wordIcon} alt="Word" />
      </StaticIconButton>

      <CustomCopyButton>
        <img src={copyIcon} alt="Copy" />
      </CustomCopyButton>

      <CustomDeleteButton>
        <img src={delIcon} alt="Delete" />
      </CustomDeleteButton>
    </>
  );
};

export default IconButtonsGroup;

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <TooltipMui {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: cssMainColors.white,
    color: cssMainColors.black,
    maxWidth: 94,
    height: 30,
    fontSize: 12,
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 8px",
    boxSizing: "border-box",
    borderRadius: 3,
  },
}));

const StaticIconButton = styled(IconButton)({
  cursor: "default",
  "&:hover img": {
    fill: cssMainColors.normalGreen,
    filter: "none",
  },
});

const CustomCopyButton = styled(IconButton)({
  cursor: "default",
  "&:hover img": {
    fill: cssMainColors.normalGreen,
  },
});

const CustomDeleteButton = styled(IconButton)({
  cursor: "default",
  "&:hover": {
    backgroundColor: cssMainColors.normalRed,
    "& img": {
      filter: "brightness(0) invert(1)",
    },
  },
});
