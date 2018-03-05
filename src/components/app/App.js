import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './App.css'
import pkg from '../../../package.json'
import Footer from '../footer/Footer'
/*
  The .active className is being applied to '/' even when it isn't the current
  location.pathname because all other paths are its children. This method
  corrects for that.
*/
const onlyOneActiveMatch = (match, location) => {
  if (match) return location.pathname === match.path
}

const App = props => (
  <div>
    <nav className="gtco-nav" role="navigation">
      <div className="gtco-container">

        <div className="row">
          <div className="col-sm-4 col-xs-12">
          <Link to='/'>
            <div id="gtco-logo">{pkg.name} <em>.</em></div>
          </Link>
          </div>
          <div className="col-xs-8 text-right menu-1">
            <ul>
              <li className="btn-cta"><NavLink to='/about' isActive={onlyOneActiveMatch}>About</NavLink></li>
              <li className="btn-cta"><a href=""><span>Contact</span></a></li>
              <li className="btn-cta"><a href=""><span>Reservation</span></a></li>
              <li className="btn-cta">
              <button to='/' onClick={props.toggleCart}>Cart</button>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
    { props.children && React.cloneElement(props.children, props) }
    <Footer/>
  </div>
)

export default App
