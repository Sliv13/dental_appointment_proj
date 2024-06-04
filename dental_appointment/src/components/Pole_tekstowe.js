import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Pole_tekstowe({label}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 600, height: 40 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} variant="outlined" />
    </Box>
  );
}


