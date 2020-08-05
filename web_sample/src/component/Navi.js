import React, { Component } from 'react';

class Navi extends Component{
    render(){
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
                <a
                key={data[i].id}
                className="et-hero-tab"
                href={"/content/"+data[i].id}
                data-id={data[i].id}
                onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(e.target.dataset.id);
                }.bind(this)}
            >{data[i].title}</a>);
            i = i + 1;
        }
        return(    
            <div className="et-hero-tabs-container">
                {lists}
                <span className="et-hero-tab-slider"></span>
            </div>
        );
    }
}

export default Navi;