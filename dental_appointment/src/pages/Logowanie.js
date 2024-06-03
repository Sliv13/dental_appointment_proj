import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

export default function Logowanie() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
        const res = await api.post("/api/token/", { username, password })
        
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/")
        
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
      <TextField id="outlined-basic" label="Wpisz nazwę użytkownika" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)}/>
    </Box>


  <Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: 300, height: 40, top:50},
  }}
  noValidate
  autoComplete="off"
  >
  <TextField id="outlined-basic" label="Wpisz hasło" variant="outlined" input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
  </Box>


<button className="button" id="cofnij1">COFNIJ</button>
<button className="button" type="submit" id="zaloguj">ZALOGUJ SIĘ</button>

</form>
</div>
  );
}


