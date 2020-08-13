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
                <input type="text" placeholder="Your ID" className="JoinForm_"
                onChange={(e)=>{
                    props.ChangeLoginInput(e.target.value)
                }}></input>
                <input type="password" placeholder="Your password" className="JoinForm_"
                onChange={(e)=>{
                    props.ChangeLoginInput2(e.target.value)
                }}></input> 
                <Button variant="dark" 
                    onClick={
                    (e)=>{
                            // e.preventDefault();
                        let Arr = [...props.UserId]
                        let Arr2 = [...props.UserPassword]
                        Arr.unshift(props.LoginInput)
                        Arr2.unshift(props.LoginInput2)
                        props.ChangeUserId(Arr)
                        props.ChangeUserPassword(Arr2)
                        HiddenNav()
                        console.log(Arr)
                        console.log(props.LoginInput)
                    }
                }>회원가입</Button>                            
            </div>

        </Form>
    </div>
    )
}
export default Join;