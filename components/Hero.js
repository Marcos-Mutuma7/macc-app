import styles from './components.module.css'
import Styles from '../styles/components.module.scss'
import { GoogleFonts } from "next-google-fonts";
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faLongArrowAltRight} from   "@fortawesome/free-solid-svg-icons"

const Hero = () => {
    return (
      <div className={styles.banner}>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500&display=swap" rel="stylesheet"/>

        
          <div className={styles.hero} >
              
             <div className={styles.hero__text}>
           <div className={styles.hero__title}>
             <h1>Expanding Businesses</h1> 
            <h1 className={styles.hero__title__h1}>Across The Globe</h1>
           </div>
          
           <div className={styles.description}>
          <h4>Are you a long time company or a start up  </h4>
           <h4> franchise looking to improve your enterprise? </h4>
          <h4> Well , here at Macc Africa we got you covered, </h4>
          <h4> we develop up to date digital products from </h4>
          <h4> websites to mobile applications that will take</h4>          
            <h4> your business to an elite level. Sign up a </h4>
           <h4> contract with us today and get started</h4>
           <h4> with our affordable services.</h4>
          </div>
           <Link href='/services'>
         <button className={styles.button}>
            Read More
          </button>
         </Link>

         </div>
         </div>

      <div className={styles.hero__image}>
         <div className={styles.image}>

          <Image
          src='/images/hero.png'
          width={600}
          height={500} />

          <div className={styles.btn__box}>

           <button className={styles.btn__1}>
          <span>Services</span>
            </button>

         <button className={styles.btn__2}>
         <span>Blog</span>
         </button>
        
         <button className={styles.btn__3}>
         <span>About</span>
         </button>
        
         <button className={styles.btn__4}>
         <span>Contact</span>
         </button>
        
       </div>
        </div>
    </div>

       
      
        </div>
    )
}

export default Hero
