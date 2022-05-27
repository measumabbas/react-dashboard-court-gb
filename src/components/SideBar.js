import React from 'react'
import { GiInjustice } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FaUniversity } from 'react-icons/fa'
import { GiPapers } from 'react-icons/gi'
import { MdDashboardCustomize } from 'react-icons/md'
import { MdAppRegistration } from 'react-icons/md'
import { ImHammer2 } from 'react-icons/im'

const SideBar = () => {

    const location = useLocation();
    console.log(location.pathname)
    return (
        <div>
            <div className="side-bar">
                <Link to='/'>
                    <div className={`list-item ${location.pathname === '/' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <MdDashboardCustomize />
                        </div>
                        <div className="text">
                            <p>Dashboard</p>
                        </div>
                    </div>
                </Link>
                <Link to='/institution'>
                    <div className={`list-item ${location.pathname === '/institution' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <FaUniversity />
                        </div>
                        <div className="text">
                            <p>Institution Branch</p>
                        </div>
                    </div>
                </Link>

                <Link to='/judiciary'>

                    <div className={`list-item ${location.pathname === '/judiciary' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <GiInjustice />
                        </div>
                        <div className="text">
                            <p>Judiciary Branch</p>
                        </div>
                    </div>
                </Link>

                <Link to='/proposedlist'>

                    <div className={`list-item ${location.pathname === '/proposedlist' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <GiPapers />
                        </div>
                        <div className="text">
                            <p>Proposed List</p>
                        </div>
                    </div>
                </Link>

                <Link to='/registrar'>

                    <div className={`list-item ${location.pathname === '/registrar' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <MdAppRegistration />
                        </div>
                        <div className="text">
                            <p>Registrar</p>
                        </div>
                    </div>
                </Link>

                <Link to='/hearings'>

                    <div className={`list-item ${location.pathname === '/hearings' ? 'back' : 'back-normal'}`}>
                        <div className="icon">
                            <ImHammer2 />
                        </div>
                        <div className="text">
                            <p>Hearings</p>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default SideBar