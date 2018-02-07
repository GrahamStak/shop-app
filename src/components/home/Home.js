import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'
import './Home.css'

class Home extends Component {
  render(){
    const {items, cart} = this.props
    const line_items = []
    let total = 0
    Object.keys(cart).forEach((k) => {
      total += cart[k].total
      line_items.push(<li key={cart[k].id}>{cart[k].name} x{cart[k].count}   ${cart[k].total}</li>)
    })
    return(
      <div className='Home'>
        <header className='Home-header'>
          <h2>Check out our shop!</h2>
        </header>
        <ul>
          {items.map((item) => {
            return <li key={item.id}>{item.name} <button onClick={() => this.props.addToCart(item)}>BUY</button></li>
          })}
        </ul>
        <div className="static-modal">
        <Modal show={this.props.cartOpen}>
          <Modal.Header >
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {line_items}
            </ul>
            <p>Total: ${total}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.toggleCart}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
      </div>
    )
  }
}

export default Home
