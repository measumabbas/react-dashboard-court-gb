import React from 'react';
import logo from '../images/download.png'

const Header = ({setUserModal,userModal}) => {
  return (
    <div>
         <div className="header">
            <div className="left">
                <img src={logo} alt=""/>
                <p>Tourism Department Gilgit Baltistan</p>
            </div>
            <div className="right">
                <div className="notify">
                    <i className="fas fa-bell"></i>
                </div>
                <div className="profile" onClick={()=> setUserModal(!userModal)}>
                    <i className="fas fa-user"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header