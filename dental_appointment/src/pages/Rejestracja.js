import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Rejestracja() {
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
      <TextField id="outlined-basic" label="Wpisz imie" variant="outlined"/>
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 300, height: 40, top:30 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Wpisz nazwisko" variant="outlined"/>
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 300, height: 40, top:30 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Wpisz adres e-mail" variant="outlined"/>
    </Box>

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

<div class="box">
<div className="button" id="cofnij1">COFNIJ</div>
<div className="button" id="zaloguj">Zarejestruj sie</div>
</div>
</div>
  );
}


