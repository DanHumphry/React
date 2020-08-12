/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import Data from './components/data';
import {Link, Route, Switch} from 'react-router-dom';
import Detail from './components/Detail';
import Navi from './components/Navi';
import Jumbo from './components/Jumbo';
import Card from './components/Card';

function App() {
let [shoes, shoesChange] = useState(Data);

  return (
    <div className="App">
      <Navi></Navi>
    {/* 둘다보이는 이유는 /detail은 /을 포함(연관)하기때문 */}
    {/* 중복을허용하지않는 switch */}
      <Switch> 
        <Route exact path="/">
          <Jumbo></Jumbo>
          <div className="container">
            <div className="row">
              {
                shoes.map((a, i)=>{
                  return(
                  <Card shoes={a} i={i} key={i}></Card>
                )})
              }
            </div>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} id={shoes.id} key={shoes.id}></Detail>
        </Route>
        {/* :id는 이름이고 id값에 따라 보여주고 싶은 내용을 조절하는것 */}

      </Switch>
    {/* <Route path="어쩌구" component={Modal}></Route> */}
    {/* component로 보내는 방법 */}
    </div>
  );
}

export default App;
