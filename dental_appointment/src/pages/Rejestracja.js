import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { HandleNav } from '../components/HandleNav';
import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import api from "../api";

export default function Rejestracja() {

  const [first_name, setFirstname] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
        const res = await api.post("api/user/register/", { first_name,last_name,email,username, password })
            
            navigate('/')
        
    } catch (error) {
        alert(error)
    } finally {
        setLoading(false)
    }
  };
  
  return (
    
    <div>
      <form onSubmit={handleSubmit} className="form-container">
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 300, height: 40, top:30 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={first_name} onChange={(e) => setFirstname(e.target.value)} id="outlined-basic" label="Wpisz imie" variant="outlined"/>
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 300, height: 40, top:30 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={last_name} onChange={(e) => setLastName(e.target.value)} id="outlined-basic" label="Wpisz nazwisko" variant="outlined"/>
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 300, height: 40, top:30 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={email} onChange={(e) => setEmail(e.target.value)}id="outlined-basic" label="Wpisz adres e-mail" variant="outlined"/>
    </Box>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 300, height: 40, top:30 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={username} onChange={(e) => setUsername(e.target.value)} id="outlined-basic" label="Wpisz nazwę użytkownika" variant="outlined"/>
    </Box>


  <Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: 300, height: 40, top:50},
  }}
  noValidate
  autoComplete="off"
  >
  <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Wpisz hasło" variant="outlined" input type="password"/>
  </Box>

<div class="box">
<button onClick={()=>HandleNav(navigate,'/')} className="button" id="cofnij1">COFNIJ</button>
<button className="button" type="submit" id="zaloguj">Zarejestruj sie</button>
</div>
</form>
</div>


  );
}
