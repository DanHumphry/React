import React from 'react';

function Header(){
    return(
    <div>
        <div id="header-wrapper">
            <div id="header" className="container">
                <div id="logo">
                    <h1><a href="/">Platform</a></h1>
                    <h3>If you want more information</h3>
                    <button className="login__button"><h2>Sign In</h2></button>
                </div>
            </div>
        </div>
        <div id="menu-wrapper">
            <div id="menu">
            <ul>
				<li><a href="/">contents.1</a></li>
				<li><a href="/">contents.2</a></li>
				<li><a href="/">contents.3</a></li>
				<li><a href="/">contents.4</a></li>
				<li><a href="/">contents.5</a></li>
			</ul>
            </div>
        </div>
    </div>        
        
       
    )
}
export default Header;