import React, { Component } from 'react';

class One extends Component{
    render(){
        return(
            <section id="one" className="wrapper style1">
            <div className="inner">
                <article className="feature left">
                    <span className="image"><img src={require('../images/pic01.jpg')} alt="" /></span>
                    <div className="content">
                        <h2>Integer vitae libero acrisus egestas placerat  sollicitudin</h2>
                        <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
                    </div>
                </article>
                <article className="feature right">
                    <span className="image"><img src={require('../images/pic02.jpg')} alt="" /></span>
                    <div className="content">
                        <h2>Integer vitae libero acrisus egestas placerat  sollicitudin</h2>
                        <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
                    </div>
                </article>
            </div>
        </section>
        );
    }
}
export default One;