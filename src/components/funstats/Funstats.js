import React from 'react'
import './Funstats.css'

const Facts = props => (
    <div id="gtco-counter" className="gtco-section">
    <div className="gtco-container">

        <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                <h2 className="cursive-font primary-color">Fun Facts</h2>
                <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
            </div>
        </div>

        <div className="row">
            
            <div className="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
                <div className="feature-center">
                    <span className="counter js-counter" data-from="0" data-to="5" data-speed="5000" data-refresh-interval="50">1</span>
                    <span className="counter-label">Avg. Rating</span>

                </div>
            </div>
            <div className="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
                <div className="feature-center">
                    <span className="counter js-counter" data-from="0" data-to="43" data-speed="5000" data-refresh-interval="50">1</span>
                    <span className="counter-label">Food Types</span>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
                <div className="feature-center">
                    <span className="counter js-counter" data-from="0" data-to="32" data-speed="5000" data-refresh-interval="50">1</span>
                    <span className="counter-label">Chef Cook</span>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
                <div className="feature-center">
                    <span className="counter js-counter" data-from="0" data-to="1985" data-speed="5000" data-refresh-interval="50">1</span>
                    <span className="counter-label">Year Started</span>

                </div>
            </div>
                
        </div>
    </div>
</div>
)

export default Facts;