import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Pole_tekstowe from '../components/Pole_tekstowe';
import { useNavigate, useLocation} from "react-router-dom";
import { HandleNav } from '../components/HandleNav';
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
//'id','placowka','miasto','lekarz','pacjent','data','godzina','szczegoly','wiadomosc_dla_lekarza'


export default function Terminy(miasto) {
  const location=useLocation();
  var data = location.state;
  console.log(data)
  const [Terminy, setTerminy] = useState([]);
  useEffect(() => {
    getTermin();
}, []);

const getTermin = () => {
  if(data !== null){
    api
        .get("/api/terminy/",{params:{
          miasto :data.miasto,
        data:data.data}})
        .then((res) => res.data)
        .then((data) => {
            setTerminy(data);
            console.log(data);
        })
        .catch((err) => alert(err));
        console.log(Terminy)
      }
};
  const navigate = useNavigate();

  return (
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

<h3>Zostaw wiadomość dla lekarza - pole nieobowiązkowe</h3>

<div class="box">
<button className="button" onClick = {()=> HandleNav(navigate,'/wyszukiwarka')} id="cofnij">COFNIJ</button>
<Pole_tekstowe label={"Informacja dla lekarza"}>
</Pole_tekstowe>
<button className="button" onClick = {()=> HandleNav(navigate,'/wyszukiwarka')} id="zatwierdź">ZATWIERDŹ</button>
</div>
</div>

  );
}