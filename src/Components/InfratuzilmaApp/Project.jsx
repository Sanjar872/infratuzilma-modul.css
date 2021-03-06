import React from 'react'
import style from './appstyle.module.css'
import Foter from './Footer/Foter'
import Infratuzilma from './infratuzilma/infratuzilma'
import ItiMarkaz from './ItiMarkaz/ItiMarkaz'
import Navbar from './Navbar/Navbar'
import NewAndijon from './NewAndijon/Andijon'
import Rejalar from './Rejalar/Rejalar'
const Project = () => {
  return (
    <div className={style.Container}>
        <Navbar/>
        <Infratuzilma/>
        <ItiMarkaz/>
        <NewAndijon/>
        <Rejalar/>
        <Foter/>
    </div>
  )
}

export default Project