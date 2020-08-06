import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
			<footer id="footer">
				<div className="inner">
					<ul className="icons">
						<li><a href="/" className="icon fa-facebook">
							<span className="label">Facebook</span>
						</a></li>
						<li><a href="/" className="icon fa-twitter">
							<span className="label">Twitter</span>
						</a></li>
						<li><a href="/" className="icon fa-instagram">
							<span className="label">Instagram</span>
						</a></li>
						<li><a href="/" className="icon fa-linkedin">
							<span className="label">LinkedIn</span>
						</a></li>
					</ul>
					<ul className="copyright">
						<li>&copy; Untitled.</li>
						<li>Images: <a href="http://unsplash.com">Unsplash</a>.</li>
						<li>Design: <a href="http://templated.co">TEMPLATED</a>.</li>
					</ul>
				</div>
			</footer>
        );
    }
}
export default Footer;