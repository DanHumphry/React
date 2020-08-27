import React, { useState, useEffect } from 'react';
import './App.css';
import UserDAO from './UserDAO';

function App() {

  let [poster, setPoster] = useState([])
  let [User, setUser] = useState([])
  let [title, setTitle] = useState("")
  let [genre, setGenre] = useState("")
  let [year, setYear] = useState()

  let data = {title : title, genre : genre, year : year}

  useEffect(()=>{
    (async ()=> {
      try{
        fetch('http://localhost:8000/movies/')
        .then((res)=>res.json())
        .then((posts)=>{
          setPoster(posts)
        })
      } catch(e){
        console.log(e)
      }
    })();
  },[])

  return (
    <>
      {
        poster.map((a)=>{
          return(
            <>
            <h1>{a.title}</h1>
            <h1>{a.genre}</h1>
            <h1>{a.year}</h1>
            </>
          )
        })
      }
      <form>
        <input type="text" placeholder="title" onChange={(e)=>{
          setTitle(e.target.value)
        }}></input>
        <input type="text" placeholder="genre" onChange={(e)=>{
          setGenre(e.target.value)
        }}></input>
        <input type="text" placeholder="year" onChange={(e)=>{
          setYear(e.target.value)
        }}></input>
        <button onClick={()=>{
          fetch('http://localhost:8000/movies/', {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));
        }}>전송</button>
      </form>

      <UserDAO User={User} setUser={setUser}/>
    </>
  );
}

export default App;
