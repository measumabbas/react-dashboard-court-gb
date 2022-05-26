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
          <Route path='/proposedlist' element={<ProposedList/>}/>
        </Routes>  
        {
          userModal && <Profile/>            
        }

        {
          caseModal && <Modal caseModal={caseModal} setCaseModal={setCaseModal}/>
        }
      </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
