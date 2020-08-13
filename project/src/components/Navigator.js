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
            <FormControl type="email" placeholder="Your Email" className="mr-sm-2"
            onChange={(e)=>{
              let Arr = [...props.LoginInput]
              Arr = e.target.value
              props.ChangeLoginInput(Arr)
            }} />
            <FormControl type="password" placeholder="Your Password" className="mr-sm-2"
            onChange={(e)=>{
              props.ChangeLoginInput(e.target.value)
            }} />
            <Button variant="outline-light"
            onClick={
              ()=>{

              }
            }>로그인</Button>
          </Form>
        </Navbar>
      </div>
    );
}
export default Navigator;