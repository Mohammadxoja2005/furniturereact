import {FC} from 'react'
import styles from "./index.module.scss"; 
import Products from '../../commons/products';
import LAMP from "../../assets/images/lamp.png"; 
import ROTATE from "../../assets/icons/rotate.png"; 
import LIKE from "../../assets/icons/like.png"; 
import SHOPSHOP from "../../assets/icons/shop_shop.png"; 

const Items: FC = ()  => {
  return (
    <div className={styles.items} > 
     <h2 className={styles.items_title}>Best Seller Items</h2> 
        <div className={styles.container} >
            <Products/>
            {/* <div className={styles.first_items}> 
            {
                [1,2,3,4].map(() => {
                    return (
                     <div className={styles.items_element}>
                    
                        <div className={styles.items_to_choose} >
                            <div className={styles.items_to_choose_icon}><img src={ROTATE}/></div>
                            <div className={styles.items_to_choose_icon}><img src={LIKE}/></div>
                            <div className={styles.items_to_choose_icon}><img src={SHOPSHOP}/></div>
                        </div> 
    
                        <div className={styles.items_element_des}>
                          <img src={LAMP} className={styles.items_img} />
                          <p className={styles.des}>Klosh Table Clock</p>
                          <p className={styles.price}>$99.00</p>
                        </div>
                    </div>
                    )
                })
            }
               
            </div>  */}

            <div className={styles.second_items}>
            {
                [1,2,3].map(() => {
                    return (
                     <div className={styles.items_element}>
                    
                        <div className={styles.items_to_choose} >
                            <div className={styles.items_to_choose_icon}><img src={ROTATE}/></div>
                            <div className={styles.items_to_choose_icon}><img src={LIKE}/></div>
                            <div className={styles.items_to_choose_icon}><img src={SHOPSHOP}/></div>
                        </div> 
    
                        <div className={styles.items_element_des}>
                          <img src={LAMP} className={styles.items_img} />
                          <p className={styles.des}>Klosh Table Clock</p>
                          <p className={styles.price}>$99.00</p>
                        </div>
                    </div>
                    )
                })
            }
            </div>

        </div>
    </div>
  )
}

export default Items 