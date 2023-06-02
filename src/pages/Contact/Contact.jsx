import React from 'react'
import './Contact.scss'
import {BsTelephoneOutbound} from 'react-icons/bs'
import {IoMailOutline} from 'react-icons/io5'
import {CiLocationOn} from 'react-icons/ci'
import { Footer } from '../../components/Footer/Footer'

export const Contact = () => {
  return (
    <div className='contact' id='contact'>
    <div className="heading">
        <p>Contact Us</p>
    </div>
    <div className="contact-container">
        <div className="left">
        <div className="box">
        <BsTelephoneOutbound className='icon'/>
        <p>+91 8091107313</p>
        </div>
        <div className="box">
        <IoMailOutline className='icon'/>
        <p>kgrgroup22@gmail.com</p>
        </div>
        <div className="box">
        <CiLocationOn className='icon'/>
        <p>Himachal Pradesh</p>
        </div>
        </div>
        <div className="right">
        <img src="/images/map.png" alt="" />
           <p><span>Find Us on Google:</span>&nbsp;M.S. KGR Group, Manjholi, Near Him Overseas, Maganpura Nalagarh, Nalagarh Ropar Road, Solan, Himachal Pradesh, India</p>
           <p><span>Pincode:&nbsp;</span>174101</p>
      
        </div>
        </div>
        <Footer/>
    </div>
  )
}
