import React from 'react';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { cssMainColors } from '../../styles/cssVariables/cssVariables';

const HeaderText: React.FC = () => {
  return (
    <Stack
    direction="column"
    alignItems="center"
    textAlign='center'
    mt={9}
    >
      <Title >
        تبدیل گفتار به متن
      </Title>

      <SubTitle>
        ،آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف
        <br />
        .زبان فارسی را یاد گرفته است و می‌تواند متن صحبت‌ها را بنویسد
      </SubTitle>
  </Stack>
  );
};

export default HeaderText;

const Title = styled(Typography)(() => ({
  width: 227,
  height: 48,
  fontWeight: 700,
  fontSize: '28px',
  color: cssMainColors.primary,
}));

const SubTitle = styled(Typography)(() => ({
  width: 434,
  height: 56,
  fontWeight: 400,
  fontSize: '16px',
  color: cssMainColors.secondary,
}));
