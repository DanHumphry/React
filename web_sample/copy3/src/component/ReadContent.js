import React, { Component } from 'react';

class ReadContent extends Component{
    render(){
        return(
                <section className="et-slide">
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.sub}</h3>
                </section>
        )
    }
}
export default ReadContent;