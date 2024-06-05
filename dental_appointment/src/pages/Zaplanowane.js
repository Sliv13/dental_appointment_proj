import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Pole_tekstowe from '../components/Pole_tekstowe';
import Menu_glowne_pacjent from '../components/Menu_pacjent';
import { useState,useEffect } from 'react';
import api from '../api';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'placowka', headerName: 'placowka', width: 130 },
  { field: 'miasto', headerName: 'miasto', width: 130 },
  { field: 'lekarz', headerName: 'lekarz', width: 130 },
  { field: 'pacjent', headerName: 'pacjent', width: 130 },
  { field: 'data', headerName: 'data', width: 130 },
  { field: 'godzina', headerName: 'godzina', width: 130 },
  { field: 'szczegoly', headerName: 'szczegoly', width: 130, type:'text'},
  { field: 'wiadomosc_dla_lekarza', headerName: 'wiadomosc_dla_lekarza', width: 40,type:'text' },
  
];

const rows = [
  { id: 1, lastName: 'Kowalski', firstName: 'Jan', time: '12:30', notes: 'Zapraszamy tylko dorosłych', message: 'Jestem uczulony na lek XYZ' },
  { id: 2, lastName: 'Nowak', firstName: 'Marta', time: '13:35' },
  { id: 3, lastName: 'Kowalczyk', firstName: 'Maria', time: '13:35' },
  { id: 4, lastName: 'Wiśniewski', firstName: 'Adam', time: '13:35' },
  { id: 5, lastName: 'Zawadzki', firstName: 'Janusz', time: '13:35' },
  { id: 6, lastName: 'Zielińska', firstName: 'Paulina', time: '13:35' },
  { id: 7, lastName: 'Urbański', firstName: 'Bartosz', time: '13:35' },
  { id: 8, lastName: 'Urbański', firstName: 'Bartosz', time: '13:35' },
  { id: 9, lastName: 'Urbański', firstName: 'Bartosz', time: '13:35' },
];

export default function Zaplanowane() {
  const [Terminy, setTerminy] = useState([]);
  useEffect(() => {
    getTermin();
}, []);

const getTermin = () => {
  
    api
        .get("/api/terminy/planned/")
        .then((res) => res.data)
        .then((data) => {
            setTerminy(data);
            console.log(data);
        })
        .catch((err) => alert(err));
        console.log(Terminy)
      
};
  return (
    <div>
    <div className="App-header">
    
      <p>
      
      </p>


      <Menu_glowne_pacjent>
      </Menu_glowne_pacjent>


      </div>
      <div></div>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={Terminy}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />
    </div>

<br>
</br>
<br>
</br>
<br>
</br>


</div>

  );
}