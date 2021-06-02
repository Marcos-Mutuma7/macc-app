import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import styles from './components.module.css'



export default function Layout() {
  return (
    
    <div className={styles.body}>
         <Navbar/>
         
          <Hero/>
          <Footer/>
      
       
 
   </div>
  
  )
}