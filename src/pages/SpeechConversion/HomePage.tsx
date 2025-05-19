import React from 'react';
import { Box } from '@mui/material';
import HeaderText from '../../components/Layout/HeaderText';
import VoiceBox from '../../components/VoiceBox/VoiceBox';

const HomePage: React.FC = () => {
  return (
    <Box>
      <HeaderText />
      <VoiceBox />
    </Box>
  );
};

export default HomePage;