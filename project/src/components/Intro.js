import React from 'react';
import {Button} from 'react-bootstrap';

function Intro(props){

    function HiddenNav(){
        let F = props.Boolean;
        F = true;
        props.ChangeBoolean(F)
    }

    return(
    <div>
        <h1>Hello, world!</h1>
        <p>
        This is a simple hero unit,<br/>
        a simple jumbotron-style component for calling<br/>
        extra attention to featured content or information.
        </p>
        <p>
        <Button variant="dark" onClick={()=>{
            HiddenNav()
        }}>회원가입</Button>
        </p>
    </div>
    )
}
export default Intro;