import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  let [users, setUsers] = useState([])
  useEffect(()=>{
    (async ()=> {
      try{
        fetch('http://localhost:8000/user/')
        .then((res)=>res.json())
        .then((posts)=>{
          setUsers(posts)
        })
      } catch(e){
        console.log(e)
      }
    })();
  },[])

  return (
    <div className="App">

    </div>
  );
}

export default App;
