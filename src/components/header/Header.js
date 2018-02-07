import React from 'react'
import './Header.css'
import Background from '../../images/img_bg_1.jpg'

const styles = {
  backgroundImage: `url(${Background})`
}

const Header = props => (
  <div>
  <header id="gtco-header" className="gtco-cover gtco-cover-md" role="banner" style={styles} data-stellar-background-ratio="0.5">
  <div className="overlay"></div>
  <div className="gtco-container">
    <div className="row">
      <div className="col-md-12 col-md-offset-0 text-left">
        

        <div className="row row-mt-15em">
          <div className="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">
            <span className="intro-text-small">Feed your <a href="">Frenzy!</a></span>
            <h1 className="cursive-font">All in good taste!</h1>	
          </div>

        </div>
            
        
      </div>
    </div>
  </div>
</header>
</div>
)

export default Header


