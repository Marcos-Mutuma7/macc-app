import styles from "./components.module.css";
import Styles from "../styles/components.module.scss";
import { GoogleFonts } from "next-google-fonts";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className={styles.banner}>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet"/>

      <GoogleFonts
        href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500&display=swap"
        rel="stylesheet"
      />
    

      <div className={styles.hero}>
        <div className={styles.hero__text}>
          <div className={styles.hero__title}>
            <h1>Expanding Businesses</h1>
            <h1 className={styles.hero__title__h1}>Across The Globe</h1>
          </div>

          <div className={styles.description}>
            <small>
       <h3> Are you a long time company or a</h3>
        <h3> startup franchise looking to improve</h3>
       <h3>your enterprise? At Macc Africa we</h3>
       <h3> develop modern digital products from</h3>
        <h3>websites to mobile applications that</h3>
       <h3>will take your business to an elite level,</h3>
        <h3>Hire us and get started today.</h3>
         </small>
          </div>
          <Link href="/services">
            <button className={`${styles["button"]} ${styles["button__animated"]}`}>Read More</button>
          </Link>
        </div>
      </div>
      
      <div className={styles.hero__image}>
        <div className={styles.image}>
          <Image src="/images/hero.png" width={600} height={500} />

          <div className={styles.btn__box}>

            <Link href='/services'>
            <button className={styles.btn__1}>
              <span>Services</span>
            </button>
           </Link>
            
            <Link href='/blog'>
            <button className={styles.btn__2}>
              <span>Blog</span>
            </button>
            </Link>

            <Link href='/about'>
            <button className={styles.btn__3}>
              <span>About</span>
            </button>
            </Link>

            <Link href='/contacts'>
            <button className={styles.btn__4}>
              <span>Contacts</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
