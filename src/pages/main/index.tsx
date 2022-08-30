import {FC, Fragment} from 'react'
import Navbar from '../../components/navbar'
import Hero from "../../components/hero"; 
import Items from '../../components/items';
import Trend from '../../components/trends';
import Categories from '../../components/categories';
import Footer from '../../components/footer';

const Main: FC = () => {
  return ( 
    <Fragment>
       <Navbar/>
       <Hero/>
       <Items />
       <Trend/> 
       <Categories/>
       <Footer/>
    </Fragment>
  )
}

export default Main