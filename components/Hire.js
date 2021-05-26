import React from 'react'
import Link from 'next/link'
import styles from './components.module.css'
import {GoogleFonts} from 'next-google-fonts'


const Hire = () => {
    return (
        <div>
        
         <Link href='/hire'>
           <button className={styles.hire}>
            <h2>Hire</h2>
           </button>
           </Link>
        
        </div>
    )
}

export default Hire
