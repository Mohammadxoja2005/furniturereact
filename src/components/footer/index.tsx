import { FC } from 'react'
import styles from "./index.module.scss";
import FACEBOOK from "../../assets/icons/facebook.png"; 
import TWITTER from "../../assets/icons/twitter.png"; 
import INSTAGRAM from "../../assets/icons/instagram.png"; 

const Footer: FC = () => {
    return (
        <div className={styles.footer} >
            <div className={styles.container} >
                <div className={styles.footer_element} >
                    <h2 className={styles.footer_element_title} >ABOUT US</h2>
                    <ul className={styles.footer_links} >
                        <li className={styles.footer_links_element} >About Us</li>
                        <li className={styles.footer_links_element} >Contact Us</li>
                        <li className={styles.footer_links_element} >Privacy Policy</li>
                        <li className={styles.footer_links_element} >Terms of Service</li>
                    </ul>
                </div>
                <div className={styles.footer_element} >
                    <h2 className={styles.footer_element_title}>COMPANY</h2>
                    <ul className={styles.footer_links} >
                        <li className={styles.footer_links_element} >Explore World</li>
                        <li className={styles.footer_links_element} >Trending Video</li>
                        <li className={styles.footer_links_element} >Book a Trip</li>
                        <li className={styles.footer_links_element} >Visit Gallery</li>
                    </ul>
                </div>
                <div className={styles.footer_element} >
                    <h2 className={styles.footer_element_title}>USEFUL LINKS</h2> 
                    <ul className={styles.footer_links} > 
                        <li className={styles.footer_links_element} >Buy this theme</li>
                        <li className={styles.footer_links_element} >Drile Landing</li>
                        <li className={styles.footer_links_element} >Documentation</li>
                        <li className={styles.footer_links_element} >Video tutorial</li>
                    </ul>
                </div>
                <div className={styles.footer_element} >
                    <h2 className={styles.footer_element_title}>FOLLOW US</h2>
                    <ul className={styles.footer_links} > 
                        <li className={styles.footer_links_element}><img src={FACEBOOK} className={styles.footer_img} /> Facebook</li>
                        <li className={styles.footer_links_element}><img src={TWITTER} className={styles.footer_img} /> Twitter</li>
                        <li className={styles.footer_links_element}><img src={INSTAGRAM} className={styles.footer_img} /> Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer; 