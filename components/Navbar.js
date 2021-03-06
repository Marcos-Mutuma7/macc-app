import React,{useEffect ,useState} from 'react'
import { StickyContainer, Sticky } from 'react-sticky'
import styles from './components.module.css'
import {faMarker, faGlobeAfrica} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {GoogleFonts} from 'next-google-fonts'
import Link from 'next/link'
import Hire from './Hire'


const navbar =() => {




    return (
    <div>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap" rel="stylesheet"/>
    
  
    <nav className={styles. navbar}>
    
        <div className={styles.logo}>
        <h1 className={styles.logo__title}>macc</h1>
        <FontAwesomeIcon  className ={styles.africa}icon={faGlobeAfrica}/>
        </div>
        
                
         <Hire/>
       </nav>
       </div>
       
    )
}

export default navbar
