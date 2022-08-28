import {FC, Fragment} from 'react'
import Navbar from '../../components/navbar'
import Hero from "../../components/hero"; 
import Items from '../../components/items';
import Trend from '../../components/trends';
import Categories from '../../components/categories';

const Main: FC = () => {
  return ( 
    <Fragment>
       <Navbar/>
       <Hero/>
       <Items />
       <Trend/> 
       <Categories/>
    </Fragment>
  )
}

export default Main