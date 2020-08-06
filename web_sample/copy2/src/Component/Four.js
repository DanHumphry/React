import React, { Component } from 'react';

class Four extends Component{
    render(){
        return(
			<section id="four" className="wrapper style2 special">
				<div className="inner">
					<header className="major narrow">
						<h2>Get in touch</h2>
						<p>Ipsum dolor tempus commodo adipiscing</p>
					</header>
					<form action="#" method="POST">
						<div className="container 75%">
							<div className="row uniform 50%">
								<div className="6u 12u$(xsmall)">
									<input name="name" placeholder="Name" type="text" />
								</div>
								<div className="6u$ 12u$(xsmall)">
									<input name="email" placeholder="Email" type="email" />
								</div>
								<div className="12u$">
									<textarea name="message" placeholder="Message" rows="4"></textarea>
								</div>
							</div>
						</div>
						<ul className="actions">
							<li><input type="submit" className="special" value="Submit" /></li>
							<li><input type="reset" className="alt" value="Reset" /></li>
						</ul>
					</form>
				</div>
			</section>
        );
    }
}
export default Four;