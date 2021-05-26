import styles from './components.module.css'
import Styles from '../styles/components.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter ,faFacebookF,faGithub}  from "@fortawesome/free-brands-svg-icons"
import {faEnvelope , } from "@fortawesome/free-solid-svg-icons"
import {faMapMarker} from "@fortawesome/free-solid-svg-icons"
import {faPhone}  from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
         <footer className={styles.footer}>

            
         <FontAwesomeIcon className={styles.fb} icon={faFacebookF}></FontAwesomeIcon>
          <FontAwesomeIcon className={styles.tw} icon={faTwitter}></FontAwesomeIcon>
           <FontAwesomeIcon className={styles.gt} icon={faGithub}></FontAwesomeIcon>
           <FontAwesomeIcon className={styles.ph} icon={faPhone}></FontAwesomeIcon>
          <FontAwesomeIcon className={styles.gm} icon={faEnvelope}></FontAwesomeIcon>
          <FontAwesomeIcon className={styles.mp} icon={faMapMarker}><h1>the</h1></FontAwesomeIcon>
          <h3 className={styles.footer__h3}>Nairobi ,Kenya</h3>


         </footer>
            
        
    )
}

export default Footer

