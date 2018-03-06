import React, {Component} from 'react'
import './Home.css'
import Header from '../header/Header'
import Menu from '../shop/Menu'
import Checkout from '../checkout/Checkout'
import Services from '../services/Services'
import Stats from '../funstats/Funstats'

class Home extends Component {
  render(){
    return(
      <div className='Home'>
        <Header/>
        <Menu/>
        <Services/>
        <Stats/>
        <Checkout/>
      </div>
    )
  }
}

export default Home
