import React, { useState } from 'react'
import {VscLaw} from 'react-icons/vsc'
import {FaUniversalAccess} from 'react-icons/fa'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FaUniversity} from 'react-icons/fa'
import {TiTickOutline} from 'react-icons/ti'
import {RiLogoutBoxLine} from 'react-icons/ri'
import {AiOutlinePlus} from 'react-icons/ai'
import Profile from './Profile/Profile'
import Modal from './addCaseModal/Modal'
import { Link } from 'react-router-dom'
const Judiciary = () => {

  return (
    <div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="icon">
              <VscLaw style={{width:'90px',height:'90px'}}/>
            </div>
            <div className="text">
              <p>Total cases</p>
            </div>
          </div>
          <div className="testimonial" style={{backgroundColor:'#FCA508'}}>
            <div className="icon">
              <BsFillBriefcaseFill style={{width:'90px',height:'90px'}}/>
            </div>
            <div className="text">
              <p>Total Lawyers</p>
            </div>
          </div>
          <div className="testimonial" style={{backgroundColor:'#34A853'}}>
            <div className="icon">
              <FaUniversity style={{width:'90px',height:'90px'}}/>
            </div>
            <div className="text">
              <p>Previous Cases</p>
            </div>
          </div>
          <div className="testimonial" style={{backgroundColor:'#87C344'}}>
            <div className="icon">
              <TiTickOutline style={{width:'90px',height:'90px'}}/>
            </div>
            <div className="text">
              <p>Closed Cases</p>
            </div>
          </div>
          <Link to='/dashboard/modal'>
          <div className="testimonial" style={{backgroundColor:'#01A16C'}}>
            <div className="icon">
              <AiOutlinePlus style={{width:'90px',height:'90px'}}/>
            </div>
            <div className="text">
              <p>Add Case</p>
            </div>
          </div>
          </Link>
          <Link to='/'>
            <div className="testimonial" style={{backgroundColor:'#009901'}}>
              <div className="icon">
                <RiLogoutBoxLine style={{width:'90px',height:'90px'}}/>
              </div>
              <div className="text">
                <p>Logout</p>
              </div>
            </div>
          </Link>


        </div>
    </div>
  )
}

export default Judiciary