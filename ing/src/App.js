import React from 'react'
import './App.css';
import Nav from './Component/Nav/Nav';
import Login from './Component/Login/Login';
import Join from './Component/Login/Join';
import MyBook from './Component/MyBook/Mybook';
import { Route } from 'react-router-dom'; 

function App() {

  return (
    <div className="body">
      <div className="autoMargin">
        <Route exact path="/">
          <Nav/>
          <MyBook/>
        </Route>

        <Route exact path="/login">
          <Login/>
        </Route>

        <Route exact path="/join">
          <Join/>
        </Route>
      </div>
    </div>
  );
}

export default App;
