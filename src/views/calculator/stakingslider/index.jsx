import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 7,
    label: 'One week',
  },
  {
    value: 30,
    label: 'Four weeks',
  },
  {
    value: 60,
    label: 'Two months',
  },
  {
    value: 120,
    label: 'Four months',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function StakingSlider() {
  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        max={120}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  );
}