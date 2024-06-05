//import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Menu_glowne_pacjent from "../components/Menu_pacjent";
import { useNavigate } from "react-router-dom";
import { HandleNav } from "../components/HandleNav";
import { TextField } from "@mui/material";

function Wyszukiwarka({intro}) {
  
    const navigate = useNavigate();
    const [date0, setDate0] = useState("2024-06-05");
    const [miasto0, setMiasto] = useState("Gdańsk");
    let data = {miasto:miasto0,data:date0}
    const handlenavigate=()=>{
      navigate('/terminy',{state:data})
    }

return(
    
    <div>
    <div className="App-header">
    
      <p>
      
      </p>


      <Menu_glowne_pacjent>
      </Menu_glowne_pacjent>


      </div>
      <div>
    <div>
    <div className="box">
            <h5>Wybierz miasto</h5>
            <div style={{ display: 'flex', alignItems: 'center' }}>{/*  style={{ display: 'flex', alignItems: 'center' }} */}
              <h3></h3>
              <select selected={miasto0} onChange={(e) => setMiasto(e.target.value)} className="choose_place" name="city">
                <option value="Gdańsk">Gdańsk</option>
                <option value="Gdynia">Gdynia</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Kraków">Kraków</option>
                <option value="Poznań">Poznań</option>
                <option value="Wrocław">Wrocław</option>
              </select>
            </div>
      </div>






      <div className="box">
      <h5>Wybierz datę</h5>
    <div style={{ display: 'flex', alignItems: 'center', paddingLeft:'10px'}}>
      <TextField inputFormat="yyyy-mm-dd" value={date0} onChange={(e) => setDate0(e.target.value)} name='godzina'/>
    </div>
     
   </div>
    
      <button className="button" onClick = {handlenavigate} >WYSZUKAJ</button>
      </div>
      </div>
      </div>
      
)

}

export default Wyszukiwarka;


