import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './Home.css'
import Header from '../header/Header'
import Menu from '../menu/Menu'
import Services from '../services/Services'

class Home extends Component {
  render() {
    const { items, cart } = this.props
    const line_items = []
    let total = 0
    Object.keys(cart).forEach((k) => {
      total += cart[k].total
      line_items.push(<li key={cart[k].id}>{cart[k].name} x{cart[k].count}   ${cart[k].total}</li>)
    })
    return (
      <div className='Home'>
        <Header />
        <Menu />
        <Services />
      </div>
    )
  }
}

export default Home
