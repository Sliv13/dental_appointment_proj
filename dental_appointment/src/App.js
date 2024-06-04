
import './App.css';
import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import Wyszukiwarka from './pages/Wyszukiwarka';
import Logowanie_pacjent from './pages/logowanie_pacjent';
import Logowanie_lekarz from './pages/logowanie_lekarz';
import Rejestracja from './pages/Rejestracja'
import NotFound from './pages/NotFound';
import Zaplanowane from './pages/Zaplanowane';
import Terminy from './pages/Terminy';
import Historia from './pages/Historia';
import Konto from './pages/Konto'
import Main_page_pacjent from './pages/main_page_pacjent';
import Main_page_lekarz from './pages/main_page_lekarz';
import Wybor from './pages/Wybor';
import Dodaj_termin from './pages/Dodaj_termin'
import Konto_S from './pages/Konto_S';
import Zaplanowane_S from './pages/Zaplanowane_S';
import Historia_S from './pages/Historia_S';
import Wylogowano from './components/Wylogowano';
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
          <ProtectedRoute>
            <Main_page_pacjent />
          </ProtectedRoute>
        }
      />
    <Route
        path="/lekarz"
        element={
          <ProtectedRoute>
            <Main_page_lekarz />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Wyszukiwarka"
        element={
          <ProtectedRoute>
            <Wyszukiwarka />
          </ProtectedRoute>
        }
      />
      <Route
        path="/zaplanowane"
        element={
          <ProtectedRoute>
            <Zaplanowane />
          </ProtectedRoute>
        }
      />
      <Route
        path="/zaplanowane_s"
        element={
          <ProtectedRoute>
            <Zaplanowane_S />
          </ProtectedRoute>
        }
      />
      <Route
        path="/historia"
        element={
          <ProtectedRoute>
            <Historia />
          </ProtectedRoute>
        }
      />
      <Route
        path="/historia_s"
        element={
          <ProtectedRoute>
            <Historia_S />
          </ProtectedRoute>
        }
      />
      <Route
        path="/konto"
        element={
          <ProtectedRoute>
            <Konto />
          </ProtectedRoute>
        }
      />
      <Route
        path="/konto_s"
        element={
          <ProtectedRoute>
            <Konto_S />
          </ProtectedRoute>
        }
      />
      <Route
        path="/terminy"
        element={
          <ProtectedRoute>
            <Terminy />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dodaj"
        element={
          <ProtectedRoute>
            <Dodaj_termin />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Wybor />} />
      <Route path="/login_pacjent" element={<Logowanie_pacjent />} />
      <Route path="/login_lekarz" element={<Logowanie_lekarz />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<RegisterAndLogout />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
  


    </div>
    
  );
}

export default App;



