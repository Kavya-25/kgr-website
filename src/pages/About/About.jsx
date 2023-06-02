import React from 'react'
import './About.scss'
import { Welcome } from '../../components/Welcome/Welcome'
import { Clients } from '../../components/Clients/Clients'

export const About = () => {
  return (
    <div className='about' id='about'>
        <Welcome/>
        <Clients/>
    </div>
  )
}
