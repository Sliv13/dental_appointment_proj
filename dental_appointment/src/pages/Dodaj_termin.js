//import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DigitalClockAmPm from '../components/Godzina';
import Menu_glowne_lekarz from "../components/Menu_lekarz";

function Dodaj_termin({intro}) {
    const [date0, setDate0] = useState(new Date());
     
return(
  <div>
  <div className="App-header">
  
    <p>
    
    </p>


    <Menu_glowne_lekarz>
    </Menu_glowne_lekarz>


    </div>
    <div>
    <div>
    <div class="box">
            <h5>Wybierz miasto</h5>
            <div style={{ display: 'flex', alignItems: 'center' }}>{/*  style={{ display: 'flex', alignItems: 'center' }} */}
              <h3></h3>
              <select className="choose_emotion" name="emotion">
                <option value="neutral">Gdańsk</option>
                <option value="happy">Gdynia</option>
                <option value="sad">Warszawa</option>
                <option value="angry">Kraków</option>
                <option value="fear">Poznań</option>
                <option value="disgust">Wrocław</option>
              </select>
            </div>
      </div>

      <div class="box">
            <h5>Wybierz placówkę</h5>
            <div style={{ display: 'flex', alignItems: 'center' }}>{/*  style={{ display: 'flex', alignItems: 'center' }} */}
              <h3></h3>
              <select className="choose_emotion" name="emotion">
                <option value="neutral">Gabinet 1</option>
                <option value="happy">Gabinet 2</option>
                <option value="sad">Gabinet 3</option>
                <option value="angry">Gabinet 4</option>
                <option value="fear">Gabinet 5</option>
                <option value="disgust">Gabinet 6</option>
              </select>
            </div>
      </div>




      <div class="box">
    
    <h5>Wybierz datę</h5>
    <div style={{ display: 'flex', alignItems: 'center', padding: '0px 0px 0px 20px' }}>{/*  style={{ display: 'flex', alignItems: 'center' }} */}
      <DatePicker selected={date0} onChange={(date0) => setDate0(date0)} />
    </div>
   </div>
   

   <div class="box">
    
    <h5>Wybierz godzinę</h5>
    <div style={{ display: 'flex', alignItems: 'center' , padding: '0px 0px 0px 20px' }}>{/*  style={{ display: 'flex', alignItems: 'center' }} */}
    <DigitalClockAmPm>
    </DigitalClockAmPm>
    </div>
   </div>

   
   
      <div className="button" id="dodaj">DODAJ</div>
      
      </div>
      </div>
      </div>
)

}

export default Dodaj_termin;


