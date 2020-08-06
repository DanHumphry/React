import React, { Component } from 'react';
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
class HomeContents extends Component{
    render(){
        return(
            <div>
                <One></One>
                <Two></Two>
                <Three></Three>
                <Four></Four>
            </div>
        );
    }
}
export default HomeContents;