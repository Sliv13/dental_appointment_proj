import * as React from 'react';
import Menu_glowne from '../components/Menu';
import Menu_glowne_pacjent from '../components/Menu_pacjent';
import { useEffect,useState } from 'react';
import api from "../api";
export default function Konto() {
  const [User, setUser] = useState("");
  useEffect(() => {
    getUser();
}, []);

const getUser = () => {
    api
        .get("/api/user_info/")
        .then((res) => res.data)
        .then((data) => {
            setUser(data);
            console.log(data);
        })
        .catch((err) => alert(err));
};
  //console.log(User[0]['id'])
  return (
    <div>
    <div className="App-header">
    
      <p>
      
      </p>


      <Menu_glowne_pacjent>
      </Menu_glowne_pacjent>


      </div>
      
<div>     
<h3>Imię: {User[0]['first_name']}</h3>
<h3>Nazwisko: {User[0]['last_name']}</h3>
<h3>Adres e-mail: {User[0]['email']}</h3>
<h3>Login:       {User[0]['username']}</h3>
</div>   
</div>

  );
}



