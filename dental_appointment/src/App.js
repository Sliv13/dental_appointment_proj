
import './App.css';
import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import Wyszukiwarka from './pages/Wyszukiwarka';
import Rejestracja from './pages/Rejestracja'
import NotFound from './pages/NotFound';
import Zaplanowane from './pages/Zaplanowane';
import Terminy from './pages/Terminy';
import Historia from './pages/Historia';
import Konto from './pages/Konto'
import Main_page_pacjent from './pages/main_page_pacjent';
import Main_page_lekarz from './pages/main_page_lekarz';

import Dodaj_termin from './pages/Dodaj_termin'
import Konto_S from './pages/Konto_S';
import Zaplanowane_S from './pages/Zaplanowane_S';
import Historia_S from './pages/Historia_S';
import Wylogowano from './components/Wylogowano';
import Logowanie from './pages/Logowanie';
function Logout() {
  localStorage.clear()
  return (
  <Wylogowano />)
  //<Navigate to="/" />);
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Rejestracja />
}

function App() {
  return (
    <div className="App">
     
    <BrowserRouter>
    <Routes>
      <Route
        path="/pacjent"
        element={
          <ProtectedRoute type="pacjent">
            <Main_page_pacjent />
          </ProtectedRoute>
        }
      />
    <Route
        path="/lekarz"
        element={
          <ProtectedRoute type="lekarz">
            <Main_page_lekarz />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Wyszukiwarka"
        element={
          <ProtectedRoute type="pacjent">
            <Wyszukiwarka />
          </ProtectedRoute>
        }
      />
      <Route
        path="/zaplanowane"
        element={
          <ProtectedRoute type="pacjent">
            <Zaplanowane />
          </ProtectedRoute>
        }
      />
      <Route
        path="/zaplanowane_s"
        element={
          <ProtectedRoute type="lekarz">
            <Zaplanowane_S />
          </ProtectedRoute>
        }
      />
      <Route
        path="/historia"
        element={
          <ProtectedRoute type="pacjent">
            <Historia />
          </ProtectedRoute>
        }
      />
      <Route
        path="/historia_s"
        element={
          <ProtectedRoute type="lekarz">
            <Historia_S />
          </ProtectedRoute>
        }
      />
      <Route
        path="/konto"
        element={
          <ProtectedRoute type="pacjent">
            <Konto />
          </ProtectedRoute>
        }
      />
      <Route
        path="/konto_s"
        element={
          <ProtectedRoute type="lekarz">
            <Konto />
          </ProtectedRoute>
        }
      />
      <Route
        path="/terminy"
        element={
          <ProtectedRoute type="pacjent">
            <Terminy />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dodaj"
        element={
          <ProtectedRoute type="lekarz">
            <Dodaj_termin />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Logowanie konto=''/>} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<RegisterAndLogout />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
  


    </div>
    
  );
}

export default App;



