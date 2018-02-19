import React from 'react'
import './Footer.css'

const Footer = props => (
    <div>
        <footer id="gtco-footer" role="contentinfo" style={{ backgroundImage: "url(images/img_bg_1.jpg)" }} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="gtco-container">
                <div className="row row-pb-md">




                    <div className="col-md-12 text-center">
                        <div className="gtco-widget">
                            <h3>Get In Touch</h3>
                            <ul className="gtco-quick-contact">
                                <li><a href="#"><i className="icon-phone"></i> +1 234 567 890</a></li>
                                <li><a href="#"><i className="icon-mail2"></i> info@GetTemplates.co</a></li>
                                <li><a href="#"><i className="icon-chat"></i> Live Chat</a></li>
                            </ul>
                        </div>
                        <div className="gtco-widget">
                            <h3>Get Social</h3>
                            <ul className="gtco-social-icons">
                                <li><a href="#"><i className="icon-twitter"></i></a></li>
                                <li><a href="#"><i className="icon-facebook"></i></a></li>
                                <li><a href="#"><i className="icon-linkedin"></i></a></li>
                                <li><a href="#"><i className="icon-dribbble"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-12 text-center copyright">
                        <p><small className="block">&copy; 2016 Free HTML5. All Rights Reserved.</small>
                            <small className="block">Designed by <a href="http://gettemplates.co/" target="_blank">GetTemplates.co</a> Demo Images: <a href="http://unsplash.com/" target="_blank">Unsplash</a></small></p>
                    </div>

                </div>



            </div>
        </footer>
    </div>
)

export default Footer;