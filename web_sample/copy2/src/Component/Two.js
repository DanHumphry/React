import React, { Component } from 'react';

class Two extends Component{
    render(){
        return(
			<section id="two" className="wrapper special">
				<div className="inner">
					<header className="major narrow">
						<h2>Aliquam Blandit Mauris</h2>
						<p>Ipsum dolor tempus commodo turpis adipiscing Tempor placerat sed amet accumsan</p>
					</header>
					<div className="image-grid">
						<a href="/" className="image"><img src={require('../images/pic03.jpg')} alt="" /></a>
						<a href="/" className="image"><img src={require('../images/pic04.jpg')} alt="" /></a>
						<a href="/" className="image"><img src={require('../images/pic05.jpg')} alt="" /></a>
						<a href="/" className="image"><img src={require('../images/pic06.jpg')} alt="" /></a>
						<a href="/" className="image"><img src={require('../images/pic07.jpg')} alt="" /></a>
						<a href="/" className="image"><img src={require('../images/pic08.jpg')} alt="" /></a>
						<a href="/" className="image"><img src={require('../images/pic09.jpg')} alt="" /></a>
						<a href="/" className="image"><img src={require('../images/pic10.jpg')} alt="" /></a>
					</div>
					<ul className="actions">
						<li><a href="/" className="button big alt">Tempus Aliquam</a></li>
					</ul>
				</div>
			</section>
        );
    }
}
export default Two;