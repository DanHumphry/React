import React from 'react';
import Intro from './Intro';
import {Jumbotron, Button, Form} from 'react-bootstrap';

function Banner(props){

    return(
        <div className="Banner_">
        <Jumbotron>
            {
                props.Boolean === false
                ? <Intro Boolean={props.Boolean} ChangeBoolean={props.ChangeBoolean}
                HiddenNav={props.HiddenNav} SuccessLogin={props.SuccessLogin} ChangeSuccessLogin={props.ChangeSuccessLogin}></Intro>
                : <Form inline>
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
                                e.preventDefault();
                                let ID = [...props.UserId]
                                let PS = [...props.UserPassword]
                                ID.unshift(props.LoginInput)
                                PS.unshift(props.LoginInput2)
                                props.ChangeUserId(ID)
                                props.ChangeUserPassword(PS)
                                props.HiddenNav();
                                console.log(props.LoginInput);
                            }
                        }>회원가입</Button>                            
                    </div>
                </Form>
            }
        </Jumbotron>
        </div>
    )
}
export default Banner;