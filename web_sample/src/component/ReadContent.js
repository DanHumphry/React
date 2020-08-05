import React, { Component } from 'react';

class ReadContent extends Component{
    render(){
        return(
            <main className="te-main">
                <section className="et-slide">
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.sub}</h3>
                </section>
            </main>
        )
    }
}
export default ReadContent;