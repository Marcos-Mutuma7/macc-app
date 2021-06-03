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
       <h3> Are you a long time company </h3>
        <h3>or a startup franchise looking</h3>
       <h3> to improve your enterprise? At</h3>
       <h3> Macc Africa we develop modern </h3>
        <h3>digital products from websites </h3>
       <h3> to mobile applications that will </h3>
        <h3>that will take your business to </h3>
       <h3> an elite level. Hire us and get</h3>
       <h3> started with our affordable services.</h3>
         </small>
          </div>
          <Link href="/services">
            <button className={styles.button}>Read More</button>
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
