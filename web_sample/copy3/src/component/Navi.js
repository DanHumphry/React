import React, {Component} from 'react';

export default class Navi extends Component{
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
                onClick={function(id, e){
                    e.preventDefault();
                    // store.dispatch({mode:'read', id:id})
                    this.props.onChangePage(id);
                }.bind(this, data[i].id)}
            >{data[i].title}</a>);
            i = i + 1;
        }
        return(    
            <div className="et-hero-tabs-container">
                {lists}
            </div>
        );
    }
}