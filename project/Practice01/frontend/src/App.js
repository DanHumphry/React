import React, { useState, useEffect } from 'react';
import Content01 from './Content01'

function App() {

  let [User, setUser] = useState([])

  let [poster, setPoster] = useState([])

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [name, setName] = useState("")

  const data = {email : email, password : password, name : name}

  useEffect(()=>{
    (async ()=> {
      try{
        fetch('http://localhost:8000/dan/')
        .then((res)=>res.json())
        .then((posts)=>{
          setUser(posts)
        })
      } catch(e){
        console.log(e)
      }
    })();
  },[])

  return (
    <>
      {
            User.map((a)=>{
            return(
                <div key={a.email}>
                <h1>{a.email}</h1>
                <h1>{a.password}</h1>
                <h1>{a.name}</h1>
                </div>
            )
            })
      }

      <form>
        <input type="email" onChange={(e)=>{
          setEmail(e.target.value)
        }}></input>
        <input type="text" onChange={(e)=>{
          setPassword(e.target.value)
        }}></input>
        <input type="text" onChange={(e)=>{
          setName(e.target.value)
        }}></input>
        <button onClick={()=>{
          let CopyUser = [...User]
          CopyUser.unshift({email : email, password : password, name : name})
          setUser(CopyUser)
          fetch(('http://localhost:8000/dan/'), {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(res => res.json())
          .catch(error => console.log('Error:', error))
        }}>전송</button>
      </form>

      <Content01 poster={poster} setPoster={setPoster}/>
    </>
  );
}

export default App;
