import React from 'react'
import './Menu.css'

const Dishes = props => (
	<div className="gtco-section">
		<div className="gtco-container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center gtco-heading">
					<h2 className="cursive-font primary-color">Popular Dishes</h2>
					<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
				</div>
			</div>
			<div className="row">

				<div onClick={() => props.addToCart({id:1, name:"Shirt", price:9.99, description:"A short sleeve shirt"})} className="col-lg-4 col-md-4 col-sm-6">
					<div className="fh5co-card-item image-popup">
						<figure>
							<div className="overlay"><i className="ti-plus"></i></div>
							<img src="images/img_1.jpg" alt="placeholder" className="img-responsive"></img>
						</figure>
						<div className="fh5co-text">
							<h2>Fresh Mushrooms</h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
							<p><span className="price cursive-font">$19.15</span></p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-6">
					<div className="fh5co-card-item image-popup">
						<figure>
							<div className="overlay"><i className="ti-plus"></i></div>
							<img src="images/img_2.jpg" alt="placeholder" className="img-responsive"></img>
						</figure>
						<div className="fh5co-text">
							<h2>Cheese and Garlic Toast</h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
							<p><span className="price cursive-font">$20.99</span></p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-6">
					<a href="images/img_3.jpg" className="fh5co-card-item image-popup">
						<figure>
							<div className="overlay"><i className="ti-plus"></i></div>
							<img src="images/img_3.jpg" alt="placeholder" className="img-responsive"></img>
						</figure>
						<div className="fh5co-text">
							<h2>Grilled Chiken Salad</h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
							<p><span className="price cursive-font">$8.99</span></p>

						</div>
					</a>
				</div>


				<div className="col-lg-4 col-md-4 col-sm-6">
					<div className="fh5co-card-item image-popup">
						<figure>
							<div className="overlay"><i className="ti-plus"></i></div>
							<img src="images/img_4.jpg" alt="placeholder" className="img-responsive"></img>
						</figure>
						<div className="fh5co-text">
							<h2>Organic Egg</h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
							<p><span className="price cursive-font">$12.99</span></p>
						</div>
					</div>
				</div>

				<div className="col-lg-4 col-md-4 col-sm-6">
					<div className="fh5co-card-item image-popup">
						<figure>
							<div className="overlay"><i className="ti-plus"></i></div>
							<img src="images/img_5.jpg" alt="placeholder" className="img-responsive"></img>
						</figure>
						<div className="fh5co-text">
							<h2>Tomato Soup with Chicken</h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
							<p><span className="price cursive-font">$23.10</span></p>
						</div>
					</div>
				</div>

				<div className="col-lg-4 col-md-4 col-sm-6">
					<div className="fh5co-card-item image-popup">
						<figure>
							<div className="overlay"><i className="ti-plus"></i></div>
							<img src="images/img_6.jpg" alt="placeholder" className="img-responsive"></img>
						</figure>
						<div className="fh5co-text">
							<h2>Salad with Crispy Chicken</h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
							<p><span className="price cursive-font">$5.59</span></p>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
)

export default Dishes
