import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Pole_tekstowe from './Pole_tekstowe';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Imię', width: 130 },
  { field: 'lastName', headerName: 'Nazwisko', width: 130 },
  {
    field: 'time',
    headerName: 'Godzina',
    //type: 'number',
    type: 'text',
    width: 90,
  },
  {
    field: 'notes',
    headerName: 'Szczegóły odnośnie wizyty',
    description: 'Inne informacje odnośnie wizyty',
    sortable: false,
    width: 300,
    //valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    type: 'text',
  },

  {
    field: 'message',
    headerName: 'Wiadomość do lekarza',
    description: 'Wysłana wiadomość do lekarza',
    sortable: false,
    width: 300,
    //valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    type: 'text',
  },
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

export default function Terminy() {
  return (
    <section>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
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


</section>

  );
}