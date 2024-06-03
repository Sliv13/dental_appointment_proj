
import './App.css';
import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import Wyszukiwarka from './pages/Wyszukiwarka';
//import Terminy from './Terminy';
import Konto_S from './Konto_S';
//import Dodaj_termin from './Dodaj_termin';
import Menu_glowne from './components/Menu';
import Logowanie from './pages/Logowanie';
import Rejestracja from './pages/Rejestracja'
import NotFound from './pages/NotFound';
import Zaplanowane from './pages/Zaplanowane';
import Terminy from './pages/Terminy';
import Historia from './pages/Historia';
import Konto from './pages/Konto'
function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
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
        path="/"
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
        path="/historia"
        element={
          <ProtectedRoute>
            <Historia />
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
        path="/terminy"
        element={
          <ProtectedRoute>
            <Terminy />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Logowanie />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<RegisterAndLogout />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
  


    </div>
    
  );
}

export default App;



