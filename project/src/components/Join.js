import React from 'react';
import {Button, Form} from 'react-bootstrap';
function Join(props){

    function HiddenNav(){
        let F = props.Boolean;
        F = false;
        props.ChangeBoolean(F)
    }

    return(
    <div>
        <Form inline>
            <div className="JoinSection_">
                <p>
                <input type="text" placeholder="Your Name" className="JoinForm_"></input>
                <input type="email" placeholder="Your email" className="JoinForm_"></input>
                <input type="password" placeholder="Your password" className="JoinForm_"></input> 
                </p>              
            </div>
            <div className="JoinButton_">
                <p>
            <Button variant="dark" onClick={
                ()=>{
                    HiddenNav()
                }
            }>회원가입</Button>
                </p>
            </div>
        </Form>
    </div>
    )
}
export default Join;