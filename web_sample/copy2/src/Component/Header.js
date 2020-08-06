import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
        <header id="header" className="alt">
            <h1><a href="index.html">HOME</a></h1>
            <a
            onClick={function(e){
                e.preventDefault();
            }.bind(this)}
            href="/generic/">Generic</a>
            <a href="/elements/">Elements</a>
        </header>
        );
    }
}
export default Header;