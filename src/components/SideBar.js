import React from 'react'
import {GiInjustice} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {FaUniversity} from 'react-icons/fa'
import {GiPapers} from 'react-icons/gi'

const SideBar = () => {

  return (
    <div>
        <div className="side-bar">
            <Link to='/institution'>
                <div className="list-item">
                    <div className="icon">
                        {/* <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                </svg> */}
                                <FaUniversity/>
                    </div>
                    <div className="text">
                        <p>Institution Branch</p>
                    </div>
                </div>
            </Link>
                
                <Link to='/judiciary'>

                <div className="list-item">
                    <div className="icon">
                        <GiInjustice/>
                    </div>
                    <div className="text">
                        <p>Judiciary Branch</p>
                    </div>
                </div>
                </Link>
                
                <Link to='proposedlist'>

                <div className="list-item">
                    <div className="icon">
                        {/* <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                                    <path fill-rule="evenodd"
                                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                        clip-rule="evenodd"></path>
                                </svg> */}
                        <GiPapers/>
                    </div>
                    <div className="text">
                        <p>Proposed List</p>
                    </div>
                </div>
                </Link>
                <div className="list-item">
                    <div className="icon">
                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"></path>
                    </svg>
                    </div>
                    <div className="text">
                        <p>Option 4</p>
                    </div>
                </div>
              
               
                <div className="list-item page">
                    <div className="icon">
                        <svg
                            className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                                clip-rule="evenodd"></path>
                            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                        </svg> 
                    </div>
                    <div className="text">
                        <p>Option 5</p>
                    </div>
                    <div className="chevron">
                        <i className="fas fa-chevron-right page-chevron"></i>
                    </div>
                   
                </div>
    
                <div className="page-drop">
                    
                    <div className="text">
                        <p>Drop option 1</p>
                    </div>
                    <div className="text">
                        <p>Drop option 2</p>
                    </div>
                    <div className="text">
                        <p>Drop option 3</p>
                    </div>
                    
                </div>
    
                </div>
    </div>
  )
}

export default SideBar