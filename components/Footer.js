import styles from './components.module.css'
import Styles from '../styles/components.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter ,faFacebookF,faGithub ,faWhatsapp}  from "@fortawesome/free-brands-svg-icons"
import {faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {faMapMarker} from "@fortawesome/free-solid-svg-icons"
import {faPhone , faCopyright}  from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link'


const Footer = () => {
    return (
         <footer className={styles.footer}>

     <div className={styles.icons}>
         <FontAwesomeIcon className={styles.fb} icon={faFacebookF}></FontAwesomeIcon>
          <FontAwesomeIcon className={styles.tw} icon={faTwitter}></FontAwesomeIcon>
           <FontAwesomeIcon className={styles.gt} icon={faGithub}></FontAwesomeIcon>
           <FontAwesomeIcon className={styles.ph} icon={faPhone}></FontAwesomeIcon>
          <FontAwesomeIcon className={styles.gm} icon={faEnvelope}></FontAwesomeIcon>
          <FontAwesomeIcon className={styles.mp} icon={faMapMarker}><h1>the</h1></FontAwesomeIcon>

          <Link href='https://wa.me/254757929917'>
          <FontAwesomeIcon className={styles.wp} icon={faWhatsapp}></FontAwesomeIcon>
          </Link>
          <h3 className={styles.footer__h3}>Nairobi ,Kenya</h3>
          <FontAwesomeIcon className={styles.cp} icon={faCopyright}></FontAwesomeIcon>
          <h4 className={styles.ma}>2021 Macc Africa</h4>
          
        
     </div>
     
       
         

         </footer>
            
        
    )
}

export default Footer

