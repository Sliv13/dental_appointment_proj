import * as React from 'react';
import Menu from '../components/Menu';

export default function Main_page({name}) {
  
  return (
    <div>
    <div className="App-header">
    
      <p>
      
      </p>


      <Menu name={name}>
      </Menu>


      </div>
      
<div>     
<h1>Zalogowano Pomyślnie</h1>

<p>
  Witaj na twoim koncie {name}a
</p>
</div>   
</div>

  );
}



