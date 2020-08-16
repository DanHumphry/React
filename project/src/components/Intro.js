import React from 'react';
import {Button} from 'react-bootstrap';

function Intro(props){

    return(
    <div>
        <h1>Hello, world!</h1>
        <p>
        This is a simple hero unit,<br/>
        a simple jumbotron-style component for calling<br/>
        extra attention to featured content or information.
        </p>
        {
            props.SuccessLogin === false
            ?(
                <p>
                <Button variant="dark" onClick={()=>{
                    props.HiddenNav()
                }}>회원가입</Button>
                </p>
            )
            :(<div></div>)
        }
    </div>
    )
}
export default Intro;