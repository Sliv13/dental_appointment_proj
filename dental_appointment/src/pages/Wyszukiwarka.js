//import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Menu_glowne from "../components/Menu";
import { useNavigate } from "react-router-dom";

function Wyszukiwarka({intro}) {
  
    const navigate = useNavigate();
    const [date0, setDate0] = useState(new Date());
    const [date1, setDate1] = useState(new Date());
    function handleNav(route) {
      
      navigate(route)
      console.log(route)
    
    };  
return(
    
    <div>
    <div className="App-header">
    
      <p>
      
      </p>


      <Menu_glowne>
      </Menu_glowne>


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
            <h5>Wybierz placówkę</h5>
            <div style={{ display: 'flex', alignItems: 'center' }}>{/*  style={{ display: 'flex', alignItems: 'center' }} */}
              <h3></h3>
              <select className="choose_place" name="place">
                <option value="klinika1">Gabinet 1</option>
                <option value="klinika2">Gabinet 2</option>
                <option value="klinika3">Gabinet 3</option>
                <option value="klinika4">Gabinet 4</option>
                <option value="klinika5">Gabinet 5</option>
                <option value="klinika6">Gabinet 6</option>
              </select>
            </div>
      </div>




      <div className="box">
    <div>
      <DatePicker selected={date0} onChange={(date0) => setDate0(date0)} />
    </div>
     <div>
     <DatePicker selected={date1} onChange={(date1) => setDate1(date1)} />
   </div>
   </div>


      <button className="button" onClick = {()=> handleNav('/terminy')} >WYSZUKAJ</button>
      </div>
      </div>
      </div>
)

}

export default Wyszukiwarka;


