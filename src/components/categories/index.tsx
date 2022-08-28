import { FC } from 'react'
import styles from "./index.module.scss";
import Carousel from "nuka-carousel";
import CABINET from "../../assets/icons/cabinet.png";

interface settingsTypes {
    slidesToShow: number, 
    slidesToScroll: number, 
    wrapAround: boolean,  
    defaultControlsConfig: any, 
    speed: number, 
    fade: boolean, 
    rows: number
}

const Categories: FC = () => { 

    const settings:settingsTypes = { 
        slidesToShow: 6,
        slidesToScroll: 1,  
        wrapAround: false, 
        defaultControlsConfig: {
          pagingDotsClassName: styles.dots,  
        //   nextButtonText: <img src={NEXT} />, 
        //   prevButtonText: <img src={PREV} />,  
          nextButtonClassName:  styles.next_btn, 
          prevButtonClassName:  styles.prev_btn, 
        }, 
        speed: 500,
        fade: true, 
        rows: 1,  
      } 

    return (
        <div className={styles.categories}>
            <h2 className={styles.categories_title}>TRENDING CATEGORIES</h2>

            <div className={styles.container}>

                <div className={styles.categories_setup}> 
                <Carousel {...settings} className={styles.categories_carousel}> 
                {
                        [1, 2, 3, 4, 5, 6].map(() => {
                            return (
                                <div className={styles.carousel_info}>
                                    <img src={CABINET} />
                                    <p className={styles.carousel_info_title} >CABINET</p>
                                </div>
                            )
                        })
                    }
                </Carousel>
                </div>

                <div className={styles.categories_to_show}>

                </div>

            </div>

        </div>
    )
}

export default Categories