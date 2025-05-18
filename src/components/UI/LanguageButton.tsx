import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import {
  StyledButton,
  DropIcon,
  DropdownBox,
  LangOption,
} from "./LanguageButton.styles";

import { dropIcon } from "../../assets/images/index";


interface LanguageButtonProps {
  label?: string;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ label }) => {
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<"fa" | "en">("fa");

  return (
    <Stack direction="row-reverse" spacing={2} mt={2} mr={58}>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ fontSize: 14, pt: 1 }}
      >
        {label}
      </Typography>
      <Box onMouseLeave={() => setOpen(false)}>
        <StyledButton
          onMouseEnter={() => setOpen(true)}
          selected={selectedLang}
          disableRipple
        >
          <DropIcon src={dropIcon} alt="dropdown" open={open} />
          <Typography variant="body2">
            {selectedLang === "fa" ? "فارسی" : "انگلیسی"}
          </Typography>
        </StyledButton>

        {open && (
          <DropdownBox>
            {selectedLang !== "fa" && (
              <LangOption
                active={false}
                onClick={() => {
                  setSelectedLang("fa");
                  setOpen(false);
                }}
              >
                فارسی
              </LangOption>
            )}
            {selectedLang !== "en" && (
              <LangOption
                active={false}
                onClick={() => {
                  setSelectedLang("en");
                  setOpen(false);
                }}
              >
                انگلیسی
              </LangOption>
            )}
          </DropdownBox>
        )}
      </Box>
    </Stack>
  );
};

export default LanguageButton;
