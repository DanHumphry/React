import React, { useState } from 'react';
import Join from './Join';
import Intro from './Intro';
import {Jumbotron} from 'react-bootstrap';

function Banner(props){
    let [BannerContent] = useState([<Intro Boolean={props.Boolean} ChangeBoolean={props.ChangeBoolean}></Intro>, <Join Boolean={props.Boolean} ChangeBoolean={props.ChangeBoolean}></Join>]);

    return(
        <div className="Banner_">
        <Jumbotron>
            {
                props.Boolean === false
                ? BannerContent[0]
                : BannerContent[1]
            }
        </Jumbotron>
        </div>
    )
}
export default Banner;