import React, {useState} from 'react';
import Header from './components/Header';
import Navi from './components/Navi'
import LoginModal from './components/LoginModal';
import { Route } from 'react-router-dom';
import './App.css'

function App() {
  const [userName, setUserName] = useState("")
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <div className="auto-margin">

        <Route exact path="/">
          <Header modal={modal} setModal={setModal} userName={userName} setUserName={setUserName}/>
        </Route>

        <Route exact path="/login" component={LoginModal}></Route>

        <Route exact path="/">
          <Navi/>
        </Route>
  
      </div>
    </div>
  );
}

export default App;
