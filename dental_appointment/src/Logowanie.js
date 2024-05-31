import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Logowanie() {
  return (
    <div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 300, height: 40, top:30 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Wpisz nazwę użytkownika" variant="outlined"/>
    </Box>


<Box
component="form"
sx={{
  '& > :not(style)': { m: 1, width: 300, height: 40, top:50},
}}
noValidate
autoComplete="off"
>
<TextField id="outlined-basic" label="Wpisz hasło" variant="outlined" input type="password"/>
</Box>
</div>
  );
}


