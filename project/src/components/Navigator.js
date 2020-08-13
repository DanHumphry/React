import React from 'react';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';

function Navigator(props){
    return(
      <div className="Nav_">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Features</Nav.Link>
            <Nav.Link href="/">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Your ID" className="mr-sm-2"
            onChange={(e)=>{
              props.ChangeLoginInput(e.target.value)
            }} />
            <FormControl type="password" placeholder="Your Password" className="mr-sm-2"
            onChange={(e)=>{
              props.ChangeLoginInput2(e.target.value)
            }} />
            <Button variant="outline-light"
            onClick={
              (e)=>{
                let Arr = [...props.UserId]
                let Arr2 = [...props.UserPassword]
                Arr.unshift(props.LoginInput)
                Arr2.unshift(props.LoginInput2)
                props.ChangeUserId(Arr)
                props.ChangeUserPassword(Arr2)
              }
            }>로그인</Button>
          </Form>
        </Navbar>
      </div>
    );
}
export default Navigator;