import {FC, Fragment} from 'react'
import Navbar from '../../components/navbar'
import Hero from "../../components/hero"; 
import Items from '../../components/items';


const Main: FC = () => {
  return ( 
    <Fragment>
       <Navbar />
       <Hero/>
       <Items />
    </Fragment>
  )
}

export default Main