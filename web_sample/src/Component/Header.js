import React, { Component } from 'react';

class Header extends Component{
    render(){
        const lists = [];
        const data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
                <a
                key={data[i].id}
                href={"/content/"+data[i].id}
                onClick={function(id, e){
                    e.preventDefault();
                    this.props.onChangePage(id);
                }.bind(this, data[i].id)}
                >{data[i].title}</a>
            );
            i = i + 1;
        }
        return(
        <header id="header" className="alt">
            {lists}
        </header>
        );
    }
}
export default Header;