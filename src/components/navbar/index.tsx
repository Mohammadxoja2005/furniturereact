import {FC} from 'react'
import styles from "./index.module.scss"; 
import LOGO from "../../assets/icons/main_icon.png"; 
import SEARCH from "../../assets/icons/search.png"; 
import SHOP from "../../assets/icons/shop.png"; 
import HUMAN from "../../assets/icons/human.png"; 

const Navbar: FC = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.container}>
            <img src={LOGO} /> 
            <ul className={styles.navbar_links}>
               <li className={styles.navbar_links_element}>Home</li>                       
               <li className={styles.navbar_links_element}>Shop</li>
               <li className={styles.navbar_links_element}>Product</li>
               <li className={styles.navbar_links_element}>Blog</li>
               <li className={styles.navbar_links_element}>Page</li>
               <li className={styles.navbar_links_element}>Contact</li>     
            </ul> 
            <div className={styles.navbar_main_icons}>
              <img src={SEARCH}  className={styles.main_icon}/>
              <img src={SHOP}  className={styles.main_icon}/>
              <img src={HUMAN}  className={styles.main_icon}/>
            </div>
        </div>
    </div>  
  )
}

export default Navbar