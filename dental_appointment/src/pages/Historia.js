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
  { field: 'szczegoly', headerName: 'Przebieg wizyty', width: 130, type:'text'},
  { field: 'wiadomosc_dla_lekarza', headerName: 'zalecenia od lekarza', width: 40,type:'text' },
];

export default function Historia() {
  const [Terminy, setTerminy] = useState([]);
  useEffect(() => {
    getTermin();
}, []);

const getTermin = () => {
  
    api
        .get("/api/terminy/history/")
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
      <div>
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
</div>

  );
}