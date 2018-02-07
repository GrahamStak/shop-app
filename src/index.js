import React, {Component} from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Container from './components/app/App'
import Home from './components/home/Home'
import About from './components/about/About'
import './index.css'
import store from './store'
import axios from 'axios'
import {API_URL} from './env'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cart:{},
      items:[],
      cartOpen:false,
    }
  }

  componentDidMount(){
    axios.get(`${API_URL}/api/items`).then((result) => {
      this.setState({items:result.data})
    })
  }

  toggleCart = () => {
    this.setState({cartOpen:!this.state.cartOpen})
  }

  addToCart = (item) => {
    const {cart} = this.state;
    let found = false
    Object.keys(cart).forEach((k) => {
      if(cart[k].id === item.id){
        cart[k].count += 1
        cart[k].total = item.price * cart[k].count
        found = true
      }
    })
    if(found === false){
      cart[item.id] = item
      cart[item.id].count = 1
      cart[item.id].total = item.price
    }
    this.setState({cart})
  }

  checkout(){
    //do api call to finalize order
    // axios.post()
  }

  render(){
    const {items} = this.state
    return(
        <Router>
          <Container toggleCart={this.toggleCart}>
            <Switch>
              <Route exact path='/' component={({match, history, location}) => {
                      return (
                        <Home 
                          items={items}
                          addToCart={this.addToCart}
                          cartOpen={this.state.cartOpen}
                          toggleCart={this.toggleCart}
                          cart={this.state.cart}/>
                      )}} />
            </Switch>
          </Container>
        </Router>
    )
  }
}

export default App

render(<App />, document.getElementById('root'))
