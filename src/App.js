import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, 
  Route } from "react-router-dom"
import Acceuil from './Components/Acceuil'
import { Provider } from 'react-redux'
import store from './redux/store'
import Login from './Components/Login'
import Formationgratuite from './Components/Formationsgratuite'
import Appercu from './Components/Appercu';
import FormCerti from './Components/Nosformations'
import WatchVideo from './Components/WatchVideo';
import Acceuilprofesseur from './Components/Acceuilprofesseur'
import Quizz from './Components/Quizz'
import Certifications from './Components/Cerfifications'
import Admin from './Components/Admin'
import Inscription from './Components/Inscription'
import ConfirmerArtiste from './Components/Confirmerprof';
import GetUsers from './Components/GetUsers'


function App() {
  return (
    <div className="App">
       <Provider store={store}>
       <Router>
          <Routes>
          <Route path="/confirmerprof" element={<ConfirmerArtiste />} />
            <Route path="/acceuilapprenant" element={<Acceuil />} />
             <Route path="/getusers" element={<GetUsers />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/acceuilprof" element={<Acceuilprofesseur />} />
            <Route path="/tutorial" element={< WatchVideo />} />
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/appercu" element={<Appercu />} />
            <Route path="/formationgratuite" element={< Formationgratuite />} />
            <Route path="/certification" element={< FormCerti />} />
            <Route path="/watchtutorial" element={< WatchVideo />} />
            <Route path="/quizz" element={< Quizz />} />
          </Routes>
        </Router>
       </Provider>
       
    </div>
  );
}

export default App;
