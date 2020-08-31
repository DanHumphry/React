import React, {useState} from 'react';
import Header from './components/Header';
import Navi from './components/Navi'
import LoginModal from './components/LoginModal';
import { Route } from 'react-router-dom';
import './App.css'

function App() {
  const [OnUser, setOnUser] = useState()

  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <div className="auto-margin">

        <Route exact path="/">
          <Header modal={modal}/>
        </Route>

        <Route exact path="/login">
          <LoginModal setOnUser={setOnUser} setModal={setModal}/>
        </Route>

        <Route exact path="/">
          <Navi/>
        </Route>
  
      </div>
    </div>
  );
}

export default App;
