//import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Menu_glowne_pacjent from "../components/Menu_pacjent";
import { useNavigate } from "react-router-dom";
import { HandleNav } from "../components/HandleNav";
function Wyszukiwarka({intro}) {
  
    const navigate = useNavigate();
    const [date0, setDate0] = useState(new Date());
    //const [date1, setDate1] = useState(new Date());
    
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
              <select className="choose_place" name="city">
                <option value="gdansk">Gdańsk</option>
                <option value="gdynia">Gdynia</option>
                <option value="warszawa">Warszawa</option>
                <option value="krakow">Kraków</option>
                <option value="poznan">Poznań</option>
                <option value="wroclaw">Wrocław</option>
              </select>
            </div>
      </div>






      <div className="box">
      <h5>Wybierz godzinę</h5>
    <div style={{ display: 'flex', alignItems: 'center', paddingLeft:'10px'}}>
      <DatePicker selected={date0} onChange={(date0) => setDate0(date0)} />
    </div>
     
   </div>
    
      <button className="button" onClick = {()=> HandleNav(navigate,'/terminy')} >WYSZUKAJ</button>
      </div>
      </div>
      </div>
      
)

}

export default Wyszukiwarka;


