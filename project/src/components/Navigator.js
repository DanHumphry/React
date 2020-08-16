import React from 'react';
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap';

function Navigator(props){
  let InputID, InputPS = null

    return(
      <div className="Nav_">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Features</Nav.Link>
            <Nav.Link href="/">Pricing</Nav.Link>
          </Nav>
          {
            props.SuccessLogin === false
            ?(
            <Form inline>
              <FormControl type="text" placeholder="Your ID" className="mr-sm-2"
              onChange={(e)=>{
                InputID = e.target.value
              }} />
              <FormControl type="password" placeholder="Your Password" className="mr-sm-2"
              onChange={(e)=>{
                InputPS = e.target.value
              }} />
              <Button variant="outline-light"
              onClick={
                (e)=>{
                  e.preventDefault();
                  props.UserId.map((Id, i)=>{
                    return(
                    InputID === Id
                    ? InputPS === props.UserPassword[i]
                      ?
                      (
                        props.HiddenLogin() //로그인성공
                      )
                      :
                      (
                        console.log('존재하지않는PS')
                      )
                    :
                    (
                      console.log('존재하지않는ID')
                    )
                  )})
                }
              }>로그인</Button>
            </Form>
            )
            :(
              <Button variant="outline-light"
              onClick={
                ()=>{
                  props.HiddenLogin()
                }
              }>로그아웃</Button>
            )
          }
        </Navbar>
      </div>
    );
}
export default Navigator;