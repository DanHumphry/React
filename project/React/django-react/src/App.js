import React, { useState, useEffect } from 'react';
import useForm from './hook/useForm'

function App() {
  let [posts,setPosts] = useState([])

  const { values, handleChange } = useForm({
    initialValues : { title: "", content: "" }
  })

  const url = 'http://127.0.0.1:8000/api/';
  let data = { title: values.title, content: values.content };

  useEffect(()=>{
    (async ()=> {
      try{
        fetch(url)
        .then((res)=>res.json())
        .then((posts)=>{
          setPosts(posts)
        })
      } catch(e){
        console.log(e)
      }
    })();
  },[])

  return (
    <div>
      <form>
        <input type="text" placeholder="title" 
        name="title"
        value={values.title}
        onChange={handleChange}></input>
        <textarea type="text" placeholder="content"
        name="content"
        values={values.content}
        onChange={handleChange}></textarea>
        <button 
        onClick={()=>{
          fetch(url, {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));
        }}
        >전송</button>
      </form>
    </div>
  );
}

export default App;
