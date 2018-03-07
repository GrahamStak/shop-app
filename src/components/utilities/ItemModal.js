import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'


class ItemModal extends Component {
    

    createLineItems = (cart) => {
        const lineItems = []
        Object.keys(cart).forEach((k) => {
            lineItems.push(<li>{cart[k].name} X {cart[k].count} = {cart[k].total}</li>)
        })
        return lineItems
    }
    
    render(){
        const lineItems = this.createLineItems(this.props.cart)
        return(
            <Modal show={this.props.show} onHide={this.props.toggleCart}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {lineItems}
                    </ul>
                </ Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.checkout}>Checkout</Button>
                    <Button onClick={this.props.toggleCart}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
  }
}

export default ItemModal
