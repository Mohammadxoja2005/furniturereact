import { FC } from 'react'
import styles from "./index.module.scss"; 
import SOFA from "../../assets/images/sofa.png";
import CLOCK from "../../assets/images/clock.png";

const Trend: FC = () => {
    return (
        <div className={styles.trend} >
            <div className={styles.trend_back} >
                <div className={styles.container}>
                    <img src={SOFA} className={styles.trend_img} />

                    <div className={styles.trend_info} >
                        <div className={styles.trend_btn}>DEAL OF THE WEEK</div>
                        <p className={styles.price}> from <span className={styles.span} >$99.99</span></p>
                        <p className={styles.des} >
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Mauris eget hendrerit odio,
                            non ultrices lorem. Donec vel vestibulum ero
                            s. Curabitur fringilla arcu varius.
                        </p>
                        <div className={styles.trend_shop_btn}>SHOP NOW</div>

                        <div className={styles.trend_category}>
                            {
                                [1, 2, 3, 4].map(() => {
                                    return (
                                        <div className={styles.trend_category_element}>
                                            <img src={CLOCK} className={styles.trend_cateogry_img} />
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div> 

                </div>
            </div>
        </div>
    )
}

export default Trend