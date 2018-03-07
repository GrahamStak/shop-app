import React, {Component} from 'react'
import './Home.css'
import Header from '../header/Header'
import Menu from '../shop/Menu'
import Services from '../services/Services'

class Home extends Component {
  render(){
    return(
      <div className='Home'>
        <Header/>
        <Menu/>
        <Services/>
      </div>
    )
  }
}

export default Home
