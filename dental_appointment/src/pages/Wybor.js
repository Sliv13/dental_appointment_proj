import * as React from 'react';
import Logowanie from './Logowanie';
import { HandleNav } from '../components/HandleNav';
import { useNavigate } from "react-router-dom";
export default function Wybor() {
  const navigate = useNavigate();
  return (
    <div>

<h1>Wybierz rodzaj konta:</h1>
<div class="box">
<button className="button" onClick={()=>HandleNav(navigate,'/login_lekarz')} id="cofnij1">STOMATOLOG</button>
<button className="button" onClick={()=>HandleNav(navigate,'/login_pacjent')} id="zaloguj">PACJENT</button>
</div>
</div>

  );
}



