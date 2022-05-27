import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Judiciary from './components/Judiciary';
import Institution from './components/Institution';
import ProposedList from './components/ProposedList';
import {useLocation} from 'react-router-dom'
import Profile from './components/Profile/Profile';
import { useState } from 'react';
import Modal from './components/addCaseModal/Modal';
import Dashboard from './components/Dashboard/Dashboard';
import Hearings from './components/Hearings/Hearings';
import Registrar from './components/Registrar/Registrar';

function App() {

  const[userModal, setUserModal] = useState(false)
  const[caseModal,setCaseModal] = useState(false)
  return (
    <BrowserRouter>
    <div className="nav-side-container">
      <Header setUserModal={setUserModal} userModal={userModal}/>
      
      
      <div className="left-right-container">
      <SideBar/>
      <div className="graph-bar">
        <Routes>
        <Route path='/judiciary' element={<Judiciary caseModal={caseModal} setCaseModal={setCaseModal}/>}/>
          <Route path='/institution' element={<Institution/>}/>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/proposedlist' element={<ProposedList/>}/>
          <Route path='/hearings' element={<Hearings/>}/>
          <Route path='/registrar' element={<Registrar/>}/>
          <Route path='/sidebar' element={<SideBar/>}/>
        </Routes>  
        {
          userModal && <Profile onBlur={()=> setUserModal(!userModal)}/>            
        }

      
      </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
