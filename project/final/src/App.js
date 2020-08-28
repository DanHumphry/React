import React, {useState} from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import './App.css'

function App() {

  const [userName, setUserName] = useState("")
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <Route>
        <Header modal={modal} setModal={setModal} userName={userName} setUserName={setUserName}/>
      </Route>
    </div>
  );
}

export default App;
