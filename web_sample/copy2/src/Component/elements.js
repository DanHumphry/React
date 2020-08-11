import React, { Component } from 'react';
import Footer from './Footer';


class Elements extends Component{
    render(){
        return(
            <div>
            <header id="header" class="skel-layers-fixed">
				<h1><a href="index.html">Retrospect</a></h1>
				<a href="#nav">Menu</a>
			</header>

			<section id="main" class="wrapper">
				<div class="container">
					<header class="major special">
						<h2>Elements</h2>
						<p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
					</header>

						<section>
							<h3>Lists</h3>
							<div class="row">
								<div class="6u 12u$(xsmall)">

									<h4>Unordered</h4>
									<ul>
										<li>Dolor pulvinar etiam magna etiam.</li>
										<li>Sagittis adipiscing lorem eleifend.</li>
										<li>Felis enim feugiat dolore viverra.</li>
									</ul>

									<h4>Alternate</h4>
									<ul class="alt">
										<li>Dolor pulvinar etiam magna etiam.</li>
										<li>Sagittis adipiscing lorem eleifend.</li>
										<li>Felis enim feugiat dolore viverra.</li>
									</ul>

								</div>
								<div class="6u$ 12u$(xsmall)">

									<h4>Ordered</h4>
									<ol>
										<li>Dolor pulvinar etiam magna etiam.</li>
										<li>Etiam vel felis at lorem sed viverra.</li>
										<li>Felis enim feugiat dolore viverra.</li>
										<li>Dolor pulvinar etiam magna etiam.</li>
										<li>Etiam vel felis at lorem sed viverra.</li>
										<li>Felis enim feugiat dolore viverra.</li>
									</ol>

									<h4>Icons</h4>
									<ul class="icons">
										<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
										<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
										<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
										<li><a href="#" class="icon fa-github"><span class="label">Github</span></a></li>
										<li><a href="#" class="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
										<li><a href="#" class="icon fa-tumblr"><span class="label">Tumblr</span></a></li>
									</ul>

								</div>
							</div>

							<h4>Actions</h4>
							<ul class="actions">
								<li><a href="#" class="button special">Special</a></li>
								<li><a href="#" class="button">Default</a></li>
								<li><a href="#" class="button alt">Alternate</a></li>
							</ul>
							<ul class="actions small">
								<li><a href="#" class="button special small">Small</a></li>
								<li><a href="#" class="button small">Small</a></li>
								<li><a href="#" class="button alt small">Small</a></li>
							</ul>
							<div class="row">
								<div class="3u 6u(small) 12u$(xsmall)">
									<ul class="actions vertical">
										<li><a href="#" class="button special">Vertical</a></li>
										<li><a href="#" class="button">Vertical</a></li>
										<li><a href="#" class="button alt">Vertical</a></li>
									</ul>
								</div>
								<div class="3u 6u$(small) 12u$(xsmall)">
									<ul class="actions vertical small">
										<li><a href="#" class="button special small">Small</a></li>
										<li><a href="#" class="button small">Small</a></li>
										<li><a href="#" class="button alt small">Small</a></li>
									</ul>
								</div>
								<div class="3u 6u(small) 12u$(xsmall)">
									<ul class="actions vertical">
										<li><a href="#" class="button special fit">Fit</a></li>
										<li><a href="#" class="button fit">Fit</a></li>
										<li><a href="#" class="button alt fit">Fit</a></li>
									</ul>
								</div>
								<div class="3u$ 6u$(small) 12u$(xsmall)">
									<ul class="actions vertical small">
										<li><a href="#" class="button special small fit">Small</a></li>
										<li><a href="#" class="button small fit">Small</a></li>
										<li><a href="#" class="button alt small fit">Small</a></li>
									</ul>
								</div>
							</div>
						</section>

						<section>
							<h3>Table</h3>
							<h4>Default</h4>
							<div class="table-wrapper">
								<table>
									<thead>
										<tr>
											<th>Name</th>
											<th>Description</th>
											<th>Price</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Item 1</td>
											<td>Ante turpis integer aliquet porttitor.</td>
											<td>29.99</td>
										</tr>
										<tr>
											<td>Item 2</td>
											<td>Vis ac commodo adipiscing arcu aliquet.</td>
											<td>19.99</td>
										</tr>
										<tr>
											<td>Item 3</td>
											<td> Morbi faucibus arcu accumsan lorem.</td>
											<td>29.99</td>
										</tr>
										<tr>
											<td>Item 4</td>
											<td>Vitae integer tempus condimentum.</td>
											<td>19.99</td>
										</tr>
										<tr>
											<td>Item 5</td>
											<td>Ante turpis integer aliquet porttitor.</td>
											<td>29.99</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td colspan="2"></td>
											<td>100.00</td>
										</tr>
									</tfoot>
								</table>
							</div>
							<h4>Alternate</h4>
							<div class="table-wrapper">
								<table class="alt">
									<thead>
										<tr>
											<th>Name</th>
											<th>Description</th>
											<th>Price</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Item 1</td>
											<td>Ante turpis integer aliquet porttitor.</td>
											<td>29.99</td>
										</tr>
										<tr>
											<td>Item 2</td>
											<td>Vis ac commodo adipiscing arcu aliquet.</td>
											<td>19.99</td>
										</tr>
										<tr>
											<td>Item 3</td>
											<td> Morbi faucibus arcu accumsan lorem.</td>
											<td>29.99</td>
										</tr>
										<tr>
											<td>Item 4</td>
											<td>Vitae integer tempus condimentum.</td>
											<td>19.99</td>
										</tr>
										<tr>
											<td>Item 5</td>
											<td>Ante turpis integer aliquet porttitor.</td>
											<td>29.99</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td colspan="2"></td>
											<td>100.00</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</section>

						<section>
							<h3>Buttons</h3>
							<ul class="actions">
								<li><a href="#" class="button special">Special</a></li>
								<li><a href="#" class="button">Default</a></li>
								<li><a href="#" class="button alt">Alternate</a></li>
							</ul>
							<ul class="actions">
								<li><a href="#" class="button special big">Big</a></li>
								<li><a href="#" class="button">Default</a></li>
								<li><a href="#" class="button alt small">Small</a></li>
							</ul>
							<div class="row">
								<div class="6u 12u$(xsmall)">
									<ul class="actions fit">
										<li><a href="#" class="button fit">Fit</a></li>
										<li><a href="#" class="button alt fit">Fit</a></li>
									</ul>
								</div>
								<div class="6u$ 12u$(xsmall)">
									<ul class="actions fit small">
										<li><a href="#" class="button fit small">Fit + Small</a></li>
										<li><a href="#" class="button alt fit small">Fit + Small</a></li>
									</ul>
								</div>
							</div>
							<ul class="actions">
								<li><a href="#" class="button special icon fa-download">Icon</a></li>
								<li><a href="#" class="button icon fa-download">Icon</a></li>
								<li><a href="#" class="button alt icon fa-download">Icon</a></li>
							</ul>
							<ul class="actions">
								<li><span class="button special disabled">Special</span></li>
								<li><span class="button disabled">Default</span></li>
								<li><span class="button alt disabled">Alternate</span></li>
							</ul>
						</section>

						<section>
							<h3>Image</h3>
							<h4>Fit</h4>
							<div class="box alt">
								<div class="row 50% uniform">
									<div class="12u$"><span class="image fit"><img src="images/pic11.jpg" alt="" /></span></div>
									<div class="4u"><span class="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
									<div class="4u"><span class="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
									<div class="4u$"><span class="image fit"><img src="images/pic05.jpg" alt="" /></span></div>
									<div class="4u"><span class="image fit"><img src="images/pic05.jpg" alt="" /></span></div>
									<div class="4u"><span class="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
									<div class="4u$"><span class="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
									<div class="4u"><span class="image fit"><img src="images/pic04.jpg" alt="" /></span></div>
									<div class="4u"><span class="image fit"><img src="images/pic05.jpg" alt="" /></span></div>
									<div class="4u$"><span class="image fit"><img src="images/pic03.jpg" alt="" /></span></div>
								</div>
							</div>

							<h4>Left &amp; Right</h4>
							<p><span class="image left"><img src="images/pic06.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
							<p><span class="image right"><img src="images/pic06.jpg" alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
						</section>

				</div>
			</section>
            <Footer></Footer>
            </div>
        );
    }
}
export default Elements;