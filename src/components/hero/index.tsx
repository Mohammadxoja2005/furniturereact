import {FC} from 'react' 
import styles from "./index.module.scss";  
import Carousel from "nuka-carousel"; 
import BACKGROUND from "../../assets/images/bacKground.png"; 
import NEXT from "../../assets/icons/next.png"; 
import PREV from "../../assets/icons/prev.png"; 

interface settingsTypes {
    slidesToShow: number, 
    slidesToScroll: number, 
    wrapAround: boolean,  
    defaultControlsConfig: any, 
    speed: number, 
    fade: boolean, 
    rows: number
}

const Hero: FC = () =>  { 

    const settings:settingsTypes = { 
        slidesToShow: 1,
        slidesToScroll: 1,  
        wrapAround: false, 
        defaultControlsConfig: {
          pagingDotsClassName: styles.hero_dots,  
          nextButtonText: <img src={NEXT} />, 
          prevButtonText: <img src={PREV} />,  
          nextButtonClassName:  styles.next_btn, 
          prevButtonClassName:  styles.prev_btn, 
        }, 
        speed: 500,
        fade: true, 
        rows: 1,  
      } 

  return (
    <div className={styles.hero} >
    <Carousel {...settings}>
      {
        [1,2,3].map(() => {
          return(
            <div className={styles.container} >
            <img src={BACKGROUND} className={styles.hero_back}/>
            <div className={styles.hero_info}>
                <h2 className={styles.hero_title} >Get ready for Our stylist chair</h2>
                <div className={styles.hero_btn}>SHOP NOW</div>
             </div>
        </div> 
          )
        })
      }
    </Carousel>

    </div>
  )
}

export default Hero